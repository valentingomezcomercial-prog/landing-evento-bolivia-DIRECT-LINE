import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      q: "¿Qué es Expansión Internacional?",
      a: "El encuentro empresarial co-creado entre Grow Your Money y Zona Virtual, para llevar tu negocio y tu capital al ámbito internacional.",
    },
    {
      q: "¿Qué temas se desarrollan?",
      a: "Estructura empresarial internacional, banca global y pasarelas de pago; operativa OTC y arbitraje P2P entre mercados; y gestión patrimonial con finanzas personales e inversiones en bolsa.",
    },
    {
      q: "¿Qué es el arbitraje financiero internacional?",
      a: "Aprovechar diferencias de precio entre mercados para mover divisas con menos costos y proteger tu capital en moneda fuerte.",
    },
    {
      q: "¿Para quién es?",
      a: "Exportadores, importadores, real estate, traders y empresarios que operan con dólares, cripto o pagos internacionales.",
    },
    {
      q: "¿Necesito conocimientos avanzados?",
      a: "No. Vamos de lo conceptual a lo operativo, con casos reales y replicables.",
    },
    {
      q: "¿Dónde y cuándo se realiza?",
      a: "Sábado 10 de octubre, de 14:30 a 18:30 hs, en la Torre Empresarial Manzana 40 (Equipetrol, Santa Cruz).",
    },
    {
      q: "¿Cómo reservo mi lugar?",
      a: "Completás tu solicitud y te confirmamos por WhatsApp. Aforo de 70 lugares, ingreso solo con entrada confirmada.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-20 px-4 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14 flex flex-col items-center">
          <Reveal variant="title-left" delay={80}>
            <h2 className="metallic-text text-3xl sm:text-4xl md:text-6xl font-bold font-heading tracking-tight pb-2">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={160}>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto font-light mt-5 sm:mt-6 md:mt-7">
              Todo lo que necesitás saber antes de asegurar tu lugar en la sala.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} variant="fade-up" delay={i * 80}>
              <div className="glass-card tilt-3d tilt-3d-hover glow-border rounded-2xl sm:rounded-[1.75rem] p-5 sm:p-6 md:p-7 border border-white/10 relative overflow-hidden">
                {/* Scanline futurista sutil */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-linear-to-b from-primary/12 to-transparent"
                  style={{
                    animation: "scanline 6s ease-in-out infinite",
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
                <h3 className="metallic-text font-heading font-semibold text-lg sm:text-xl md:text-2xl leading-snug relative z-10">
                  {faq.q}
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300/90 leading-relaxed font-light border-t border-white/8 pt-3.5 relative z-10">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón de reserva post Q&A (más grande que el primero) */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
          <Reveal variant="pop" delay={150}>
            <a
              href="/gracias"
              className="glass-button group w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 bg-linear-to-r from-primary/90 via-emerald-400/90 to-accent/90 text-primary-foreground font-semibold px-8 sm:px-14 md:px-16 py-5 sm:py-6 md:py-7 rounded-3xl hover:scale-[1.03] active:scale-[0.98] transition-all uppercase tracking-[0.08em] sm:tracking-[0.12em] shadow-[0_20px_50px_-10px_rgba(34,197,94,0.35)] hover:shadow-[0_25px_60px_-10px_rgba(34,197,94,0.5)] cursor-pointer text-center"
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="text-white text-lg sm:text-2xl md:text-3xl font-bold tracking-tight">
                  Reservá tu lugar
                </span>
                <span className="text-black font-extrabold text-base sm:text-xl md:text-2xl normal-case tracking-wider whitespace-nowrap mt-2 [text-shadow:0_0_4px_rgba(255,255,255,0.95),0_0_10px_rgba(255,255,255,0.85),0_0_20px_rgba(255,255,255,0.7),0_0_30px_rgba(255,255,255,0.6)] animate-pulse">
                  (Solo 70 lugares)
                </span>
              </div>
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 text-white group-hover:translate-x-1.5 transition-transform" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
