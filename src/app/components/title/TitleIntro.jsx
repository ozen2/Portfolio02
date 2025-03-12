"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function TitleIntro() {
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

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [intervalTime, setIntervalTime] = useState(50);
  const textRef = useRef(null);

  useEffect(() => {
    if (currentWordIndex >= words.length - 1) {
      setTimeout(() => {
        gsap.to(textRef.current, {
          y: "100%",
          duration: 0.7,
          ease: "power2.inOut",
        });
      }, 1500);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
      setIntervalTime((prev) => prev * 1.3);
    }, intervalTime);

    return () => clearTimeout(timeout);
  }, [currentWordIndex, intervalTime]);

  return (
    <div className="flex items-center justify-center h-[210px] w-screen overflow-hidden relative">
      <h1
        ref={textRef}
        className="font-semibold text-[12rem] text-(--secondary-color) ClashDisplay-semibold"
      >
        {words[currentWordIndex]}
      </h1>
    </div>
  );
}
