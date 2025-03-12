"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TitleHero() {
  const h2ref1 = useRef(null);
  const h2ref2 = useRef(null);
  const pref1 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation pour le premier élément avec un délai initial de 9 secondes
    tl.fromTo(
      h2ref1.current,
      { y: "100%" },
      {
        y: "0%",
        duration: 0.5,
        ease: "power3.out",
      },
      "+=7"
    )
      // Ajoute un délai de 2ms pour la deuxième animation
      .fromTo(
        h2ref2.current,
        { y: "100%" },
        {
          y: "0%",
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.002" // 2 ms
      )

      .fromTo(
        pref1.current,
        { y: "100%" },
        {
          y: "0%",
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.002"
      );
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between overflow-hidden h-[350px]">
        <h2
          ref={h2ref1}
          className="text-(--primary-color) text-[18rem] Switzer-semibold"
        >
          YU
        </h2>
        <h2
          ref={h2ref2}
          className="text-(--primary-color) text-[18rem] Switzer-semibold"
        >
          ME
        </h2>
      </div>
      <div className="self-start pl-16 h-[30px] overflow-hidden">
        <p ref={pref1} className="Switzer-light text-3xl">
          web.
        </p>
      </div>
    </div>
  );
}
