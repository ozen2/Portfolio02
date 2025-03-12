"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function horizontalScroll() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(container, {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "+=2000",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-5 whitespace-nowrap"
    >
      <p className="Switzer-normal text-[5rem]">Développeur web</p>
      <p className="text-[5rem] font-normal">-</p>
      <p className="ClashDisplay-normal text-[5rem]">Full stack</p>
      <p className="text-[5rem] font-normal">-</p>
      <p className="Switzer-normal text-[5rem]">Développeur web</p>
      <p className="text-[5rem] font-normal">-</p>
      <p className="ClashDisplay-normal text-[5rem]">Full stack</p>
      <p className="text-[5rem] font-bold">-</p>
      <p className="Switzer-normal text-[5rem]">Développeur web</p>
      <p className="text-[5rem] font-normal">-</p>
      <p className="ClashDisplay-normal text-[5rem]">Full stack</p>
    </div>
  );
}
