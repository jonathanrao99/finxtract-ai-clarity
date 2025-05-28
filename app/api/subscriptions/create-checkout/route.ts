import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase-client';
import stripe from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const { plan } = await req.json();
  let priceId: string;
  if (plan === 'basic') {
    priceId = process.env.STRIPE_PRICE_BASIC!;
  } else if (plan === 'pro') {
    priceId = process.env.STRIPE_PRICE_PRO!;
  } else {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
  }
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const origin = req.headers.get('origin')!;
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    customer_email: user.email || undefined,
    client_reference_id: user.id,
    success_url: `${origin}/billing?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/billing?canceled=true`,
  });
  return NextResponse.json({ url: session.url });
} 