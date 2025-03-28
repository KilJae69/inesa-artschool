import React, { useState, useEffect } from "react";
import useLazyLoad from "./useLazyLoad";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SwiperComponentType = React.ComponentType<any>;

export function useLazySwiper() {
  const { ref, isInView } = useLazyLoad();
  const [SwiperComponent, setSwiperComponent] = useState<SwiperComponentType | null>(null);
  const [SwiperSlideComponent, setSwiperSlideComponent] = useState<SwiperComponentType | null>(null);
  const [modules, setModules] = useState<unknown[]>([]);
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !cssLoaded) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "/styles/swiper-bundle.min.css";
      link.onload = () => setCssLoaded(true);
      document.head.appendChild(link);
    }
  }, [isInView, cssLoaded]);

  useEffect(() => {
    if (isInView && !SwiperComponent) {
      import("swiper/react").then((module) => {
        setSwiperComponent(() => module.Swiper);
        setSwiperSlideComponent(() => module.SwiperSlide);
      });

      import("swiper/modules").then((module) => {
        setModules([module.Pagination, module.Navigation]);
      });
    }
  }, [isInView, SwiperComponent]);

  return { ref, SwiperComponent, SwiperSlideComponent, modules, cssLoaded };
}