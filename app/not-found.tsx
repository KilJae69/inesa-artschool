import { Container } from "@/components/shared/Container";
import { FadeIn } from "@/components/shared/FadeIn";
import PrimaryButton from "@/components/shared/PrimaryButton";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] ">
      <Container className=" pt-32 lg:pt-46">
        <FadeIn className="flex flex-col gap-6 items-center justify-center">
          <Image
            src="/images/error-page-thumb.png"
            alt="404 thumbnail"
            width={450}
            height={250}
          />
          <h1
            className="text-h2
          "
          >
            Oops... Ova Stranica Nije Pronađena!
          </h1>
          <p className="text-paragraph">
            Molimo da se vratite na naslovnu stranicu, izgleda da na ovoj
            lokaciji nije ništa pronađeno.
          </p>
          <PrimaryButton href="/">Nazad Na Početnu</PrimaryButton>
        </FadeIn>
      </Container>
    </section>
  );
}
