// components/LazySwiper.js
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles directly in this module
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import testimonialData from "@/constants/testimonialData";

type Testimonial = (typeof testimonialData)[number];

interface LazySwiperProps {
  // match the read-only nature
  testimonials: readonly Testimonial[];
}


export default function LazySwiper({ testimonials }: LazySwiperProps) {
  return (
    <Swiper modules={[Navigation]} navigation className="testimonial-swiper mt-6">
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="text-black pb-3">
            <p className="mb-14 text-testimonial-paragraph">{testimonial.text}</p>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src={testimonial.avatarUrl}
                  alt="avatar"
                  width={75}
                  height={75}
                  className="rounded-full"
                />
                <span className="absolute -bottom-3 left-1/2 z-20 size-6 bg-white rounded-full flex items-center justify-center">
                  <FaQuoteLeft className="text-accent size-3" />
                </span>
              </div>
              <div>
                <p className="font-bold text-xl">{testimonial.name}</p>
                <p className="text-accent">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
