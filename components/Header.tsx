"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/careers", label: "Careers" },
    { href: "/support", label: "Support" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 text-white py-2 shadow-md">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+91919718181605123456"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce-slow" />
              <span className="hidden sm:inline">24/7 Support: 9718181605</span>
              <span className="sm:hidden">9718181605</span>
            </a>
            <a
              href="mailto: rvinsurance07@gmail.com"
              className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4 group-hover:animate-bounce-slow" />
              <span className="hidden md:inline"> rvinsurance07@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 animate-pulse-slow" />
            Pan-India Coverage | Trusted by 5,000+ Clients
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="RV Insurance Logo"
              width={240}
              height={80}
              className="h-14 w-[140px] sm:w-[260px] lg:w-[300px] object-contain scale-[2.8]"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 font-medium transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            className="lg:hidden group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4 animate-slideDown">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-600 font-medium transition-all duration-300 animate-fadeInLeft"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue700 w-full shadow-lg animate-fadeInLeft delay-300"
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
