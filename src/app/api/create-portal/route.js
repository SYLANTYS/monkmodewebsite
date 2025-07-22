import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  try {
    // Search for customer by email
    const customers = await stripe.customers.list({
      email,
      limit: 1,
    });

    if (customers.data.length === 0) {
      return NextResponse.json(
        { error: "Customer not found." },
        { status: 404 }
      );
    }

    const customer = customers.data[0];

    // Create billing portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: customer.id,
      return_url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe portal error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
