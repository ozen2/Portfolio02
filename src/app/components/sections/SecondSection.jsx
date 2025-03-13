"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../buttons/Button";
import Bento from "../bento/Bento";

import stars from "../../../../public/images/stars.png";

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
    <article
      ref={sectionRef}
      className="absolute top-0 w-full h-[300rem] left-0 bg-(--secondary-color) z-30 flex flex-col"
    >
      <div className="ml-10 mt-10 gap-4 flex items-center">
        <p className="ClashDisplay-normal text-2xl">À propos de moi</p>
        <Image
          src={stars}
          alt="stars"
          width={50}
          height={50}
          unoptimized={true}
          className="w-5"
        />
      </div>
      <section className="flex flex-col mx-32">
        <p className="text-[7rem] Switzer-semibold mt-10">Dans un monde où</p>
        <p className="text-[7rem] Switzer-semibold self-end">l'attention</p>
        <p className="text-[7rem] Switzer-semibold">est éphémère,</p>
        <p className="text-[7rem] Switzer-semibold self-end">
          mon objectif est
        </p>
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
      <Bento />
    </article>
  );
}
