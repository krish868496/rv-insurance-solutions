"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/components/toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    submission_type: "quote",
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

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Have questions about our insurance services? We're here to help.
              Reach out to us and get a free quote today!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and one of our insurance experts will
                contact you within 24 hours to discuss your needs and provide a
                customized quote.
              </p>

              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="John Doe"
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
                          placeholder="john@example.com"
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
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-1"
                        placeholder="Tell us about your insurance needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      size="lg"
                    >
                      {loading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy
                      and terms of service.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out to us through any of the following channels. We're
                available 24/7 to assist you with your insurance needs.
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900">
                          Phone
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Call us anytime for immediate assistance
                        </p>
                        <a
                          href="tel:+919718181605"
                          className="text-blue-600 font-semibold text-lg hover:text-blue-700"
                        >
                          9718181605 (Toll Free)
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          24/7 Customer Support
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900">
                          Email
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Send us an email for detailed inquiries
                        </p>
                        <a
                          href="mailto:rvinsurance07@gmail.com"
                          className="text-green-600 font-semibold hover:text-green-700"
                        >
                          rvinsurance07@gmail.com
                        </a>
                        <p className="text-sm text-gray-500 mt-1">
                          Response within 4 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-orange-100 text-orange-600 p-3 rounded-lg">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900">
                          Office Address
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Visit us at our main office
                        </p>
                        <p className="text-gray-700">
                          123 Insurance Plaza
                          <br />
                          Mumbai, Maharashtra 400001
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-600">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 text-red-600 p-3 rounded-lg">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-gray-900">
                          Business Hours
                        </h3>
                        <p className="text-gray-600 mb-2">
                          Our office is open:
                        </p>
                        <div className="text-gray-700 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                          <p className="text-sm text-green-600 font-semibold mt-2">
                            Emergency support available 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-6 bg-blue-600 text-white border-none">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    Pan-India Service Coverage
                  </h3>
                  <p className="text-blue-100">
                    We provide doorstep service across all major cities and
                    towns in India. Our agents are ready to visit you at your
                    convenience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white border-none">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need Immediate Assistance?
                </h2>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  For urgent matters and claim assistance, our emergency
                  helpline is available round the clock.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50"
                >
                  <a href="tel:+919718181605">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Claims:9718181605
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
