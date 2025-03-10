"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Title from "../title/Title";

export default function IntroAnimation() {
  const introRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(introRef.current, { opacity: 1, duration: 0.5 }) // Apparition de l'écran blanc
      .to(
        titleRef.current,
        { opacity: 1, duration: 1 }, // Animation de l'opacité pour l'apparition de YU et ME
        "+=0.5"
      )
      .to(introRef.current, { y: "-100%", duration: 1 }, "+=0.8") // Délai avant le slide up
      .set(introRef.current, { display: "none" }); // Cache l'écran d'intro
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed inset-0 bg-(--primary-color) flex items-center justify-center z-50"
    ></div>
  );
}
