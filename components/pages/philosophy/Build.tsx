"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Build() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.muted = true;
    videoEl.play().catch(() => {
      // Autoplay might be blocked; leave controls disabled state as-is
    });
  });

  const contextHeaderRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) {
      contextHeaderRef.current?.revert();
      return;
    }

    contextHeaderRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".build-wrapper",
        start: "top-=80px top",
        end: "bottom-=80px top",
        onEnter: () => {
          headerLogo?.classList.remove("dark");
        },
        onEnterBack: () => {
          headerLogo?.classList.remove("dark");
        },
        onLeaveBack: () => {
          headerLogo?.classList.add("dark");
        },
        onLeave: () => {
          headerLogo?.classList.add("dark");
        },
      });
    });
  });

  return (
    <section className="build-wrapper w-full bg-[#1A1A1E]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[113px] px-[20px] pt-[272px] pb-[153px] max-md:flex-col-reverse max-sm:gap-[52px] max-sm:px-[11px] max-sm:pt-[77px] max-sm:pb-[17px]">
        <video
          ref={videoRef}
          className="w-full max-w-[447px] object-cover"
          src="/videos/build.mp4"
          poster="/images/pages/philosophy/build.png"
          muted={true}
          suppressHydrationWarning
          loop
          controls={false}
          playsInline
          preload="metadata"
        />
        <p className="text-gradient-vertical max-w-[565px] text-center font-serif text-[28px] leading-[37px] font-normal tracking-[-3%] max-sm:max-w-[300px] max-sm:text-[18px] max-sm:leading-[28px]">
          We build from grounding textures and quiet strength. We let fluidity guide form, and
          instinct shape flow. Every space is layered, steady, alive, generous, warm, echoing the
          elements that inspire us.
        </p>
      </div>
    </section>
  );
}
