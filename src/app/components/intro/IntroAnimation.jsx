"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TitleIntro from "../title/TitleIntro";

export default function IntroAnimation() {
  const introRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    tl.to(introRef.current, { opacity: 1, duration: 0.5 })
      .to(titleRef.current, { opacity: 1, duration: 1 }, "+=0.5")
      .to(
        introRef.current,
        {
          y: "-100%",
          borderRadius: "100%",
          duration: 1,
        },
        "+=4"
      )
      .set(introRef.current, { display: "none" });
  }, []);

  return (
    <div
      ref={introRef}
      className="fixed left-1/2 transform -translate-x-1/2 w-[200vw] inset-0 bg-(--primary-color) flex items-center justify-center z-50"
    >
      <TitleIntro />
    </div>
  );
}
