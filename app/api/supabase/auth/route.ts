import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-client';

// POST: { action: 'signIn' | 'signUp', email, password }
export async function POST(req: NextRequest) {
  const { action, email, password } = await req.json();
  if (action === 'signUp') {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
    return NextResponse.json({ user: data.user }, { status: 200 });
  }
  // signIn
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ session: data.session, user: data.user }, { status: 200 });
}

// GET: get current session
export async function GET() {
  const { data, error } = await supabase.auth.getSession();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ session: data.session }, { status: 200 });
}

// DELETE: sign out
export async function DELETE() {
  const { error } = await supabase.auth.signOut();
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ message: 'Signed out' }, { status: 200 });
} 