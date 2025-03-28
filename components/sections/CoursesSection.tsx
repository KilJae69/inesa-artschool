"use client";
import coursesData from "@/constants/coursesData";
import { Container } from "../shared/Container";


import { FadeIn, FadeInStagger } from "../shared/FadeIn";
import CourseCard from "../CourseCard";
import { useState } from "react";



export default function CoursesSection() {
  // This state holds the currently active card's id
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    // If the clicked card is already active, close it; otherwise, open it.
    setActiveCardId((prev) => (prev === id ? null : id));
  };
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
            <FadeIn key={course.id}>
              <CourseCard
                course={course}
                isFlipped={activeCardId === course.id}
                onClick={() => handleCardClick(course.id)}
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
