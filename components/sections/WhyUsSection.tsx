import Image from "next/image";
import { Container } from "../shared/Container";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";
import clsx from "clsx";
import HeroBubbles from "../shared/HeroBubbles";

type Feature = {
  title: string;
  description: string;
  iconHref: string; // ili string ako koristiš ikone kao stringove iz neke biblioteke
};

export const features: Feature[] = [
  {
    title: "Praktične Radionice",
    description:
      "Uz interaktivne i praktične vježbe, polaznici će odmah primjenjivati naučene tehnike crtanja i slikanja.",
    iconHref: "/icons/choose-us-icon.png", // zamijeni odgovarajućom ikonom
  },
  {
    title: "Personalizirani Portfolio",
    description:
      "Svaki polaznik dobiva svoj online prostor za objavu radova i praćenje napretka.",
    iconHref: "/icons/choose-us-icon1.png",
  },
  {
    title: "Individualni Pristup",
    description:
      "Iskusni mentori pružaju savjete prilagođene vašem stilu i nivou znanja.",
    iconHref: "/icons/choose-us-icon2.png",
  },
  {
    title: "Inspirativna Zajednica",
    description:
      "Kreativna i podržavajuća atmosfera kroz grupne projekte i razmjenu ideja.",
    iconHref: "/icons/choose-us-icon3.png",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-30 relative flex bg-radial-[at_50%_95%] from-light-gradient to-light-accent">
      <Container>
        <div className="">
          <p className="text-subtitle">Zašto Mi</p>
          <h2 className="text-h2">Šta nudimo našim polaznicima</h2>

          <div className="flex flex-col items-center justify-between xl:flex-row gap-10">
            <FadeInStagger className="grid size-full relative grid-cols-1 md:grid-cols-2 gap-7.5 max-w-[700px] mt-12">
              {features.map((feature, index) => (
                <FadeIn
                  direction={
                    index === 0
                      ? "right"
                      : index === 1
                      ? "down"
                      : index === 2
                      ? "left"
                      : "up"
                  }
                  key={index}
                  className={clsx(
                    `card p-6 relative group bg-white shadow-sm w-full md:w-[300px] ${
                      index === 1 && "md:translate-y-10"
                    } ${index === 3 && "md:translate-y-10"}`
                  )}
                >
                  <span className="absolute bg-accent scale-0 group-hover:scale-100 transition-all duration-500 inset-0 " />
                  <div className="flex items-center justify-between">
                    <div className="relative ml-7">
                      <Image
                        src={feature.iconHref}
                        alt="icon"
                        width={40}
                        height={36}
                        className="relative z-10 group-hover:invert-100 transition-all group-hover:brightness-0 duration-500"
                      />
                      <span className="size-10 absolute -top-4 -left-3  rounded-full bg-light-accent" />
                    </div>
                    <p className="outlined-text relative z-10">0{index + 1}</p>
                  </div>
                  <h3 className="text-xl relative z-10 group-hover:text-white transition-colors duration-500 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 relative group-hover:text-white transition-colors duration-500 z-10 mt-4">
                    {feature.description}
                  </p>
                </FadeIn>
              ))}
            </FadeInStagger>
            <div className="relative size-full">
              <Image
                src="/images/why-us-thumb.png"
                className="object-contain size-full flex-1"
                alt="choose us thumb"
                width={600}
                height={600}
              />
              <HeroBubbles/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
