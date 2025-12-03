"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type ProjectProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  location: string;
  title: string;
  href?: string;
  tined?: boolean;
  isSoon?: boolean;
};
export default function Project({
  src,
  alt,
  width,
  height,
  location,
  title,
  href,
  tined = false,
  isSoon = false,
}: ProjectProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  const context = useRef<gsap.Context>(null);
  useGSAP(
    () => {
      if (!imageRef.current) return;

      context.current = gsap.context(() => {
        gsap.set(imageRef.current, {
          yPercent: -20,
          duration: 0,
        });

        ScrollTrigger.create({
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self: ScrollTriggerType) => {
            const progress = self.progress;
            gsap.set(imageRef.current, {
              yPercent: -20 + progress * 15,
              duration: 0,
            });
          },
        });
      });

      return () => context.current?.revert();
    },
    { scope: imageRef, dependencies: [imageRef] },
  );

  const content = (
    <>
      <div className="absolute top-0 left-0 z-[1] h-full w-full overflow-hidden">
        <Image
          ref={imageRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-[120%] w-full object-cover"
        />
      </div>

      <div
        className={
          (tined ? "bg-linear-to-b from-[#00000000] to-[#00000080]" : " ") +
          " absolute top-0 left-0 z-[2] h-full w-full max-md:bg-linear-to-b max-md:from-[#00000000] max-md:to-[#00000080]"
        }
      ></div>

      <div className="relative z-[3] flex flex-col items-start max-md:flex-col-reverse max-md:items-center">
        <p className="pb-[6px] font-sans text-[12px] leading-[12px] tracking-[0.6px] text-[#F6EFE5]">
          {location}
        </p>

        <p className="font-display text-[42px] leading-[43px] font-normal tracking-[0.8px] text-[#F6EFE5] text-[#FFFFFF] uppercase max-md:text-center max-md:capitalize max-sm:text-[22px] max-sm:leading-[36px] max-sm:tracking-[-0.6]">
          {title}
        </p>
      </div>
    </>
  );

  // Disabled (coming soon) => not clickable, special cursor
  if (isSoon || !href) {
    return (
      <div
        className="coming-soon-cursor-item relative z-[2] flex h-full w-full flex-col items-start justify-end px-[26px] py-[16px] max-md:items-center max-md:pb-[25px]"
        aria-disabled="true"
        role="link"
        tabIndex={-1}
      >
        {content}
      </div>
    );
  }

  // Normal clickable card
  return (
    <Link
      href={href}
      className="open-cursor-item relative z-[2] flex h-full w-full flex-col items-start justify-end px-[26px] py-[16px] max-md:items-center max-md:pb-[25px]"
    >
      {content}
    </Link>
  );
}
