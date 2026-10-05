import { useEffect, useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Lock,
} from "lucide-react";

const SURVEY_ID = "C6xSIMVu7rWCszefENyf";
const SURVEY_SRC = `https://api.marketia360.com/widget/survey/${SURVEY_ID}`;
const MARKETIA_SCRIPT = "https://api.marketia360.com/js/form_embed.js";
const WHATSAPP_LINK =
  "https://wa.me/59157432701?text=%C2%A1Hola!%20Mi%20nombre%20es%20...%20y%20me%20dedico%20a%20...%0A%0AComplet%C3%A9%20el%20formulario%20para%20ser%20parte%20del%20evento%20Expansi%C3%B3n%20Internacional%20y%20quiero%20asegurar%20mi%20lugar%20para%20el%20s%C3%A1bado%2010%2F10.%20Quedo%20atento%20a%20la%20informaci%C3%B3n%20para%20adquirir%20mi%20entrada.%20%F0%9F%8E%9F%EF%B8%8F";

interface ApplicationFormProps {
  userName?: string;
  onSubmitted?: () => void;
}

export function ApplicationForm({ userName = "", onSubmitted }: ApplicationFormProps) {
  const [loaded, setLoaded] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Carga el script de embed de marketia360
  useEffect(() => {
    if (!document.querySelector(`script[src="${MARKETIA_SCRIPT}"]`)) {
      const script = document.createElement("script");
      script.src = MARKETIA_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Listener de postMessage para detectar el envío de la encuesta de marketia360
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return;

      let dataString = "";
      let isSubmitEvent = false;

      if (typeof event.data === "string") {
        dataString = event.data;
      } else if (typeof event.data === "object") {
        try {
          dataString = JSON.stringify(event.data);
        } catch {
          dataString = "";
        }
      }

      // Detecta patrones típicos de envío en widgets de marketia360 / GHL
      const lower = dataString.toLowerCase();
      if (
        lower.includes("submit") ||
        lower.includes("submitted") ||
        lower.includes("survey_completed") ||
        lower.includes("form_submitted") ||
        lower.includes(SURVEY_ID.toLowerCase())
      ) {
        isSubmitEvent = true;
      }

      if (isSubmitEvent) {
        setHasSubmitted(true);
        if (onSubmitted) {
          onSubmitted();
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onSubmitted]);

  return (
    <div
      id="formulario"
      className="max-w-2xl mx-auto glass-panel rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-10 relative overflow-hidden text-left scroll-mt-24"
    >
      <div className="absolute top-0 right-0 w-60 h-60 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-6 sm:mb-8 flex flex-col items-center space-y-2">
        <span className="neon-tag text-sm sm:text-base font-medium uppercase tracking-[0.12em] sm:tracking-[0.15em] inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full">
          <Sparkles className="w-4 h-4 shrink-0" />
          Solicitud de Información o Reserva
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/95 font-heading tracking-tight max-w-lg">
          Dejá tus datos para recibir información más detallada
        </h3>
        <p className="text-sm sm:text-base text-gray-300/90 max-w-lg mx-auto font-light">
          Completá el formulario para recibir el temario desglosado y habilitar tu reserva por
          WhatsApp.
        </p>
      </div>

      {/* Encuesta directa de marketia360 */}
      <div className="relative w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 bg-white/4 backdrop-blur-sm min-h-[460px]">
        <iframe
          src={SURVEY_SRC}
          id={SURVEY_ID}
          title="Encuesta del evento"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          scrolling="no"
          onLoad={() => setLoaded(true)}
          className={`w-full transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ border: "none", width: "100%", minHeight: 460 }}
        />

        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 py-12">
            <Loader2 className="w-8 h-8 text-primary/80 animate-spin" />
            <p className="text-base text-gray-300/90 font-light">Cargando encuesta…</p>
          </div>
        )}
      </div>

      {hasSubmitted && (
        <div className="mt-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm sm:text-base flex items-center gap-2.5 justify-center text-center">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>¡Datos registrados correctamente! El botón de WhatsApp ha sido desbloqueado.</span>
        </div>
      )}

      {/* Botón de Reserva por WhatsApp DENTRO del cuadro, justo debajo de la encuesta */}
      <div className="mt-6 pt-2 flex flex-col items-center">
        {hasSubmitted ? (
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button w-full inline-flex items-center justify-center gap-3 bg-linear-to-r from-primary/90 via-emerald-400/90 to-accent/90 text-primary-foreground font-bold text-lg sm:text-xl md:text-2xl px-6 py-4 sm:py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.08em] sm:tracking-[0.1em] cursor-pointer shadow-[0_0_35px_rgba(34,197,94,0.55)] text-center"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white/95 shrink-0" />
            <span className="text-white/95 text-center">RESERVAR MI LUGAR</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white/95 shrink-0" />
          </a>
        ) : (
          <div className="w-full flex flex-col items-center gap-2.5">
            <button
              disabled
              className="glass-button opacity-60 cursor-not-allowed w-full inline-flex items-center justify-center gap-3 bg-gray-900/80 text-gray-400 font-semibold text-base sm:text-lg md:text-xl px-6 py-4 sm:py-5 rounded-2xl border border-white/10 uppercase tracking-[0.08em] sm:tracking-[0.1em]"
            >
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 shrink-0" />
              <span>Reservar mi lugar (Bloqueado)</span>
            </button>
            <span className="text-xs sm:text-sm text-amber-300/90 font-light flex items-center justify-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 text-center">
              <Lock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Completá la encuesta de arriba para registrar tus datos y activar el botón
            </span>
          </div>
        )}

        <p className="text-center text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1.5 mt-3 font-light">
          <ShieldCheck className="w-4 h-4 text-primary/80 shrink-0" />
          <span>Coordinás el pago por WhatsApp oficial y se emite tu credencial numerada.</span>
        </p>
      </div>

      <p className="text-center text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1.5 pt-4 font-light border-t border-white/5 mt-4">
        <ShieldCheck className="w-4 h-4 text-primary/80 shrink-0" />
        <span>Privacidad 100% garantizada. Tus datos están completamente protegidos.</span>
      </p>
    </div>
  );
}
