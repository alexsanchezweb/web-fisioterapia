import Image from "next/image";
import PageHeader from "../components/PageHeader";

const team = [
  {
    name: "Alejandro Martín",
    specialty: "Fisioterapia Deportiva",
    description: "Especialista en lesiones musculoesqueléticas de alto rendimiento y rehabilitación de atletas.",
    quote: "La recuperación bien guiada multiplica el rendimiento.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
    alt: "Alejandro Martín, fisioterapeuta deportivo",
    initials: "AM",
  },
  {
    name: "Isabel Sánchez Vega",
    specialty: "Osteopatía y Columna",
    description: "Experta en tratamientos osteopáticos para disfunciones de columna y trastornos craneomandibulares.",
    quote: "Trato la causa, no solo el síntoma.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80",
    alt: "Isabel Sánchez, osteópata y fisioterapeuta",
    initials: "IS",
  },
  {
    name: "Miguel Torres García",
    specialty: "Fisioterapia Neurológica",
    description: "Dedicado a la rehabilitación neurológica y geriatría, con más de 10 años de experiencia clínica.",
    quote: "Cada pequeño progreso es un gran paso hacia la recuperación.",
    image: "https://images.unsplash.com/photo-1611608822650-925c227ef4d2?w=800&q=80",
    alt: "Miguel Torres, fisioterapeuta neurológico",
    initials: "MT",
  },
  {
    name: "Carmen López Ruiz",
    specialty: "Suelo Pélvico y Embarazo",
    description: "Especialista en fisioterapia uroginecológica, recuperación postparto y atención durante el embarazo.",
    quote: "Acompañar cada etapa vital de mis pacientes es mi mayor recompensa.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    alt: "Carmen López, fisioterapeuta de suelo pélvico",
    initials: "CL",
  },
];

import config from "../../config.js";

export const metadata = {
  title: `Nuestro Equipo | ${config.clinicName} ${config.clinicCity}`,
  description: `Conoce a los fisioterapeutas colegiados de ${config.clinicName} ${config.clinicCity}: especialistas en fisioterapia deportiva, osteopatía, neurológica y suelo pélvico.`,
};

export default function EquipoPage() {
  return (
    <>
      <PageHeader
        label="Nuestro equipo"
        title={
          <>
            Profesionales que{" "}
            <span className="text-[#2d6a4f]">marcan la diferencia</span>
          </>
        }
        subtitle="Un equipo de fisioterapeutas colegiados, con formación de posgrado y años de experiencia clínica especializada."
      />

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Foto */}
                <div className="relative aspect-square w-full">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Info */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-base font-semibold text-[var(--color-primary)] leading-snug mb-1">
                    {member.name}
                  </h2>
                  <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide mb-3">
                    {member.specialty}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed font-light flex-1 mb-4">
                    {member.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 italic font-light leading-relaxed">
                      &ldquo;{member.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center p-10 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">
              ¿No sabe con quién empezar?
            </h3>
            <p className="text-gray-500 font-light mb-6">
              Cuéntenos su caso y le asignaremos el especialista más adecuado para usted.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-semibold text-sm rounded-lg transition-colors duration-200 shadow-sm"
            >
              Contactar con la clínica
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
