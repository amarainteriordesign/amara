import { useEffect, useRef } from "react";

interface ScrollMenuOptions {
  onHeaderOpen: () => void;
  onHeaderClose: () => void;
}

export default function useHeaderScrollMenu({ onHeaderOpen, onHeaderClose }: ScrollMenuOptions) {
  const lockRef = useRef(false);
  const lastScrollY = useRef(0);
  const headerPinned = useRef(false);

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      if (lockRef.current) {
        const scrollingDown = e.deltaY > 0;
        if (scrollingDown) {
          headerPinned.current = false;
          onHeaderClose();
          lockRef.current = false;
        }
        return;
      }

      const atTop = window.scrollY === 0;
      const strongScroll = Math.abs(e.deltaY) > 20;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // --- OPEN LOGIC ---
      if (atTop && scrollingUp && strongScroll && !headerPinned.current) {
        e.preventDefault();
        lockRef.current = true;
        headerPinned.current = true;
        onHeaderOpen();
        return;
      }

      // --- CLOSE LOGIC (direction change) ---
      if (headerPinned.current && scrollingDown) {
        headerPinned.current = false;
        onHeaderClose();
      }

      lastScrollY.current = window.scrollY;
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [onHeaderOpen, onHeaderClose]);

  function unlockScroll() {
    lockRef.current = false;
  }

  return { unlockScroll, pinned: headerPinned };
}
