import coursesData from "@/constants/coursesData";
import { Container } from "../shared/Container";

import PrimaryButton from "../shared/PrimaryButton";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";


export default function CoursesSection() {
  return (
    <section className="py-30">
      <Container>
        <div className="space-y-6 max-w-4xl">
          <p className="text-subtitle">Naši Kursevi</p>
          <h2 className="text-h2">
            Otkrijte čaroliju crtanja i slikanja uz naše pažljivo osmišljene
            kurseve.
          </h2>
          <p className="text-paragraph">
            Bez obzira da li ste potpuni početnik ili već imate iskustva, nudimo
            raznovrsne programe prilagođene vašem nivou i interesovanju. U
            nastavku pogledajte naše glavne kurseve i odaberite onaj koji vam
            najviše odgovara!
          </p>
        </div>
        <FadeInStagger className="grid w-full justify-items-center mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {coursesData.map((course) => (
            <FadeIn key={course.id} className="w-full size-90 max-w-90 min-w-80 [perspective:1000px]">
              <div className="relative size-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)] ">
                <div className="absolute inset-0 rounded-xl bg-light-accent/50">
                  <div className="size-full  p-6 flex flex-col gap-4 items-center text-center">
                    <Image
                      src={course.iconUrl}
                      alt="icon"
                      width={40}
                      height={40}
                      
                    />
                    <h3 className="text-accent font-bold text-xl">
                      {course.title}
                    </h3>
                    <p className="text-gray-500 italic leading-7 text-lg">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 size-full rounded-xl bg-accent  text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="size-full flex flex-col justify-between gap-4 p-6">
                    <h3 className="font-bold text-xl text-white">
                      Šta ćete naučiti?
                    </h3>
                    <ul className="ml-6 list-disc text-start text-white flex flex-col gap-2">
                      {course.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                    <div>

                    <PrimaryButton href="/kontakt" invert>{course.ctaLabel}</PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
