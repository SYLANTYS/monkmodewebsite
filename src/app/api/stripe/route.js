import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  const data = event.data.object;

  // ✅ Checkout completed → Cancel other subs + activate new one
  if (event.type === "checkout.session.completed") {
    const subscriptionId = data.subscription;
    const customerId = data.customer;

    if (subscriptionId && customerId) {
      // Cancel all other active subscriptions for this customer
      const subs = await stripe.subscriptions.list({
        customer: customerId,
        status: "active",
        limit: 100,
      });

      for (const sub of subs.data) {
        if (sub.id !== subscriptionId) {
          await stripe.subscriptions.del(sub.id);
        }
      }

      // Fetch the new subscription to get metadata
      const newSub = await stripe.subscriptions.retrieve(subscriptionId);
      const { id, email } = newSub.metadata || {};

      if (id && email) {
        await supabaseAdmin
          .from("profiles")
          .update({ subscription: true })
          .eq("id", id)
          .eq("email", email);
      }
    }
  }

  // ❌ Subscription became inactive or was deleted
  if (
    event.type === "customer.subscription.deleted" ||
    (event.type === "customer.subscription.updated" && data.status !== "active")
  ) {
    const { id, email } = data.metadata || {};

    // Fallback: if metadata is missing, fetch subscription to get it
    if (!id || !email) {
      const subscription = await stripe.subscriptions.retrieve(data.id);
      const meta = subscription.metadata || {};
      meta.id &&
        meta.email &&
        (await supabaseAdmin
          .from("profiles")
          .update({ subscription: false })
          .eq("id", meta.id)
          .eq("email", meta.email));
    } else {
      await supabaseAdmin
        .from("profiles")
        .update({ subscription: false })
        .eq("id", id)
        .eq("email", email);
    }
  }

  return new Response(null, { status: 200 });
}
