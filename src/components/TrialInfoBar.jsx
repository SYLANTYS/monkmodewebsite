"use client";

import { LockOpenIcon, BellIcon, CrownSimpleIcon } from "@phosphor-icons/react";

const steps = [
  {
    icon: <LockOpenIcon size={24} />,
    title: "Today",
    description:
      "Unlock everything: offline AI, canvas workspaces, and limitless projects.",
  },
  {
    icon: <BellIcon size={24} />,
    title: "In 2 Days - Reminder",
    description:
      "We'll send you a reminder inside MonkMode that your trial is ending soon.",
  },
  {
    icon: <CrownSimpleIcon size={24} />,
    title: "In 3 Days - Billing Starts",
    description: "You'll be charged unless you cancel before your trial ends.",
  },
];

export default function TrialInfoBar() {
  return (
    <div className="rounded-xl px-6 text-white flex flex-col gap-4">
      <div className="flex flex-col gap-3 relative px-2">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const color = isLast ? "bg-blue-800" : "bg-yellow-700";
          const barColor = isLast ? "bg-blue-800/50" : "bg-yellow-700/50";

          return (
            <div key={index} className="flex items-start gap-6 relative">
              {/* Vertical bar */}
              <div
                className={`absolute left-[10px] top-5 bottom-[-1.1rem] w-3 rounded-full ${barColor} z-0`}
              />

              {/* Icon wrapper */}
              <div className={`relative z-10 p-1 rounded-full ${color}`}>
                {step.icon}
              </div>

              {/* Text content */}
              <div className="text-start">
                <p className="font-bold">{step.title}</p>
                <p className="text-sm text-gray-300">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
