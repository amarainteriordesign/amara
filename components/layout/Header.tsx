"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";

import Menu from "@/components/layout/Menu";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const isInitialLoad = true;

export default function Header() {
  const lenis = useLenis();
  const router = useRouter();

  const headerRef = useRef<HTMLElement>(null);
  const plusIconRef = useRef<SVGPathElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);

  const [now, setNow] = useState<Date | null>(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const mobileMenuTl = useRef<gsap.core.Timeline>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clickOutsideMobileMenuListener = useRef<(event: PointerEvent) => void>(null);
  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  function onLogoClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    if (window.location.pathname !== "/") {
      router.push("/");
    } else {
      lenis?.scrollTo(0, { duration: 0.5, easing: (t) => t });
    }
  }

  useEffect(() => {
    setNow(new Date());
    const intervalId = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(intervalId);
  }, []);

  // Scroll to top effect
  useEffect(() => {
    if (lenis && !window.location.hash.includes("#contact")) {
      lenis?.scrollTo(0, { duration: 0, easing: (t) => t });
    }
  }, [lenis]);

  // Header color change on scroll past hero
  useGSAP(() => {
    const heroSection = document.querySelector("section");
    if (!heroSection) return;

    const setWhite = () => {
      gsap.to(".logo", { color: "#BCB19B", duration: 0.3 });
      gsap.to(".header-logo", { color: "#FFF", duration: 0.3 });
      gsap.to(".header-logo-text", { color: "#bcb19b", duration: 0.3 });
      if (plusIconRef.current) {
        gsap.to(plusIconRef.current, { fill: "#FFF", fillOpacity: 0.85, duration: 0.3 });
      }
      if (gradientRef.current) {
        gsap.to(gradientRef.current, { opacity: 1, duration: 0.3 });
      }
    };

    const setDark = () => {
      gsap.to(".logo", { color: "#262626", duration: 0.3 });
      gsap.to(".header-logo", { color: "#262626", duration: 0.3 });
      gsap.to(".header-logo-text", { color: "#262626", duration: 0.3 });
      if (plusIconRef.current) {
        gsap.to(plusIconRef.current, { fill: "#262626", fillOpacity: 1, duration: 0.3 });
      }
      if (gradientRef.current) {
        gsap.to(gradientRef.current, { opacity: 0, duration: 0.3 });
      }
    };

    const heroBottom = heroSection.getBoundingClientRect().bottom;
    if (heroBottom <= 0) {
      gsap.set(".header-logo", { color: "#262626" });
      gsap.set(".header-logo-text", { color: "#262626" });
      gsap.set(".logo", { color: "#262626" });
      if (plusIconRef.current) {
        gsap.set(plusIconRef.current, { fill: "#262626", fillOpacity: 1 });
      }
      if (gradientRef.current) {
        gsap.set(gradientRef.current, { opacity: 0 });
      }
    } else {
      gsap.set(".logo", { color: "#BCB19B" });
      gsap.set(".header-logo", { color: "#FFF" });
      gsap.set(".header-logo-text", { color: "#BCB19B" });
      if (plusIconRef.current) {
        gsap.set(plusIconRef.current, { fill: "#FFF", fillOpacity: 0.85 });
      }
      if (gradientRef.current) {
        gsap.set(gradientRef.current, { opacity: 1 });
      }
    }

    ScrollTrigger.create({
      trigger: heroSection,
      start: "bottom top",
      onEnter: setDark,
      onLeaveBack: setWhite,
    });
  }, []);

  // Timelines initialization
  useGSAP(() => {
    gsap.set(".mobile-menu-anim", { yPercent: -100, display: "block" });

    mobileMenuTl.current = gsap
      .timeline({
        paused: true,
      })
      .to(".mobile-menu-anim", {
        yPercent: 0,
        duration: 0.7,
        ease: "power3.out",
      });
  }, [lenis]);

  // Preloader Animation Effect
  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
      onComplete: () => {
        setShowPreloader(false);
      },
    });

    if (showPreloader) {
      tl.to(".spinner-container", {
        opacity: 0,
        duration: 0.5,
      });

      tl.to(".divider", {
        scaleY: "100%",
        duration: 1,
        onComplete: () => {
          gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 });
        },
      });

      tl.to(
        ".loader .block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.3,
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
          },
        },
        "<",
      );
    }
  }, [showPreloader]);

  // Mobile Menu Effect
  useEffect(() => {
    if (isMobileMenuOpen) {
      lenis?.stop();
      mobileMenuTl.current?.play();

      const outsideListener = (event: PointerEvent) => {
        if ((event.target as HTMLElement).closest(".mobile-menu-trigger")) return;
        setIsMobileMenuOpen(false);
      };
      window.addEventListener("click", outsideListener);
      clickOutsideMobileMenuListener.current = outsideListener;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
          return;
        }

        if (e.key === "Tab" && menuContainerRef.current) {
          const focusable = menuContainerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length === 0) return;

          const first = focusable[0];
          const last = focusable[focusable.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first || !menuContainerRef.current.contains(document.activeElement)) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last || !menuContainerRef.current.contains(document.activeElement)) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      requestAnimationFrame(() => {
        if (menuContainerRef.current) {
          const focusable = menuContainerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
          );
          if (focusable.length > 0) {
            focusable[0].focus();
          }
        }
      });

      return () => {
        window.removeEventListener("click", outsideListener);
        document.removeEventListener("keydown", handleKeyDown);
      };
    }

    mobileMenuTl.current?.reverse();
    lenis?.start();
    menuTriggerRef.current?.focus();

    if (clickOutsideMobileMenuListener.current) {
      const callbackListener = clickOutsideMobileMenuListener.current;
      window.addEventListener("click", callbackListener);
      clickOutsideMobileMenuListener.current = null;

      return () => {
        window.removeEventListener("click", callbackListener);
        clickOutsideMobileMenuListener.current = null;
      };
    }
  }, [isMobileMenuOpen, lenis, mobileMenuTl]);

  return (
    <>
      <header ref={headerRef} className="fixed top-0 right-0 left-0 z-[20]">
        <div ref={gradientRef} className="pointer-events-none absolute inset-0 h-[80px] bg-gradient-to-b from-black/40 to-transparent" />
        <div className="relative w-full">
          <div className="mx-auto flex w-full max-w-[1440px] items-center py-[18px] pr-[18px] pl-[42px]">
            {/* Logo */}
            <div className="mr-auto flex items-center">
              <Link
                href="/"
                onClick={onLogoClick}
                className="logo font-sans text-[16px] leading-[20px] font-medium tracking-[-0.5px]"
              >
                <span className="header-logo">Amara</span>{" "}
                <span className="header-logo-text">Interior Design Studio</span>
              </Link>
            </div>

            {/* Menu Button (Plus Icon) */}
            <div className="mobile-menu-trigger flex">
              <button ref={menuTriggerRef} onClick={toggleMenu} aria-expanded={isMobileMenuOpen} aria-label="Menu" className="cursor-pointer outline-none">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    ref={plusIconRef}
                    d="M0 12.219C0 12.9389 0.607588 13.5266 1.31891 13.5266H10.9069V23.0326C10.9069 23.738 11.4997 24.3404 12.2259 24.3404C12.952 24.3404 13.5596 23.738 13.5596 23.0326V13.5266H23.1327C23.8441 13.5266 24.4517 12.9389 24.4517 12.219C24.4517 11.4991 23.8441 10.8967 23.1327 10.8967H13.5596V1.40529C13.5596 0.700051 12.952 0.0976562 12.2259 0.0976562C11.4997 0.0976562 10.9069 0.700051 10.9069 1.40529V10.8967H1.31891C0.607588 10.8967 0 11.4991 0 12.219Z"
                    fill="white"
                    fillOpacity="0.85"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div ref={menuContainerRef} className="mobile-menu-anim fixed top-0 left-0 z-[30] hidden w-full bg-black/30 shadow-lg shadow-black/20 backdrop-blur-sm">
        <Menu now={now} />
      </div>

      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="divider"></div>
          <div className="spinner-container">
            <svg
              width="198"
              height="140"
              viewBox="0 0 307 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M99 115.553H153.297L197.032 115V157.592H208V217H163.046V158.367H156.005H148.964L148.422 217H99V115.553Z"
                fill="black"
              />
              <path
                d="M0 0H43.836H88V89.9237V217H51.7068V144.351H43.836H39.9006V217H0V0Z"
                fill="black"
              />
              <path
                d="M219 0H262.836H307V42.2683V102H270.707V67.8517H262.836H258.901V102H219V0Z"
                fill="black"
              />
              <path
                d="M219 115H262.836H307V157.268V217H270.707V182.852H262.836H258.901V217H219V115Z"
                fill="black"
              />
              <path
                d="M109.833 0H197.614L208 102H175.278L177.958 42.8889H164.78L168.577 102H138.87L141.662 43H129.377L131.499 102H99L107.711 21.5556L109.833 0Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
