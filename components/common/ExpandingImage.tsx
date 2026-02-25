"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type ExpandingImageProps = {
  quote?: string;
  linkTo?: string;
};

export default function ExpandingImage({ quote, linkTo = "/design" }: ExpandingImageProps) {
  useGSAP(() => {
    const calculateScale = () => {
      const imageElement = document.querySelector(".elements-image-anim img") as HTMLImageElement;
      if (!imageElement) return 0.9;

      const windowWidth = window.innerWidth;
      const actualImageWidth = imageElement.offsetWidth;

      const isMobile = windowWidth < 768;
      const margin = isMobile ? 50 : 100;

      const targetWidth = windowWidth - margin;
      const scale = targetWidth / actualImageWidth;

      return Math.max(0.9, Math.min(scale, 1.1));
    };

    const imageElement = document.querySelector(".elements-image-anim img") as HTMLImageElement;
    if (imageElement && imageElement.complete) {
      const initialScale = calculateScale();
      const maxScale = Math.min(initialScale + 0.1, 1.1);

      gsap.set(".elements-image-anim", {
        scale: initialScale,
        duration: 0,
      });
      gsap.set(".elements-image-anim img", {
        scale: initialScale,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".elements-image-anim",
        start: "top bottom",
        end: "bottom top+=200px",
        onUpdate: (self) => {
          gsap.to(".elements-image-anim", {
            scale: initialScale + (maxScale - initialScale) * self.progress,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".elements-image-anim",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          gsap.to(".elements-image-anim img", {
            scale: initialScale + (maxScale - initialScale) * self.progress,
          });
        },
      });
    } else {
      const initialScale = 0.9;
      const maxScale = 1.0;

      gsap.set(".elements-image-anim", {
        scale: initialScale,
        duration: 0,
      });
      gsap.set(".elements-image-anim img", {
        scale: initialScale,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".elements-image-anim",
        start: "top bottom",
        end: "bottom top+=300px",
        onUpdate: (self) => {
          gsap.to(".elements-image-anim", {
            scale: initialScale + (maxScale - initialScale) * self.progress,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".elements-image-anim",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          gsap.to(".elements-image-anim img", {
            scale: initialScale + (maxScale - initialScale) * self.progress,
          });
        },
      });
    }
  });

  return (
    <section className="bg-background flex w-full max-w-full flex-col items-center gap-[113px] overflow-hidden px-[84px] pt-[179px] pb-[71px] max-md:flex-col-reverse max-md:gap-[104px] max-md:px-[20px] max-md:pt-[76px] max-md:pb-[104px] max-sm:px-[11px]">
      {quote && (
        <p className="text-gradient-vertical max-w-[565px] text-center font-serif text-[28px] leading-[37px] font-normal tracking-[-0.8px] max-sm:max-w-[311px] max-sm:max-w-[320px] max-sm:text-[18px] max-sm:leading-[28px] max-sm:tracking-[-0.5px]">
          {quote}
        </p>
      )}

      <div className="elements-image-anim relative h-[80vh] w-full max-w-[1272px] overflow-hidden max-md:h-auto max-md:aspect-[16/10]">
        <Image
          src="/images/pages/design/Founders_Desktop_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
          alt="Amara Showroom"
          width={2048}
          height={1231}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
