import { stripe } from "@/lib/stripe";

export const subscribeAction = async ({ userId }) => {
  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: "price_1RlEjMQwZPNYyBC6Tw319P5G",
        quantity: 1,
      },
    ],
    metadata: {
      userId,
    },
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_URL}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
  });

  return url;
};
