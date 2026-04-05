"use client";

import Carousel, { type Slide } from "@/components/common/Carousel";
import { useState, useCallback } from "react";

const slides: Slide[] = [
  {
    id: "project-1",
    img: "/images/pages/home/Project_Preview_One_Amara_Interior_Design_Procurement_Miami_Dubai.webp",
    alt: "Project 1",
    location: "MIAMI, UNITED STATES",
    title: "THE VILLAGE",
  },
  {
    id: "project-2",
    img: "/images/pages/home/Project_Preview_Two_Amara_Interior_Design_Procurement_Miami_Dubai.webp",
    alt: "Project 2",
    location: "TULUM, MEXICO",
    title: "SADHU RETREAT",
  },
  {
    id: "project-3",
    img: "/images/pages/home/Project_Preview_Three_Amara_Interior_Design_Procurement_Miami_Dubai.webp",
    alt: "Project 3",
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
    <section className="w-full max-w-full overflow-hidden bg-[#F1EBDF] pb-[60px] max-sm:pb-[40px]">
      <div className="flex flex-col items-center justify-center px-[20px] pt-[80px] pb-[40px] max-sm:pt-[40px] max-sm:pb-[28px]">
        <a href="#contact-us" className="text-bg-img bg-[url(/images/pages/home/Text_Background_Amara_Interior_Design_Procurement_Miami_Dubai.webp)] !bg-top pb-[9px] text-center text-[54px] leading-[62px] tracking-[0.2px] italic no-underline max-sm:pb-[16px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:tracking-[0.2px]" style={{ fontFamily: 'var(--font-lora)' }}>
          Discover our Projects worldwide{" "}
        </a>
      </div>
      <Carousel slides={slides} onSlideChange={handleSlideChange} initialSlide={0} />
      <div className="flex flex-col items-center justify-center px-[20px] pt-[23px] max-sm:pt-[25px]">
        <p className="pb-[7px] font-sans text-[12px] leading-[43px] font-medium tracking-[0.6px] text-[#262626] uppercase max-sm:pb-0 max-sm:text-[10px] max-sm:leading-[30px] max-sm:tracking-[-0.5]">
          {(activeSlide.location as string) || ""}
        </p>
        <h3 className="text-[42px] leading-[43px] font-normal tracking-[0.8px] text-[#262626] uppercase max-sm:text-[22px] max-sm:leading-[32px] max-sm:tracking-[-0.4]" style={{ fontFamily: 'var(--font-lora)' }}>
          {(activeSlide.title as string) || ""}
        </h3>
      </div>
    </section>
  );
}
