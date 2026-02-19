"use client";

import Link from "next/link";
import Carousel, { type Slide } from "@/components/common/Carousel";
import { useState, useCallback } from "react";

const slides: Slide[] = [
  {
    id: "project-1",
    img: "/images/pages/home/project1.webp",
    alt: "Project 1",
    href: "https://amarainteriordesign.com/projects/U1AU0cmh5zpMvHmFD0r3",
    location: "MIAMI, UNITED STATES",
    title: "THE VILLAGE",
  },
  {
    id: "project-2",
    img: "/images/pages/home/project2.webp",
    alt: "Project 2",
    href: "https://amarainteriordesign.com/projects/y84GzsyHGgBncALVehIF",
    location: "TULUM, MEXICO",
    title: "SADHU RETREAT",
  },
  {
    id: "project-3",
    img: "/images/pages/home/project3.webp",
    alt: "Project 3",
    href: "https://amarainteriordesign.com/projects/IMhU0k1RcDqMeXCrOrUY",
    location: "ABU DHABI, UNITED ARAB EMIRATES",
    title: "REEM NINE",
  },
];

export default function ProjectsLanding() {
  const [activeSlide, setActiveSlide] = useState(slides[0]);
  const handleSlideChange = useCallback((slide: Slide) => {
    setActiveSlide(slide);
  }, []);

  return (
    <section className="w-full max-w-full overflow-hidden pb-[60px] max-sm:pb-[40px]">
      <div className="flex flex-col items-center justify-center px-[20px] pt-[80px] pb-[40px] max-sm:pt-[40px] max-sm:pb-[28px]">
        <h3 className="text-bg-img bg-[url(/images/pages/home/text-background.webp)] !bg-top pb-[9px] text-center font-calvino text-[32px] leading-[40px] tracking-[0.2px] italic max-sm:pb-[16px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:tracking-[0.2px]">
          Discover our Projects worldwide.{" "}
        </h3>
      </div>
      <Carousel slides={slides} onSlideChange={handleSlideChange} initialSlide={0} />
      <div className="flex flex-col items-center justify-center px-[20px] pt-[23px] max-sm:pt-[25px]">
        <p className="pb-[7px] font-sans text-[12px] leading-[43px] font-medium tracking-[0.6px] text-[#262626] uppercase max-sm:pb-0 max-sm:text-[10px] max-sm:leading-[30px] max-sm:tracking-[-0.5]">
          {(activeSlide.location as string) || ""}
        </p>
        <h4 className="font-calvino pb-[27px] text-[42px] leading-[43px] font-normal tracking-[0.8px] text-[#262626] uppercase max-sm:pb-[15px] max-sm:text-[22px] max-sm:leading-[32px] max-sm:tracking-[-0.4]">
          {(activeSlide.title as string) || ""}
        </h4>
        <Link
          href="/projects"
          className="h-[39px] self-center rounded-[35px] border-[1px] border-[#26262699] px-[16px] font-sans text-[12px] leading-[39px] font-medium tracking-[0.2px] max-sm:h-[32px] max-sm:px-[14px] max-sm:text-[11px] max-sm:leading-[32px]"
        >
          DISCOVER ALL PROJECTS
        </Link>
      </div>
    </section>
  );
}
