"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

export function SlickSlider({ images }: { images: string[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative w-full h-[350px] lg:h-[550px] overflow-hidden shadow-lg">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-[500px]">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover brightness-[0.85]"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
