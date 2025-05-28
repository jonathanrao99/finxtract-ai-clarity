'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from '@supabase/auth-helpers-react';

export default function BillingPage() {
  const session = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (!session) {
    router.push('/auth');
    return null;
  }

  const handleCheckout = async (plan: 'basic' | 'pro') => {
    setLoading(true);
    const res = await fetch('/api/subscriptions/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    const json = await res.json();
    if (json.url) {
      window.location.href = json.url;
    } else {
      setLoading(false);
      alert(json.error || 'Checkout failed');
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto mt-12">
        <h1 className="text-2xl font-bold mb-4">Choose a Plan</h1>
        <div className="space-y-4">
          <div className="p-4 border rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Basic</h2>
              <p>$9.99 / month</p>
            </div>
            <button
              onClick={() => handleCheckout('basic')}
              disabled={loading}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              {loading ? 'Processing...' : 'Select Basic'}
            </button>
          </div>
          <div className="p-4 border rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Pro</h2>
              <p>$24.99 / month</p>
            </div>
            <button
              onClick={() => handleCheckout('pro')}
              disabled={loading}
              className="px-4 py-2 bg-indigo-500 text-white rounded"
            >
              {loading ? 'Processing...' : 'Select Pro'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 