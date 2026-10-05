import { ArrowRight, Flame, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function WhatIsTheEventSection() {
  return (
    <section id="ventajas" className="py-12 sm:py-16 md:py-24 px-4 relative scroll-mt-24">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel p-6 sm:p-8 md:p-14 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <Reveal variant="pop">
              <div className="neon-tag inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Información Esencial del Evento</span>
              </div>
            </Reveal>

            <Reveal variant="title-left" delay={80}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white/95 font-heading leading-tight tracking-tight max-w-3xl mt-6 sm:mt-7 md:mt-8">
                ¿Qué vas a ver en el evento?
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={160}>
              <p className="text-base sm:text-lg md:text-2xl text-gray-300/90 leading-relaxed font-light max-w-3xl mt-5 sm:mt-6 md:mt-7">
                Un encuentro inmersivo y de alto impacto diseñado para dueños de empresas,
                operadores comerciales e inversores de Santa Cruz. Descubrí cómo funciona la
                maquinaria real del{" "}
                <strong className="text-white font-medium">
                  arbitraje financiero internacional
                </strong>{" "}
                y las rutas de capital privado que permiten cobrar, girar y multiplicar liquidez en
                dólares sin depender de las restricciones del sistema bancario local.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-7 md:pt-8 mt-6 sm:mt-7 md:pt-8 border-t border-white/8 w-full">
              {[
                {
                  num: "01",
                  title: "Estructura Internacional",
                  desc: "Cuentas y sociedades que te dan soberanía operativa en USD.",
                },
                {
                  num: "02",
                  title: "Rutas de Arbitraje P2P",
                  desc: "Monetización de brechas cambiarias transfronterizas legales.",
                },
                {
                  num: "03",
                  title: "Blindaje de Patrimonio",
                  desc: "Protección total de la liquidez contra devaluaciones e incertidumbre.",
                },
              ].map((card, i) => (
                <Reveal key={card.num} variant="pop" delay={i * 120}>
                  <div className="glass-card p-5 sm:p-6 rounded-2xl h-full text-center flex flex-col items-center">
                    <span className="text-primary/90 font-heading font-bold text-2xl sm:text-3xl block">
                      {card.num}
                    </span>
                    <span className="text-base sm:text-lg font-medium text-white/90 block mt-1.5">
                      {card.title}
                    </span>
                    <span className="text-sm text-muted-foreground mt-1 block">{card.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsHypeSection() {
  const benefits = [
    {
      emoji: "🌎",
      title: "Comercio P2P internacional",
      desc: "Nuevas rutas entre divisas y mercados para operar con mejores márgenes y ampliar tu capacidad operativa.",
    },
    {
      emoji: "🏛️",
      title: "OTC multijurisdicción",
      desc: "Acceso a mesas OTC en distintos países para mover volumen con mejores condiciones y más liquidez.",
    },
    {
      emoji: "💱",
      title: "Pagos y cobros sin fricción",
      desc: "Pagale a proveedores del exterior y cobrale a clientes de todo el mundo con menos costos y demoras.",
    },
    {
      emoji: "🏢",
      title: "Empresas y bancos internacionales",
      desc: "Cómo armar tu estructura en USA, Reino Unido y Hong Kong, con cuentas en bancos y fintech globales.",
    },
    {
      emoji: "💼",
      title: "Finanzas personales",
      desc: "Cómo ordenar, proteger y hacer crecer tu capital con criterio de empresario, no de ahorrista.",
    },
    {
      emoji: "📈",
      title: "Inversiones en bolsa",
      desc: "Cómo invertir en el mercado bursátil con estrategia para que tu dinero trabaje en moneda fuerte.",
    },
  ];

  return (
    <section
      id="beneficios"
      className="py-14 sm:py-20 md:py-28 px-4 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 flex flex-col items-center">
          <Reveal variant="pop">
            <span className="neon-tag-accent text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.14em] sm:tracking-[0.18em] inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.15)]">
              ¿Por qué deberías estar ahí?
            </span>
          </Reveal>
          <Reveal variant="title-right" delay={80}>
            <h2 className="metallic-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-6 sm:mt-8 md:mt-9 text-balance font-heading pb-2">
              Lo que te vas a llevar del evento
            </h2>
          </Reveal>
          <Reveal variant="fade-up" delay={160}>
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto font-normal mt-5 sm:mt-7 leading-relaxed">
              En esta jornada vas a entender cómo operan hoy los que mueven divisas entre países:
              con más facilidad, menos costo, seguridad de primera línea y cómo armar tu propia
              estructura internacional.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-7">
          {benefits.map((b, i) => (
            <Reveal key={b.title} variant="pop" delay={i * 90}>
              <div className="glass-card tilt-3d tilt-3d-hover glow-border hover:bg-white/[0.06] p-7 sm:p-8 md:p-10 rounded-[1.75rem] sm:rounded-[2rem] relative group overflow-hidden h-full text-center md:text-left flex flex-col items-center md:items-start border border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-[0_16px_40px_-15px_rgba(0,0,0,0.6)] hover:border-primary/40 hover:shadow-[0_20px_50px_-10px_rgba(34,197,94,0.22)] transition-all duration-300">
                {/* Luz ambiental sutil en la esquina superior */}
                <div className="pointer-events-none absolute -top-16 -right-16 w-36 h-36 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                {/* Scanline futurista sutil */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-primary/20 to-transparent"
                  style={{
                    animation: "scanline 5s ease-in-out infinite",
                    animationDelay: `${i * 0.5}s`,
                  }}
                />

                {/* Ícono contenedor con neon suave */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.06] border border-white/20 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/15 transition-all text-3xl sm:text-4xl shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
                  {b.emoji}
                </div>

                {/* Título más grande, nítido y visible */}
                <h3 className="text-xl sm:text-2xl md:text-[1.65rem] font-bold text-white mb-3 sm:mb-4 font-heading tracking-tight leading-snug text-balance">
                  {b.title}
                </h3>

                {/* Descripción con texto más grande, blanco suave y legible */}
                <p className="text-gray-200/95 text-base sm:text-lg md:text-xl leading-relaxed font-normal text-pretty">
                  {b.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UrgencySlotsSection() {
  const totalSlots = 70;
  const availableSlots = 10;
  const bookedSlots = totalSlots - availableSlots; // 60
  const percentage = Math.round((bookedSlots / totalSlots) * 100);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <Reveal variant="pop">
            <div className="neon-tag-danger inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.1em] sm:tracking-[0.12em] animate-pulse">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
              <span>Aforo Exclusivo · Últimos Cupos</span>
            </div>
          </Reveal>

          <Reveal variant="title-left" delay={80}>
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white/95 font-heading leading-tight max-w-2xl mx-auto mt-6 sm:mt-7 md:mt-8">
              Este conocimiento no es para todos.
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-emerald-200 to-accent block mt-2">
                ¿Vas a quedarte afuera?
              </span>
            </h2>
          </Reveal>

          <Reveal variant="fade-up" delay={160}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed font-light mt-5 sm:mt-6 md:mt-7">
              Mantener un grupo reducido es indispensable para que cada participante revise su caso
              puntual, interactúe con los expositores y establezca vínculos estratégicos directos.
            </p>
          </Reveal>

          {/* Progress & Slots Visual Dashboard */}
          <Reveal variant="fade-up" delay={220}>
            <div className="w-full max-w-2xl mx-auto mt-8 sm:mt-10">
              <div className="glass-card p-5 sm:p-7 md:p-8 rounded-[1.75rem] border border-white/12 relative overflow-hidden shadow-2xl shadow-primary/10">
                {/* Background ambient glow inside card */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-destructive/15 rounded-full blur-2xl pointer-events-none" />

                {/* Top Metrics Cards Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 relative z-10 mb-6">
                  {/* Total Slots */}
                  <div className="glass-panel tilt-3d tilt-3d-hover glow-border p-2 sm:p-4 md:p-5 rounded-2xl text-center border border-white/8 flex flex-col items-center justify-center min-w-0 overflow-hidden">
                    <span className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-tight sm:tracking-wider text-muted-foreground font-medium block w-full text-center break-words">
                      Aforo Total
                    </span>
                    <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white/95 font-heading mt-1">
                      {totalSlots}
                    </span>
                    <span className="text-[10px] xs:text-xs sm:text-sm text-gray-400 font-light mt-0.5">
                      Lugares en sala
                    </span>
                  </div>

                  {/* Confirmed */}
                  <div className="glass-panel tilt-3d tilt-3d-hover glow-border p-2 sm:p-4 md:p-5 rounded-2xl text-center border border-white/8 flex flex-col items-center justify-center min-w-0 overflow-hidden">
                    <span className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-tight sm:tracking-wider text-muted-foreground font-medium block w-full text-center break-words">
                      Confirmados
                    </span>
                    <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-primary/95 font-heading mt-1">
                      {bookedSlots}
                    </span>
                    <span className="text-[10px] xs:text-xs sm:text-sm text-primary/70 font-semibold mt-0.5">
                      {percentage}% completo
                    </span>
                  </div>

                  {/* Remaining - Urgent Alert */}
                  <div className="glass-panel tilt-3d tilt-3d-hover glow-border p-2 sm:p-4 md:p-5 rounded-2xl text-center border border-destructive/30 bg-destructive/10 flex flex-col items-center justify-center relative overflow-hidden min-w-0">
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-destructive animate-ping" />
                    <span className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-tight sm:tracking-wider text-destructive-foreground font-bold block w-full text-center break-words">
                      Disponibles
                    </span>
                    <span className="text-xl sm:text-3xl md:text-4xl font-extrabold text-red-400 font-heading mt-1 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">
                      {availableSlots}
                    </span>
                    <span className="text-[10px] xs:text-xs sm:text-sm text-red-300 font-semibold mt-0.5 animate-pulse">
                      ¡Últimos cupos!
                    </span>
                  </div>
                </div>

                {/* Progress Visual Bar with glow & milestones */}
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-sm sm:text-base font-semibold">
                    <span className="flex items-center gap-1.5 text-gray-200">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                      Estado de reservas en tiempo real
                    </span>
                    <span className="text-primary font-bold tracking-wide">
                      {bookedSlots} de {totalSlots} reservados
                    </span>
                  </div>

                  {/* Big Glowing Bar */}
                  <div className="relative w-full h-5 sm:h-6 bg-black/60 rounded-full p-1 border border-white/15 overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-linear-to-r from-emerald-500 via-primary to-accent rounded-full transition-all duration-1000 relative overflow-hidden shadow-[0_0_20px_oklch(0.74_0.2_142/60%)]"
                      style={{ width: `${percentage}%` }}
                    >
                      {/* Shimmer effect */}
                      <div
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent"
                        style={{ animation: "shimmer 2s linear infinite" }}
                      />
                    </div>
                  </div>

                  {/* Mini visual seat dots grid for remaining spots */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm text-muted-foreground mr-1">Cupos libres:</span>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: availableSlots }).map((_, idx) => (
                          <span
                            key={idx}
                            title={`Lugar disponible #${idx + 1}`}
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border border-red-500/60 bg-red-500/20 shadow-[0_0_6px_rgba(239,68,68,0.5)] animate-pulse"
                            style={{ animationDelay: `${idx * 150}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="neon-tag-danger px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Cierre de admisiones inminente
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 2nd CTA Button */}
          <Reveal variant="pop" delay={120}>
            <div className="pt-3 sm:pt-4 px-2 mt-6 sm:mt-7 md:mt-8">
              <a
                href="#formulario"
                className="glass-button w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-linear-to-r from-primary/85 via-emerald-400/85 to-accent/85 text-primary-foreground font-semibold text-base sm:text-lg md:text-xl px-6 sm:px-8 py-4 sm:py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-[0.08em] sm:tracking-[0.1em] cursor-pointer"
              >
                <span className="text-white/95">Reserva tu lugar ({availableSlots} cupos)</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function OperatorsLimitationsSection() {
  const limitations = [
    {
      problem: "Dependencia de cupos bancarios limitados",
      detail:
        "Los bancos locales imponen restricciones severas para transferencias al exterior, demorando compras y paralizando suministros clave.",
    },
    {
      problem: "Comisiones ocultas y tipo de cambio desfavorable",
      detail:
        "Cada movimiento no optimizado reduce tu margen operativo entre un 8% y un 25% por la brecha del mercado informal.",
    },
    {
      problem: "Riesgo de bloqueo o congelamiento de fondos",
      detail:
        "Operar cuentas personales en plataformas no corporativas para mover plata comercial genera cierres intempestivos.",
    },
    {
      problem: "Falta de soporte y asesoría especializada",
      detail:
        "Los asesores tradicionales no conocen las dinámicas modernas de finanzas descentralizadas ni estructuras multi-jurisdiccionales.",
    },
  ];

  return (
    <section className="py-20 px-4 relative border-y border-white/8 bg-linear-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="neon-tag-danger inline-flex items-center gap-2 text-xs md:text-sm font-medium uppercase tracking-[0.12em] px-3 py-1 rounded-full">
            <span>El costo de la inacción</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white/95 font-heading tracking-tight">
            Limitaciones de los operadores tradicionales
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            ¿Te identificás con estas trabas diarias al mover dinero desde o hacia Bolivia?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {limitations.map((item, idx) => (
            <div
              key={item.problem}
              className="glass-card flex items-start gap-4 p-6 rounded-2xl hover:border-destructive/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-destructive/15 text-destructive/90 flex items-center justify-center shrink-0 font-semibold text-sm border border-destructive/20">
                0{idx + 1}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base md:text-lg font-semibold text-white/90">{item.problem}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatYouWillLearnSection() {
  const topics = [
    {
      title: "Creación y Gestión de Estructuras Internacionales",
      desc: "Cómo abrir entidades y cuentas en jurisdicciones seguras para cobrar clientes y pagar proveedores en dólares.",
    },
    {
      title: "Módulo Intensivo de Arbitraje y Comercio P2P Global",
      desc: "Aprovechá las fluctuaciones cambiarias y márgenes entre mercados para generar eficiencia en tus pagos y cobros.",
    },
    {
      title: "Blindaje de Capital Empresarial",
      desc: "Estrategias de tesorería para proteger la liquidez corporativa ante escenarios inflacionarios y regulatorios.",
    },
    {
      title: "Cumplimiento (Compliance) y Seguridad",
      desc: "Cómo justificar flujos, evitar bloqueos de fondos y operar con transparencia tributaria y bancaria.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="neon-tag text-xs md:text-sm font-medium uppercase tracking-[0.15em] inline-flex items-center gap-1.5 px-3 py-1 rounded-full">
            Programa del Evento
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white/95 font-heading tracking-tight">
            ¿Qué vas a aprender?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-light">
            Contenido 100% práctico impartido por profesionales con experiencia en mercados
            internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((t, idx) => (
            <div
              key={t.title}
              className="glass-card p-6 md:p-8 rounded-2xl flex items-start gap-4 hover:border-primary/25 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary/90 flex items-center justify-center font-semibold text-base shrink-0 border border-primary/20">
                {idx + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg md:text-xl font-semibold text-white/90 font-heading">
                  {t.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
