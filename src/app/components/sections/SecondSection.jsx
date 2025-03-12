"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../buttons/Button";
import HorizontalScroll from "../horizontalScroll/HorizontalScroll";

gsap.registerPlugin(ScrollTrigger);

export default function SecondSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: "100vh" },
      {
        y: "0vh",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="absolute top-0 left-0 w-full h-[300rem] bg-(--secondary-color) flex flex-col z-30 px-32"
    >
      <p className="text-[7rem] Switzer-semibold mt-20">Dans un monde où</p>
      <p className="text-[7rem] Switzer-semibold self-end">l'attention</p>
      <p className="text-[7rem] Switzer-semibold">est éphémère,</p>
      <p className="text-[7rem] Switzer-semibold self-end">mon objectif est</p>
      <p className="text-[7rem] Switzer-semibold">
        d'aider les entreprises à capter,
      </p>
      <p className="text-[7rem] Switzer-semibold">engager</p>
      <p className="text-[7rem] Switzer-semibold">et marquer les esprits</p>
      <p className="text-[7rem] Switzer-semibold self-end">durablement</p>
      <p className="text-[7rem] Switzer-semibold">
        grâce à des stratégies digitales sur mesure.
      </p>
    </section>
  );
}
