'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import type { ReactNode } from 'react';

export default function SupabaseProvider({ children }: { children: ReactNode }) {
  const supabase = createClientComponentClient();
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
} 