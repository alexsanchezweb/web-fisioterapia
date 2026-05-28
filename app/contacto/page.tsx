import Contact from "../components/Contact";
import PageHeader from "../components/PageHeader";
import config from "../../config.js";

export const metadata = {
  title: `Contacto y Cita | ${config.clinicName} ${config.clinicCity}`,
  description: `Reserva tu cita en ${config.clinicName} ${config.clinicCity}. Formulario de contacto, teléfono y dirección de la clínica. ${config.addressStreet}, ${config.clinicCity}.`,
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
