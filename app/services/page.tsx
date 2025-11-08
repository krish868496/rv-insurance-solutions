"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Car,
  Bike,
  Heart,
  Shield,
  Home,
  Briefcase,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  service_name: string;
  service_category: string;
  description: string;
  features: string[];
  icon: string;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);


  const getIconComponent = (iconName: string) => {
    const icons: { [key: string]: any } = {
      car: Car,
      bike: Bike,
      "heart-pulse": Heart,
      "user-check": Shield,
      home: Home,
      briefcase: Briefcase,
    };
    return icons[iconName] || Shield;
  };

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Insurance Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Comprehensive coverage for every aspect of your life. Choose from
              our wide range of insurance products designed to protect what
              matters most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.icon);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.service_category}
                  className="scroll-mt-24"
                >
                  <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300">
                    <div
                      className={`grid lg:grid-cols-2 gap-0 ${
                        !isEven ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`bg-gradient-to-br ${
                          service.service_category === "auto"
                            ? "from-blue-500 to-blue-700"
                            : service.service_category === "health"
                            ? "from-red-500 to-red-700"
                            : service.service_category === "life"
                            ? "from-green-500 to-green-700"
                            : service.service_category === "property"
                            ? "from-orange-500 to-orange-700"
                            : service.service_category === "commercial"
                            ? "from-purple-500 to-purple-700"
                            : "from-blue-500 to-blue-700"
                        } text-white p-8 md:p-12 flex flex-col justify-center ${
                          !isEven ? "lg:order-2" : ""
                        }`}
                      >
                        <div className="bg-white/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                          <IconComponent className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          {service.service_name}
                        </h2>
                        <p className="text-lg text-white/90 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Button
                          asChild
                          size="lg"
                          className="bg-white text-blue-600 hover:bg-blue-50 self-start"
                        >
                          <Link href="/contact">
                            Get a Quote <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                        </Button>
                      </div>

                      <div
                        className={`p-8 md:p-12 bg-white ${
                          !isEven ? "lg:order-1" : ""
                        }`}
                      >
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">
                          Key Features
                        </h3>
                        <ul className="space-y-4">
                          {service.features &&
                            Array.isArray(service.features) &&
                            service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="bg-green-100 text-green-600 rounded-full p-1 mt-1 flex-shrink-0">
                                  <Check className="w-5 h-5" />
                                </div>
                                <span className="text-gray-700 text-lg leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                            Why Choose This Plan?
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span>Instant policy issuance</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span>Quick claim settlement</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span>Affordable premiums</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span>24/7 customer support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Help Choosing?
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Our expert advisors are here to help you find the perfect
                  insurance plan tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    <Link href="/contact">Talk to an Expert</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white bg-blue-700 hover:bg-white/10"
                  >
                    <Link href="/support">Call 9718181605</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Service Promise
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  100% Reliable
                </h3>
                <p className="text-gray-600">
                  Trusted by thousands of satisfied customers
                </p>
              </div>
              <div>
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Fast Processing
                </h3>
                <p className="text-gray-600">
                  Quick approval and claim settlement
                </p>
              </div>
              <div>
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Customer First
                </h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
