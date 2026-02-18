"use client";

import { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { horizontalLoop, type HorizontalLoopTimeline } from "@/helpers/horizontalLoop";

export interface Slide {
  id: string;
  img: string;
  href?: string;
  alt?: string;
  [key: string]: unknown; // Allow additional properties
}

export interface CarouselProps {
  slides: Slide[];
  onSlideChange?: (slide: Slide, index: number) => void;
  className?: string;
  slideClassName?: string;
  imageClassName?: string;
  initialSlide?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({
  slides,
  onSlideChange,
  className = "",
  slideClassName = "",
  imageClassName = "",
  initialSlide = 1,
  autoPlay = false,
  autoPlayInterval = 3000,
}: CarouselProps) {
  const [loop, setLoop] = useState<HorizontalLoopTimeline | null>(null);
  const onSlideChangeRef = useRef(onSlideChange);

  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  }, [onSlideChange]);

  useLayoutEffect(() => {
    const boxes = gsap.utils.toArray<HTMLElement>(".carousel-slide");

    if (boxes.length === 0 || slides.length === 0) return;

    let activeElement: HTMLElement;
    setLoop(
      horizontalLoop(boxes, {
        paused: true,
        center: true,
        onChange: (element: Element) => {
          if (activeElement) {
            activeElement.classList.remove("opacity-100");
            activeElement.classList.add("opacity-60");
          }

          element.classList.add("opacity-100");
          element.classList.remove("opacity-60");

          activeElement = element as HTMLElement;

          const slideIndex = boxes.indexOf(element as HTMLElement);
          const actualIndex = slideIndex % slides.length;
          if (onSlideChangeRef.current) {
            onSlideChangeRef.current(slides[actualIndex], actualIndex);
          }
        },
      }),
    );
  }, [slides]);

  useEffect(() => {
    loop?.toIndex(initialSlide, { duration: 0, ease: "power1.inOut" });
  }, [loop, initialSlide]);

  useEffect(() => {
    if (!autoPlay || !loop) return;

    const interval = setInterval(() => {
      const currentIndex = loop.current();
      const nextIndex = (currentIndex + 1) % (slides.length * 3);
      loop.toIndex(nextIndex, { duration: 0.8, ease: "power1.inOut" });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, loop, slides.length]);

  const handleSlideClick = (i: number) => {
    if (!loop) return;
    loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" });
  };

  const handlePrev = () => {
    if (!loop) return;
    const currentIndex = loop.current();
    loop.toIndex(currentIndex - 1, { duration: 0.8, ease: "power1.inOut" });
  };

  const handleNext = () => {
    if (!loop) return;
    const currentIndex = loop.current();
    loop.toIndex(currentIndex + 1, { duration: 0.8, ease: "power1.inOut" });
  };

  const totalSlides = [...slides, ...slides, ...slides];

  const renderSlide = (slide: Slide, index: number) => {
    const slideContent = (
      <div className="h-[420px] w-[604px] shrink-0 overflow-hidden max-md:h-[269px] max-md:w-[315px]">
        <Image
          src={slide.img}
          width={604}
          height={420}
          alt={slide.alt || `Slide ${index + 1}`}
          className={`will-change transition-scale h-full w-full object-cover duration-300 ease-in-out hover:scale-125 ${imageClassName}`}
        />
      </div>
    );

    if (slide.href) {
      return (
        <Link
          href={slide.href}
          key={`${slide.id}-${index}`}
          className={`carousel-slide cursor-pointer px-[43px] transition-opacity duration-300 ease-in max-md:px-[6px] ${slideClassName} ${loop?.current() === index ? "opacity-100" : "opacity-60"}`}
          onClick={() => handleSlideClick(index)}
        >
          {slideContent}
        </Link>
      );
    }

    return (
      <div
        key={`${slide.id}-${index}`}
        className={`carousel-slide cursor-pointer px-[43px] transition-opacity duration-300 ease-in max-md:px-[6px] ${slideClassName} ${loop?.current() === index ? "opacity-100" : "opacity-60"}`}
        onClick={() => handleSlideClick(index)}
      >
        {slideContent}
      </div>
    );
  };

  return (
    <div className="relative w-full">
      <div className={`flex w-full items-center ${className}`}>
        {totalSlides.map((slide, i) => renderSlide(slide, i))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-[24px] z-10 flex -translate-y-1/2 rotate-180 items-center justify-center transition-opacity hover:opacity-100 max-md:left-[12px]"
        aria-label="Previous slide"
      >
        <Image src="/images/arrow-right.png" width={27} height={27} alt="Previous" className="opacity-40 blur-[0.5px]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-[24px] z-10 flex -translate-y-1/2 items-center justify-center transition-opacity hover:opacity-100 max-md:right-[12px]"
        aria-label="Next slide"
      >
        <Image src="/images/arrow-right.png" width={27} height={27} alt="Next" className="opacity-40 blur-[0.5px]" />
      </button>
    </div>
  );
}
