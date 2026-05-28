const plans = [
  {
    name: "Sesión Individual",
    price: "65",
    period: "/sesión",
    desc: "Perfecto para necesidades puntuales o para conocernos sin compromiso.",
    features: [
      "1 sesión de 60 minutos",
      "Evaluación inicial incluida",
      "Plan de ejercicios personalizado",
      "Seguimiento por WhatsApp 7 días",
    ],
    cta: "Reservar sesión",
    popular: false,
  },
  {
    name: "Bono 5 Sesiones",
    price: "275",
    period: "/bono",
    originalPrice: "325",
    desc: "El más elegido. Ideal para lesiones crónicas y tratamientos completos.",
    features: [
      "5 sesiones de 60 minutos",
      "Evaluación + seguimiento semanal",
      "Informe de progreso detallado",
      "Soporte prioritario por WhatsApp",
      "Acceso a programa de ejercicios online",
    ],
    cta: "Empezar ahora",
    popular: true,
  },
  {
    name: "Plan Mensual",
    price: "480",
    period: "/mes",
    desc: "Para deportistas y pacientes que necesitan atención continua.",
    features: [
      "Hasta 2 sesiones por semana",
      "Cita preferente siempre disponible",
      "Plan nutricional deportivo",
      "Acceso a app de seguimiento",
      "Revisión mensual con informe",
      "Descuentos en servicios adicionales",
    ],
    cta: "Contactar",
    popular: false,
  },
];

interface PricingProps {
  hideHeader?: boolean;
}

export default function Pricing({ hideHeader = false }: PricingProps) {
  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#2d6a4f] bg-[#f0f7f4] border border-[#c3e0d6] rounded-full mb-5 uppercase tracking-widest">
              Precios
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a5c] mb-5 leading-tight">
              Transparencia total.<br />
              <span className="text-[#2d6a4f]">Sin sorpresas.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed font-light">
              Elige el plan que mejor se adapte a tus necesidades.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-[#1a3a5c] shadow-lg"
                  : "border border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="bg-[#1a3a5c] px-8 py-3 flex items-center justify-between">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Más popular</span>
                  <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}

              <div className="bg-white p-8">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#1a3a5c] mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{plan.desc}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    {plan.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">€{plan.originalPrice}</span>
                    )}
                    <span className="text-5xl font-bold text-[#1a3a5c]">€{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>
                  {plan.originalPrice && (
                    <p className="text-[#2d6a4f] text-xs font-semibold mt-1.5">
                      Ahorro de €{Number(plan.originalPrice) - Number(plan.price)} incluido
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-[#2d6a4f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 font-light">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contacto"
                  className={`block w-full py-3.5 rounded-lg font-semibold text-sm text-center transition-all duration-200 ${
                    plan.popular
                      ? "bg-[#1a3a5c] hover:bg-[#142d48] text-white shadow-sm hover:shadow-md"
                      : "border-2 border-[#1a3a5c] text-[#1a3a5c] hover:bg-[#f0f4f8]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8 font-light">
          ¿Tienes seguro médico? Consulta la cobertura con nosotros. · Aceptamos tarjeta, Bizum y transferencia.
        </p>
      </div>
    </section>
  );
}
