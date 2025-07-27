"use client";

import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { ArrowRightIcon } from "@phosphor-icons/react";

export default function Hook() {
  return (
    <section
      id="home"
      className="text-center py-20 pb-40 text-white bg-radial-[at_60%_50%] from-zinc-700 to-black to-75%"
    >
      <h2 className="text-5xl font-bold mb-4">Think Better. Focus Deeper.</h2>
      <p className="max-w-xl mx-auto mb-6 text-lg">
        MonkMode is your canvas-first offline AI workspace. Organize thoughts,
        analyze data, and run local LLMs—all without the cloud.
      </p>
      <div className="flex justify-center">
        <DownloadButton scale="scale-125" />
      </div>

      {/* Images + arrow layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-20 gap-6 relative">
        <Image
          src="/images/chatview.png"
          alt="Chat View"
          width={2000}
          height={2000}
          className="pointer-events-none select-none w-[400px]"
          draggable={false}
        />

        <div className="text-white">
          <ArrowRightIcon size={48} weight="bold" className="hidden lg:block" />
          <ArrowRightIcon
            size={48}
            weight="bold"
            className="rotate-90 lg:hidden my-2"
          />
        </div>

        <Image
          src="/images/canvasview.png"
          alt="Canvas View"
          width={2000}
          height={2000}
          className="pointer-events-none select-none w-[400px]"
          draggable={false}
        />
      </div>
    </section>
  );
}
