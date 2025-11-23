"use client";

import {
  ShieldCheck,
  PhoneCall,
  Sparkles,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted & Reliable",
      desc: "Serving thousands of satisfied customers with honest guidance and support.",
    },
    {
      icon: Award,
      title: "IRDAI Certified Partner",
      desc: "Work with legally authorized and government-recognized insurance experts.",
    },
    {
      icon: PhoneCall,
      title: "24/7 Support",
      desc: "Our team is available round the clock to assist you with claims and queries.",
    },
    {
      icon: TrendingUp,
      title: "Lowest Premium Guarantee",
      desc: "We compare multiple insurers to get you the best pricing possible.",
    },
    {
      icon: Users,
      title: "Personalized Guidance",
      desc: "Insurance plans tailored to your needs, not generic packages.",
    },
    {
      icon: Sparkles,
      title: "Fast Claim Assistance",
      desc: "Smooth and quick claim support when you need it the most.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
          Why Choose Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Your trusted partner for comprehensive and affordable insurance
          solutions
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-8 hover:-translate-y-2 transition transform duration-300 hover:shadow-blue-300/40"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-lg">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
