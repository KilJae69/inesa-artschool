
import clsx from "clsx";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export const socialMediaProfiles = [
  {
    title: "Facebook",
    href: "https://facebook.com/SparkStudioDev",
    icon: FaFacebookF,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/sparkstudiodev",
    icon: FaInstagram,
  },
];

export function SocialMedia({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-primary-800",
        className
      )}
    >
      {socialMediaProfiles.map((socialMediaProfile) => (
        <li key={socialMediaProfile.title}>
          <a
            rel="noopener noreferrer"
            target="__blank"
            href={socialMediaProfile.href}
            aria-label={socialMediaProfile.title}
            className={clsx(
              "transition group relative size-9 flex items-center justify-center rounded-md border border-gray-400",
              invert ? "hover:text-neutral-200" : "hover:text-primary-600"
            )}
          >
            <socialMediaProfile.icon className="size-5 z-20" />
            <span className="bg-accent absolute size-full inset-0 scale-0 rounded-md transition-all duration-500 group-hover:scale-100"/>
          </a>
        </li>
      ))}
    </ul>
  );
}
