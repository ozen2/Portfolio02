import Image from "next/image";
import mairieArcins from "../../../../public/images/projets/MairieArcins.jpg";
import externatic from "../../../../public/images/projets/externatic.jpg";
import randoZen from "../../../../public/images/projets/randoZen.jpg";
import nebula from "../../../../public/images/projets/nebula.jpg";

export default function Bento() {
  return (
    <div className="parent mx-5 mt-32 custom-cursor">
      <div className="div1 relative overflow-hidden">
        <div className="bg-black w-full h-full"></div>
        <Image
          src={externatic}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover transition-all duration-500 hover:scale-105 ease-in-out hover:opacity-80 w-full custom-cursor h-full"
        />
        <h2 className="text-white absolute bottom-10 left-10 text-3xl Switzer-normal opacity-O">
          Externatic
        </h2>
      </div>
      <div className="div2 relative overflow-hidden">
        <div className="bg-black w-full h-full"></div>
        <Image
          src={randoZen}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover transition-all duration-500 hover:scale-105 ease-in-out hover:opacity-80 w-full custom-cursor h-full"
        />
      </div>
      <div className="div3 relative overflow-hidden">
        <div className="bg-black w-full h-full"></div>
        <Image
          src={nebula}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover transition-all duration-500 hover:scale-105 ease-in-out hover:opacity-80 w-full custom-cursor h-full"
        />
      </div>
      <div className="div4 relative overflow-hidden">
        <div className="bg-black w-full h-full"></div>
        <Image
          src={mairieArcins}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover transition-all duration-500 hover:scale-105 ease-in-out hover:opacity-80 w-full custom-cursor h-full"
        />
      </div>
    </div>
  );
}
