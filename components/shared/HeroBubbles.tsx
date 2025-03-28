"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/utils";
import Image from "next/image";

// Define bubbles with positions and delays
const bubbles = [
  {
    id: 1,
    icon: "/icons/light-bulb.png",

    position: "top-0 right-0",
    delay: 0.2,
  },
  {
    id: 2,
    icon: "/icons/pencil.png",

    position: "top-0 left-10",
    delay: 0.4,
  },
  {
    id: 3,
    icon: "/icons/paint-palette.png",

    position: "top-40 -right-5",
    delay: 0.6,
  },
  {
    id: 4,
    icon: "/icons/diversity.png",

    position: "top-20 left-0",
    delay: 0.8,
  },
];

export default function HeroBubbles() {
  return (
    <div className="  absolute inset-0 size-full">
      {bubbles.map((bubble) => (
        <m.div
          key={bubble.id}
          className={cn(
            "absolute flex items-center gap-2 bg-white p-4 rounded-full shadow-lg cursor-pointer",
            bubble.position
          )}
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0], // Subtle bounce effect
          }}
          transition={{
            duration: 1.5,
            delay: bubble.delay,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image src={bubble.icon} alt="icon" width={40} height={40} />
        </m.div>
      ))}
    </div>
  );
}
