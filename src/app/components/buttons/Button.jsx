import Link from "next/link";

export default function Button({ content, href, width, height }) {
  return (
    <button
      className={`hover:cursor-pointer relative bg-(--primary-color) ${width} ${height} rounded-full flex items-center justify-center overflow-hidden group buttonAbout`}
    >
      <Link
        className="text-(--secondary-color) text-[1.25rem] Switzer-light relative z-20"
        href={href}
      >
        {content}
      </Link>
      <span className="absolute inset-0 bg-(--hover-color) scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
    </button>
  );
}
