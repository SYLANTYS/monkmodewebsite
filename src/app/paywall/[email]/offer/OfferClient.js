"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { subscribeAction } from "@/actions/stripe";

export default function OfferClient({ email }) {
  const router = useRouter();

  const handleAccept = async () => {
    const url = await subscribeAction({ userId: email });
    router.push(url);
  };

  const handleSkip = () => {
    alert("Proceed to monthly deal checkout");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full flex flex-col gap-8 text-center">
          <h1 className="text-2xl font-bold">Limited Time Offer</h1>
          <p>Get the yearly plan for just $1.25 per month!</p>

          <button
            onClick={handleAccept}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-2 cursor-pointer"
          >
            Continue with Deal
          </button>

          <button
            onClick={handleSkip}
            className="w-full border border-gray-500 hover:bg-zinc-900 text-white rounded-xl py-2 mt-4 cursor-pointer"
          >
            Skip Offer — Use Monthly
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
