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
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="border-0 bg-white/80 backdrop-blur-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <CardContent className="p-8 relative">
                  <div
                    className={`bg-gradient-to-br ${iconColors[index]} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg`}
                  >
                    {getIconComponent(service.icon)}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600">
                    {service.service_name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.service_category}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-sky-600 to-indigo-700 text-white relative overflow-hidden">
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
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-sky-400 to-blue-600 text-gray-900 hover:from-blue-500 hover:to-indigo-600 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                <Zap className="w-5 h-5 mr-2" />
                Get Free Quote Now
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-blue-700 hover:bg-white hover:text-blue-700 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link href="/support">
                <Phone className="w-5 h-5 mr-2" />
                9718181605
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
