import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';
import supabaseAdmin from '@/lib/supabase-server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const payload = await req.text();
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
  const data = event.data.object;
  const type = event.type;
  if (
    type === 'checkout.session.completed' ||
    type === 'invoice.paid' ||
    type === 'customer.subscription.updated' ||
    type === 'invoice.payment_failed'
  ) {
    let subscription;
    if ('subscription' in data && data.subscription) {
      subscription = await stripe.subscriptions.retrieve(
        data.subscription as string
      );
    } else if ('id' in data) {
      subscription = await stripe.subscriptions.retrieve(data.id as string);
    }
    const plan = subscription.items.data[0].price.lookup_key;
    const status = subscription.status;
    const current_period_end = new Date(
      subscription.current_period_end * 1000
    ).toISOString();
    await supabaseAdmin.from('subscriptions').upsert(
      [{
        id: subscription.id,
        user_id: data.client_reference_id as string,
        stripe_subscription_id: subscription.id,
        plan,
        status,
        current_period_end,
      }],
      { onConflict: 'id' }
    );
  }
  return NextResponse.json({ received: true });
} 