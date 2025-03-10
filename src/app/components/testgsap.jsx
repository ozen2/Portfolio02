"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function ParallaxEffect() {
  useEffect(() => {
    // Effet de parallaxe léger sur un élément
    gsap.to(".parallax-element", {
      y: "50px",
      scrollTrigger: {
        trigger: ".parallax-element",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Interaction souris - Changement de taille au survol de la souris
    const element = document.querySelector(".hover-element");
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { scale: 1.2, duration: 0.3 });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, { scale: 1, duration: 0.3 });
    });

    // Sticky effect à la souris
    const expandElement = document.querySelector(".expand-element");
    let initialPosition = { x: 0, y: 0 };

    const onMouseMove = (e) => {
      // Position de l'élément initial
      const rect = expandElement.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Calcul de la distance entre la souris et l'élément
      const distance = Math.sqrt(Math.pow(mouseX, 2) + Math.pow(mouseY, 2));

      // Si la souris est proche de l'élément, le garder sticky
      if (distance < 150) {
        gsap.to(expandElement, {
          x: mouseX / 2, // Déplacement de l'élément avec la souris
          y: mouseY / 2,
          duration: 0.5,
        });
      } else {
        // Sinon, revenir à la position initiale
        gsap.to(expandElement, {
          x: 0,
          y: 0,
          duration: 0.1, // Durée du retour à la position initiale
          ease: "power2.out",
        });
      }
    };

    expandElement.addEventListener("mousemove", onMouseMove);
    expandElement.addEventListener("mouseleave", () => {
      // Revenir à la position initiale lorsque la souris quitte l'élément
      gsap.to(expandElement, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    // Nettoyage des événements
    return () => {
      expandElement.removeEventListener("mousemove", onMouseMove);
      expandElement.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div>
      <div className="parallax-element">
        <h2>Effet de parallaxe sur cet élément</h2>
      </div>

      <div className="hover-element">
        <h3>Survolez-moi pour agrandir !</h3>
      </div>

      <div className="w-20 h-20 bg-black expand-element"></div>
    </div>
  );
}
