// components/IntroOffer.js
"use client";

import { CheckIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function IntroOffer({ onContinue }) {
  return (
    <div className="bg-black text-white min-h-[calc(100vh-297px)] flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-5">
        <h1
          className="text-4xl font-bold mb-14 tracking-wide"
          style={{ wordSpacing: "0.2rem" }}
        >
          We want you to try MonkMode for free.
        </h1>

        <div className="w-full flex justify-center">
          <Image
            src="/images/blankcanvas.png" // ✅ use your mockup image here
            alt="MonkMode App Preview"
            width={1000}
            height={1000}
            className="rounded-xl"
          />
        </div>

        <div className="flex items-center justify-center gap-2 text-white font-bold">
          <CheckIcon size={20} weight="bold" />
          No Payment Due Now
        </div>

        <button
          onClick={onContinue}
          className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition cursor-pointer"
        >
          Try for $0.00
        </button>

        <p className="text-gray-400 text-sm">
          3 days free, then $19.99 per year ($1.67/mo)
        </p>
      </div>
    </div>
  );
}
