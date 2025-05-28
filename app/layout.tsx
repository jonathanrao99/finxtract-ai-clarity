import React from 'react';
import type { ReactNode } from 'react';
import '../src/index.css';
import SupabaseProvider from './providers';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js App Router Migration',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <Toaster />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
} 