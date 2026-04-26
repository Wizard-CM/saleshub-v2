"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";

interface Product {
  name: string;
  image: string;
}

const BEST_SELLERS: Product[] = [
  { name: "Carlsberg", image: "/hero-section-images/1.png" },
  { name: "Somersby Apple", image: "/hero-section-images/2.png" },
  { name: "Gurkhas & Guns", image: "/hero-section-images/3.png" },
];

export const BestSellersSlider = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [api, setApi] = useState<CarouselApi>();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setIndex(api.selectedScrollSnap());
    const onSelect = () => setIndex(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full">


      {/* Carousel — no card chrome, images sit directly on the hero */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center", duration: 30 }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {BEST_SELLERS.map((product) => (
            <CarouselItem
              key={product.name}
              className="pl-0 flex items-center justify-center"
            >
              {/* <div className="relative w-full flex items-center justify-center"> */}
                <Image
                  src={product.image}
                  alt={product.name}
                  priority
                  height={500}
                  width={1000}
                  className="w-full -mt-[200px] z-100 max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                />
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Slide dots */}
      {/* <div className="flex items-center justify-center gap-2 mt-5">
        {BEST_SELLERS.map((product, i) => (
          <button
            key={product.name}
            type="button"
            aria-label={`Show ${product.name}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-black/70"
                : "w-1.5 bg-black/25 hover:bg-black/45"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};
