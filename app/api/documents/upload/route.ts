import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-client';
import supabaseAdmin from '@/lib/supabase-server';

export async function POST(req: NextRequest) {
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const contentType = req.headers.get('content-type') || '';
  let urls: string[] = [];
  // Handle file uploads via multipart/form-data
  if (contentType.includes('multipart/form-data')) {
    const form = await req.formData();
    // Gather online URLs
    for (const entry of form.getAll('urls')) {
      if (typeof entry === 'string' && entry) urls.push(entry);
    }
    // Handle local files
    for (const entry of form.getAll('files')) {
      if (entry instanceof File) {
        const file = entry;
        const filename = `${user.id}/${crypto.randomUUID()}-${file.name}`;
        const { error: uploadError } = await supabaseAdmin.storage
          .from('documents')
          .upload(filename, file);
        if (!uploadError) {
          const { data: publicData } = supabaseAdmin.storage
            .from('documents')
            .getPublicUrl(filename);
          if (publicData.publicUrl) urls.push(publicData.publicUrl);
        }
      }
    }
  } else {
    // JSON body fallback
    const body = await req.json();
    if (Array.isArray(body.urls)) urls = body.urls;
  }
  if (urls.length === 0) {
    return NextResponse.json({ error: 'No files or URLs provided' }, { status: 400 });
  }
  // Insert document record with pending status
  const { data, error: insertError } = await supabaseAdmin
    .from('documents')
    .insert({ user_id: user.id, urls, status: 'pending' })
    .select('id')
    .single();
  if (insertError || !data) {
    return NextResponse.json({ error: insertError?.message }, { status: 400 });
  }
  return NextResponse.json({ documentId: data.id }, { status: 200 });
} 