import Image from "next/image";
import { Container } from "./Container";
import { SocialMedia } from "./SocialMedia";
import navLinks from "@/constants/navLinks";
import { FaLocationDot, FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FadeIn, FadeInStagger } from "./FadeIn"; // Importing the animation components
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-28.5 pb-5 bg-footer">
      <Container>
        {/* Staggered Entrance Animation */}
        <FadeInStagger>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            {/* Block 1 - Fade in from Left */}
            <FadeIn direction="right" className="text-white flex flex-col gap-4 max-w-[440px]">
              <Image
                src="/images/footer-logo.png"
                alt="footer logo"
                width={165}
                height={36}
              />
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum.
              </p>
              <SocialMedia />
            </FadeIn>

            {/* Block 2 - Fade in from Bottom */}
            <FadeIn direction="down" className="text-white">
              <h3 className="text-2xl mb-5">Kontakt Info</h3>
              <ul className="flex flex-col gap-5 text-white/70">
                <li className="flex items-center gap-2">
                  <FaLocationDot />
                  <span>275 Quadra Street Victoria Road, New York</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>+ 1 (237) 09852548</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt />
                  <span>+ 1 (237) 04260573</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdAlternateEmail />
                  <span>Yourmailaddress@example.com</span>
                </li>
              </ul>
            </FadeIn>

            {/* Block 3 - Fade in from Right */}
            <FadeIn direction="left" className="text-white">
              <h3 className="text-2xl mb-5">Korisni Linkovi</h3>
              <ul className="flex flex-col gap-5 text-white/70">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="flex group hover:text-accent/80 transition-all duration-500 items-center gap-2"
                  >
                    <FaArrowRightLong />
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Footer Bottom Section - Fade in from Bottom */}
          <FadeIn direction="up" className="text-white flex flex-col gap-2 border-t border-t-white/70 mt-6">
            <div className="pt-6 w-full lg:text-center">
              <p>© InesaSchool. {new Date().getFullYear()} Sva prava zadržana.</p>
              <p>
                Web stranicu razvio i održava{" "}
                <span className="text-[#d4af37]">Spark</span>Studio
              </p>
            </div>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </footer>
  );
}
