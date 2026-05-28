"use client";
import { useState, type FormEvent } from "react";

const info = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Dirección",
    text: "Calle Serrano 45, 2ª planta\n28001 Madrid",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Teléfono",
    text: "+34 91 000 00 00\nWhatsApp disponible",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Horario",
    text: "L–V: 8:00 – 20:00\nSábados: 9:00 – 14:00",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    text: "hola@fisioelite.es\nRespuesta en menos de 2h",
  },
];

interface ContactProps {
  hideHeader?: boolean;
}

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbzCtz0NQzG_wwE3bJP7KGaqOgjBC5H8kW1D_ViL1VwptqEwni-CVFOcvHARYKqs9EnRFQ/exec";

export default function Contact({ hideHeader = false }: ContactProps) {
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      console.log("Enviando formulario a Google Sheets:", form);

      await fetch(SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          mensaje: form.mensaje,
        }),
      });

      // Con no-cors la respuesta es opaca — si el fetch no lanza excepción los datos llegaron
      console.log("Formulario enviado correctamente a Google Sheets");
      setSent(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Error al enviar el formulario:", err);
      setError("No se pudo enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos por teléfono.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#1a3a5c]/40 focus:ring-1 focus:ring-[#1a3a5c]/20 transition-all duration-200 font-light";

  return (
    <section id="contacto" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold text-[#2d6a4f] bg-[#f0f7f4] border border-[#c3e0d6] rounded-full mb-5 uppercase tracking-widest">
              Contacto
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1a3a5c] mb-5 leading-tight">
              Dé el primer paso{" "}
              <span className="text-[#2d6a4f]">hoy</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed font-light">
              Reserva tu primera consulta sin compromiso. Le contactamos en menos de 2 horas.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Formulario */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#f0f7f4] border border-[#c3e0d6] flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7 text-[#2d6a4f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1a3a5c] mb-2">Mensaje recibido</h3>
                <p className="text-gray-500 text-sm font-light">
                  Le contactaremos en menos de 2 horas en horario de clínica.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Nombre *</label>
                    <input
                      type="text"
                      required
                      placeholder="Su nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="su@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Describa brevemente su lesión o consulta..."
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#2d6a4f] hover:bg-[#245a42] disabled:bg-[#2d6a4f]/60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-sm hover:shadow-md tracking-wide"
                >
                  {loading ? "Enviando..." : "Enviar solicitud de cita →"}
                </button>

                <p className="text-gray-400 text-xs text-center font-light">
                  Sin compromiso · Respuesta en menos de 2h · Datos protegidos por RGPD
                </p>
              </form>
            )}
          </div>

          {/* Info de la clínica */}
          <div className="space-y-3">
            {info.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f0f7f4] text-[#2d6a4f] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a3a5c] mb-1">{item.title}</p>
                  <p className="text-sm text-gray-500 whitespace-pre-line font-light">{item.text}</p>
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/34910000000?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 rounded-xl bg-white border border-gray-200 hover:border-[#2d6a4f]/30 hover:bg-[#f0f7f4] transition-all duration-200 shadow-sm"
            >
              <div className="w-10 h-10 rounded-lg bg-[#f0faf4] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1a3a5c]">Escríbanos por WhatsApp</p>
                <p className="text-xs text-gray-400 font-light">Respuesta inmediata en horario de clínica</p>
              </div>
              <svg className="w-4 h-4 text-gray-300 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
