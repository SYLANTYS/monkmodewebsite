"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Think Visually, Stay Grounded",
    text: "Capture ideas, tasks, or goals directly in your canvas. Every thought is linked to a persistent AI thread you can revisit, expand, or connect later.",
    image: "/images/relationships.png",
  },
  {
    title: "Embed Anything, Command Everything",
    text: "Drop in PDFs, images, and text files, then use @agent to summarize, extract, or analyze. With built-in vision, web scraping, and custom commands like /reset, you never leave your workspace.",
    image: "/images/embedscreen.png",
  },
  {
    title: "Capture Meaning, Not Just Messages",
    text: "Attach context—explanations, relationships, and key takeaways that live alongside your threads. Connect ideas and build structure around your thinking.",
    image: "/images/expandednotechat.png",
  },
  {
    title: "Offline or Hybrid, Your Choice",
    text: "Stay off-the-grid with local LLMs or plug in API keys for GPT-4, Claude, and more. MonkMode adapts to your privacy and performance needs.",
    image: "/images/llmshowcase.png",
  },
];

export default function InteractiveStepSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-16 text-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image and Dots */}
        <div className="relative flex flex-col items-center">
          {steps.map((step, idx) => (
            <Image
              key={idx}
              src={step.image}
              alt={step.title}
              width={1000}
              height={1000}
              className={`rounded-xl shadow-lg border border-white transition-all duration-300 ${
                activeStep === idx ? "opacity-100" : "opacity-0 absolute"
              }`}
            />
          ))}

          {/* Dots */}
          <div className="flex space-x-3 mt-4">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeStep ? "bg-white scale-125" : "bg-white/30"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Clickable Text Boxes */}
        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                idx === activeStep
                  ? "border-2 border-white shadow-xl scale-[1.03]"
                  : "border-2 border-white/30 shadow-md hover:scale-[1.01]"
              }`}
            >
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="text-sm mt-1 text-white/80">{step.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
