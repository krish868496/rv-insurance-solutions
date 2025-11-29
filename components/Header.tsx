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
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/30"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      {/* --- Top bar --- */}
      <div
        className="text-white py-2 bg-primary"
      >
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href="tel:+919718181605"
              className="flex items-center gap-1 hover:text-[var(--accent-light)] transition-colors duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:animate-bounce-slow" />
              <span className="hidden sm:inline">24/7 Support: 9718181605</span>
              <span className="sm:hidden">9718181605</span>
            </a>
            <a
              href="mailto:rvinsurance07@gmail.com"
              className="flex items-center gap-1 hover:text-[var(--accent-light)] transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4 group-hover:animate-bounce-slow" />
              <span className="hidden md:inline"> rvinsurance07@gmail.com</span>
            </a>
          </div>
          <div className="text-xs sm:text-sm flex items-center gap-1 text-white">
            <Sparkles className="w-3 h-3 animate-pulse-slow" />
            Pan-India Coverage{" "}
            <span className="hidden lg:flex">| Trusted by 5,000+ Clients</span>
          </div>
        </div>
      </div>

      {/* --- Main Nav --- */}
      <nav className="container mx-auto px-2 py-2 lg:px-4 lg:py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="RV Insurance Logo"
            width={240}
            height={80}
            className="h-14 w-[140px] sm:w-[260px] lg:w-[300px] object-contain transition-transform scale-200"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative font-medium text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--primary-dark)] transition-all duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          <Button
            asChild
            className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] hover:from-[var(--primary-light)] hover:to-[var(--primary)] text-white shadow-md hover:shadow-lg backdrop-blur-md hover:scale-[1.05] transition-all duration-300"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
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
      </nav>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 border-t border-white/30 backdrop-blur-xl bg-white/50 animate-fadeInDown">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[var(--primary)] hover:to-[var(--primary-dark)] transition-all duration-300"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] hover:from-[var(--primary-light)] hover:to-[var(--primary)] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
