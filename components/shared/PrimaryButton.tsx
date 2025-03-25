import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PrimaryButton({
  children,
  href,
}: {
  children: ReactNode;
  href?: string;
}) {
  if (href)
    return (
      <Link
        href={href}
        className="py-4 group flex items-center gap-4 z-10 relative overflow-hidden bg-accent w-fit text-white rounded-sm shadow-sm px-9"
      >
        {children}
        <FaArrowRight/>
        <span className="bg-black absolute -z-10 size-full inset-0 scale-0 transition-all duration-500 group-hover:scale-100"/>
      </Link>
    );
}
