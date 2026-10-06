export function MetaDisclaimerFooter() {
  return (
    <div className="pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 max-w-4xl mx-auto text-center space-y-3 border-t border-white/8 relative z-10 text-xs sm:text-sm text-gray-400/80 leading-relaxed font-light">
      <p className="text-gray-300/90 font-medium">
        © 2026 Expansión Internacional Evento. Todos los derechos reservados.
      </p>
      <p className="max-w-3xl mx-auto">
        El contenido de este evento tiene fines educativos y no constituye asesoramiento financiero.
        Toda operación en mercados implica riesgos.
      </p>
      <p className="max-w-3xl mx-auto">
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
  );
}
