import React from 'react'
import heroImage from '@/assets/images/hero.webp'

const HeroImageSection = ({ translateX, opacity, style }) => {
  return (
    <section className="lg:mb-40 lg:pl-20 lg:pr-20 px-5 mb-40">
      <div
        className="relative mt-12 lg:mt-0"
        style={{
          transform: `translateX(${translateX})`,
          opacity,
          willChange: 'transform, opacity',
        }}
      >
        <div className="relative">
          <div
            className="w-full h-full overflow-hidden rounded-lg border border-amber-400/20 bg-black"
            style={style}
          >
            <img
              src={heroImage}
              alt="Bentley Flying Spur"
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        <div className="absolute -inset-4 border border-amber-400/20 rounded-lg -z-10" />
      </div>
    </section>
  )
}

export default HeroImageSection

