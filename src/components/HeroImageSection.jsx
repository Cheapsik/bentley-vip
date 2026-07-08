import React, { useRef, useState, useEffect, useCallback } from 'react'
import { useLenis } from 'lenis/react'
import heroImage from '@/assets/images/hero.webp'

const easeOutCubic = (t) => 1 - (1 - t) ** 3

const HeroImageMobile = () => (
  <section className="lg:hidden px-5 py-16 mb-20">
    <div className="w-full max-w-3xl mx-auto aspect-[4/3] overflow-hidden rounded-lg border border-amber-400/20 bg-black">
      <img
        src={heroImage}
        alt="Bentley Flying Spur"
        className="w-full h-full object-contain object-center"
      />
    </div>
  </section>
)

const HeroImageDesktop = () => {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const section = sectionRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const scrollRunway = section.offsetHeight - window.innerHeight

    if (scrollRunway <= 0) {
      setProgress(1)
      return
    }

    const scrolled = Math.max(0, -rect.top)
    const raw = Math.min(1, scrolled / scrollRunway)
    setProgress(easeOutCubic(raw))
  }, [])

  useLenis(updateProgress)

  useEffect(() => {
    window.addEventListener('resize', updateProgress)
    updateProgress()
    return () => window.removeEventListener('resize', updateProgress)
  }, [updateProgress])

  const translateXPercent = 100 - progress * 100

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block relative mb-32 overflow-x-clip"
      style={{ height: '200vh' }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-20">
        <div
          className="relative w-full max-w-6xl mx-auto"
          style={{
            transform: `translate3d(${translateXPercent}%, 0, 0)`,
            opacity: progress,
          }}
        >
          <div
            className="w-full overflow-hidden rounded-lg border border-amber-400/20 bg-black"
            style={{ height: 'min(calc(100vh - 160px), 720px)' }}
          >
            <img
              src={heroImage}
              alt="Bentley Flying Spur"
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="absolute -inset-4 border border-amber-400/20 rounded-lg -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}

const HeroImageSection = () => (
  <>
    <HeroImageMobile />
    <HeroImageDesktop />
  </>
)

export default HeroImageSection
