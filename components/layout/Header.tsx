"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";

import SoundIcon from "@/components/icons/sound.svg";
import PauseIcon from "@/components/icons/pause.svg";
import { formatTimeForOffset } from "@/helpers/time";
import Menu from "@/components/layout/Menu";
import CustomEase from "gsap/CustomEase";
import useHeaderScrollMenu from "@/hooks/useHeaderScrollMenu";
import { useWindowSize } from "@/hooks/useWindowSize";

gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

const isInitialLoad = true;

export default function Header({ isDark = false }: { isDark?: boolean }) {
  const lenis = useLenis();
  const screenSize = useWindowSize();
  const router = useRouter();

  const headerRef = useRef<HTMLElement>(null);

  const [now, setNow] = useState<Date>(new Date());
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const mobileMenuTl = useRef<gsap.core.Timeline>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const clickOutsideMobileMenuListener = useRef<(event: PointerEvent) => void>(null);
  const openMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(true);
  }, []);

  const menuTl = useRef<gsap.core.Timeline>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pinned: menuPinned } = useHeaderScrollMenu({
    onHeaderOpen: () => {
      if (window.innerWidth >= 1280) {
        setIsMenuOpen(true);
        lenis?.stop();
      }
    },
    onHeaderClose: () => {
      setIsMenuOpen(false);
    },
  });

  function onLogoClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    if (isMenuOpen) {
      lenis?.start();
      setIsMenuOpen(false);
      menuPinned.current = false;
    }
    if (window.location.pathname !== "/") {
      router.push("/");
    } else {
      lenis?.scrollTo(0, { duration: 0.5, easing: (t) => t });
    }
  }

  function onContactButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();

    if (isMenuOpen) {
      lenis?.start();
      setIsMenuOpen(false);
      menuPinned.current = false;
      router.push("/studio#contact");
    } else {
      lenis?.scrollTo(0, {
        duration: 0.5,
        easing: (t) => t,
        onComplete: () => {
          lenis?.stop();
          setIsMenuOpen(true);
          menuPinned.current = true;
        },
      });
    }
  }

  function onMenuContainerClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    const left = (screenSize?.width > 1440 ? (screenSize?.width - 1440) / 2 : 0) + 43;
    if (event.clientY > 273 && event.clientY < 490) {
      if (event.clientX > left && event.clientY < left + 307) {
        event.preventDefault();
        lenis?.start();
        setIsMenuOpen(false);
        menuPinned.current = false;

        if (window.location.pathname !== "/") {
          router.push("/");
        }
      }
    }
  }

  const handleAudioToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();

    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  // Interval Effect
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(intervalId);
  }, []);

  // Scroll to top effect
  useEffect(() => {
    if (lenis && !window.location.hash.includes("#contact")) {
      lenis?.scrollTo(0, { duration: 0, easing: (t) => t });
    }
  }, [lenis]);

  // Timelines initialization
  useGSAP(() => {
    // Mobile Menu Timeline Animation Init
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

    const menu = document.querySelector(".menu") as HTMLElement;
    const menuLinks = document.querySelectorAll(".menu-link");
    gsap.set(menu, { display: "flex", yPercent: -100 });
    gsap.set(menuLinks, { display: "inline", yPercent: 120 });

    if (!lenis) return;

    menuTl.current = gsap
      .timeline({
        paused: true,
        onComplete: () => {},
        onReverseComplete: () => {
          lenis?.start();
        },
      })
      .to(
        menu,
        {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
        },
        0,
      )
      .to(
        menuLinks,
        {
          yPercent: 0,
          duration: 0.7,
        },
        0,
      )
      .to(
        ".header-contact-us-btn",
        {
          opacity: 0,
          duration: 0.5,
        },
        0,
      );
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

      return () => {
        window.removeEventListener("click", outsideListener);
      };
    }

    // Hide Menu
    mobileMenuTl.current?.reverse();
    lenis?.start();

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

  // Menu Effect
  useEffect(() => {
    if (isMenuOpen) {
      menuTl.current?.play();
      return;
    }

    menuTl.current?.reverse();
  }, [isMenuOpen, menuTl]);

  return (
    <>
      <header ref={headerRef} className="fixed top-0 right-0 left-0 z-[20]">
        <div className="relative w-full">
          <div className="max-xmd:pt-[62px] mx-auto flex w-full max-w-[1440px] items-center py-[18px] pr-[18px] pl-[42px]">
            {/* Logo */}
            <div className="max-xmd:mr-auto flex items-center">
              <Link
                href="/"
                onClick={onLogoClick}
                className={
                  (isDark ? "dark" : "") +
                  " logo font-sans text-[16px] leading-[20px] font-medium tracking-[-0.5px] text-[#BCB19B]"
                }
              >
                <span className="header-logo text-[#FFF]">Amara</span>{" "}
                <span className="header-logo-text">Boutique Design Studio</span>
              </Link>
            </div>

            {/* nav links */}
            <div className="max-xmd:hidden mr-[237px] ml-auto flex max-h-[30px] items-center gap-[34px] overflow-hidden">
              <Link
                href="/projects"
                className="menu-link hidden font-sans text-[15px] leading-[26px] font-normal tracking-[-0.4px] text-[#262626] underline"
              >
                Projects
              </Link>

              <Link
                href="/studio"
                className="menu-link hidden font-sans text-[15px] leading-[26px] tracking-[-0.4px] text-[#262626] underline"
              >
                Studio
              </Link>

              <Link
                href="/philosophy"
                className="menu-link hidden font-sans text-[15px] leading-[26px] tracking-[-0.4px] text-[#262626] underline"
              >
                Philosophy
              </Link>

              <Link
                href="/blog"
                className="menu-link hidden overflow-hidden font-sans text-[15px] leading-[26px] tracking-[-0.4px] text-[#262626] underline"
              >
                <span>Blog</span>
              </Link>
            </div>

            {/* Contact Button */}
            <div className="max-xmd:hidden flex items-center">
              <button
                onClick={onContactButtonClick}
                className={
                  "border-[#BDBDBD] text-[#81E1B3]" +
                  " header-contact-us-btn font-regular flex h-[38px] w-[96px] cursor-pointer items-center rounded-[20px] border bg-[#FFFFFF66] px-[18px] text-[16px] leading-[26px] transition-colors hover:bg-gray-200/70 focus:border-none focus:outline-none"
                }
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="max-xmd:flex mobile-menu-trigger hidden">
              <button onClick={openMobileMenu}>
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
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

      {/* MENU BG */}
      <div
        onClick={onMenuContainerClick}
        className="menu fixed top-0 z-[19] flex hidden h-[528px] w-full items-end gap-[443px] overflow-hidden text-white"
      >
        <div className="relative flex h-full w-full items-end justify-center">
          <svg
            className="absolute top-0 left-0 z-[-1] h-full w-full"
            width={screenSize?.width || 1440}
            height="528"
            viewBox={`0 0 ${screenSize?.width || 1440} 528`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="menu-mask" maskUnits="userSpaceOnUse">
                <rect width={screenSize?.width || 1440} height="528" fill="white" />

                <g
                  transform={`translate(${(screenSize?.width > 1440 ? (screenSize?.width - 1440) / 2 : 0) + 43},273)`}
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
                </g>

                <g
                  transform={`translate(${screenSize?.width - 96 - 18 - (screenSize?.width > 1440 ? (screenSize?.width - 1440) / 2 : 0)}, 18)`}
                >
                  <rect width="96" height="38" rx="19" fill="black" fillOpacity="0.6" />
                </g>
              </mask>
            </defs>

            <rect
              width={screenSize?.width || 1440}
              height="528"
              fill="#F1EBDF"
              mask="url(#menu-mask)"
            />
          </svg>

          {/* Contact Button */}
          <div className="absolute top-[18px] left-1/2 z-[2] flex w-full max-w-[1440px] -translate-x-1/2 items-center justify-end pr-[18px]">
            <button
              onClick={onContactButtonClick}
              className={
                "font-regular flex h-[38px] w-[96px] cursor-pointer items-center rounded-[20px] border border-[#111]/70 bg-transparent px-[18px] text-[16px] leading-[26px] font-bold text-[#F6EFE5] transition-colors hover:bg-gray-200/70 focus:border-none focus:outline-none"
              }
            >
              Contact
            </button>
          </div>

          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mr-[240px] ml-auto flex w-fit max-w-[380px] flex-col items-start pb-[35px]">
              <div className="relative flex w-full items-center pb-[20px]">
                <button onClick={handleAudioToggle} className="cursor-pointer">
                  {isMuted ? (
                    <SoundIcon width={28} height={30} color="#262626" />
                  ) : (
                    <PauseIcon width={28} height={30} color="#262626" />
                  )}
                </button>
                <button onClick={handleAudioToggle} className="cursor-pointer">
                  {isMuted ? (
                    <SoundIcon width={28} height={30} color="#262626" className="ml-[-4.5755px]" />
                  ) : (
                    <PauseIcon width={28} height={30} color="#262626" className="ml-[-4.5755px]" />
                  )}
                </button>
              </div>
              <p className="w-full pb-[40px] font-sans text-[20px] leading-[20px] font-medium tracking-[-3%] text-[#262626]">
                An immersive journey inspired by the story of the four{" "}
                <span className="text-[#737373]">elements</span>{" "}
              </p>

              <div className="flex items-center gap-[30px]">
                {[
                  {
                    title: "Dubai",
                    offset: 4,
                  },
                  {
                    title: "Miami",
                    offset: -5,
                  },
                  {
                    title: "Paris",
                    offset: 1,
                  },
                ].map((item) => (
                  <div className="flex items-end gap-[8px]" key={item.title}>
                    <p className="font-sans text-[14px] leading-[20px] font-normal tracking-[-0.4px] text-[#737373]">
                      {formatTimeForOffset(now, item.offset)}
                    </p>
                    <p className="pb-[2px] font-sans text-[14px] leading-[20px] font-medium tracking-[-0.4px] text-[#262626]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-menu-anim fixed top-0 left-0 z-[30] hidden w-full bg-black/30 shadow-lg shadow-black/20 backdrop-blur-sm">
        <Menu now={now} />
      </div>

      <audio ref={audioRef} preload="metadata">
        <source src="/audio/our_design_philosophy_.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

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
