"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Copy from "@/components/common/Copy/Copy";

gsap.registerPlugin(useGSAP);

const CAROUSEL_IMAGES = [
  "/images/pages/home/hero-villa.webp",
  "/images/pages/home/hero-1.webp",
  "/images/pages/home/hero-2.webp",
  "/images/pages/home/hero-3.webp",
];

const CAROUSEL_INTERVAL = 5000;

export default function HeroLanding() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-overlay-landing",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
    );
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[50vh] w-full max-md:h-[50vh]">
      <div className="relative z-[1] h-full w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          {CAROUSEL_IMAGES.map((src, index) => (
            <Image
              key={src}
              className={`absolute top-0 left-0 z-[-1] h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              src={src}
              width={1920}
              height={1080}
              alt={`Interior design showcase ${index + 1}`}
              priority={index === 0}
            />
          ))}

          <div className="absolute inset-0 z-0 bg-black/30" />

          <div className="hero-overlay-landing absolute top-1/2 z-[1] flex max-h-fit w-full -translate-y-1/2 flex-col items-center justify-center overflow-hidden p-[20px]">
            <Copy animateOnScroll={false} delay={1.55}>
              <p className="pb-[12px] text-center font-display text-[46px] leading-[54px] font-normal tracking-[-0.5px] uppercase text-[#FFF] max-sm:pb-[8px] max-sm:text-[32px] max-sm:leading-[40px]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)' }}>
                <span className="text-white">Amara</span>{" "}
                <span className="text-white">Interior Design Studio</span>
              </p>
            </Copy>

            <Copy delay={1.8} animateOnScroll={false}>
              <p className="pb-[8px] font-sans text-[13px] leading-[20px] font-normal tracking-[4px] text-white uppercase max-sm:pb-[12px] max-sm:text-[10px]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)' }}>
                MIAMI - DUBAI - PARIS
              </p>
            </Copy>
          </div>

          <div className="absolute bottom-[30px] left-0 right-0 z-[2] flex justify-center gap-[8px]">
            {CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-[32px] bg-white"
                    : "w-[16px] bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
