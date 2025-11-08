"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Phone,
  Mail,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  Shield,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function SupportPage() {
  const claimProcess = [
    {
      step: 1,
      title: "Report the Incident",
      description:
        "Call our 24/7 helpline immediately after the incident occurs",
      icon: Phone,
    },
    {
      step: 2,
      title: "Submit Documents",
      description:
        "Provide necessary documents like FIR, medical bills, or damage photos",
      icon: FileText,
    },
    {
      step: 3,
      title: "Claim Assessment",
      description: "Our team will assess your claim and verify all documents",
      icon: CheckCircle,
    },
    {
      step: 4,
      title: "Claim Settlement",
      description: "Receive your claim amount within 24-48 hours of approval",
      icon: Shield,
    },
  ];

  const faqItems = [
    {
      question: "How do I file a claim?",
      answer:
        "Call our emergency helpline at9718181605 immediately. Our team will guide you through the entire process and help with documentation.",
    },
    {
      question: "What documents are required for claims?",
      answer:
        "Common documents include policy copy, claim form, ID proof, incident report (FIR for theft/accident), medical bills for health claims, and photos of damage for vehicle claims.",
    },
    {
      question: "How long does claim settlement take?",
      answer:
        "Most claims are settled within 24-48 hours of document verification. Complex cases may take up to 7 working days.",
    },
    {
      question: "Can I track my claim status?",
      answer:
        "Yes, you can track your claim status by calling our helpline or sending an email to claims@insuranceagency.com with your claim reference number.",
    },
    {
      question: "What if my claim is rejected?",
      answer:
        "If your claim is rejected, we will provide detailed reasons. You can appeal the decision by submitting additional documentation or contacting our grievance cell.",
    },
    {
      question: "Is cashless facility available?",
      answer:
        "Yes, we have a network of cashless garages for vehicle insurance and cashless hospitals for health insurance across India.",
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <AlertCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 Support Center
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed mb-8">
              We're here to help you anytime, anywhere. Get instant support for
              claims, emergencies, and all your insurance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50"
              >
                <a href="tel:+919718181605">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency:9718181605
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 bg-transparent border-white text-white hover:bg-white/10"
              >
                <a href="tel:+919718181605">
                  <HeadphonesIcon className="w-5 h-5 mr-2" />
                  Support: 9718181605
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Quick Support Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-red-500">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Emergency Helpline
                </h3>
                <p className="text-gray-600 mb-4">
                  For urgent claims and emergencies
                </p>
                <a
                  href="tel:+91919718181605999888"
                  className="text-red-600 font-bold text-lg hover:text-red-700"
                >
                  9718181605
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-500">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Customer Support
                </h3>
                <p className="text-gray-600 mb-4">
                  For general inquiries and assistance
                </p>
                <a
                  href="tel:+91919718181605123456"
                  className="text-blue-600 font-bold text-lg hover:text-blue-700"
                >
                  9718181605
                </a>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-green-500">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Email Support
                </h3>
                <p className="text-gray-600 mb-4">
                  For detailed queries and documentation
                </p>
                <a
                  href="mailto:support@insuranceagency.com"
                  className="text-green-600 font-semibold hover:text-green-700 break-all"
                >
                  support@insuranceagency.com
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Response within 4 hours
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
              Claim Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to file and track your insurance claim
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {claimProcess.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Card
                    key={item.step}
                    className="text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                        {item.step}
                      </div>
                      <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mt-8 bg-blue-600 text-white border-none">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">
                  Average Settlement Time: 24-48 Hours
                </h3>
                <p className="text-blue-100">
                  We pride ourselves on quick and efficient claim processing to
                  get you back on track as soon as possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and
              claims
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <span>{item.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed pl-8">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Contact Our Support Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Satisfaction is Our Priority
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              We are committed to providing exceptional support and ensuring
              your claims are processed swiftly and fairly. Trust us to be there
              when you need us most.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-green-100">Claim Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24-48hrs</div>
                <div className="text-green-100">Average Settlement</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-green-100">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
