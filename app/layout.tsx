import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RV Insurance | Car, Bike, Health & Life Insurance in India",
  description:
    "RV Insurance provides comprehensive solutions for Car, Bike, Health, Life, Home & Business. 24/7 support, pan-India coverage, instant claim settlement. Get a free quote today!",
  keywords:
    "RV insurance, car insurance, bike insurance, health insurance, life insurance, home insurance, business insurance, India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
