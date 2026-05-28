import Pricing from "../components/Pricing";
import PageHeader from "../components/PageHeader";

export const metadata = {
  title: "Precios y Planes | FisioElite Madrid",
  description:
    "Consulta los planes y tarifas de fisioterapia de FisioElite Madrid. Sesión individual, bono de 5 sesiones y plan mensual con precio transparente.",
};

export default function PreciosPage() {
  return (
    <>
      <PageHeader
        label="Planes y tarifas"
        title={
          <>
            Precios claros.{" "}
            <span className="text-[#2d6a4f]">Sin sorpresas.</span>
          </>
        }
        subtitle="Elige el plan que mejor se adapte a tus necesidades. Todos incluyen evaluación inicial y atención personalizada."
      />
      <Pricing hideHeader />
    </>
  );
}
