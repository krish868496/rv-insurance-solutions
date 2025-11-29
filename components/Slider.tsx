"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import HeroForm from "./home/HeroForm";
import { Button } from "./ui/button";
import Link from "next/link";

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
    <div className="relative w-full h-[550px] overflow-hidden shadow-lg">
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
            {/* ✅ HERO TEXT ADDED HERE */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12 z-20 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                India’s Trusted Insurance Partner for Health, Car & Life
              </h1>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                Join thousands of families who saved more with our transparent
                pricing, expert guidance, and hassle-free claim support.
              </p>
            </div>
            <div className="absolute inset-0 bg-linear-to-b from-black/60 to-black/40"></div>
            <Button className="absolute z-20 top-[75%]  left-1/2 -translate-x-1/2">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        ))}
      </Slider>
    </div>
  );
}
