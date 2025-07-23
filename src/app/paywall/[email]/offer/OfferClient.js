"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Discount from "@/components/Discount";
import { useRouter } from "next/navigation";
import { subscribeAction } from "@/actions/stripe";
import { useState } from "react";

export default function OfferClient({ email, userId }) {
  const router = useRouter();
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [loadingSkip, setLoadingSkip] = useState(false);

  const handleAccept = async () => {
    setLoadingAccept(true);
    try {
      const url = await subscribeAction({
        id: userId,
        email: email,
        product: 2,
      });
      router.push(url);
    } catch (err) {
      console.error("Accept error:", err);
    }
  };

  const handleSkip = async () => {
    setLoadingSkip(true);
    try {
      const url = await subscribeAction({
        id: userId,
        email: email,
        product: 0,
      });
      router.push(url);
    } catch (err) {
      console.error("Skip error:", err);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-3">
        <div className="max-w-md w-full flex flex-col gap-4 text-center">
          <h1
            className="text-5xl font-bold tracking-wide"
            style={{ wordSpacing: "0.2rem" }}
          >
            One Time Offer
          </h1>
          <p className="text-xl text-gray-300">You will never see this again</p>

          <Discount />

          <p className="text-gray-400 text-sm">
            3 days free, then $14.99 per year ($1.25/mo)
          </p>

          <div className="flex flex-col">
            <button
              onClick={handleAccept}
              disabled={loadingAccept}
              className={`w-full rounded-xl py-3 font-medium transition ${
                loadingAccept
                  ? "bg-white text-black opacity-70 cursor-not-allowed"
                  : "bg-white text-black hover:bg-gray-200 cursor-pointer"
              }`}
            >
              {loadingAccept ? (
                <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin inline-block" />
              ) : (
                "Claim your limited offer now!"
              )}
            </button>

            <button
              onClick={handleSkip}
              disabled={loadingSkip}
              className={`w-full border border-gray-500 rounded-xl py-3 mt-4 font-medium transition ${
                loadingSkip
                  ? "bg-zinc-900 text-white opacity-70 cursor-not-allowed"
                  : "hover:bg-zinc-900 text-white cursor-pointer"
              }`}
            >
              {loadingSkip ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block" />
              ) : (
                "Skip Offer — Use Monthly"
              )}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
