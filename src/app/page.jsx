import Image from "next/image";
import Button from "./components/buttons/Button";
import Nav from "./components/navbar/Nav";

import logo from "../../public/logo/logoYumeBlack.svg";

export default function page() {
  return (
    <main className="h-[200rem]">
      <div className="mt-10 mr-14">
        <Nav />
      </div>
      <section className="mx-14">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="flex gap-56">
          <h1 className="ClashDisplay-semibold text-[18.75rem]">YU</h1>
          <h1 className="ClashDisplay-semibold text-[18.75rem]">ME</h1>
        </div>
        <Button
          content="À propos de moi"
          href={"/about"}
          width={"w-[17rem]"}
          height={"h-[8rem]"}
        />
      </section>
    </main>
  );
}
