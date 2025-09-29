import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function UncensoredLLMsSection() {
  return (
    <section
      className="py-20 pb-30 text-white text-center \
      bg-radial-[at_45%_90%] from-zinc-500 to-black to-75%"
    >
      <h3 className="text-4xl mb-8">New Uncensored LLMs</h3>
      <p className="max-w-xl mx-auto mb-20 text-lg">
        Run powerful models like Dolphin and Mixtral directly through MonkMode
        to unlock their full capabilities without restrictions.
      </p>

      <div className="flex justify-center gap-8 flex-wrap">
        <div className="transform transition-transform hover:-rotate-6 hover:-translate-x-3">
          <Image
            src="/images/uncensored1.png"
            alt="Uncensored Model 1"
            width={300}
            height={300}
            className="rounded-xl shadow-lg select-none pointer-events-none rotate-3 -translate-y-1"
            draggable={false}
          />
        </div>
        <div className="transform transition-transform hover:-translate-y-3 hover:scale-105">
          <Image
            src="/images/uncensored2.png"
            alt="Uncensored Model 2"
            width={300}
            height={300}
            className="rounded-xl shadow-lg select-none pointer-events-none"
            draggable={false}
          />
        </div>
        <div className="transform transition-transform hover:rotate-6 hover:translate-x-3">
          <Image
            src="/images/uncensored3.png"
            alt="Uncensored Model 3"
            width={300}
            height={300}
            className="rounded-xl shadow-lg select-none pointer-events-none -rotate-3 translate-y-1"
            draggable={false}
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <DownloadButton scale="scale-125" />
      </div>
    </section>
  );
}
