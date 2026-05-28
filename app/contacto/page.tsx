import Contact from "../components/Contact";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "Contacto y Cita | FisioElite Madrid",
  description:
    "Reserva tu cita en FisioElite Madrid. Formulario de contacto, teléfono y dirección de la clínica. C/ Serrano 45, Madrid.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        label="Reservar cita"
        title={
          <>
            Dé el primer paso{" "}
            <span className="text-[#2d6a4f]">hacia su recuperación</span>
          </>
        }
        subtitle="Rellene el formulario y le contactaremos en menos de 2 horas en horario de clínica."
      />
      <Contact hideHeader />
    </>
  );
}
