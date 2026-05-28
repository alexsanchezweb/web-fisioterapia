import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import config from "../config.js";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${config.clinicName} ${config.clinicCity} | ${config.tagline}`,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} h-full`}>
      <head>
        <style>{`
          :root {
            --color-primary: ${config.colorPrimary};
            --color-primary-dark: ${config.colorPrimaryDark};
            --color-primary-light: ${config.colorPrimaryLight};
            --color-secondary: ${config.colorSecondary};
            --color-secondary-dark: ${config.colorSecondaryDark};
            --color-secondary-light: ${config.colorSecondaryLight};
            --color-secondary-border: ${config.colorSecondaryBorder};
            --color-secondary-accent: ${config.colorSecondaryAccent};
          }
        `}</style>
      </head>
      <body className="min-h-full antialiased bg-white text-gray-800">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
