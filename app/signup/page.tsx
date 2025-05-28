'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import Link from 'next/link';

export default function SignupPage() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (session) router.push('/dashboard');
  }, [session, router]);

  const handleSignup = async () => {
    setError(null);
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Get Started</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          onClick={handleSignup}
          className="w-full p-2 bg-green-500 text-white rounded"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
} 