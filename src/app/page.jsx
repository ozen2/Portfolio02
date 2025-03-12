import Image from "next/image";
import Button from "./components/buttons/Button";
import Nav from "./components/navbar/Nav";

import logo from "../../public/logo/logoYumeBlack.svg";
import portrait from "../../public/images/portraitEnzo.png";
import SecondSection from "./components/sections/SecondSection";
import IntroAnimation from "./components/intro/IntroAnimation";
import HorizontalScroll from "./components/horizontalScroll/HorizontalScroll";
import TitleHero from "./components/title/TitleHero";

export default function page() {
  return (
    <main className="relative overflow-hidden h-[300rem]">
      <IntroAnimation />
      <section className="mx-14 flex flex-col justify-between h-screen relative py-10">
        <div className="flex justify-between">
          <Image src={logo} alt="logo" width={100} height={100} />
          <Nav />
        </div>
        <div className="mx-20">
          <TitleHero />
        </div>

        <Image
          src={portrait}
          alt="portrait"
          width={100}
          height={100}
          className="w-[45rem] z-20 absolute bottom-0 left-[53%] transform -translate-x-1/2"
          unoptimized={true}
        />
        <div className="flex justify-between">
          <p className="Switzer-light">Enzo Michel</p>
          <p className="Switzer-light">localisation : Bordeaux</p>
        </div>
      </section>

      <SecondSection />
    </main>
  );
}
