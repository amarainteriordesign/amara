"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ExpandingImageAbout() {
  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const mobileZoom = isMobile ? 1.3 : 1;

    const calculateScale = () => {
      const imageElement = document.querySelector(".about-image-anim img") as HTMLImageElement;
      if (!imageElement) return 0.9;

      const windowWidth = window.innerWidth;
      const actualImageWidth = imageElement.offsetWidth;

      const margin = isMobile ? 50 : 100;

      const targetWidth = windowWidth - margin;
      const scale = targetWidth / actualImageWidth;

      return Math.max(0.9, Math.min(scale, 1.1));
    };

    const imageElement = document.querySelector(".about-image-anim img") as HTMLImageElement;
    if (imageElement && imageElement.complete) {
      const initialScale = calculateScale();
      const maxScale = Math.min(initialScale + 0.1, 1.1);

      gsap.set(".about-image-anim", {
        scale: initialScale,
        duration: 0,
      });
      gsap.set(".about-image-anim img", {
        scale: initialScale * mobileZoom,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".about-image-anim",
        start: "top bottom",
        end: "bottom top+=200px",
        onUpdate: (self) => {
          gsap.to(".about-image-anim", {
            scale: initialScale + (maxScale - initialScale) * self.progress,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".about-image-anim",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const currentScale = initialScale + (maxScale - initialScale) * self.progress;
          gsap.to(".about-image-anim img", {
            scale: currentScale * mobileZoom,
          });
        },
      });
    } else {
      const initialScale = 0.9;
      const maxScale = 1.0;

      gsap.set(".about-image-anim", {
        scale: initialScale,
        duration: 0,
      });
      gsap.set(".about-image-anim img", {
        scale: initialScale * mobileZoom,
        duration: 0,
      });

      ScrollTrigger.create({
        trigger: ".about-image-anim",
        start: "top bottom",
        end: "bottom top+=300px",
        onUpdate: (self) => {
          gsap.to(".about-image-anim", {
            scale: initialScale + (maxScale - initialScale) * self.progress,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".about-image-anim",
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const currentScale = initialScale + (maxScale - initialScale) * self.progress;
          gsap.to(".about-image-anim img", {
            scale: currentScale * mobileZoom,
          });
        },
      });
    }
  });

  return (
    <section className="bg-[#e8dfd2] flex w-full max-w-full flex-col items-center overflow-hidden px-[84px] pt-[80px] pb-[71px] max-md:px-[20px] max-md:pt-[60px] max-md:pb-[60px] max-sm:px-[11px]">
      <div className="about-image-anim relative w-full max-w-[1272px] overflow-hidden">
        <Image
          src="/images/pages/about-us/Founders_Team_Amara_Interior_Design_Procurement_Miami_Dubai.webp"
          alt="Amara Interior Design Founders - Eloise Chauviere and Ines Bakkali"
          width={2048}
          height={1171}
          className="h-auto w-full max-sm:scale-[1.3] max-sm:object-cover"
        />
      </div>
    </section>
  );
}
