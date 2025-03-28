"use client";
import Image from "next/image";
import { Container } from "../shared/Container";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import testimonialData from "@/constants/testimonialData";
import { FadeIn } from "../shared/FadeIn";


export default function TestimonialsSection() {
 
  return (
    <section className="py-30 bg-radial-[at_50%_95%] from-light-gradient to-light-accent min-h-[500px]">
      <Container>
        <div className="flex gap-7 flex-col lg:flex-row lg:items-center lg:justify-between">
          <FadeIn direction="right">
            <Image
              src="/images/testimonial-thumb.png"
              alt="testimonial thumbnail image"
              width={600}
              height={600}
            />
          </FadeIn>
          {/* Right Side (Heading + Swiper) */}
            <FadeIn direction="left">
          <div className="max-w-2xl">
            <p className="text-subtitle">Testimonial</p>
            <h2 className="text-h2 mt-6">What Our Student Says</h2>

            {/* Swiper Container */}

            
            <Swiper
              modules={[Navigation]}
              navigation
              className="testimonial-swiper mt-6"
            >
              {/* Slide 1 */}
              {testimonialData.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className=" text-black pb-3">
                    <p className="mb-14 text-testimonial-paragraph ">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="relative ">
                        <Image
                          src={testimonial.avatarUrl}
                          alt="avatar"
                          width={75}
                          height={75}
                          className="rounded-full "
                        />
                        <span className="absolute -bottom-3 left-1/2 z-20 size-6 bg-white rounded-full flex items-center justify-center">
                          <FaQuoteLeft className="text-accent size-3" />
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-xl">{testimonial.name}</p>
                        <p className=" text-accent">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
            </FadeIn>
        </div>
      </Container>
    </section>
  );
}
