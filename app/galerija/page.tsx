import Gallery from "@/components/gallery/Gallery";

import { Container } from "@/components/shared/Container";
import PageIntro from "@/components/shared/PageIntro";

import { galleryData } from "@/constants/galleryData";
import { Suspense } from "react";
// import { LayoutGrid } from "@/components/ui/layout-grid";

export default function GalerijaPage() {
  return (
    <>
      <PageIntro title="Galerija Slika" />
      <section className=" py-20 w-full">
        {/* <LayoutGrid cards={cards} /> */}
        <Container>
          <Suspense fallback={<div>Loading gallery...</div>}>
            <Gallery galleryData={galleryData} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}



