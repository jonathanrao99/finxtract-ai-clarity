import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase client with service role for privileged operations
 */
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: { persistSession: false },
    global: { headers: { 'x-ssr': '1' } },
  }
);

export default supabaseAdmin; 