import React from 'react'
import { Phone, ChevronDown } from 'lucide-react'

const Hero = ({ scrollY, scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsIDE3NSwgNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        <div className="mb-6 md:mb-8 inline-block" style={{ opacity: 1 - scrollY / 500 }}>
          <div className="text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 animate-pulse">
            Premium Transport
          </div>
          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </div>

        <h1
          className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-[6rem] font-thin mb-6 md:mb-8 tracking-tighter leading-none"
          style={{ opacity: 1 - scrollY / 400 }}
        >
          <span className="block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
            BENTLEY
          </span>
          <span className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent font-light">
            VIP
          </span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-1xl lg:text-1xl mb-12 md:mb-16 text-gray-300 font-light tracking-wide max-w-3xl mx-auto leading-relaxed px-4"
          style={{ opacity: 1 - scrollY / 500 }}
        >
          Ekskluzywne <span className="text-amber-400">przejazdy VIP</span>, śluby, przewozy
          biznesowe i usługi szoferskie na najwyższym poziomie.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
          <a
            href="tel:999999999"
            className="group relative w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold tracking-widest overflow-hidden transform hover:scale-105 transition-all duration-300 text-sm md:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center justify-center gap-3">
              <Phone size={18} className="md:w-5 md:h-5" />
              ZADZWOŃ TERAZ
            </div>
            <div className="absolute inset-0 shadow-lg shadow-amber-500/50 group-hover:shadow-amber-500/80 transition-all duration-300" />
          </a>

          <button
            onClick={() => scrollToSection('contact')}
            className="group relative w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border-2 border-amber-400 text-amber-400 font-semibold tracking-widest overflow-hidden backdrop-blur-sm bg-black/30 text-sm md:text-base"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative group-hover:text-black transition-colors duration-300">
              ZAREZERWUJ TERAZ
            </span>
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-8 md:bottom-4 left-1/2"
        style={{ opacity: 1 - scrollY / 300, transform: 'translateX(-35%)' }}
      >
        <div className="animate-bounce flex flex-col items-center">
          <ChevronDown size={32} className="md:w-10 md:h-10 text-amber-400" />
        </div>
        <div className="text-xs tracking-widest text-amber-400 mt-2">PRZEWIŃ</div>
      </div>

      <div className="hidden md:block absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
      <div className="hidden md:block absolute bottom-1/4 right-10 w-3 h-3 border border-amber-400 rotate-45" />
    </section>
  )
}

export default Hero

