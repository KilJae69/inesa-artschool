import Image from "next/image";
import PrimaryButton from "./shared/PrimaryButton";

export type CourseCardType = {
  id: number;
  iconUrl: string;
  title: string;
  description: string;
  topics: string[];
  ctaLabel: string;
};

type CourseCardProps = {
  isFlipped: boolean;
  onClick: () => void;
  course: CourseCardType;
};

export default function CourseCard({
  course,
  isFlipped,
  onClick,
}: CourseCardProps) {
  return (
    <div className="w-full size-90 max-w-90 min-w-80 [perspective:1000px]">
      <div
        onClick={onClick}
        className={`relative size-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        } hover:[transform:rotateY(180deg)]`}
      >
        {/* Front side */}
        <div className="absolute inset-0 rounded-xl bg-light-accent/50 [backface-visibility:hidden]">
          <div className="size-full p-6 flex flex-col gap-4 items-center text-center">
            <Image src={course.iconUrl} alt="icon" width={40} height={40} />
            <h3 className="text-accent font-bold text-xl">{course.title}</h3>
            <p className="text-gray-500 italic leading-7 text-lg">
              {course.description}
            </p>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 size-full rounded-xl bg-accent text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="size-full flex flex-col justify-between gap-4 p-6">
            <h3 className="font-bold text-xl text-white">Šta ćete naučiti?</h3>
            <ul className="ml-6 list-disc text-start text-white flex flex-col gap-2">
              {course.topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
            <div className="mx-auto">
              <PrimaryButton href="/kontakt" invert>
                {course.ctaLabel}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
