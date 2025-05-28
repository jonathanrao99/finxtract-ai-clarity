import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-client';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { data, error } = await supabase
    .from('documents')
    .select('status, result')
    .eq('id', id)
    .maybeSingle();
  if (error || !data) {
    return NextResponse.json({ error: error?.message }, { status: 400 });
  }
  return NextResponse.json({ status: data.status, result: data.result }, { status: 200 });
} 