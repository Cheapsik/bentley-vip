import React from 'react'
import { Shield, Star, Clock, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bezpieczeństwo',
    desc: 'Najwyższej klasy systemy i profesjonalni kierowcy',
  },
  { icon: Star, title: 'Prestiż', desc: 'Najbardziej rozpoznawalna marka premium' },
  { icon: Clock, title: 'Punktualność', desc: 'Zawsze na czas, bez względu na okoliczności' },
  { icon: Award, title: 'Dyskrecja', desc: 'Pełna poufność i profesjonalizm' },
]

const AboutSection = ({ scrollY }) => {
  return (
    <section id="about" className="relative py-20 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="space-y-6 md:space-y-8"
          style={{
            transform:
              window.innerWidth >= 1024
                ? `translateX(${Math.max(0, 200 - scrollY + 500)}px)`
                : 'none',
            opacity: Math.min(1, (scrollY - 500) / 300),
          }}
        >
          <div className="flex">
            <div className="flex-1">
              <div className="text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6">
                O Samochodzie
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-6 md:mb-8 leading-tight">
                Bentley
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-light">
                  Flying Spur
                </span>
              </h2>
              <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-amber-400 to-transparent mb-6 md:mb-8" />
              <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
                Bentley Flying Spur to uosobienie brytyjskiego luksusu i rzemiosła motoryzacyjnego.
                Ten wyjątkowy samochód łączy w sobie niespotykaną elegancję z imponującą mocą,
                tworząc idealne połączenie dla wymagających klientów z Rzeszowa i okolic – od
                wynajmu auta do ślubu, przez ekskluzywne przejazdy VIP, aż po przewozy biznesowe i
                usługi szoferskie najwyższej klasy.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex-1 group rounded-lg backdrop-blur-xl bg-white/5 border border-amber-400/10 p-5 md:p-6 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  opacity: Math.min(1, (scrollY - 700) / 300),
                }}
              >
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-600/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-amber-400" size={20} />
                </div>
                <h3 className="text-lg md:text-xl font-light mb-2 tracking-wide">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

