"use client";
import Copy from "@/components/common/Copy/Copy";
import SoundIcon from "@/components/icons/sound.svg";
import PauseIcon from "@/components/icons/pause.svg";
import Image from "next/image";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1 } });

    tl.to(".hero-bottom-text", { y: 300, duration: 0 });
    tl.to(".hero-bottom-text", { opacity: 1, delay: 1.5, duration: 0 });
    tl.to(".hero-bottom-text", { y: 0 });

    const tl2 = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 1 } });

    tl2.to(".hero-center-text-space", { y: 120, duration: 0 });
    tl2.to(".hero-center-text-space", { opacity: 1, delay: 1.5, duration: 0 });
    tl2.to(".hero-center-text-space", { y: 0 });

    gsap.to(".animate-hero-reveal", {
      scale: 1,
      ease: "power3.inOut",
      duration: 2,
      delay: 1.7,
    });
  });

  return (
    <section className={`max-xmd:min-h-screen relative z-[13] min-h-[calc(100vh+80px)] w-full`}>
      <div className="sticky top-0 z-[1] h-screen w-full max-w-full overflow-hidden">
        <div className="flex h-full max-h-full w-full max-w-full items-end overflow-hidden">
          <Image
            className="animate-hero-reveal absolute top-0 left-0 z-[-1] h-full w-full object-cover"
            src="/images/pages/philosophy/hero.png"
            width={1920}
            height={1080}
            alt="Hero background Image"
          />

          <div className="absolute top-1/2 z-[1] flex max-h-fit w-full -translate-y-1/2 flex-col items-center justify-center overflow-hidden p-[20px]">
            <Copy delay={1.7} animateOnScroll={false}>
              <p className="text-center font-serif text-[28px] leading-[36px] font-normal tracking-tighter text-[#FFF] max-sm:text-[24px]">
                A Design Philosophy
              </p>
            </Copy>

            <div className="max-h-fit w-full overflow-hidden text-center">
              <p className="hero-center-text-space text-bg-img bg-[url(/images/pages/home/text-background.webp)] pb-[8px] font-serif text-[28px] leading-[36px] tracking-tighter italic max-sm:text-[24px]">
                Inspired by the elements
              </p>
            </div>

            <Copy delay={1.8} animateOnScroll={false}>
              <p className="pb-[8px] font-sans text-[12px] leading-[20px] font-normal tracking-tight text-[#FFF] uppercase max-sm:pb-[12px]">
                DESIGNING HOMES THAT HEALS
              </p>
            </Copy>
          </div>

          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start p-[20px] max-sm:px-[25px] max-sm:pb-[22px]">
            <button
              onClick={handleAudioToggle}
              className="max-xmd:static xmd:fixed xmd:bottom-[15px] xmd:left-[15px] relative z-[30] cursor-pointer rounded-[50%] border-[1px] border-[#F9F8F4] p-[6px]"
            >
              {isMuted ? (
                <SoundIcon width="20" height="22" color="#F9F8F4" />
              ) : (
                <PauseIcon width="20" height="22" color="#F9F8F4" />
              )}
            </button>
          </div>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata">
        <source src="/audio/our_design_philosophy_.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
}
