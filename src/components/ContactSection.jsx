import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const ContactSection = () => {
  const items = [
    { icon: Phone, label: 'Telefon', value: '999 999 999', href: 'tel:999999999' },
    {
      icon: Mail,
      label: 'Email',
      value: 'kontakt@bentleyvip.pl',
      href: 'mailto:kontakt@bentleyvip.pl',
    },
    { icon: MapPin, label: 'Adres', value: 'Warszawa, Polska' },
    { icon: Clock, label: 'Godziny', value: 'Pn-Pt: 9-20, Sb-Nd: 10-18' },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <div className="text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6">
            Kontakt
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-4 md:mb-6">
            Zarezerwuj swoją{' '}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-light">
              jazdę
            </span>
          </h2>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {items.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-600/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 md:mb-6">
                  <Icon className="text-amber-400" size={24} />
                </div>
                <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">
                  {item.label}
                </div>
                <div className="text-sm md:text-base font-light break-all">{item.value}</div>
              </>
            )

            const Wrapper = item.href ? 'a' : 'div'
            const wrapperProps = item.href ? { href: item.href } : {}

            return (
              <Wrapper
                key={item.label}
                {...wrapperProps}
                className="group flex flex-col items-center text-center backdrop-blur-xl bg-white/5 border  border-amber-400/20 p-6 rounded-lg md:p-8 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"
              >
                {content}
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection

