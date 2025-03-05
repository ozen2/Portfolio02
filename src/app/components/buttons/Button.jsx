import Link from "next/link";

export default function Button({ content, href, width, height }) {
  return (
    <button
      className={`bg-(--primary-color) ${width} ${height} rounded-full items-center`}
    >
      <Link
        className="text-(--secondary-color) text-[1.25rem] Switzer-light"
        href={href}
      >
        {content}
      </Link>
    </button>
  );
}
