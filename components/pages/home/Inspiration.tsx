"use client";
import SoundIcon from "@/components/icons/sound.svg";
import PlayIcon from "@/components/icons/play.svg";
import PauseIcon from "@/components/icons/pause.svg";
import { useEffect, useRef, useState } from "react";
import Copy from "@/components/common/Copy/Copy";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Inspiration() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayDisabled, setIsPlayDisabled] = useState(false);
  const [isPauseDisabled, setIsPauseDisabled] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;
    void videoRef.current.play();
    setIsPlayDisabled(true);
    setIsPauseDisabled(false);
  };

  const handlePause = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    setIsPlayDisabled(false);
    setIsPauseDisabled(true);
  };

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
    setHasUserInteracted(true);

    // If unmuting, try to play the video
    if (nextMuted === false) {
      void videoRef.current.play().catch(() => {
        console.log("Could not play video with sound");
      });
    }
  };

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    // Start muted for autoplay to work
    videoEl.muted = true;
    videoEl.play().catch(() => {
      // Autoplay might be blocked; leave controls disabled state as-is
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".inspiration-container",
        start: "top center",
        end: "bottom bottom",
      },
      defaults: { ease: "power3.inOut", duration: 1 },
    });

    tl.to(".inspirations-text", { opacity: 1, delay: 0.1, duration: 0 });
    tl.to(".inspirations-text", { translateY: 0 });
  });

  const contextRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    const headerLogo = document.querySelector("header .logo");
    if (!headerLogo) contextRef.current?.revert();

    contextRef.current = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".inspiration-container",
        start: "top-=80px top",
        end: "bottom-=80px top",
        onEnter: () => {
          headerLogo?.classList.add("dark");
        },
        onEnterBack: () => {
          headerLogo?.classList.add("dark");
        },
        onLeaveBack: () => {
          headerLogo?.classList.remove("dark");
        },
        onLeave: () => {
          headerLogo?.classList.remove("dark");
        },
      });
    });
  });

  return (
    <section className="inspiration-container relative flex min-h-screen w-full flex-col justify-end">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
        src="/videos/ocean.mp4"
        poster="/images/pages/home/ocean-poster.png"
        muted={isMuted}
        suppressHydrationWarning
        loop
        controls={false}
        playsInline
        preload="metadata"
        onPlay={() => {
          setIsPlayDisabled(true);
          setIsPauseDisabled(false);
        }}
        onPause={() => {
          setIsPlayDisabled(false);
          setIsPauseDisabled(true);
        }}
      />

      <div className="absolute z-[1] flex h-full w-full flex-col items-center justify-center p-[20px]">
        <div className="max-h-fit w-full overflow-hidden text-center">
          <p className="inspirations-text translate-y-[-120%] pb-[8px] font-sans text-[12px] leading-[20px] font-normal tracking-[0.6] text-[#F6EFE5] uppercase max-sm:pb-[12px]">
            OUR PHILOSOPHY
          </p>
        </div>

        <div className="max-h-fit w-full overflow-hidden text-center">
          <p className="inspirations-text translate-y-[-120%] font-serif text-[28px] leading-[36px] font-normal tracking-[-0.8px] text-[#F6EFE5] text-[#FFF] max-sm:text-[24px] max-sm:tracking-[-0.7]">
            Every project has a story,
          </p>
        </div>

        <Copy delay={0.2}>
          <p className="pb-[8px] font-serif text-[28px] leading-[36px] tracking-[-0.8px] text-[#F6EFE5] italic max-sm:text-[24px] max-sm:tracking-[-0.7]">
            Inspired by the Elements
          </p>
        </Copy>
      </div>

      <div className="relative z-[2] mx-auto flex h-full w-full max-w-[1440px] items-center justify-between self-end p-[20px] max-sm:px-[25px] max-sm:pb-[22px]">
        <button
          onClick={handleToggleMute}
          className={`relative cursor-pointer rounded-[50%] border-[1px] border-[#F9F8F4] p-[6px] transition-all duration-300 ${
            isMuted && !hasUserInteracted ? "animate-pulse bg-white/10" : ""
          }`}
          title={isMuted ? "Click to enable sound" : "Click to mute sound"}
        >
          {isMuted && (
            <div className="absolute top-0 left-0 flex h-full w-full rotate-135 items-center justify-center">
              <div className="h-[1px] w-full bg-[#F9F8F4]"></div>
            </div>
          )}

          <SoundIcon width="20" height="22" color="#F9F8F4" />
        </button>

        <div className="flex items-center gap-[10px] max-sm:hidden">
          {isPlayDisabled ? (
            <button className="cursor-pointer" onClick={handlePause}>
              <PauseIcon
                width="10"
                height="19"
                color="#F9F8F4"
                opacity={isPauseDisabled ? "0.7" : "1"}
              />
            </button>
          ) : (
            <button className="cursor-pointer" onClick={handlePlay} disabled={isPlayDisabled}>
              <PlayIcon
                width="17"
                height="19"
                color="#F9F8F4"
                opacity={isPlayDisabled ? "0.7" : "1"}
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
