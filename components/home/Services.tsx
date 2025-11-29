import { Shield } from 'lucide-react';
import React from 'react'
import ServicesCard from '../ServicesCard';
import { Button } from '../ui/button';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="section relative overflow-hidden ">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2 rounded-full mb-4 shadow-lg">
          <Shield className="w-5 h-5" />
          <span className="font-semibold">Our Services</span>
        </div>
        <h2 className="subheading ">Insurance Solutions</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          Comprehensive protection tailored to your needs
        </p>

        <ServicesCard />

        <Button variant="outline">
          <Link href={"/services"}>View All Services</Link>
        </Button>
      </div>
    </section>
  );
}

export default Services