// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE CLÍNICA
// Para adaptar esta web a un nuevo cliente, edita solo este archivo.
// ─────────────────────────────────────────────────────────────

const config = {

  // ── Identidad ────────────────────────────────────────────
  clinicName: "FisioElite",
  // Logo en dos colores: logoPart1 en color primario, logoPart2 en color secundario
  logoPart1: "Fisio",
  logoPart2: "Elite",
  clinicCity: "Madrid",
  tagline: "Clínica de Fisioterapia Premium",
  description:
    "Clínica de fisioterapia premium en Madrid. Tratamientos personalizados con tecnología de última generación. Más de 2.000 pacientes recuperados.",
  registroSanitario: "B-12345-MA",
  colegio: "Colegio de Fisioterapeutas de Madrid",
  foundingYear: 2025,

  // ── Contacto ─────────────────────────────────────────────
  phone: "+34 91 000 00 00",
  phoneHref: "tel:+34910000000",
  email: "hola@fisioelite.es",

  // ── WhatsApp ──────────────────────────────────────────────
  // Solo el número sin "+" ni espacios: código de país + número
  whatsappNumber: "34910000000",

  // ── Dirección ────────────────────────────────────────────
  addressStreet: "C/ Serrano 45, 2ª planta",
  addressCity: "28001 Madrid",

  // ── Horario ───────────────────────────────────────────────
  scheduleWeekdays: "L–V: 8:00–20:00",
  scheduleSaturday: "Sábados: 9:00–14:00",

  // ── Colores de marca ──────────────────────────────────────
  // colorPrimary y colorSecondary son los dos colores principales.
  // Los demás se derivan de ellos (versiones más oscuras y más claras).
  colorPrimary: "#1a3a5c",
  colorPrimaryDark: "#142d48",
  colorPrimaryLight: "#f0f4f8",
  colorSecondary: "#2d6a4f",
  colorSecondaryDark: "#245a42",
  colorSecondaryLight: "#f0f7f4",
  colorSecondaryBorder: "#c3e0d6",
  colorSecondaryAccent: "#7ecfc0",

  // ── Estadísticas (hero) ───────────────────────────────────
  stats: [
    { value: "2.000+", label: "Pacientes tratados" },
    { value: "8 años", label: "De experiencia" },
    { value: "98%", label: "Satisfacción" },
  ],

  // ── Google Sheets (formulario de contacto) ────────────────
  sheetsUrl:
    "https://script.google.com/macros/s/AKfycbzCtz0NQzG_wwE3bJP7KGaqOgjBC5H8kW1D_ViL1VwptqEwni-CVFOcvHARYYKqs9EnRFQ/exec",
};

export default config;
