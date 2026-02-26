"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function CarouselGallery({ project }: { project: Project }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [
    { src: project.threeImages1Url, alt: "Luxury interior design gallery Amara project detail" },
    { src: project.threeImages2Url, alt: "Bespoke materials and finishes Amara Interior Design" },
    { src: project.threeImages3Url, alt: "Residential interior design detail Amara Miami Dubai" },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const containerWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;

    // Find which item is most centered in the viewport
    let closestIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < container.children.length; i++) {
      const item = container.children[i] as HTMLElement;
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const itemCenter = itemLeft + itemWidth / 2;
      const containerCenter = scrollLeft + containerWidth / 2;
      const distance = Math.abs(itemCenter - containerCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    }

    setCurrentSlide(closestIndex);
  };

  const goToSlide = (index: number) => {
    if (!carouselRef.current) return;

    // Force a reflow to ensure DOM is updated
    carouselRef.current.offsetHeight;

    // Get all carousel items
    const items = carouselRef.current.children;
    if (!items[index]) return;

    const targetItem = items[index] as HTMLElement;
    const containerWidth = carouselRef.current.clientWidth;
    const itemLeft = targetItem.offsetLeft;
    const itemWidth = targetItem.offsetWidth;

    // Calculate scroll position to center the item
    // Center the item in the visible area
    const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;

    carouselRef.current.scrollTo({
      left: Math.max(0, scrollPosition), // Ensure we don't scroll to negative values
      behavior: "smooth",
    });
  };

  const handleImageClick = (index: number) => {
    if (index !== currentSlide) {
      // Update the current slide first
      setCurrentSlide(index);

      // Wait for the DOM to update with new widths, then center
      setTimeout(() => {
        goToSlide(index);
      }, 50);
    }
  };

  useEffect(() => {
    // Start from second item (index 1)
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.scrollWidth / images.length;
      carouselRef.current.scrollTo({
        left: slideWidth,
        behavior: "auto",
      });
    }
  }, [images.length]);

  const animContextRef = useRef<gsap.Context>(null);
  useGSAP(() => {
    animContextRef.current?.revert();

    const images = gsap.utils.toArray<HTMLElement>(".carousel-gallery-anim-img");
    if (!images) return;

    animContextRef.current = gsap.context(() => {
      gsap.set(images, {
        yPercent: -20,
      });

      ScrollTrigger.create({
        trigger: ".carousel-gallery-anim-wrapper",
        start: "top center",
        end: "+=700px",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(images, {
            yPercent: -20 + 15 * progress,
            duration: 0,
          });
        },
      });
    });

    return () => {
      animContextRef.current?.revert();
    };
  });

  return (
    <>
      {/* Desktop/Tablet View */}
      <section className="carousel-gallery-anim-wrapper w-full pb-[196px] max-md:hidden">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between overflow-hidden px-[24px]">
          <div className="aspect-[0.76] w-[calc(33%-5px)] overflow-hidden">
            <Image
              width={600}
              height={1000}
              className="carousel-gallery-anim-img h-[120%] w-full object-cover"
              src={project.threeImages1Url}
              alt="Luxury interior design gallery Amara project detail"
            />
          </div>

          <div className="aspect-[0.65] w-[calc(33%-5px)] overflow-hidden">
            <Image
              width={600}
              height={1000}
              className="carousel-gallery-anim-img h-[120%] w-full object-cover"
              src={project.threeImages2Url}
              alt="Bespoke materials and finishes Amara Interior Design"
            />
          </div>

          <div className="aspect-[0.7] w-[calc(33%-5px)] overflow-hidden">
            <Image
              width={600}
              height={1000}
              className="carousel-gallery-anim-img h-[120%] w-full object-cover"
              src={project.threeImages3Url}
              alt="Residential interior design detail Amara Miami Dubai"
            />
          </div>
        </div>
      </section>

      {/* Mobile Carousel */}
      <section className="w-full pb-[144px] md:hidden">
        <div className="flex justify-center">
          <div
            ref={carouselRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-[10px] overflow-x-auto px-[60px]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onScroll={handleScroll}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`flex flex-shrink-0 snap-center items-center justify-center transition-all duration-300 ease-in-out ${
                  currentSlide === index ? "w-[85vw]" : "w-[80vw]"
                }`}
                onClick={() => handleImageClick(index)}
              >
                <div
                  className={`relative aspect-[0.95] w-full cursor-pointer overflow-hidden transition-all duration-300 ease-in-out ${
                    currentSlide === index ? "" : "shadow-lg"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={1400}
                    className="carousel-gallery-anim-img h-[120%] w-full object-cover"
                  />
                  {currentSlide !== index && (
                    <div className="absolute inset-0 bg-[#F6EFE566] transition-opacity duration-300 ease-in-out"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
