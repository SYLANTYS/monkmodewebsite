"use client";

import { GiftIcon } from "@phosphor-icons/react";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function Discount() {
  const [recycleConfetti, setRecycleConfetti] = useState(true);

  useEffect(() => {
    const updateSize = () => {
      const el = document.getElementById("discount-box");
      if (el) {
        const rect = el.getBoundingClientRect();
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    // 🎉 Stop confetti after 3 seconds
    const timer = setTimeout(() => {
      setRecycleConfetti(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <div
      id="discount-box"
      className="max-w-screen relative bg-gradient-to-br from-zinc-900/60 to-zinc-800/60 rounded-3xl mt-8 mb-2 text-white text-center shadow-lg overflow-visible"
    >
      {/* 🎁 Icon badge */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 bg-black p-4 rounded-full shadow-md border-3 border-zinc-900">
        <GiftIcon size={36} weight="fill" />
      </div>

      {/* 🎊 Confetti layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Confetti
          width={360}
          height={450}
          numberOfPieces={50}
          recycle={recycleConfetti}
          gravity={0.2}
          tweenDuration={1000}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-10 mt-12 mb-4">
        <p className="text-base text-gray-300">
          Here's a{" "}
          <span className="bg-white text-black mx-1 px-2 py-0.5 rounded-full text-sm font-semibold">
            79% off
          </span>{" "}
          discount 🎉
        </p>

        <div className="mt-5 bg-black px-20 py-5 rounded-2xl">
          <p className="text-2xl font-bold text-white">
            Only ($1.25){" "}
            <span className="text-blue-300 font-medium">/ month</span>
          </p>
        </div>

        <p className="text-base text-gray-400 mt-5">Lowest price ever</p>
      </div>
    </div>
  );
}
