import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* <RVLogo className="w-10 h-10" /> */}
              <div>
                <h3 className="text-white font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  RV Insurance
                </h3>
                <p className="text-xs text-gray-400">
                  Protect What Matters Most
                </p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Providing comprehensive insurance solutions across India with 24/7
              support and doorstep service.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-blue-400 transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Insurance Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services#car"
                  className="hover:text-blue-400 transition-colors"
                >
                  Car Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#bike"
                  className="hover:text-blue-400 transition-colors"
                >
                  Bike Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#health"
                  className="hover:text-blue-400 transition-colors"
                >
                  Health Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#life"
                  className="hover:text-blue-400 transition-colors"
                >
                  Life Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#home"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/services#business"
                  className="hover:text-blue-400 transition-colors"
                >
                  Business Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Sec -68A Gurgaon Haryana 122101</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="tel:+91919718181605123456"
                  className="hover:text-blue-400 transition-colors"
                >
                  9718181605 (24/7)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:rvinsurance07@gmail.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  rvinsurance07@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} RV Insurance Agency. All rights
            reserved.
          </p>
          <p className="mt-2 text-gray-500">
            IRDAI Registration No: 123456789 | Valid until: Dec 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
