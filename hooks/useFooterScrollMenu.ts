import { useEffect, useRef } from "react";

interface ScrollMenuOptions {
  onFooterOpen: () => void;
  onFooterClose: () => void;
}

export function useFooterScrollMenu({ onFooterOpen, onFooterClose }: ScrollMenuOptions) {
  const lockRef = useRef(false);
  const footerPinned = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    function handleWheel(e: WheelEvent) {
      processScroll(e.deltaY, e);
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
    }

    function handleTouchMove(e: TouchEvent) {
      const deltaY = touchStartY.current - e.touches[0].clientY;
      processScroll(deltaY, e);
    }

    function processScroll(deltaY: number, e: Event) {
      if (lockRef.current) {
        const scrollingUp = deltaY < 0;
        if (scrollingUp) {
          footerPinned.current = false;
          onFooterClose();
          lockRef.current = false;
        }
      }

      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 1;
      const strongScroll = Math.abs(deltaY) > 40;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      // --- OPEN ---
      if (atBottom && scrollingDown && strongScroll && !footerPinned.current) {
        e.preventDefault?.();
        footerPinned.current = true;
        lockRef.current = true;
        onFooterOpen();
        return;
      }

      // --- CLOSE ---
      if (footerPinned.current && scrollingUp) {
        footerPinned.current = false;
        lockRef.current = false;
        onFooterClose();
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [onFooterOpen, onFooterClose]);

  function unlockScroll() {
    lockRef.current = false;
  }

  return { unlockScroll, pinned: footerPinned };
}
