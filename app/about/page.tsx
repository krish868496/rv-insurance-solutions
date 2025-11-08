import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  Target,
  Heart,
  CheckCircle,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We operate with complete transparency and honesty in all our dealings with clients.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction and security are at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in service delivery and claim settlement processes.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work together as a team to provide the best solutions for our clients.",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Company Founded",
      description: "Started with a vision to make insurance accessible to all",
    },
    {
      year: "2012",
      event: "10,000 Customers",
      description: "Reached our first major milestone of serving 10K families",
    },
    {
      year: "2016",
      event: "Pan-India Expansion",
      description: "Extended our services to all major cities across India",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description: "Launched online platform for seamless customer experience",
    },
    {
      year: "2024",
      event: "50,000+ Customers",
      description: "Celebrating trust of over 50,000 satisfied customers",
    },
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      description: "20+ years of experience in insurance industry",
    },
    {
      name: "Priya Patel",
      role: "Head of Operations",
      description: "Expert in streamlining insurance processes",
    },
    {
      name: "Amit Kumar",
      role: "Chief Claims Officer",
      description: "Ensuring fast and fair claim settlements",
    },
    {
      name: "Sneha Reddy",
      role: "Customer Success Manager",
      description: "Dedicated to client satisfaction and support",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About RV Insurance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Building trust since 2008. We're more than just an insurance
              agency - we're your partners in securing a better tomorrow.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2008, RV Insurance began with a simple mission: to
                  make comprehensive insurance accessible and affordable for
                  every Indian family. What started as a small office in Mumbai
                  has grown into a pan-India network serving over 50,000
                  satisfied customers.
                </p>
                <p>
                  We recognized that insurance isn't just about policies and
                  paperwork - it's about peace of mind, security, and trust.
                  That's why we've built our business on the foundation of
                  transparency, customer-first service, and rapid claim
                  settlements.
                </p>
                <p>
                  Today, we're proud to be one of the fastest-growing insurance
                  agencies in India, with a 98% claim success rate and thousands
                  of happy families who trust us to protect what matters most to
                  them.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      15+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years of Service
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      50K+
                    </div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      98%
                    </div>
                    <div className="text-sm text-gray-600">Claim Success</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">
                      Support Available
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">
                          Our Mission
                        </h3>
                        <p className="text-gray-600">
                          To provide comprehensive, affordable insurance
                          solutions that protect families and businesses across
                          India, delivered with integrity and exceptional
                          service.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-green-600 text-white p-3 rounded-lg">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">
                          Our Vision
                        </h3>
                        <p className="text-gray-600">
                          To be India's most trusted insurance partner, known
                          for transparency, rapid claim settlements, and putting
                          customers first in every interaction.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-orange-600 text-white p-3 rounded-lg">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">
                          Our Commitment
                        </h3>
                        <p className="text-gray-600">
                          We commit to honest advice, transparent processes,
                          fair pricing, and being there for you when you need us
                          most - especially during claims.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <Card
                      className={`${
                        index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                      } hover:shadow-xl transition-shadow duration-300`}
                    >
                      <CardContent className="p-6">
                        <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold mb-3">
                          {milestone.year}
                        </div>
                        <h3 className="font-bold text-xl mb-2 text-gray-900">
                          {milestone.event}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-bold text-lg mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-2 text-sm">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white border-none">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <MapPin className="w-12 h-12 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pan-India Presence
                  </h2>
                  <p className="text-xl text-green-100 mb-6 leading-relaxed">
                    With our extensive network of agents and partners, we
                    provide doorstep service across all major cities and towns
                    in India.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                  <div>
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-green-100">Cities Covered</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">500+</div>
                    <div className="text-green-100">Field Agents</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">1000+</div>
                    <div className="text-green-100">Partner Garages</div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-green-600 hover:bg-green-50"
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Customers Trust Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Transparent Policies</h3>
                <p className="text-blue-100">
                  No hidden charges or complicated terms
                </p>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick Claims</h3>
                <p className="text-blue-100">
                  98% claims settled within 48 hours
                </p>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Guidance</h3>
                <p className="text-blue-100">
                  Personalized advice from experienced professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
