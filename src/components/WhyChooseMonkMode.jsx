"use client";

import { SparkleIcon, LinkSimpleIcon, BrainIcon } from "@phosphor-icons/react";

function ReasonCard({ icon: Icon, title, desc }) {
  return (
    <div className="bg-gray-100 rounded-3xl p-6 max-sm:mx-5 text-left flex flex-col gap-3 shadow-lg">
      <Icon size={40} className="text-black" />
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-gray-800">{desc}</p>
    </div>
  );
}

export default function WhyChooseMonkMode() {
  return (
    <section className="py-20 pb-40 bg-gray-300 text-black text-center">
      <h3 className="text-5xl mb-2">Why Choose MonkMode?</h3>
      <p className="text-lg mb-20 text-zinc-700">
        MonkMode is pushing for more visual chatbots.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ReasonCard
          icon={SparkleIcon}
          title="Save Time and Mental Energy"
          desc="MonkMode helps you offload repetitive thinking. Summarize documents, extract insights from PDFs, and return to key ideas without digging through endless chats. Focus on building, not reprocessing."
        />
        <ReasonCard
          icon={LinkSimpleIcon}
          title="Connect the Tools You Already Use"
          desc="Plug in your own API keys for GPT-4, Claude, or others—or stay fully offline with unrestricted local models. MonkMode adapts to your workflow, whether you're researching, journaling, or building complex systems."
        />
        <ReasonCard
          icon={BrainIcon}
          title="Think Deeper, Stay in Flow"
          desc="With a canvas-first interface and persistent chat threads, MonkMode keeps your thoughts visible, connected, and structured. Use linked notes to map relationships, document meaning, and develop long-term ideas—all without breaking focus."
        />
      </div>
    </section>
  );
}
