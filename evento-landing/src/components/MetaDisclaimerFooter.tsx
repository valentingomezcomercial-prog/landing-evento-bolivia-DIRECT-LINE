export function MetaDisclaimerFooter() {
  return (
    <div className="pt-6 sm:pt-8 pb-8 sm:pb-12 px-4 max-w-4xl mx-auto text-center space-y-4 border-t border-white/8 relative z-10">
      <p className="text-xs sm:text-sm text-gray-400/80 leading-relaxed font-light max-w-3xl mx-auto">
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
  );
}
