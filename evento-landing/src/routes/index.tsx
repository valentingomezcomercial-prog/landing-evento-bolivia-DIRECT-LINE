import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  ArrowRight,
  Play,
  Flame,
  ChevronDown,
  Volume2,
  MapPin,
} from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { AuroraBackground } from "@/components/AuroraBackground";
import { BenefitsHypeSection } from "@/components/EventFeatures";
import { FaqSection } from "@/components/FaqSection";

const BRAND_LOGO =
  "https://vibe.filesafe.space/1790104589144284192/attachments/ff209ccb-716e-4df5-aa39-c4c5016e8731.png";

// Video de fondo del Hero (temática de finanzas internacionales y negocios)
const HERO_BACKGROUND_VIDEO =
  "https://assets.cdn.filesafe.space/IpA09XxQJpMrQaBk4VEP/media/6abc0fae7f8e19690f55f921.mp4";

// Video VSL oficial del evento
const EVENT_VIDEO =
  "https://assets.cdn.filesafe.space/IpA09XxQJpMrQaBk4VEP/media/6ac08dbf7d735ea2a1ed25ee.mov";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Grow Your Money | Arbitraje Financiero Santa Cruz",
      },
      {
        name: "description",
        content:
          "10 de Octubre · 14:30–18:30 · Manzana 40 - Plaza Empresarial, Santa Cruz. Primera Edición de Arbitraje Financiero Internacional para Negocios y Comercio Global.",
      },
      {
        property: "og:title",
        content: "Grow Your Money - Arbitraje Financiero Internacional Santa Cruz",
      },
      {
        property: "og:description",
        content:
          "¿Tu negocio opera internacionalmente y estás en Santa Cruz? Si cobrás, pagás o movés dólares entre países y todavía no tenés una estructura internacional propia, estás dejando pasar oportunidades sobre la mesa.",
      },
      { property: "og:image", content: BRAND_LOGO },
      { name: "twitter:image", content: BRAND_LOGO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground font-sans relative">
      {/* Fondo orgánico estilo aurora mesh con movimiento lento en toda la página */}
      <AuroraBackground />

      <UrgencyBar />
      <Navbar />

      {/* 1. ETIQUETA TITULO DEL EVENTO + TITULO ANICHAMIENTO + SUBTITULO + ETIQUETAS FECHA/HORA/LUGAR + CTA VIDEO + VIDEO + 1ER BOTON RESERVA */}
      <HeroSection />

      {/* 2. BENEFICIOS (QUÉ VAS A APRENDER, QUÉ TE LLEVAS, POR QUÉ DEBERÍAS IR - HYPE) */}
      <Reveal variant="fade-up">
        <BenefitsHypeSection />
      </Reveal>

      {/* Q&A - Preguntas frecuentes al final de la página */}
      <Reveal variant="fade-up">
        <FaqSection />
      </Reveal>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function UrgencyBar() {
  return (
    <div className="bg-linear-to-r from-primary/80 via-primary/60 to-accent/80 text-primary-foreground text-sm sm:text-base md:text-lg font-semibold py-3 px-3 text-center tracking-wide flex items-center justify-center gap-2 backdrop-blur-md">
      <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 animate-pulse shrink-0" />
      <span className="text-white/90 leading-snug">
        <strong>10 DE OCTUBRE · SANTA CRUZ</strong> — Cupos limitados
      </span>
    </div>
  );
}

function Navbar() {
  return (
    <header className="border-b border-white/8 bg-background/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 h-14 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Marca / Logo */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
          <img
            src={BRAND_LOGO}
            alt="Grow Your Money Logo"
            className="w-7 h-7 sm:w-10 sm:h-10 object-contain rounded-xl sm:rounded-2xl bg-white/5 p-1 border border-white/10 logo-float logo-glow shrink-0"
          />
          <div className="min-w-0">
            <span className="font-bold text-sm sm:text-lg md:text-xl tracking-tight block text-white/95 font-heading leading-tight truncate">
              GROW <span className="text-primary font-normal">YOUR MONEY</span>
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] text-primary/80 uppercase font-semibold block truncate">
              Arbitraje Internacional
            </span>
          </div>
        </a>

        {/* Guía / Glosario central (Visible en desktop/tablet) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full bg-white/4 border border-white/8 backdrop-blur-md text-sm lg:text-base shrink-0">
          <a
            href="#vsl-video"
            className="px-4 py-2 rounded-full text-white/75 hover:text-white hover:bg-white/8 transition-all font-medium tracking-wide"
          >
            Información
          </a>
          <a
            href="#beneficios"
            className="px-4 py-2 rounded-full text-white/75 hover:text-white hover:bg-white/8 transition-all font-medium tracking-wide"
          >
            Ventajas
          </a>
          <a
            href="#faq"
            className="px-4 py-2 rounded-full text-white/75 hover:text-white hover:bg-white/8 transition-all font-medium tracking-wide"
          >
            Q&A
          </a>
        </nav>

        {/* Botón CTA Reserva */}
        <div className="flex items-center shrink-0">
          <a
            href="/gracias"
            className="glass-button inline-flex items-center gap-1.5 sm:gap-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground font-semibold px-3 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg tracking-wide transition-all hover:scale-[1.02] border border-primary/30 whitespace-nowrap"
          >
            <span className="text-white/95">Reserva tu lugar</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroBackgroundVideo() {
  return (
    <div
      className="absolute inset-0 -z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ contain: "paint", transform: "translateZ(0)" }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-[0.38]"
        style={{ transform: "translateZ(0)" }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
      >
        <source src={HERO_BACKGROUND_VIDEO} type="video/mp4" />
      </video>

      {/* Gradiente único translúcido para fundir el video con el mesh aurora (una sola capa) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#070b09]/72 via-[#070b09]/30 to-[#070b09]/88" />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-6 sm:pt-12 md:pt-16 pb-14 sm:pb-16 md:pb-24 px-4 overflow-hidden">
      <HeroBackgroundVideo />

      {/* GLOSARIO MÓVIL: debajo de la barra y arriba de la primera etiqueta */}
      <div className="md:hidden max-w-md mx-auto mb-6 relative z-20 flex justify-center">
        <nav className="inline-flex items-center gap-1 p-1 rounded-full bg-white/6 border border-white/12 backdrop-blur-xl text-sm shadow-lg shadow-black/40">
          <a
            href="#vsl-video"
            className="px-4 py-2 rounded-full text-white/80 hover:text-white active:bg-white/12 transition-all font-medium tracking-wide"
          >
            Información
          </a>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <a
            href="#beneficios"
            className="px-4 py-2 rounded-full text-white/80 hover:text-white active:bg-white/12 transition-all font-medium tracking-wide"
          >
            Ventajas
          </a>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <a
            href="#faq"
            className="px-4 py-2 rounded-full text-white/80 hover:text-white active:bg-white/12 transition-all font-medium tracking-wide"
          >
            Q&A
          </a>
        </nav>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* ETIQUETA PRIMARIA: TÍTULO DEL EVENTO ARRIBA DE TODO */}
        <Reveal variant="pop">
          <div className="neon-tag inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em]">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Expansión Internacional · Arbitraje Financiero</span>
          </div>
        </Reveal>

        {/* TITULO DE ANICHAMIENTO E INTERES */}
        <Reveal variant="title-left" delay={80}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white/95 tracking-tight leading-[1.15] sm:leading-[1.12] mt-7 sm:mt-9 md:mt-11 font-heading max-w-4xl mx-auto text-balance">
            Llevá tu operativa al{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-emerald-200 to-accent">
              mercado internacional
            </span>
            .
          </h1>
        </Reveal>

        {/* SUBTITULO */}
        <Reveal variant="fade-up" delay={160}>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300/90 font-light max-w-3xl mx-auto mt-7 sm:mt-9 md:mt-10 leading-relaxed">
            Si en tu negocio precisás cobrar, pagar o mover divisas entre países, esta es la jornada
            para saber <strong className="text-primary/90 font-semibold">CÓMO</strong> desarrollar
            tu propia estructura y llevar a cabo tus operativas abaratando costos en tu negocio.
          </p>
        </Reveal>

        {/* ETIQUETAS DE FECHA / HORA / LUGAR (SANTA CRUZ, BOLIVIA) */}
        <Reveal variant="fade-up" delay={220}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4 mt-8 sm:mt-10 md:mt-12 text-sm sm:text-base md:text-lg">
            <div className="neon-tag flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="font-medium text-white/85">10 de Octubre</span>
            </div>
            <div className="neon-tag-accent flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="font-medium text-white/85">14:30 – 18:30</span>
            </div>
            <div className="neon-tag flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-primary" />
              <span className="font-medium text-white/85">Plaza Empresarial Manzana 40</span>
            </div>
          </div>
        </Reveal>

        {/* CTA PARA VER EL VIDEO */}
        <Reveal variant="fade-up" delay={280}>
          <div className="mt-8 sm:mt-10 md:mt-12">
            <a
              href="#vsl-video"
              className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.12em] sm:tracking-[0.15em] text-primary/80 hover:text-primary transition-colors bg-white/5 border border-white/10 px-4 sm:px-5 py-2.5 rounded-full backdrop-blur-md text-center max-w-full"
            >
              <ChevronDown className="w-4 h-4 animate-bounce shrink-0" />
              <span>Mirá el video y conocé el evento</span>
            </a>
          </div>
        </Reveal>

        {/* VIDEO VSL */}
        <Reveal variant="pop" delay={120}>
          <div className="mt-8 sm:mt-10 md:mt-12 w-full">
            <VideoPlayerCard />
          </div>
        </Reveal>

        {/* BOTON DE RESERVA TU LUGAR */}
        <Reveal variant="fade-up" delay={100}>
          <div className="mt-9 sm:mt-11 md:mt-12 w-full flex justify-center">
            <a
              href="/gracias"
              className="glass-button w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-linear-to-r from-primary/85 via-emerald-400/85 to-accent/85 text-primary-foreground font-semibold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.08em] sm:tracking-[0.1em] cursor-pointer"
            >
              <div className="flex flex-col items-center leading-tight">
                <span className="text-white/95 text-base sm:text-lg md:text-xl">
                  Reservá tu lugar
                </span>
                <span className="text-black font-extrabold text-base sm:text-lg md:text-xl normal-case tracking-wider whitespace-nowrap mt-1.5 [text-shadow:0_0_3px_rgba(255,255,255,0.95),0_0_8px_rgba(255,255,255,0.85),0_0_16px_rgba(255,255,255,0.7),0_0_26px_rgba(255,255,255,0.55)] animate-pulse">
                  (Solo 70 lugares)
                </span>
              </div>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VideoPlayerCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <div
      id="vsl-video"
      className="glass-panel p-2 sm:p-3 md:p-4 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] max-w-4xl mx-auto scroll-mt-24 w-full shadow-2xl shadow-primary/10 border border-white/15"
    >
      <div className="relative rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-3xl overflow-hidden aspect-video bg-black/90 flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-3xl"
          controls
          playsInline
          preload="metadata"
          onError={() => setLoadError(true)}
        >
          <source src={EVENT_VIDEO} type="video/quicktime" />
          <source src={EVENT_VIDEO} type="video/mp4" />
          Tu navegador no soporta la reproducción de este video.
        </video>

        {/* Botón flotante para activar/desactivar sonido de forma rápida */}
        <button
          type="button"
          onClick={toggleSound}
          className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium transition-all shadow-lg cursor-pointer"
          aria-label={isMuted ? "Activar audio" : "Silenciar"}
        >
          <Volume2 className="w-3.5 h-3.5 text-primary" />
          <span>{isMuted ? "Activar sonido" : "Sonido activo"}</span>
        </button>

        {loadError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/85">
            <p className="text-white/90 text-sm md:text-base font-medium mb-3">
              Si tu navegador no reproduce directamente el formato .mov, podés abrirlo aquí:
            </p>
            <a
              href={EVENT_VIDEO}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider"
            >
              Ver Video Oficial
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="pt-10 sm:pt-12 px-4 border-t border-white/8 bg-black/40 text-center text-sm text-muted-foreground space-y-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={BRAND_LOGO}
            alt="Grow Your Money"
            className="w-9 h-9 object-contain rounded-xl bg-white/5 p-1 border border-white/10 logo-glow"
          />
          <span className="font-semibold text-white/80 tracking-wide text-sm sm:text-base font-heading text-center">
            GROW YOUR MONEY · ARBITRAJE FINANCIERO INTERNACIONAL
          </span>
        </div>
        <p className="text-gray-400/80">© 2026 Grow Your Money · Edición Santa Cruz, Bolivia</p>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
        10 de Octubre · Manzana 40 - Plaza Empresarial, Santa Cruz. Evento de capacitación ejecutiva
        en finanzas internacionales.
      </p>

      {/* Descargo de responsabilidad Meta™ */}
      <div className="pt-6 sm:pt-8 pb-6 border-t border-white/8 max-w-3xl mx-auto space-y-3">
        <p className="text-xs sm:text-sm text-gray-400/80 leading-relaxed font-light">
          Este sitio no forma parte ni está avalado por Meta™ (Facebook™ o Instagram™). Facebook™ e
          Instagram™ son marcas registradas de Meta Platforms, Inc.
        </p>
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-gray-400/90 font-light">
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
  );
}
