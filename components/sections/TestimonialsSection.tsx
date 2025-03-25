// components/TestimonialsSection.js
"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Container } from "../shared/Container";
import { FadeIn } from "../shared/FadeIn";
import testimonialData from "@/constants/testimonialData";
import LazyLoad from "../LazyLoad";


// Dynamically import LazySwiper with no SSR
const LazySwiper = dynamic(() => import("../LazySwiper"), {
  ssr: false,
  loading: () => <p>Loading slider...</p>,
});

export default function TestimonialsSection() {
  return (
    <section className="py-30 bg-radial-[at_50%_95%] from-[#FFF7EB] to-[#EDE7FE] min-h-[500px]">
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
          <FadeIn direction="left">
            <div className="max-w-2xl">
              <p className="text-subtitle">Testimonial</p>
              <h2 className="text-h2 mt-6">What Our Student Says</h2>
              {/* Wrap LazySwiper in our reusable LazyLoad wrapper */}
              <LazyLoad fallback={<p>Loading slider...</p>}>
                <LazySwiper testimonials={testimonialData} />
              </LazyLoad>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
