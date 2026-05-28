import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FisioElite Madrid | Clínica de Fisioterapia Premium",
  description:
    "Clínica de fisioterapia premium en Madrid. Tratamientos personalizados con tecnología de última generación. Más de 2.000 pacientes recuperados.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} h-full`}>
      <body className="min-h-full antialiased bg-white text-gray-800">
        <Navbar />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
