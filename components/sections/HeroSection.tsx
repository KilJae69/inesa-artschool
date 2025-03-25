import Image from "next/image";
import { Container } from "../shared/Container";
import PrimaryButton from "../shared/PrimaryButton";
import GradientBackground from "../shared/gradient-background";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] ">
      <GradientBackground  className="relative ">
        <Container className=" pt-32 lg:pt-46">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col gap-4 lg:min-w-1/2 ">
              <p className="text-subtitle uppercase">exelenceeducation</p>
              <h1 className="text-h1">
                Start Better Learning Future From Here
              </h1>
              <p className="text-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
              </p>
              <PrimaryButton href="/">Počnite danas</PrimaryButton>
            </div>

            <div className="relative min-w-[300px]  min-h-[400px]  lg:min-h-[620px] lg:min-w-[770px] lg:translate-x-20 lg:-translate-y-20">
              <Image
              priority
                src="/images/slider-thumb.png"
                className="object-contain"
                fill
                alt="img"
              />
            </div>
          </div>
        </Container>
      </GradientBackground>
    </section>
  );
}
