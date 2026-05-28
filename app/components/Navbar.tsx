"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import config from "../../config.js";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Técnicas", href: "/tecnicas" },
  { label: "Patologías", href: "/patologias" },
  { label: "Equipo", href: "/equipo" },
  { label: "Precios", href: "/precios" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Cerrar menú al cambiar de página
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-sm border-b border-gray-200/80 shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-[var(--color-primary)]">{config.logoPart1}</span>
              <span className="text-[var(--color-secondary)]">{config.logoPart2}</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-[var(--color-primary)] bg-[var(--color-primary-light)]"
                      : "text-gray-500 hover:text-[var(--color-primary)] hover:bg-gray-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contacto"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold text-sm rounded-lg transition-colors duration-200 shadow-sm"
          >
            Reservar cita
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-500 hover:text-[var(--color-primary)] transition-colors"
            aria-label="Menú"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border border-gray-100 rounded-xl mb-4 p-3 shadow-lg">
            <nav className="flex flex-col gap-1">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-4 py-3 text-sm rounded-lg font-medium transition-all ${
                      active
                        ? "text-[var(--color-primary)] bg-[var(--color-primary-light)] font-semibold"
                        : "text-gray-600 hover:text-[var(--color-primary)] hover:bg-gray-50"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="/contacto"
                className="mt-2 px-4 py-3 bg-[var(--color-primary)] text-white font-semibold text-sm rounded-lg text-center"
              >
                Reservar cita
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
