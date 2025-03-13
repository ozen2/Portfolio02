import Image from "next/image";
import mairieArcins from "../../../../public/images/projets/MairieArcins.jpg";
import externatic from "../../../../public/images/projets/externatic.jpg";
import randoZen from "../../../../public/images/projets/randoZen.jpg";
import nebula from "../../../../public/images/projets/nebula.jpg";

export default function Bento() {
  return (
    <div className="parent mx-5 mt-32">
      <div className="div1 relative">
        {" "}
        <Image
          src={externatic}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="div2 relative">
        {" "}
        <Image
          src={randoZen}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="div3 relative">
        <Image
          src={nebula}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="div4 relative">
        <Image
          src={mairieArcins}
          alt="mairieArcins"
          fill
          unoptimized={true}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
