import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/AuroraBackground";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Reveal } from "@/components/Reveal";

const BRAND_LOGO =
  "https://vibe.filesafe.space/1790104589144284192/attachments/ff209ccb-716e-4df5-aa39-c4c5016e8731.png";

export const Route = createFileRoute("/gracias")({
  validateSearch: (search: Record<string, unknown>) => ({
    name: (search.name as string) || "",
    phone: (search.phone as string) || "",
  }),
  head: () => ({
    meta: [
      { title: "Reservá tu lugar | Grow Your Money Santa Cruz" },
      {
        name: "description",
        content:
          "Reserva tu pase para el evento de Arbitraje Financiero Internacional en Santa Cruz (10 de Octubre). Cupos limitados y formulario de inscripción.",
      },
      { property: "og:title", content: "Reserva tu lugar · Arbitraje Financiero Santa Cruz" },
      {
        property: "og:description",
        content:
          "Confirmá tu asistencia al evento de Arbitraje Financiero Internacional en Santa Cruz. Completá tus datos para coordinar por WhatsApp y asegurar tu cupo.",
      },
      { property: "og:image", content: BRAND_LOGO },
      { name: "twitter:image", content: BRAND_LOGO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GraciasPage,
});

function GraciasPage() {
  const { name } = Route.useSearch();
  const [userName, setUserName] = useState<string>(name || "");
  const [, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (!userName && typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("grow_lead");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed.fullName) setUserName(parsed.fullName);
        }
      } catch (e) {
        console.warn(e);
      }
    }
  }, [userName]);

  return (
    <div className="min-h-screen text-foreground flex flex-col selection:bg-primary selection:text-primary-foreground font-sans relative">
      <AuroraBackground />

      <header className="border-b border-white/8 bg-background/40 backdrop-blur-xl py-3 sm:py-4 px-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <a href="/" className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <img
              src={BRAND_LOGO}
              alt="Grow Your Money"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain rounded-xl bg-white/5 p-1 border border-white/10 logo-float logo-glow shrink-0"
            />
            <span className="font-semibold text-sm sm:text-base md:text-lg text-white/90 tracking-tight font-heading">
              GROW <span className="text-primary/90 font-normal">YOUR MONEY</span>
            </span>
          </a>
          <span className="neon-tag text-sm sm:text-base px-3 sm:px-4 py-1.5 rounded-full font-medium uppercase tracking-[0.08em] sm:tracking-[0.1em] text-center shrink-0">
            Reserva · 10 de Octubre
          </span>
        </div>
      </header>

      {/* Solicitud de información + cuadro del formulario con la encuesta y el botón de WhatsApp integrado */}
      <ReservationFormSection userName={userName} onSubmitted={() => setIsSubmitted(true)} />

      <footer className="pt-8 pb-6 px-4 border-t border-white/8 bg-black/40 text-center text-sm text-muted-foreground relative z-10 space-y-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src={BRAND_LOGO}
              alt="Grow Your Money"
              className="w-8 h-8 object-contain rounded-xl bg-white/5 p-1 border border-white/10 logo-glow"
            />
            <span className="font-semibold text-white/80 tracking-wide text-sm font-heading">
              GROW YOUR MONEY · ARBITRAJE FINANCIERO INTERNACIONAL
            </span>
          </div>
          <p className="text-gray-300/90 text-xs sm:text-sm font-medium">
            © 2026 Expansión Internacional Evento. Todos los derechos reservados.
          </p>
        </div>

        {/* Descargo de responsabilidad y derechos */}
        <div className="pt-6 border-t border-white/8 max-w-3xl mx-auto space-y-3 text-xs sm:text-sm text-gray-400/80 leading-relaxed font-light">
          <p>
            El contenido de este evento tiene fines educativos y no constituye asesoramiento
            financiero. Toda operación en mercados implica riesgos.
          </p>
          <p>
            Este sitio no pertenece a Meta Platforms, Inc. ni está respaldado por Meta. Facebook™ e
            Instagram™ son marcas registradas de Meta Platforms, Inc.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-gray-400/90 font-light">
            <span className="hover:text-white transition-colors cursor-default">
              Política de Privacidad
            </span>
            <span className="text-white/20">|</span>
            <span className="hover:text-white transition-colors cursor-default">
              Términos y Condiciones
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Sección de solicitud de información + formulario embebido */
function ReservationFormSection({
  userName,
  onSubmitted,
}: {
  userName: string;
  onSubmitted: () => void;
}) {
  return (
    <section className="py-14 sm:py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* ETIQUETA DE FECHA Y LUGAR */}
        <Reveal variant="pop">
          <div className="neon-tag inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm sm:text-base md:text-lg font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em]">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>10 de Octubre</span>
            <span className="text-white/20">·</span>
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
            <span>Plaza Empresarial Manzana 40</span>
          </div>
        </Reveal>

        {/* TÍTULO DE URGENCIA Y RESERVA TU LUGAR REMARCADO */}
        <Reveal variant="title-left" delay={80}>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white/95 font-heading leading-tight tracking-tight max-w-3xl mx-auto mt-7 sm:mt-9 md:mt-11 text-balance">
            Los cupos son limitados.
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-emerald-200 to-accent block mt-2">
              Reserva tu lugar ahora.
            </span>
          </h2>
        </Reveal>

        {/* CTA PARA QUE DEJEN SUS DATOS */}
        <Reveal variant="fade-up" delay={160}>
          <p className="text-gray-300/90 text-base sm:text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light mt-6 sm:mt-8 md:mt-10">
            Dejá tus datos para recibir la información completa del evento, el desglose del programa
            y acceder a la asistencia personalizada de nuestro equipo.
          </p>
        </Reveal>

        {/* CUADRO DEL FORMULARIO CON LA ENCUESTA Y BOTÓN DENTRO */}
        <Reveal variant="pop" delay={120}>
          <div className="mt-8 sm:mt-10 md:mt-12 w-full">
            <ApplicationForm userName={userName} onSubmitted={onSubmitted} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
