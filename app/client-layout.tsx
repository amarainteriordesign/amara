"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import { LenisRef, ReactLenis } from "lenis/react";
import { LenisOptions } from "lenis";

export default function ClientLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isMobile, setIsMobile] = useState(false);
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    lenisRef?.current?.lenis?.stop();
  }, [lenisRef]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollSettings: LenisOptions = isMobile
    ? ({
        duration: 0.2, // shorter duration = less glide
        easing: (t: number) => t, // linear easing feels more raw
        smooth: true,
        smoothTouch: false, // no extra smoothing on touch
        touchMultiplier: 1.2, // less aggressive than desktop
        lerp: 0.4, // higher lerp = snappier
        wheelMultiplier: 1,
      } as LenisOptions)
    : ({
        duration: 0.6,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        lerp: 0.25,
        wheelMultiplier: 1,
      } as LenisOptions);

  return (
    <ReactLenis root options={scrollSettings} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}
