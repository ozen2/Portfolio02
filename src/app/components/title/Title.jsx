"use client";

import { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";

const Title = forwardRef(() => {
  const wordRefs = useRef([]);

  const words = [
    "夢",
    "Traum",
    "Sogno",
    "Sueño",
    "Dream",
    "Rêve",
    "夢",
    "Traum",
    "Sogno",
    "Sueño",
    "Dream",
    "Rêve",
    "Yume",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    const initialDuration = 0.05;
    const slowdownStart = Math.floor(words.length / 2);
    const maxSlowdownDuration = 0.2;

    words.forEach((word, index) => {
      const isAfterMiddle = index >= slowdownStart;
      const progress = isAfterMiddle
        ? (index - slowdownStart) / (words.length - slowdownStart)
        : 0;

      const duration =
        initialDuration + progress * (maxSlowdownDuration - initialDuration);

      if (word === "Yume") {
        tl.fromTo(
          wordRefs.current[index],
          { y: "100%" },
          { y: "0%", duration: 0.5, ease: "power2.inOut" }
        ).to(wordRefs.current[index], {
          y: "0%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        tl.fromTo(
          wordRefs.current[index],
          { y: "100%" },
          { y: "0%", duration: duration },
          `+=${0.01 * index}`
        ).to(wordRefs.current[index], { y: "-100%", duration: duration });
      }
    });
  }, []);

  return (
    <div className="overflow-hidden h-[350px] w-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      {words.map((word, index) => (
        <h1
          key={index}
          ref={(el) => (wordRefs.current[index] = el)}
          className="absolute font-semibold text-[18rem] text-(--secondary-color) translate-y-[100%]"
        >
          {word}
        </h1>
      ))}
    </div>
  );
});

export default Title;
