import Image from "next/image";
import Link from "next/link";
import Benefits from "./components/Benefits";

const stats = [
  { value: "2.000+", label: "Pacientes tratados" },
  { value: "8 años", label: "De experiencia" },
  { value: "98%", label: "Satisfacción" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-white pt-20 pb-0 min-h-screen flex items-center overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.016]"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, #1a3a5c 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#f0f4f8]/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Columna izquierda – texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2d6a4f]/20 bg-[#f0f7f4] text-[#2d6a4f] text-sm font-medium mb-7">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Clínica de Fisioterapia Premium · Madrid
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1a3a5c] leading-[1.08] tracking-tight mb-6">
                Recupera<br />
                <span className="text-[#2d6a4f]">tu bienestar.</span>
              </h1>

              <div className="w-14 h-0.5 bg-[#2d6a4f] mb-6 rounded-full" />

              <p className="text-gray-500 text-lg leading-relaxed font-light mb-8 max-w-lg">
                Tratamientos de fisioterapia de alta precisión con tecnología de última generación.
                Atención personalizada en el corazón de Madrid.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2d6a4f] hover:bg-[#245a42] text-white font-semibold text-base rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Reservar cita
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/tecnicas"
                  className="inline-flex items-center justify-center px-7 py-4 border-2 border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#f0f4f8] font-semibold text-base rounded-lg transition-colors duration-200"
                >
                  Ver nuestras técnicas
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-[#1a3a5c]">{s.value}</p>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha – imagen */}
            <div className="relative mt-8 lg:mt-0">
              {/* Decoraciones de fondo */}
              <div className="absolute -top-5 -right-5 w-32 h-32 bg-[#f0f4f8] rounded-2xl -z-10" />
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-[#f0f7f4] rounded-xl -z-10" />

              <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://img.freepik.com/fotos-premium/fisioterapeuta-haciendo-tratamiento-curacion-paciente-dolor-espalda-hombre_926199-2319616.jpg?w=2000"
                  alt="Fisioterapeuta realizando tratamiento manual con paciente en FisioElite Madrid"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Tarjeta flotante */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#f0f7f4] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2d6a4f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a3a5c]">Centro autorizado</p>
                  <p className="text-xs text-gray-400 font-light">Fisioterapeutas colegiados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <Benefits />
    </>
  );
}
