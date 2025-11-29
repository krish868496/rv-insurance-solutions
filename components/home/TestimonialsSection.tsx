"use client";

import Slider from "react-slick";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Car Insurance Customer",
    text: "Got my car insurance done within minutes. Very supportive and explained everything clearly!",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "Health Insurance Customer",
    text: "Best guidance ever! Helped me choose the right health plan and saved a lot on premiums.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Bike Insurance Customer",
    text: "Fast claim assistance, zero hassle. Highly recommend their service!",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary">
          What Our Clients Say
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12">
          Trusted by hundreds of customers for insurance solutions
        </p>

        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id}>
              <div className="max-w-xl mx-auto bg-white/70 backdrop-blur-xl p-8 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={t.image}
                      width={80}
                      height={80}
                      alt={t.name}
                      className="object-cover"
                    />
                  </div>
                </div>

                <p className="text-text-secondary text-sm italic leading-7 mb-4">
                  "{t.text}"
                </p>

                <div className="flex justify-center mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400 w-5 h-5"
                    />
                  ))}
                </div>

                <h4 className="font-bold text-gray-800">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
