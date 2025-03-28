import { cn } from "@/lib/utils";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

export default function PrimaryButton({
  children,
  href,
  invert = false,
}: {
  children: React.ReactNode;
  href?: string;
  invert?: boolean;
}) {
  if (href)
    return (
      <Link
        href={href}
        className={cn(
          `py-4 flex whitespace-nowrap group font-semibold transition-all duration-500 items-center gap-4 z-10 relative overflow-hidden w-fit rounded-sm shadow-sm px-9 ${
            invert
              ? "bg-white text-accent hover:text-white"
              : "bg-accent text-white"
          }`
        )}
      >
        {children}
        <FaArrowRight />
        <span className="bg-black absolute -z-10 size-full inset-0 scale-0 transition-all duration-500 group-hover:scale-100" />
      </Link>
    );
}
