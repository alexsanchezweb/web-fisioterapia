const testimonials = [
  {
    name: "Laura Martínez",
    role: "Corredora de maratón",
    initials: "LM",
    text: "Llevaba 6 meses con dolor de rodilla que no me dejaba entrenar. En FisioElite me hicieron una evaluación completa y en solo 4 sesiones volví a correr sin dolor. ¡Increíble el nivel de profesionalidad y trato!",
  },
  {
    name: "Carlos Rodríguez",
    role: "Ejecutivo, 42 años",
    initials: "CR",
    text: "La hernia discal me tenía con dolores insoportables. El equipo de FisioElite diseñó un plan específico para mí. Hoy, 3 meses después, he vuelto a mi vida normal sin operarme. Son simplemente los mejores.",
  },
  {
    name: "Ana García",
    role: "Jugadora de pádel",
    initials: "AG",
    text: "Codo de tenista que parecía no tener solución. Probé con otros fisios sin éxito. En FisioElite usaron ondas de choque y electroestimulación. En 6 sesiones, problema resuelto. 100% recomendables.",
  },
];

const badges = [
  "Fisioterapeutas colegiados",
  "Centro sanitario autorizado",
  "+2.000 pacientes satisfechos",
  "4.9/5 en Google Reviews",
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#2d6a4f] bg-[#f0f7f4] border border-[#c3e0d6] rounded-full mb-5 uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a5c] mb-5 leading-tight">
            Lo que dicen nuestros{" "}
            <span className="text-[#2d6a4f]">pacientes</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed font-light">
            Historias reales de personas que recuperaron su calidad de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1 font-light">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1a3a5c] flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#1a3a5c] font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 text-gray-400 text-sm">
              <svg className="w-4 h-4 text-[#2d6a4f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
