import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Specify desired weights (e.g., regular and bold)
  subsets: ["latin"], // Specify desired subsets (e.g., 'latin')
  display: "swap", // Optional: controls how the font is displayed while loading
  variable: "--font-poppins", // Optional: for using with CSS variables
});

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
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
