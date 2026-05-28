const stats = [
  { value: "2.000+", label: "Pacientes tratados" },
  { value: "8 años", label: "De experiencia" },
  { value: "98%", label: "Satisfacción" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #1a3a5c 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Soft blue wash top-right */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#f0f4f8] via-transparent to-transparent" />
        {/* Soft green accent bottom-left */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#f0f7f4] via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2d6a4f]/20 bg-[#f0f7f4] text-[#2d6a4f] text-sm font-medium mb-8 tracking-wide">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          Clínica de Fisioterapia Premium · Madrid
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-7">
          <span className="block text-[#1a3a5c]">Recupera tu cuerpo.</span>
          <span className="block text-[#2d6a4f] mt-1">Vive sin dolor.</span>
        </h1>

        {/* Divider line */}
        <div className="w-16 h-0.5 bg-[#2d6a4f] mx-auto mb-7 rounded-full" />

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed font-light">
          Tratamientos de fisioterapia de alta precisión con tecnología de
          última generación. Más de{" "}
          <strong className="text-gray-700 font-semibold">2.000 pacientes</strong>{" "}
          recuperados en el corazón de Madrid.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-4 bg-[#2d6a4f] hover:bg-[#245a42] text-white font-semibold text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            Reserva tu primera consulta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#precios"
            className="w-full sm:w-auto px-8 py-4 border-2 border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#f0f4f8] font-semibold text-base rounded-lg transition-all duration-200 flex items-center justify-center"
          >
            Ver planes y precios
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1.5 p-6 rounded-xl bg-white border border-gray-200 shadow-sm"
            >
              <span className="text-3xl font-bold text-[#1a3a5c]">{s.value}</span>
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
