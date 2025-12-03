import { useEffect, useRef } from "react";

interface ScrollMenuOptions {
  onHeaderOpen: () => void;
  onHeaderClose: () => void;
  onFooterOpen: () => void;
  onFooterClose: () => void;
}

export function useScrollMenu({
  onHeaderOpen,
  onHeaderClose,
  onFooterOpen,
  onFooterClose,
}: ScrollMenuOptions) {
  const lockRef = useRef(false);
  const lastScrollY = useRef(0);
  const headerPinned = useRef(false);
  const footerPinned = useRef(false);

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      if (lockRef.current) return;

      const atTop = window.scrollY === 0;
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 1;
      const strongScroll = Math.abs(e.deltaY) > 40;

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
      if (atBottom && scrollingDown && strongScroll && !footerPinned.current) {
        e.preventDefault();
        lockRef.current = true;
        footerPinned.current = true;
        onFooterOpen();
        return;
      }

      // --- CLOSE LOGIC (direction change) ---
      if (headerPinned.current && scrollingDown) {
        headerPinned.current = false;
        onHeaderClose();
      }
      if (footerPinned.current && scrollingUp) {
        footerPinned.current = false;
        onFooterClose();
      }

      lastScrollY.current = window.scrollY;
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [onHeaderOpen, onHeaderClose, onFooterOpen, onFooterClose]);

  function unlockScroll() {
    lockRef.current = false;
  }

  return { unlockScroll };
}
