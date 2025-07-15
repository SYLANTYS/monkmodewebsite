import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" aria-label="Home">
      <div className="flex items-center gap-x-1">
        <Image
          src="/images/monkbook.png" // Make sure this file exists in /public/images
          alt="MonkMode Logo"
          width={24}
          height={24}
          className={`rounded object-contain transition-opacity duration-500`}
        />
        <p
          className={`max-h-[24px] text-white text-xl font-semibold tracking-wider transition-opacity duration-500`}
        >
          MonkMode
        </p>
      </div>
    </Link>
  );
}
