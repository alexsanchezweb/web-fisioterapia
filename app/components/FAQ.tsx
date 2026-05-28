"use client";
import { useState } from "react";

const faqs = [
  {
    q: "¿Necesito derivación médica para acudir a la clínica?",
    a: "No es necesaria. Puedes acudir directamente sin derivación. Si tienes informes o pruebas diagnósticas previas (RMN, radiografías, etc.), tráelos a la primera sesión para facilitar el diagnóstico.",
  },
  {
    q: "¿Cuántas sesiones necesitaré?",
    a: "Depende de cada caso. Tras la evaluación inicial, te daremos una estimación realista. Los problemas agudos suelen resolverse en 3-6 sesiones. Las lesiones crónicas pueden requerir más. Siempre trabajamos con objetivos claros y medibles.",
  },
  {
    q: "¿Los tratamientos duelen?",
    a: "La mayoría de técnicas son indoloras o con molestias mínimas y tolerables. Algunas como las ondas de choque pueden causar ligera incomodidad, pero siempre adaptamos la intensidad a tu umbral de tolerancia. Tu comodidad es prioritaria.",
  },
  {
    q: "¿Aceptáis seguros médicos?",
    a: "Trabajamos con varios seguros médicos privados. Consulta con nosotros para verificar si el tuyo tiene cobertura. También trabajamos como pago directo con precios muy competitivos.",
  },
  {
    q: "¿Cuál es el horario de la clínica?",
    a: "Lunes a viernes de 8:00 a 20:00 h. Sábados de 9:00 a 14:00 h. Puedes reservar tu cita a través de nuestra web, por WhatsApp o llamando directamente.",
  },
  {
    q: "¿Hacéis fisioterapia a domicilio?",
    a: "Sí, ofrecemos servicio de fisioterapia a domicilio en Madrid capital para casos en los que el paciente no pueda desplazarse. Consulta disponibilidad y tarifas específicas.",
  },
  {
    q: "¿Puedo cancelar o cambiar mi cita?",
    a: "Sí, con al menos 24 horas de antelación sin coste. Las cancelaciones con menos de 24 horas o las no presentaciones tienen un cargo del 50% de la sesión. Entendemos los imprevistos, por eso pedimos que nos avises lo antes posible.",
  },
  {
    q: "¿Qué especialidades trata la clínica?",
    a: "Somos especialistas en fisioterapia deportiva, lesiones de columna vertebral, neurología, geriatría, suelo pélvico y fisioterapia durante el embarazo. Todo nuestro equipo tiene más de 5 años de experiencia clínica especializada.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#2d6a4f] bg-[#f0f7f4] border border-[#c3e0d6] rounded-full mb-5 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a5c] mb-5 leading-tight">
            Preguntas{" "}
            <span className="text-[#2d6a4f]">frecuentes</span>
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Todo lo que necesitas saber antes de tu primera visita.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? "border-[#1a3a5c]/25 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer bg-white"
              >
                <span
                  className={`font-medium text-sm sm:text-base transition-colors ${
                    open === i ? "text-[#1a3a5c]" : "text-gray-700"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "border-[#1a3a5c] bg-[#1a3a5c] text-white rotate-45"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-6 pb-5 bg-white">
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
