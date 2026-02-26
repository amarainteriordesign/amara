"use client";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useFooterScrollMenu } from "@/hooks/useFooterScrollMenu";
import { useWindowSize } from "@/hooks/useWindowSize";
import { formatTimeForOffset } from "@/helpers/time";
import Menu from "@/components/layout/Menu";
import SoundIcon from "@/components/icons/sound.svg";

type ImageFooterProps = {
  image: string;
};

export default function ImageFooter({
  image,
}: ImageFooterProps) {
  const [now, setNow] = useState<Date>(new Date());
  const lenis = useLenis();
  const screenSize = useWindowSize();
  const router = useRouter();
  const footerRef = useRef<HTMLElement>(null);

  const menuTl = useRef<gsap.core.Timeline>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pinned: menuPinned } = useFooterScrollMenu({
    onFooterOpen: () => {
      setIsMenuOpen(true);
      lenis?.stop();
    },
    onFooterClose: () => setIsMenuOpen(false),
  });

  const hideHeaderTl = useRef<gsap.core.Timeline>(null);

  // Init timeline
  useGSAP(() => {
    if (lenis) {
      gsap.set(".footer-container", { yPercent: 120 });

      menuTl.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          lenis?.start();
        },
      });
      menuTl.current.to(".footer-container", { yPercent: 0, duration: 1, ease: "power3.out" });

      hideHeaderTl.current = gsap.timeline({
        paused: true,
      });
      hideHeaderTl.current.to("header", {
        yPercent: -100,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, [lenis]);

  // Interval Effect
  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(intervalId);
  }, []);

  // Play menu
  useEffect(() => {
    if (isMenuOpen) {
      menuTl.current?.play();
      hideHeaderTl.current?.play();
    } else {
      menuTl.current?.reverse();
      hideHeaderTl.current?.reverse();
    }
  }, [isMenuOpen, menuTl, hideHeaderTl]);

  function onLogoClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    lenis?.start();
    setIsMenuOpen(false);
    menuPinned.current = false;
    lenis?.scrollTo(0, { duration: 0.5, easing: (t) => t });
    router.push("/");
  }

  function onContactButtonClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    lenis?.start();
    setIsMenuOpen(false);
    menuPinned.current = false;
    router.push("/about-us#contact");
  }

  function scrollToBottom() {
    setIsMenuOpen(true);
    menuPinned.current = true;
    lenis?.stop();
  }

  function scrollToTop() {
    lenis?.scrollTo(0, {
      duration: 1,
      easing: (t) => t,
    });
    setIsMenuOpen(false);
    menuPinned.current = false;
  }

  function onMenuContainerClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    const left = (screenSize?.width > 1440 ? (screenSize?.width - 1440) / 2 : 0) + 43;

    const topFooterPosition = footerRef.current?.getBoundingClientRect().top || 0;

    if (event.clientY - topFooterPosition >= 273 && event.clientY - topFooterPosition <= 490) {
      if (event.clientX >= left && event.clientX <= left + 307) {
        menuPinned.current = false;
        setIsMenuOpen(false);
        lenis?.start();
        event.preventDefault();
        lenis?.scrollTo(0, { duration: 1, easing: (t) => t });
        router.push("/");
      }
    }
  }

  return (
    <>
      <div
        className={`footer-image-ref relative z-[12] flex min-h-screen w-full flex-col items-center ${!isMenuOpen ? "justify-end" : "justify-start"}`}
      >
        {isMenuOpen && (
          <button
            onClick={scrollToTop}
            className="text-normal cursor-pointer pt-[98px] font-sans text-[15px] leading-[26px] tracking-[-0.4] text-[#F6EFE5] underline max-sm:text-[14px]"
          >
            Scroll up
          </button>
        )}

        <Image
          className="absolute top-0 left-0 z-[-1] h-full w-full object-cover"
          src={image}
          width={1920}
          height={1080}
          alt="Footer background Image"
          sizes="100vw"
        />

        {!isMenuOpen && (
          <button
            onClick={scrollToBottom}
            className="text-normal cursor-pointer pb-[28px] font-sans text-[15px] leading-[26px] tracking-[-0.4px] text-[#F6EFE5] underline max-sm:text-[14px]"
          >
            Scroll down
          </button>
        )}
      </div>

      <footer
        ref={footerRef}
        onClick={onMenuContainerClick}
        className="footer-container fixed bottom-0 z-[20] flex w-full items-end gap-[443px] overflow-hidden"
      >
        <div className="max-xmd:hidden relative flex h-[528px] w-full items-end justify-center">
          <div className="max-xmd:pt-[62px] absolute top-0 z-[2] mx-auto flex w-full max-w-[1440px] items-center py-[18px] pr-[18px] pl-[42px]">
            {/* Logo */}
            <div className="max-xmd:mr-auto flex items-center">
              <Link
                href="/"
                onClick={onLogoClick}
                className="font-sans text-[16px] leading-[20px] font-medium tracking-[-0.5px] text-[#262626]"
              >
                <span className="text-[#737373]">Amara</span> Interior Design Studio
              </Link>
            </div>

            {/* nav links */}
            <div className="mr-[237px] ml-auto flex max-h-[30px] items-center gap-[34px] overflow-hidden">
              <Link
                href="/projects"
                className="font-sans text-[15px] leading-[26px] font-normal tracking-[-0.4px] text-[#262626] underline"
              >
                Projects
              </Link>

              <Link
                href="/about-us"
                className="font-sans text-[15px] leading-[26px] tracking-[-0.4px] text-[#262626] underline"
              >
                About Us
              </Link>

              <Link
                href="/design"
                className="font-sans text-[15px] leading-[26px] tracking-[-0.4px] text-[#262626] underline"
              >
                Philosophy
              </Link>

              <Link
                href="/news"
                className="overflow-hidden font-sans text-[15px] leading-[26px] tracking-[-0.4px] text-[#262626] underline"
              >
                <span>News</span>
              </Link>
            </div>

            {/* Contact Button */}
            <div className="max-xmd:hidden flex items-center">
              <button
                onClick={onContactButtonClick}
                className={
                  "border-[#111]/70 bg-transparent text-[#F6EFE5]" +
                  " font-regular flex h-[38px] w-[96px] cursor-pointer items-center rounded-[20px] border bg-[#FFFFFF66] px-[18px] text-[16px] leading-[26px] font-bold transition-colors hover:bg-gray-200/70 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
                }
              >
                Contact
              </button>
            </div>
          </div>

          <svg
            className="absolute top-0 left-0 z-[-1] h-full w-full"
            width={screenSize?.width || 1440}
            height="528"
            viewBox={`0 0 ${screenSize?.width || 1440} 528`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <mask id="menu-mask-footer" maskUnits="userSpaceOnUse">
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
              mask="url(#menu-mask-footer)"
            />
          </svg>

          <div className="mx-auto w-full max-w-[1440px]">
            <div className="mr-[240px] ml-auto flex w-full max-w-[380px] flex-col items-start pb-[35px]">
              <div className="relative flex w-full items-center pb-[20px]">
                <SoundIcon width={28} height={30} color="#262626" />
                <SoundIcon width={28} height={30} color="#262626" className="ml-[-4.5755px]" />
              </div>
              <p className="w-full pb-[40px] font-sans text-[20px] leading-[20px] font-medium tracking-[-3%] text-[#262626]">
                An immersive journey inspired by the story of the four{" "}
                <span className="text-[#737373]">elements</span>{" "}
              </p>

              <div className="flex w-full max-w-[340px] items-center justify-between">
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
                  <div className="flex items-baseline gap-[8px]" key={item.title}>
                    <p className="font-sans text-[14px] leading-[20px] font-normal tracking-[-0.4px] text-[#737373]">
                      {formatTimeForOffset(now, item.offset)}
                    </p>
                    <p className="font-sans text-[14px] leading-[20px] font-medium tracking-[-0.6px] text-[#262626]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-xmd:flex hidden w-full">
          <Menu now={now} />
        </div>
      </footer>
    </>
  );
}
