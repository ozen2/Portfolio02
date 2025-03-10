"use client";

import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";

const Title = forwardRef(({ props }, ref) => {
  const h1Ref1 = useRef(null);
  const h1Ref2 = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation des lettres
    tl.fromTo(
      [h1Ref1.current, h1Ref2.current],
      { y: "100%" },
      {
        y: "0%",
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    // Animation de l'espacement des lettres (gap)
    tl.to(
      titleRef.current,
      {
        gap: "14rem", // Espacement des lettres
        duration: 1, // Durée de l'animation
      },
      "+=0.8" // Délai avant cette animation
    );

    // Nouvelle timeline pour gérer le zIndex séparément
    const tlZIndex = gsap.timeline();
    tlZIndex.to(
      titleRef.current,
      {
        zIndex: -1, // Changement du z-index // Durée de l'animation
      },
      "+=2.8" // Délai avant cette animation
    );

    const tlColor = gsap.timeline();
    tlColor.to(
      [h1Ref1.current, h1Ref2.current],
      {
        color: "var(--primary-color)", // Changer la couleur du texte en primary-color
        duration: 1, // Durée de l'animation
      },
      "+=2.9" // Délai avant cette animation
    );
  }, []);

  return (
    <>
      <div
        ref={titleRef}
        className="flex overflow-hidden h-[330px] justify-start absolute top-30 left-1/2 transform -translate-x-1/2 z-50"
      >
        <h1
          ref={h1Ref1}
          className="ClashDisplay-semibold relative text-[18.75rem] text-(--secondary-color) translate-y-[100%]"
        >
          YU
        </h1>
        <h1
          ref={h1Ref2}
          className="ClashDisplay-semibold text-[18.75rem] text-(--secondary-color) translate-y-[100%]"
        >
          ME
        </h1>
      </div>
    </>
  );
});

export default Title;
