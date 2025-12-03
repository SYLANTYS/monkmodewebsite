"use client";

import { WindowsLogoIcon } from "@phosphor-icons/react";

export default function DownloadButton({ scale }) {
  return (
    <a
      href="https://github.com/SYLANTYS/monkmodewebsite/releases/download/v0.0.1/MonkMode-Setup-0.0.1.exe"
      className={`flex items-center bg-blue-600 text-white rounded-lg px-4 py-2 space-x-1 hover:bg-blue-600/95 transition max-w-fit ${scale}`}
    >
      <WindowsLogoIcon size={28} weight="fill" />
      <div className="flex flex-col items-start leading-none">
        <span className="text-xs leading-none">Download for</span>
        <span className="text-lg font-semibold leading-none">Windows</span>
      </div>
    </a>
  );
}
