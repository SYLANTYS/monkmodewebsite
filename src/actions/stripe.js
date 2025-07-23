"use server";

import { stripe } from "@/lib/stripe";

export const subscribeAction = async ({ id, email, product }) => {
  const prices = [
    "price_1Ro4EDJZXyiCiyglxuirFudv",
    "price_1Ro4DqJZXyiCiygljLXGEvlg",
    "price_1Ro4EgJZXyiCiygl17Z1t6y2",
  ];

  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: prices[product],
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_URL}/thankyou`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/paywall/${email}`,

    customer_email: email, // helps Stripe prefill customer

    // ✅ This is the key: attach metadata to the subscription object
    subscription_data: {
      metadata: {
        id,
        email,
      },
      trial_period_days: 3,
    },
  });

  return url;
};
