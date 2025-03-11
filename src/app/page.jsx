import Image from "next/image";
import Button from "./components/buttons/Button";
import Nav from "./components/navbar/Nav";

import logo from "../../public/logo/logoYumeBlack.svg";
import portrait from "../../public/images/portraitEnzo.png";
import Title from "./components/title/Title";
import SecondSection from "./components/sections/SecondSection";
import IntroAnimation from "./components/intro/IntroAnimation";

export default function page() {
  return (
    <main className="relative overflow-hidden h-[100rem]">
      <div className="mt-10 mr-14">
        <Nav />
      </div>
      <IntroAnimation />
      <section className="mx-14 h-screen relative">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="mx-20"></div>
        <Image
          src={portrait}
          alt="logo"
          width={100}
          height={100}
          className="w-[45rem] z-20 absolute bottom-0 left-[53%] transform -translate-x-1/2"
          unoptimized={true}
        />
      </section>
      <SecondSection />
    </main>
  );
}
