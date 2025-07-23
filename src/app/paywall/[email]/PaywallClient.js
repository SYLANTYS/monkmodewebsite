"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialInfoBar from "@/components/TrialInfoBar";
import IntroOffer from "@/components/IntroOffer";
import { CheckIcon, CheckCircleIcon, CircleIcon } from "@phosphor-icons/react";
import { subscribeAction } from "@/actions/stripe";

export default function PaywallClient({ email, userId }) {
  const [plan, setPlan] = useState("yearly");
  const [loading, setLoading] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
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
    setLoading(true);
    if (plan === "monthly") {
      handleMonthly();
    } else {
      handleYearly();
    }
  };

  const optionClass = (selected) =>
    `relative flex-1 flex flex-col justify-between border-2 rounded-xl py-4 px-6 cursor-pointer transition transform ${
      selected ? "border-white scale-105" : "border-zinc-700"
    }`;

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      {!showPaywall ? (
        <IntroOffer onContinue={() => setShowPaywall(true)} />
      ) : (
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-md w-full text-center space-y-5">
            <h1
              className="text-4xl font-bold tracking-wide"
              style={{ wordSpacing: "0.2rem" }}
            >
              Start your 3-day FREE <br /> trial to continue.
            </h1>

            <TrialInfoBar />

            <div className="flex gap-4 mt-12">
              {/* Monthly Option */}
              <div
                className={optionClass(plan === "monthly")}
                onClick={() => setPlan("monthly")}
              >
                <div className="w-full flex flex-col gap-1 items-start">
                  <div className="flex w-full justify-between items-center">
                    <div className="text-start">
                      <h2 className="text-xl font-semibold">Monthly</h2>
                      <p className="text-gray-300">$5.99/mo</p>
                    </div>
                    {plan === "monthly" ? (
                      <CheckCircleIcon size={32} weight="fill" />
                    ) : (
                      <div className="text-zinc-700">
                        <CircleIcon size={32} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Yearly Option */}
              <div
                className={optionClass(plan === "yearly")}
                onClick={() => setPlan("yearly")}
              >
                {/* Top-left badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black md:text-xs text-[8px] font-bold px-4 py-1 rounded-full">
                  3 DAYS FREE
                </div>

                <div className="w-full flex flex-col gap-1 items-start">
                  <div className="flex w-full justify-between items-center">
                    <div className="text-start">
                      <h2 className="text-xl font-semibold">Yearly</h2>
                      <p className="text-gray-300">($1.67/mo)</p>
                    </div>
                    {plan === "yearly" ? (
                      <CheckCircleIcon size={32} weight="fill" />
                    ) : (
                      <div className="text-zinc-700">
                        <CircleIcon size={32} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-white font-bold">
              <CheckIcon size={20} weight="bold" />
              No Payment Due Now
            </div>

            <button
              onClick={handleContinue}
              disabled={loading}
              className={`w-full py-3 rounded-xl font-medium transition ${
                loading
                  ? "bg-white text-black opacity-70 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-200 cursor-pointer"
              }`}
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin inline-block" />
              ) : plan === "monthly" ? (
                "Continue"
              ) : (
                "Start My 3-day Free Trial"
              )}
            </button>

            <p className="text-gray-400 text-sm">
              3 days free, then $19.99 per year ($1.67/mo)
            </p>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}
