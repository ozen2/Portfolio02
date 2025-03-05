"use client";

import { useState } from "react";

import Link from "next/link";

import useScrollPosition from "../../services/useScrollPosition";

export default function Nav() {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const handleClick = () => {
    setButtonIsClicked(!buttonIsClicked);
  };

  const isNavVisible = buttonIsClicked
    ? "translate-x-0 ease-in-out duration-500"
    : "translate-x-[40vw] ease-in-out duration-500";

  const scrollPosition = useScrollPosition();

  const buttonPosition =
    scrollPosition > 400 ? "translate-x-0" : "translate-x-[150vw]";

  return (
    <>
      <nav className="w-1/3 justify-self-end">
        <ul className="flex justify-between items-center ClashDisplay-normal text-xl">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/projets">Projets</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={handleClick}
        className={`${buttonPosition} ${
          buttonIsClicked ? "bg-(--hover-color)" : "bg-(--primary-color)"
        } ease-in-out duration-500 z-50 w-[6rem] h-[6rem] rounded-full fixed top-10 right-10 flex items-center justify-center buttonHover overflow-hidden group`}
      >
        <div className="relative z-50 flex flex-col items-center justify-center">
          <span
            className={`w-10 bg-(--secondary-color) h-0.5 transition-all ease-in-out duration-300 absolute ${
              buttonIsClicked ? "-rotate-45 mb-0" : "mb-2"
            }`}
          ></span>
          <span
            className={`w-10 h-0.5 bg-(--secondary-color) transition-all ease-in-out duration-300 absolute ${
              buttonIsClicked ? "rotate-45 mt-0" : "mt-2"
            }`}
          ></span>
        </div>
        <span className="absolute inset-0 bg-(--hover-color) transition-transform duration-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 rounded-full"></span>
      </button>
      <nav
        className={`${isNavVisible} w-1/3 justify-self-end fixed right-0 top-0 bg-(--primary-color) h-screen flex flex-col justify-center`}
      >
        <ul className="flex flex-col justify-between gap-14 items-center Switzer-normal text-6xl text-(--secondary-color)">
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/projets">Projets</Link>
          </li>
          <li>
            <Link href="/about">À propos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
