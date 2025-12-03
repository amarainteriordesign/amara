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

  // Update the ref when onSlideChange changes
  useEffect(() => {
    onSlideChangeRef.current = onSlideChange;
  }, [onSlideChange]);

  useLayoutEffect(() => {
    const boxes = gsap.utils.toArray<HTMLElement>(".carousel-slide");

    // Only create the loop if we have slides and boxes
    if (boxes.length === 0 || slides.length === 0) return;

    let activeElement: HTMLElement;
    setLoop(
      horizontalLoop(boxes, {
        paused: true,
        center: true,
        onChange: (element: Element) => {
          boxes.forEach((item) => {
            if (!item.classList.contains("next-cursor-item")) {
              item.classList.add("next-cursor-item");
            }

            if (item.classList.contains("open-cursor-item")) {
              item.classList.remove("open-cursor-item");
            }
          });

          if (activeElement) {
            activeElement.classList.remove("opacity-100");
            activeElement.classList.add("opacity-60");
          }

          element.classList.add("opacity-100", "open-cursor-item");
          element.classList.remove("next-cursor-item");

          activeElement = element as HTMLElement;

          // Call parent callback with slide data
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

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || !loop) return;

    const interval = setInterval(() => {
      const currentIndex = loop.current();
      const nextIndex = (currentIndex + 1) % (slides.length * 3);
      loop.toIndex(nextIndex, { duration: 0.8, ease: "power1.inOut" });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, loop, slides.length]);

  const handleHover = (i: number) => {
    if (!loop) return;
    loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" });
  };

  // Create tripled slides for infinite loop effect
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

    // If slide has href, wrap in Link, otherwise use plain div
    if (slide.href) {
      return (
        <Link
          href={slide.href}
          key={`${slide.id}-${index}`}
          className={`carousel-slide px-[43px] transition-opacity duration-300 ease-in max-md:px-[6px] ${slideClassName} ${loop?.current() === index ? "opacity-100" : "opacity-60"}`}
          onClick={() => handleHover(index)}
        >
          {slideContent}
        </Link>
      );
    }

    return (
      <div
        key={`${slide.id}-${index}`}
        className={`carousel-slide px-[43px] transition-opacity duration-300 ease-in max-md:px-[6px] ${slideClassName} ${loop?.current() === index ? "opacity-100" : "opacity-60"}`}
        onClick={() => handleHover(index)}
      >
        {slideContent}
      </div>
    );
  };

  return (
    <div className={`flex w-full items-center ${className}`}>
      {totalSlides.map((slide, i) => renderSlide(slide, i))}
    </div>
  );
}
