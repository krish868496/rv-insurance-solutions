"use client";
import React, { useState } from "react";
import { toast } from "../toast";
import { Button } from "../ui/button";

const HeroForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const body = {
      vehicle: form.vehicle.value,
      chassis: form.chassis.value,
      mobile: form.mobile.value,
      email: form.email.value,
    };

    await fetch("/api/send-email", {
      method: "POST",
      body: JSON.stringify(body),
    });

    setLoading(false);
    toast({
      type: "success",
      title: "Quote Request Sent ✅",
      description: "We will contact you shortly.",
    });
  };

  return (
    <div className="absolute right-4 lg:right-8 lg:top-1/2 top-1/6 lg:mt-5 lg:-translate-y-1/2 z-20 ">
      <div className="w-[380px] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-3 lg:p-6 text-white animate-fade-in ">
        <h2 className="text-2xl font-semibold mb-4 text-center  text-white bg-clip-text ">
          Get Your Vehicle Insured 🚗
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Vehicle Registration Number"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 placeholder:text-gray-300 text-sm transition-all"
          />
          <input
            type="text"
            placeholder="Chassis Number"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 placeholder:text-gray-300 text-sm transition-all"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 placeholder:text-gray-300 text-sm transition-all"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="px-3 py-3 rounded-lg bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/10 placeholder:text-gray-300 text-sm transition-all"
          />

          <Button type="submit">
            {loading ? "Sending..." : "Get Quote Now"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HeroForm;
