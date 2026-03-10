import React from 'react'

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="relative border-t border-amber-400/20 py2 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="sm:col-span-2">
            <h3 className="text-2xl md:text-3xl font-thin tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                BENTLEY
              </span>
              <span className="text-white"> VIP TRANSPORT</span>
            </h3>
            <p className="text-gray-500 leading-relaxed font-light text-sm md:text-base">
              Ekskluzywny wynajem Bentley Flying Spur. Przejazdy VIP, śluby, przewozy biznesowe i
              usługi szoferskie najwyższej klasy.
            </p>
          </div>

          <div>
            <h4 className="text-amber-400 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6">
              Szybkie Linki
            </h4>
            <div className="space-y-2 md:space-y-3">
              {['O Samochodzie', 'Galeria', 'Kontakt'].map((item, i) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'gallery', 'contact'][i])}
                  className="block text-gray-500 hover:text-amber-400 transition-colors font-light text-sm md:text-base"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-amber-400 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6">
              Kontakt
            </h4>
            <div className="space-y-2 md:space-y-3 text-gray-500 font-light text-sm md:text-base">
              <a href="tel:999999999" className="block hover:text-amber-400 transition-colors">
                999 999 999
              </a>
              <a
                href="mailto:kontakt@bentleyvip.pl"
                className="block hover:text-amber-400 transition-colors break-all"
              >
                kontakt@bentleyvip.pl
              </a>
              <p>Warszawa, Polska</p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-400/20 pt-6 md:pt-8 text-center text-gray-600 text-xs md:text-sm font-light tracking-wider">
          <p>&copy; 2025 Bentley VIP. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
    </footer>
  )
}

export default Footer

