import React from 'react';
import type { ReactNode } from 'react';
import '../src/index.css';

export const metadata = {
  title: 'Home',
  description: 'Welcome to Next.js App Router Migration',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 