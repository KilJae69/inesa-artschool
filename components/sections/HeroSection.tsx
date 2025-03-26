import Image from "next/image";
import { Container } from "../shared/Container";
import PrimaryButton from "../shared/PrimaryButton";
import GradientBackground from "../shared/gradient-background";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";

export default function HeroSection() {
  return (
    <section className="">
      <GradientBackground  className="relative ">
        <Container className=" pt-32 lg:pt-46">
          <FadeInStagger className="flex flex-col lg:flex-row">
            <FadeIn direction="right" className="flex flex-col gap-4 lg:min-w-1/2 ">
              <p className="text-subtitle uppercase">exelenceeducation</p>
              <h1 className="text-h1">
                Start Better Learning Future From Here
              </h1>
              <p className="text-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
              <PrimaryButton href="/">Počnite danas</PrimaryButton>
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
      </GradientBackground>
    </section>
  );
}
