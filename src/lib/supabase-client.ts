import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
 
/**
 * Server Actions/Route Handlers Supabase client using Next.js cookies
 */
export const supabase = createRouteHandlerClient({ cookies }); 