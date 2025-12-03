"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import locomotiveScroll from "locomotive-scroll";

export default function LocomotiveScrollProvider({ children }) {
  const scrollRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let scroll;

    if (scrollRef.current) {
      scroll = new locomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        multiplier: 1,
        class: "is-revealed",
        scrollbarContainer: null,
      });

      // Update scroll on route change
      setTimeout(() => {
        scroll.update();
      }, 100);
    }

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [pathname]);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}

