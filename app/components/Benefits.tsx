const items = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Diagnóstico Personalizado",
    desc: "Cada paciente es único. Realizamos una evaluación biomecánica completa para identificar la raíz de tu problema y diseñar un plan de tratamiento exclusivo para ti.",
    tag: "Evaluación en 60 min",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Tecnología de Vanguardia",
    desc: "Diatermia, láser de alta potencia, ondas de choque y electroestimulación. Equipos de última generación para resultados más rápidos y efectivos.",
    tag: "Equipos certificados",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Resultados Garantizados",
    desc: "Protocolos clínicamente validados y seguimiento continuo de tu evolución. Si no ves mejoras en las primeras 3 sesiones, te devolvemos el dinero.",
    tag: "Garantía de resultados",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[var(--color-secondary)] bg-[var(--color-secondary-light)] border border-[var(--color-secondary-border)] rounded-full mb-5 uppercase tracking-widest">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] mb-5 leading-tight">
            Atención médica de primer nivel.<br />
            <span className="text-[var(--color-secondary)]">Resultados que se sienten.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Combinamos ciencia, tecnología y experiencia para devolverte la vida que mereces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[var(--color-secondary)]/20"
            >
              <div className="w-13 h-13 w-14 h-14 rounded-xl bg-[var(--color-secondary-light)] text-[var(--color-secondary)] flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3 leading-snug">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">{item.desc}</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide">
                <span className="w-4 h-px bg-[var(--color-secondary)]" />
                {item.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
