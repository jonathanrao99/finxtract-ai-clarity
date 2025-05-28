'use client';
import { useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.push('/auth');
    } else {
      (async () => {
        const { data, error } = await supabase.from('subscriptions').select('*');
        if (!error) setSubscriptions(data!);
        setLoading(false);
      })();
    }
  }, [session]);

  if (!session) return null;
  if (loading) return <p className="text-center mt-12">Loading...</p>;

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-lg mx-auto mt-12">
        <h1 className="text-2xl font-bold mb-4">Your Subscription</h1>
        {subscriptions.length === 0 && <p>You have no active subscriptions.</p>}
        {subscriptions.map((sub) => (
          <div key={sub.id} className="mb-4 p-4 border rounded">
            <p><strong>Plan:</strong> {sub.plan}</p>
            <p><strong>Status:</strong> {sub.status}</p>
            <p><strong>Current Period End:</strong> {new Date(sub.current_period_end).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 