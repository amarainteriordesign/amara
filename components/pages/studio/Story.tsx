"use client";
import Copy from "@/components/common/Copy/Copy";
import SoundIcon from "@/components/icons/sound.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useState, useRef } from "react";
import PauseIcon from "@/components/icons/pause.svg";

export default function Story() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story-container",
        start: "top center",
        end: "bottom bottom",
        once: true,
      },
      defaults: { ease: "power3.inOut", duration: 1 },
    });

    tl.to(".story-text-anim", { translateY: 0 });

    gsap.to(".story-text-anim-2", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".story-container",
        start: "top center",
        end: "bottom bottom",
        once: true,
      },
      duration: 1.25,
      delay: 0.1,
    });
  }, []);

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

  return (
    <section className="max-xmd:px-[40px] items start mx-auto flex w-full max-w-[1440px] flex-col px-[65px] pt-[178px] max-md:px-[20px] max-sm:pt-[96px]">
      <div className="story-container flex w-full flex-col items-center justify-center px-[20px] pb-[181px] max-sm:pb-[112px]">
        <div className="max-h-fit overflow-hidden text-center">
          <h3 className="text-bg-img story-text-anim translate-y-[120%] bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[8px] font-serif text-[28px] leading-[36px] tracking-[-0.8px] italic max-sm:text-[22px] max-sm:tracking-[-0.6px]">
            Our Founding Story
          </h3>
        </div>

        <Copy delay={0.5}>
          <p className="pb-[68px] text-center font-sans text-[12px] leading-[20px] font-normal tracking-[0.3px] text-[#262626] uppercase max-sm:pb-[27px]">
            INSIGHTS ABOUT US
          </p>
        </Copy>

        <p className="story-text-anim-2 text-gradient-vertical max-w-[565px] pb-[43px] text-center font-serif text-[28px] leading-[37px] font-normal tracking-[-0.8px] opacity-0 max-sm:max-w-[311px] max-sm:pb-[27px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[-0.4px]">
          Amara was born from the meeting of two voices, two visions united by the same question:
          how should design feel? Rooted in friendship and guided by intention, the studio grew from
          a shared desire to create spaces that restore. From the very beginning, it was never about
          trends, but about truth, balance, and honoring the beauty of what already exists.
        </p>

        <button
          onClick={handleAudioToggle}
          className="flex h-[44] w-fit cursor-pointer items-center justify-center gap-[13px] rounded-[30px] bg-[#26262633] px-[14px] max-sm:gap-[13px]"
        >
          <div className="relative h-fit w-fit">
            {isMuted ? (
              <SoundIcon color="#262626" width={19} height={21} />
            ) : (
              <PauseIcon color="#262626" width={19} height={21} />
            )}
          </div>

          <div className="h-[32px] w-[1.5px] rounded-[1px] bg-[#262626] max-sm:h-[29px]"></div>
          <p className="font-serif text-[14px] leading-[36px] font-normal tracking-[-0.4px] text-[#262626] max-sm:text-[13px] max-sm:leading-[16px]">
            Listen <span className="max-sm:hidden">to an Excerpt from </span>“Our Founding Story”
          </p>
        </button>

        <audio ref={audioRef} preload="metadata">
          <source src="/audio/our_founding_story_amara.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <div className="relative flex h-[2271px] w-full items-start justify-between max-md:justify-normal max-sm:h-[1800px]">
        <div className="flex h-full flex-col justify-between py-[120px] max-sm:py-0">
          <div className="flex max-w-[438px] flex-col gap-[25px] max-sm:max-w-[315px] max-sm:gap-[15px]">
            <Image
              src="/images/pages/studio/story1.jpg"
              width={900}
              height={1000}
              className="h-[530px] w-full object-cover max-sm:h-[450px]"
              alt="Amara Interior Design studio Miami office"
            />
            <div className="flex w-full flex-col items-start gap-[6px]">
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[1.8px] text-[#262626] uppercase max-sm:hidden">
                MIAMI
              </p>
              <p className="font-serif text-[14px] leading-[21px] font-normal tracking-[0.3px] text-[#262626] max-sm:text-[12px] max-sm:tracking-[0.3px]">
                Miami teaches rhythm. The sea, the light, the lifestyle, all guide us toward a
                gentler way of living and designing. From this place, we create with warmth,
                fluidity, and ease.
              </p>
            </div>
          </div>
          <div className="flex max-w-[438px] flex-col gap-[25px] max-md:flex-col-reverse max-sm:max-w-[315px] max-sm:gap-[15px]">
            <div className="flex w-full flex-col items-start gap-[6px]">
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[13%] text-[#262626] uppercase max-sm:hidden">
                DUBAI
              </p>
              <p className="font-serif text-[14px] leading-[21px] font-normal tracking-[2%] text-[#262626] max-sm:text-[12px] max-sm:tracking-[0%]">
                Dubai fuels our boldest ideas. Its spirit of innovation and openness invites us to
                push boundaries, shaping a design approach that’s fearless, modern, and deeply
                creative.
              </p>
            </div>
            <Image
              src="/images/pages/studio/story3.png"
              width={900}
              height={1000}
              className="h-[530px] w-full object-cover max-sm:h-[450px]"
              alt="Amara Interior Design studio Dubai office"
            />
          </div>
        </div>
        <hr className="max-xmd:hidden h-full w-[0.5px] bg-[#262626] pt-[155px]"></hr>
        <div className="flex h-full flex-col items-end justify-center max-md:absolute max-md:right-0 max-md:w-full">
          <div className="flex max-w-[438px] flex-col gap-[25px] max-sm:max-w-[315px] max-sm:gap-[15px]">
            <Image
              src="/images/pages/studio/story2.jpg"
              width={900}
              height={1000}
              className="h-[530px] w-full object-cover max-sm:h-[450px]"
              alt="Amara Interior Design studio Paris office"
            />
            <div className="flex w-full flex-col items-start gap-[6px]">
              <p className="font-sans text-[14px] leading-[30px] font-medium tracking-[13%] text-[#262626] uppercase max-sm:hidden">
                PARIS
              </p>
              <p className="font-serif text-[14px] leading-[21px] font-normal tracking-[2%] text-[#262626] max-sm:text-[12px] max-sm:tracking-[0%]">
                Paris grounds us in history. Its layered heritage and quiet elegance, cultivate our
                sensitivity to detail, balance, and meaning, bringing timeless depth to everything
                we create.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
