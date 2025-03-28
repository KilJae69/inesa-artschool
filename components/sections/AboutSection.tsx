import Image from "next/image";
import { Container } from "../shared/Container";
import { FaCheck } from "react-icons/fa";
import PrimaryButton from "../shared/PrimaryButton";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";

export default function AboutSection() {
  return (
    <section className="py-30 ">
      <Container>
        <div className="flex relative w-full justify-between flex-col lg:flex-row gap-8">
          <Image
            src="/images/about-thumb.png"
            className="lg:-translate-x-20"
            width={700}
            height={600}
            alt="img"
          />

          <div className="lg:w-1/2 flex flex-col gap-4 md:gap-6">
            <p className="text-subtitle">About Us</p>
            <h2 className="text-h2">
              Creating A Community Of Life Long Learners
            </h2>
            <p className="text-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod
              tempor incididunt labore et dolore magna aliqua. ti enim ad minim
              veniam, nostrud exertation ullamco laboris nisi ut aliquip commodo
              consequat
            </p>
            <FadeInStagger className="flex flex-col gap-6">
              <FadeIn direction="left">
                <ul className="text-paragraph grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <li className="flex items-center gap-3">
                    <FaCheck className="bg-accent rounded-full flex-none size-5 text-white p-1" />{" "}
                    <p>Learn From Anywhere</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheck className="bg-accent rounded-full flex-none size-5 text-white p-1" />{" "}
                    <p>Flexible Classes</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheck className="bg-accent rounded-full flex-none size-5 text-white p-1" />{" "}
                    <p>Find the right instructor for you</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaCheck className="bg-accent rounded-full flex-none size-5 text-white p-1" />{" "}
                    <p>Popular topics to learn now</p>
                  </li>
                </ul>
              </FadeIn>
              <FadeIn direction="up">
                <PrimaryButton href="/">Know About Us</PrimaryButton>
              </FadeIn>
            </FadeInStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
