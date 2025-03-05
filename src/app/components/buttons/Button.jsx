import Link from "next/link";

export default function Button({ content, href }) {
  return (
    <button className="bg-(--primary-color) w-[17rem] h-[8rem] rounded-full items-center">
      <Link
        className="text-(--secondary-color) text-[1.25rem] Switzer-light"
        href={href}
      >
        {content}
      </Link>
    </button>
  );
}
