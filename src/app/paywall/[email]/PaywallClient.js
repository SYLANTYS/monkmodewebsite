"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { subscribeAction } from "@/actions/stripe";

export default function PaywallClient({ email, userId }) {
  const [plan, setPlan] = useState("yearly");
  const router = useRouter();

  const handleYearly = async () => {
    const url = await subscribeAction({
      id: userId,
      email: email,
      product: 1,
    });
    router.push(url);
  };

  const handleMonthly = () => {
    router.push(`/paywall/${encodeURIComponent(email)}/offer`);
  };

  const handleContinue = () => {
    if (plan === "monthly") {
      handleMonthly();
    } else {
      handleYearly();
    }
  };

  const optionClass = (selected) =>
    `flex flex-col items-center border rounded-xl p-6 cursor-pointer transition transform ${
      selected ? "border-blue-500 scale-105" : "border-gray-700"
    }`;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full flex flex-col gap-8">
          <h1 className="text-center text-2xl font-bold">Choose Your Plan</h1>
          <div className="flex flex-col gap-4">
            <div
              className={optionClass(plan === "yearly")}
              onClick={() => setPlan("yearly")}
            >
              <h2 className="text-xl font-semibold">Yearly</h2>
              <p className="text-gray-300">$1.67 / month</p>
            </div>
            <div
              className={optionClass(plan === "monthly")}
              onClick={() => setPlan("monthly")}
            >
              <h2 className="text-xl font-semibold">Monthly</h2>
              <p className="text-gray-300">$6 / month</p>
            </div>
          </div>
          <button
            onClick={handleContinue}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 cursor-pointer"
          >
            Continue
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
