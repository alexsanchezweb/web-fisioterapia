import PageHeader from "../components/PageHeader";

const categories = [
  {
    title: "Lesiones Deportivas",
    description: "Tratamiento especializado para deportistas de todos los niveles, desde la lesión aguda hasta la vuelta al entrenamiento.",
    conditions: [
      "Contracturas y sobrecargas musculares",
      "Roturas fibrilares parciales y totales",
      "Tendinitis y tendinopatías",
      "Esguinces de tobillo y rodilla",
      "Síndrome del corredor",
      "Lesiones del manguito rotador",
    ],
  },
  {
    title: "Problemas de Espalda",
    description: "Abordamos las patologías más frecuentes de la columna vertebral con protocolos clínicos basados en la evidencia.",
    conditions: [
      "Cervicalgia y tortícolis",
      "Lumbalgia aguda y crónica",
      "Hernias discales cervicales y lumbares",
      "Ciática y síndrome piriforme",
      "Estenosis de canal vertebral",
      "Escoliosis y hipercifosis",
    ],
  },
  {
    title: "Fisioterapia Neurológica",
    description: "Rehabilitación funcional para pacientes con afecciones del sistema nervioso central y periférico.",
    conditions: [
      "Parálisis facial periférica",
      "Secuelas de ictus y ACV",
      "Esclerosis múltiple",
      "Enfermedad de Parkinson",
      "Neuropatías periféricas",
      "Síndrome del túnel carpiano",
    ],
  },
  {
    title: "Reumatología",
    description: "Manejo conservador del dolor y mantenimiento de la funcionalidad en enfermedades reumáticas e inflamatorias.",
    conditions: [
      "Artrosis de rodilla, cadera y manos",
      "Artritis reumatoide",
      "Fibromialgia",
      "Espondilitis anquilosante",
      "Gota y pseudogota",
      "Polimialgia reumática",
    ],
  },
  {
    title: "Suelo Pélvico",
    description: "Unidad especializada en disfunciones del suelo pélvico femenino y masculino, embarazo y postparto.",
    conditions: [
      "Incontinencia urinaria de esfuerzo",
      "Prolapsos de órganos pélvicos",
      "Preparación al parto",
      "Rehabilitación postparto y post-cesárea",
      "Dispareunia y vaginismo",
      "Dolor pélvico crónico",
    ],
  },
];

export const metadata = {
  title: "Patologías Tratadas | FisioElite Madrid",
  description:
    "Lesiones deportivas, problemas de espalda, fisioterapia neurológica, reumatología y suelo pélvico. Tratamos más de 50 patologías en nuestra clínica de Madrid.",
};

export default function PatologiasPage() {
  return (
    <>
      <PageHeader
        label="Patologías"
        title={
          <>
            ¿Qué podemos{" "}
            <span className="text-[#2d6a4f]">tratarte?</span>
          </>
        }
        subtitle="Abordamos más de 50 patologías con protocolos clínicos personalizados. Si no encuentras tu dolencia, consúltanos — seguro podemos ayudarte."
      />

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
              >
                <h2 className="text-lg font-bold text-[#1a3a5c] mb-2">{cat.title}</h2>
                <p className="text-gray-400 text-sm font-light mb-5 leading-relaxed">
                  {cat.description}
                </p>
                <ul className="space-y-2.5">
                  {cat.conditions.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 text-[#2d6a4f] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 font-light">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#1a3a5c] rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">¿No encuentras tu patología?</h3>
            <p className="text-white/60 text-sm font-light mb-6 max-w-lg mx-auto">
              Contáctanos y uno de nuestros fisioterapeutas te orientará sobre el tratamiento más adecuado para tu caso.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center px-7 py-3.5 bg-[#2d6a4f] hover:bg-[#245a42] text-white font-semibold text-sm rounded-lg transition-colors duration-200 shadow-sm"
            >
              Consultar mi caso →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
