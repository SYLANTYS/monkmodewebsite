import Stripe from "stripe";

const stripeSecret = process.env.STRIPE_SECRET_KEY;

export const stripe = new Stripe(stripeSecret, {
  apiVersion: "2025-06-30.basil",
});
