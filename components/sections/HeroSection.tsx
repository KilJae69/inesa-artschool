import Image from "next/image";
import { Container } from "../shared/Container";
import PrimaryButton from "../shared/PrimaryButton";

import { FadeIn, FadeInStagger } from "../shared/FadeIn";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100">
       <div
        className="absolute w-[500px] h-[500px]  md:w-[800px] md:h-[800px] rounded-full opacity-30 md:opacity-40 blur-3xl 
                  md:left-[-200px] md:top-1/4 
                  left-1/2 top-[-100px] transform md:translate-y-0 -translate-x-1/2"
        style={{
          background: `radial-gradient(circle, #7c3aed 0%, transparent 70%)`,
        }}
      />

      {/* Right gradient on large screens, bottom gradient on small screens */}
      <div
        className="absolute w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full opacity-30 md:opacity-40 blur-3xl 
                  md:right-[-500px] md:bottom-1/4 md:left-auto
                  left-1/2 bottom-[-100px] transform md:translate-y-0 -translate-x-1/2"
        style={{
          background: `radial-gradient(circle, #c4b5fd 0%, transparent 70%)`,
        }}
      />
     
        <Container className=" pt-32 lg:pt-46">
          <FadeInStagger className="flex flex-col lg:flex-row">
            <FadeIn direction="right" className="flex flex-col gap-4 lg:min-w-1/2 ">
              <p className="text-subtitle uppercase">exelenceeducation</p>
              <h1 className="text-h1">
                 Usavršite Tehnike Crtanja i Slikanja
              </h1>
              <p className="text-paragraph">
               Od osnovnih do naprednih tehnika, naučite 3D crtanje, sijenčenje i slikanje.
              </p>
              <PrimaryButton href="/">Upišite se danas</PrimaryButton>
            </FadeIn>

            <FadeIn direction="left" className="relative min-w-[300px]  min-h-[400px]  lg:min-h-[620px] lg:min-w-[770px] lg:translate-x-20 lg:-translate-y-20">
              <Image
              priority
                src="/images/slider-thumb.png"
                className="object-contain"
                fill
                alt="img"
              />
            </FadeIn>
          </FadeInStagger>
        </Container>
      
    </section>
  );
}
