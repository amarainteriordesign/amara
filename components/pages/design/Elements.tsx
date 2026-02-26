"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Elements() {
  useGSAP(() => {
    gsap.set(".elements-image-anim", {
      scale: 0.9,
      duration: 0,
    });
    gsap.set(".elements-image-anim img", {
      scale: 0.9,
      duration: 0,
    });

    ScrollTrigger.create({
      trigger: ".elements-image-anim",
      start: "top bottom",
      end: "bottom top+=200px",
      onUpdate: (self) => {
        gsap.to(".elements-image-anim", {
          scale: 0.9 + self.progress * 0.2,
        });
      },
    });

    ScrollTrigger.create({
      trigger: ".elements-image-anim",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        gsap.to(".elements-image-anim img", {
          scale: 0.9 + self.progress * 0.2,
        });
      },
    });
  });

  return (
    <section className="bg-background flex w-full max-w-full flex-col items-center gap-[113px] overflow-hidden px-[84px] pt-[179px] pb-[71px] max-md:flex-col-reverse max-md:gap-[104px] max-md:px-[20px] max-md:pt-[76px] max-md:pb-[104px] max-sm:px-[11px]">
      <p className="font-display text-gradient-vertical max-w-[565px] text-center font-serif text-[28px] leading-[37px] font-normal tracking-[-3%] max-sm:max-w-[311px] max-sm:max-w-[320px] max-sm:text-[18px] max-sm:leading-[28px]">
        Before drawing lines or choosing textures, we listen. To your story, your rhythm, your
        needs. The best design feels right because it comes from something true. From that truth, we
        shape spaces that carry meaning, where every line follows a purpose, and every material
        choice speaks softly of who you are.
      </p>

      <div className="elements-image-anim relative h-[80vh] w-full max-w-[1272px]">
        <Image
          src="/images/pages/design/elements.webp"
          alt="Design philosophy elements Amara Interior Design Miami Dubai"
          width={1272}
          height={704}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-[42px] left-[50%] z-[2] flex translate-x-[-50%] transform flex-col items-center gap-[9px] max-sm:bottom-[25px] max-sm:gap-0">
          <p className="font-serif text-[28px] leading-[36px] tracking-tighter whitespace-nowrap text-[#F6EFE5] italic max-sm:text-[22px]">
            Our Design Philosophy
          </p>
          <p className="font-sans text-[12px] leading-[20px] font-normal tracking-[3%] text-[#F6EFE5] uppercase">
            STORY OF THE ELEMENTS
          </p>
        </div>
      </div>
    </section>
  );
}
