"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import InsightsIcon from "@/components/icons/hero-insights.svg";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1 } });

    tl.to(".hero-bottom-text-anim", { y: 300, duration: 0 });
    tl.to(".hero-bottom-text-anim", { opacity: 1, delay: 1.5, duration: 0 });
    tl.to(".hero-bottom-text-anim", { y: 0 });

    gsap.to(".animate-hero-reveal", {
      scale: 1,
      ease: "power3.inOut",
      duration: 2,
      delay: 1.7,
    });
  });

  return (
    <section className={`max-xmd:min-h-screen relative min-h-[calc(100vh+80px)] w-full`}>
      <div className="sticky top-0 z-[1] h-screen w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          <Image
            className="animate-hero-reveal absolute top-0 left-0 z-[-1] h-full w-full object-cover"
            src="/images/pages/news/ocean.png"
            width={1920}
            height={1080}
            alt="Interior design news and insights Amara Miami Dubai"
          />

          <h1 className="sr-only">Interior Design News and Insights</h1>
          <div className="hero-bottom-text-anim absolute right-0 bottom-0 left-0 px-[10px] pb-[26px] max-sm:px-[5px]">
            <InsightsIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
