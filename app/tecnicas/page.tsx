import Image from "next/image";
import PageHeader from "../components/PageHeader";

const techniques = [
  {
    title: "Fisioterapia Manual",
    description:
      "La fisioterapia manual utiliza técnicas especializadas —movilizaciones articulares, manipulaciones y masaje terapéutico— para restaurar la función del aparato locomotor. Permite abordar con precisión contracturas musculares, rigideces articulares y dolencias crónicas. El fisioterapeuta adapta cada técnica a las necesidades del paciente para optimizar los resultados.",
    image: "https://img.freepik.com/fotos-premium/fisioterapeuta-dando-masaje-espalda-paciente_107420-50473.jpg?w=2000",
    alt: "Fisioterapeuta aplicando técnica manual en la espalda de un paciente",
  },
  {
    title: "Osteopatía",
    description:
      "La osteopatía concibe el cuerpo como una unidad funcional integrada. Mediante técnicas de manipulación suave, el osteópata identifica y corrige disfunciones estructurales que causan dolor o limitaciones de movimiento. Especialmente eficaz en dolores de espalda, cervicalgias, cefaleas tensionales y trastornos craneomandibulares.",
    image: "https://img.freepik.com/fotos-premium/fisioterapeuta-haciendo-tratamiento-curacion-paciente-dolor-espalda-hombre_926199-2319730.jpg?w=1380",
    alt: "Tratamiento osteopático con movilización de la columna vertebral",
  },
  {
    title: "Punción Seca",
    description:
      "La punción seca es una técnica mínimamente invasiva que inserta agujas de acupuntura en puntos gatillo musculares para liberar tensión acumulada. Altamente efectiva en dolor muscular crónico, contracturas refractarias y síndrome de dolor miofascial. Produce una respuesta local que acelera la recuperación del tejido muscular.",
    image: "https://vivefisioterapia.com/wp-content/uploads/2025/09/Puncion-Seca-1024x683.png",
    alt: "Aplicación de punción seca con agujas de acupuntura terapéutica",
  },
  {
    title: "Electroterapia",
    description:
      "La electroterapia emplea corrientes eléctricas de baja y media frecuencia con fines terapéuticos. Incluye TENS, corrientes interferenciales y electroestimulación muscular, que alivian el dolor, reducen la inflamación y favorecen la regeneración tisular. Nuestros equipos de última generación garantizan tratamientos seguros y precisos.",
    image: "http://www.fisioterapiavtoledo.com/galeria/tecnicas/tens---fisioterapiavtoledo.com_26_1.jpg",
    alt: "Equipo de electroterapia aplicado sobre extremidades del paciente",
  },
  {
    title: "Pilates Terapéutico",
    description:
      "El pilates terapéutico combina el método Pilates con la rehabilitación fisioterapéutica. Trabajamos la estabilidad del core, la postura corporal y la propiocepción de forma progresiva y segura. Especialmente beneficioso en patologías de columna, hernias discales, recuperación postoperatoria y prevención de lesiones.",
    image: "https://clinicamarin.es/wp-content/uploads/2024/05/PILATES-1536x1024.jpg",
    alt: "Sesión de pilates terapéutico con reformer en clínica de fisioterapia",
  },
  {
    title: "Vendaje Neuromuscular",
    description:
      "El vendaje neuromuscular —kinesiotaping— utiliza bandas elásticas adhesivas aplicadas sobre la piel para influir en la función muscular, la circulación y la estabilidad articular. Facilita la recuperación de lesiones, reduce el edema y puede llevarse varios días sin limitar el movimiento. Ampliamente usado en deportistas de élite.",
    image: "https://i.pinimg.com/originals/be/20/2d/be202d7cd065ba745e98f5712d50da9f.jpg",
    alt: "Vendaje neuromuscular kinesiotaping aplicado en rodilla de deportista",
  },
];

import config from "../../config.js";

export const metadata = {
  title: `Técnicas Terapéuticas | ${config.clinicName} ${config.clinicCity}`,
  description: `Fisioterapia manual, osteopatía, punción seca, electroterapia, pilates terapéutico y vendaje neuromuscular. Tratamientos especializados en ${config.clinicCity}.`,
};

export default function TecnicasPage() {
  return (
    <>
      <PageHeader
        label="Nuestras técnicas"
        title={
          <>
            Tratamientos especializados{" "}
            <span className="text-[#2d6a4f]">respaldados por la ciencia</span>
          </>
        }
        subtitle="Aplicamos las técnicas más eficaces de la fisioterapia moderna, adaptadas individualmente a cada paciente y patología."
      />

      <section className="py-16 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((t) => (
              <article
                key={t.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                {/* Imagen */}
                <div className="relative h-52 w-full flex-shrink-0">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Contenido */}
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-3 leading-snug">
                    {t.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed font-light flex-1">
                    {t.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
