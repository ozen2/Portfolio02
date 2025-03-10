"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../buttons/Button";

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
      className="absolute top-0 left-0 w-full h-screen bg-(--secondary-color) flex justify-between pt-20 z-30"
    >
      <p className="text-[2rem] ml-32 Switzer-light pr-20">
        Dans un monde où l'attention est éphémère, mon objectif est d'aider les
        marques à capter, engager et marquer les esprits durablement grâce à des
        stratégies digitales sur mesure.
      </p>
      <div className="flex mr-32 flex-col pl-20 gap-20">
        <p className="text-xl Switzer-light">
          L'alliance de mon amour pour le design, la programmation et
          l'interaction me permet d'apporter une approche unique et innovante au
          web.
        </p>
        <Button
          content="À propos de moi"
          width="w-[17rem]"
          height="h-[8rem]"
          href="/about"
        />
      </div>
    </section>
  );
}
