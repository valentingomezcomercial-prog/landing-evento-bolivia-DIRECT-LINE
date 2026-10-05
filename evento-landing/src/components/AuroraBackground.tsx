/**
 * Fondo orgánico que replica la composición de la imagen del usuario:
 * - Esquina superior derecha: luz vibrante en VERDE esmeralda (color de marca Grow Your Money)
 * - Esquina inferior izquierda: luz cian / azul eléctrica profunda brillante
 * - Diagonal central: transición turquesa / verde profundo
 * - Movimiento sutil y lento de arriba a abajo (vertical drift).
 *
 * Optimizado para fluidez: se redujeron las capas de blur pesadas y se
 * forzó la composición en GPU (translateZ(0)) para que el video de fondo
 * del hero y el backdrop-filter del navbar no compitan por el mismo hilo.
 */
export function AuroraBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ contain: "strict", transform: "translateZ(0)" }}
    >
      {/* Base oscura casi negra azulada profunda como la foto */}
      <div className="absolute inset-0 bg-[#06080d]" />

      {/* 1. LUZ SUPERIOR DERECHA: Verde esmeralda vibrante de la marca con movimiento vertical */}
      <div className="aurora-vertical-1 absolute -top-24 right-[-10%] sm:right-[-5%] w-[520px] sm:w-[640px] h-[520px] sm:h-[640px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.42)_0%,rgba(16,185,129,0.26)_40%,transparent_72%)] blur-[70px] sm:blur-[90px]" />

      {/* 2. LUZ INFERIOR IZQUIERDA: Cian / azul eléctrica profunda con movimiento vertical inverso */}
      <div className="aurora-vertical-2 absolute -bottom-24 left-[-10%] sm:left-[-5%] w-[520px] sm:w-[660px] h-[520px] sm:h-[660px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.38)_0%,rgba(13,148,136,0.22)_45%,transparent_72%)] blur-[70px] sm:blur-[90px]" />

      {/* 3. PUENTE DIAGONAL: Turquesa / verde-azul suave que conecta ambos extremos */}
      <div className="aurora-vertical-3 absolute top-1/4 left-1/4 sm:left-1/3 w-[460px] sm:w-[580px] h-[460px] sm:h-[580px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.20)_0%,rgba(20,184,166,0.12)_45%,transparent_70%)] blur-[80px]" />

      {/* 4. TOQUE VERDE ESMERALDA PROFUNDO DE GROW YOUR MONEY (refuerzo de marca) */}
      <div className="aurora-vertical-4 absolute bottom-1/3 right-1/4 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.18)_0%,rgba(16,185,129,0.09)_50%,transparent_70%)] blur-[85px]" />

      {/* Textura fina de ruido / polvo estelar idéntica a la imagen del usuario */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
    </div>
  );
}
