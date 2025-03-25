"use client";

import { useMotionValueEvent, useScroll, m } from "framer-motion";

import { useState } from "react";

import Image from "next/image";

import AnimatedModalSidebar from "./AnimatedModalSidebar";
import navLinks from "@/constants/navLinks";
import Link from "next/link";


/*
const FallbackComponent = () => (
  <button className="button-two" aria-expanded="false">
    <svg
      stroke="var(--button-color)"
      className="hamburger"
      viewBox="0 0 100 100"
      width="30"
    >
      <line
        className="line top"
        x1="90"
        x2="10"
        y1="40"
        y2="40"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="80"
        strokeDashoffset="0"
      ></line>
      <line
        className="line bottom"
        x1="10"
        x2="90"
        y1="60"
        y2="60"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="80"
        strokeDashoffset="0"
      ></line>
    </svg>
  </button>
);
*/
export default function Header() {
  const [headerState, setHeaderState] = useState<"top" | "hidden" | "small">(
    "top"
  );
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest === 0) {
      setHeaderState("top");
    } else if (latest > previous && latest > 50) {
      setHeaderState("hidden");
    } else if (latest < previous) {
      setHeaderState("small");
    }
  });

  return (
    <m.header
    initial={{ y: -150 }}
    animate={{
      y: headerState === "hidden" ? -120 : 0,
    }}
    transition={{ type: "tween", duration: 0.4 }}
    className={`fixed top-0 left-0  w-full z-[1000] `}
    >
      
        <div className="fixed w-full container left-1/2  -translate-x-1/2 z-[1000]">
          <div
            className={`flex relative items-center justify-between p-3 transition-all duration-300 ${
              headerState === "top"
                ? " top-2 px-8 border-none rounded-none"
                : "py-1 top-2  bg-white/90 shadow-sm rounded-xl backdrop-filter shadow-black/[0.3] backdrop-blur-xl  px-10"
            }`}
          >
            {/* Logo Animation */}
            <div
              // initial={{ width: 160, height: 100 }}
              // animate={{
              //   width: headerState === "small" ? 120 : 200,
              //   height: headerState === "small" ? 70 : 100,
              // }}
              // transition={{ type: "tween", duration: 0.2 }}
              className="relative w-[120px] h-[40px] sm:w-[180px] sm:h-[80px]"
            >
              <Link href="/" aria-label="Home">
                <Image
                  src="/images/logo.png"
                  priority
                  alt="Spark Studio Logo"
                  className="object-contain"
                  fill
                />
              </Link>
            </div>
            <nav className="hidden lg:block  ">
              <ul className="flex whitespace-nowrap">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      className="size-full text-lg hover:text-accent font-semibold transition-colors capitalize flex items-center text-slate-600 justify-between px-5 py-3"
                      href={link.href}
                    >
                      {" "}
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Animated Items */}
            <div className="flex items-center justify-center whitespace-nowrap gap-x-8">
              {/* <Button className="hidden sm:block" href="/contact">
                  {t("contact-button")}
                </Button> */}

              <div className="lg:hidden">
                <AnimatedModalSidebar />
              </div>
            </div>
          </div>
        </div>

      </m.header>
  );
}
