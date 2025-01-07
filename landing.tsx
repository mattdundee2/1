"use client";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../ui/section-heading";

export default function Landing() {
  return (
    <section id="landing" className="relative h-screen w-full overflow-hidden">
      {/* Background GIF with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/demo_video.gif"
          alt="CHAOS Demo Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-neutral-900/80" />
      </div>

      {/* Content */}
      <div className="relative h-full w-full flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="text-white h-full flex flex-col items-start justify-center pl-8 md:pl-16 lg:pl-24 space-y-8">
          <SectionHeading noMargin>
            <p className="text-white">
              C.H.A.O.S. <br /> Revolutionizing Counter-UAS Training
            </p>
          </SectionHeading>
          <p className="text-lg sm:text-3xl font-light leading-relaxed mt-15 max-w-2xl">
            The modular, cost-effective, NDAA-compliant drone platform enabling
            realistic and dynamic training environments for modern aerial
            threats.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-medium text-white bg-green-500 hover:bg-green-600 border border-transparent transition-all duration-150 px-6 py-3 rounded-lg shadow-lg"
            >
              Connect
            </Link>
            <Link
              href="/solutions"
              className="inline-block text-lg font-medium text-neutral-200 bg-transparent hover:text-black hover:bg-white border border-neutral-300 hover:border-transparent transition-all duration-150 px-6 py-3 rounded-lg shadow-lg"
            >
              Discover C.H.A.O.S
            </Link>
          </div>
        </div>

        {/* Right Content */}
        {/* <div className="hidden md:flex md:w-1/2 h-full items-center justify-end pr-0">
          <Image
            src="/demo_video.gif"
            alt="CHAOS Demo"
            width={600}
            height={300}
            className="rounded-xl shadow-xl"
            priority
          />
        </div> */}
      </div>
    </section>
  );
}
