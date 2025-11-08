"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Briefcase,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { toast } from "@/components/toast";

export default function CareersPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    applicant_name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
       toast({
         title: "Success 🎉",
         description: "Your insurance policy has been created.",
         type: "success",
       });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const positions = [
    {
      title: "Insurance Sales Agent",
      type: "Commission-Based",
      description:
        "Join our team as a sales agent and earn attractive commissions on every policy sold.",
      requirements: [
        "Excellent communication skills",
        "Self-motivated",
        "Willingness to travel",
        "Basic computer knowledge",
      ],
      benefits: [
        "High commission rates",
        "Flexible working hours",
        "Comprehensive training",
        "Career growth opportunities",
      ],
    },
    {
      title: "Freelance Insurance Advisor",
      type: "Freelance",
      description:
        "Work independently as a freelance advisor and help clients choose the right insurance products.",
      requirements: [
        "Prior experience in insurance",
        "Strong networking skills",
        "Own vehicle preferred",
        "Professional attitude",
      ],
      benefits: [
        "Work on your own schedule",
        "Performance bonuses",
        "Marketing support",
        "Lead generation assistance",
      ],
    },
    {
      title: "Business Development Executive",
      type: "Full-Time",
      description:
        "Expand our client base and build lasting relationships with customers across your territory.",
      requirements: [
        "2+ years sales experience",
        "Valid driving license",
        "Graduate degree",
        "Target-oriented mindset",
      ],
      benefits: [
        "Fixed salary + incentives",
        "Health insurance",
        "Travel allowance",
        "Professional development",
      ],
    },
    {
      title: "Customer Service Representative",
      type: "Full-Time",
      description:
        "Provide excellent support to our clients and help them with their insurance needs.",
      requirements: [
        "Good communication skills",
        "Computer proficiency",
        "Problem-solving ability",
        "Graduate degree",
      ],
      benefits: [
        "Competitive salary",
        "Health benefits",
        "Paid time off",
        "Training programs",
      ],
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Career With Us
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Join a dynamic team where your talent and hard work are rewarded.
              Grow your career in the insurance industry with excellent earning
              potential.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Join Our Team?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. We provide a platform for growth,
              success, and financial independence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  High Earnings
                </h3>
                <p className="text-gray-600 text-sm">
                  Competitive commissions and performance bonuses
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Career Growth
                </h3>
                <p className="text-gray-600 text-sm">
                  Clear path to advancement and leadership roles
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 text-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Great Team
                </h3>
                <p className="text-gray-600 text-sm">
                  Work with supportive and experienced colleagues
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  Training
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive training and ongoing support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore exciting opportunities to join our growing team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {positions.map((position, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {position.type}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">
                    {position.title}
                  </CardTitle>
                  <p className="text-gray-600">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Benefits:
                    </h4>
                    <ul className="space-y-1">
                      {position.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Apply Now
              </h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get in touch with you soon
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="applicant_name">Full Name *</Label>
                    <Input
                      id="applicant_name"
                      name="applicant_name"
                      value={formData.applicant_name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="position">Position Applied For *</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="e.g., Insurance Sales Agent"
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Relevant Experience</Label>
                    <Input
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="mt-1"
                      placeholder="e.g., 2 years in sales"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Why do you want to join us?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="mt-1"
                      placeholder="Tell us about yourself and why you'd be a great fit..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700"
                    size="lg"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
