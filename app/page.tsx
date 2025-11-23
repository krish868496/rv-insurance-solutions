"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Car,
  Bike,
  Heart,
  Home,
  Briefcase,
  Phone,
  Clock,
  CheckCircle,
  MapPin,
  Star,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Sparkles,
  Zap,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesCard from "@/components/ServicesCard";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";

interface Testimonial {
  id: string;
  client_name: string;
  client_role: string;
  testimonial_text: string;
  rating: number;
  image_url?: string;
}

interface Service {
  id: string;
  service_name: string;
  service_category: string;
  description: string;
  icon: string;
}

export default function HomePage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials]);

  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      car: Car,
      bike: Bike,
      "heart-pulse": Heart,
      "user-check": Shield,
      home: Home,
      briefcase: Briefcase,
    };
    const IconComponent = icons[iconName] || Shield;
    return <IconComponent className="w-12 h-12" />;
  };

  const iconColors = [
    "from-sky-500 to-blue-600",
    "from-blue-600 to-indigo-700",
    "from-indigo-500 to-blue-700",
    "from-sky-400 to-blue-500",
    "from-blue-700 to-indigo-800",
    "from-sky-600 to-blue-800",
  ];

  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection />
      {/* SERVICES SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden ">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-sky-600 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
            <Shield className="w-5 h-5" />
            <span className="font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
            Insurance Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
            Comprehensive protection tailored to your needs
          </p>

          <ServicesCard />

          <Button variant="outline">
            <Link href={"/services"}>View All Services</Link>
          </Button>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse-slow" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Protected?
          </h2>

          <p className="text-xl mb-10 text-white/90">
            Get a free quote today and discover how affordable comprehensive
            insurance can be
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* ✅ Active Primary Button */}
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--primary)] font-semibold shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:bg-gray-100 transition px-8"
            >
              <Link href="/contact">
                <Zap className="w-5 h-5 mr-2 text-[var(--primary)]" />
                Get Free Quote Now
              </Link>
            </Button>

            {/* ✅ Outline Button (white outline version for dark bg) */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--primary)]"
            >
              <Link href="/support">
                <Phone className="w-5 h-5 mr-2" />
                9718181605
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* why choose us  */}
      <WhyChooseUs />

      {/* testimonal section  */}
      <TestimonialsSection />
    </main>
  );
}
