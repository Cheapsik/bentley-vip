import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Shield, Star, ChevronDown, Menu, X, Award } from 'lucide-react'
import * as THREE from 'three'

const BentleyWeddingSite = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const canvasRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const range = 400
  let start = 1730
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 768) start = 1200
    else if (width < 1024) start = 1400
  }

  const isSmallScreen = window.innerWidth < 768
  const raw = (scrollY - start) / range
  const progress = Math.max(0, Math.min(1, raw))

  const translateX = `${100 - progress * 100}%`
  const opacity = progress

  const style = {
    ...(isSmallScreen
      ? { aspectRatio: '1 / 1' }
      : { height: 'calc(100vh - 200px)', maxHeight: '2000px' }),
  }

  // Three.js 3D Background
  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    camera.position.z = 5

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xd4af37,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    // Create rotating rings
    const ringGeometry = new THREE.TorusGeometry(2, 0.02, 16, 100)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.3,
    })
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial)
    const ring2 = new THREE.Mesh(ringGeometry, ringMaterial)
    ring2.rotation.x = Math.PI / 2
    scene.add(ring1, ring2)

    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.y += 0.001
      particlesMesh.rotation.x += 0.0005

      ring1.rotation.x += 0.003
      ring1.rotation.y += 0.002
      ring2.rotation.y += 0.002
      ring2.rotation.z += 0.003

      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

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

  return (
    <div className="bg-black text-white font-sans overflow-hidden relative">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.4 }}
      />

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-3xl opacity-20"
          style={{
            top: '10%',
            left: '10%',
          }}
        />
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-3xl opacity-20"
          style={{
            bottom: '20%',
            right: '10%',
          }}
        />
      </div>

      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{
          background: scrollY > 50 ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 md:h-24">
            <div className="text-xl md:text-3xl font-thin tracking-[0.2em] md:tracking-[0.3em] relative">
              <span className="absolute inset-0 blur-sm bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                BENTLEY VIP
              </span>
              <span className="relative bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                BENTLEY VIP
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
              {['Start', 'O Samochodzie', 'Galeria', 'Kontakt'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(['home', 'about', 'gallery', 'contact'][i])}
                  className="relative text-sm tracking-widest hover:text-amber-400 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-600 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
              <a
                href="tel:999999999"
                className="px-6 xl:px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium tracking-wider hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
              >
                ZADZWOŃ
              </a>
            </div>

            <button
              className="lg:hidden text-amber-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-6 space-y-4 backdrop-blur-xl bg-black/80">
              {['Start', 'O Samochodzie', 'Galeria', 'Kontakt'].map((item, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(['home', 'about', 'gallery', 'contact'][i])}
                  className="block w-full text-left py-3 text-base tracking-wider hover:text-amber-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="tel:999999999"
                className="block text-center py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-medium tracking-wider"
              >
                ZADZWOŃ
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
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

        {/* Floating elements */}
        <div className="hidden md:block absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
        <div className="hidden md:block absolute bottom-1/4 right-10 w-3 h-3 border border-amber-400 rotate-45" />
      </section>

      {/* Video Section with Parallax */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `scale(${1 + scrollY / 3000})` }}
        >
          <div className="w-full h-full bg-gradient-to-br from-amber-900/20 via-black to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          <div className="backdrop-blur-xl bg-white/5 border border-amber-400/20 p-1 md:p-2 rounded-lg shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-900 via-amber-900/20 to-black flex items-center justify-center text-xl sm:text-3xl md:text-5xl lg:text-6xl text-amber-400/30 font-thin tracking-wider rounded p-4 text-center leading-tight">
              [WIDEO PREZENTACYJNE
              <br className="hidden sm:block" />
              BENTLEY FLYING SPUR]
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Glassmorphism */}
      <section id="about" className="relative py-20 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="space-y-6 md:space-y-8"
            style={{
              transform:
                window.innerWidth >= 1024
                  ? `translateX(${Math.max(0, 200 - scrollY + 800)}px)`
                  : 'none',
              opacity: Math.min(1, (scrollY - 800) / 300),
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
                  Bentley Flying Spur to uosobienie brytyjskiego luksusu i rzemiosła
                  motoryzacyjnego. Ten wyjątkowy samochód łączy w sobie niespotykaną elegancję z
                  imponującą mocą, tworząc idealne połączenie dla wymagających klientów - od ślubów,
                  przez przejazdy VIP, aż po przewozy biznesowe i usługi szoferskie najwyższej
                  klasy.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex-1 group rounded-lg backdrop-blur-xl bg-white/5 border border-amber-400/10 p-5 md:p-6 hover:border-amber-400/30 transition-all duration-300 hover:transform hover:scale-105"
                  style={{
                    opacity: Math.min(1, (scrollY - 1000) / 300),
                  }}
                >
                  <div className="bg-gradient-to-br from-amber-500/20 to-yellow-600/20 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-amber-400" size={20} />
                  </div>
                  <h3 className="text-lg md:text-xl font-light mb-2 tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:mb-40 lg:pl-20 lg:pr-20 px-5 mb-40 ">
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
              className="w-full h-full bg-gradient-to-br from-amber-900/30 via-black to-black
                      flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                      text-amber-400/20 font-thin backdrop-blur-sm border border-amber-400/20
                      rounded-lg text-center leading-tight"
              style={style}
            >
              [GŁÓWNE ZDJĘCIE
              <br />
              BENTLEY
              <br />
              FLYING SPUR]
            </div>
          </div>

          <div className="absolute -inset-4 border border-amber-400/20 rounded-lg -z-10" />
        </div>
      </section>

      {/* Gallery with Advanced Effects */}
      <section id="gallery" className="relative py-20 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-amber-950/5 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <div className="text-amber-400 text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6">
              Galeria
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin mb-4 md:mb-6">
              Zobacz{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent font-light">
                Detale
              </span>
            </h2>
            <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative overflow-hidden"
                style={{
                  opacity: Math.min(1, (scrollY - 1800 - item * 50) / 200),
                  transform: `translateY(${Math.max(0, 50 - (scrollY - 1800 - item * 50) / 4)}px)`,
                }}
              >
                <div className="aspect-video backdrop-blur-xl bg-gradient-to-br from-amber-900/20 via-black to-black flex items-center justify-center text-lg sm:text-xl md:text-2xl text-amber-400/30 font-thin border border-amber-400/20 rounded-lg overflow-hidden relative group-hover:border-amber-400/40 transition-all duration-500 p-4">
                  <span className="relative z-10 text-center">[ZDJĘCIE {item}]</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/10 group-hover:to-yellow-600/10 transition-all duration-500" />
                </div>
                <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-20 transform scale-105 group-hover:scale-100 transition-all duration-500 rounded-lg pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
            {[
              { icon: Phone, label: 'Telefon', value: '999 999 999', href: 'tel:999999999' },
              {
                icon: Mail,
                label: 'Email',
                value: 'kontakt@bentleyvip.pl',
                href: 'mailto:kontakt@bentleyvip.pl',
              },
              { icon: MapPin, label: 'Adres', value: 'Warszawa, Polska' },
              { icon: Clock, label: 'Godziny', value: 'Pn-Pt: 9-20, Sb-Nd: 10-18' },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center backdrop-blur-xl bg-white/5 border  border-amber-400/20 p-6 rounded-lg md:p-8 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-600/20 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4 md:mb-6">
                  <item.icon className="text-amber-400" size={24} />
                </div>
                <div className="text-xs text-amber-400 tracking-wider uppercase mb-2">
                  {item.label}
                </div>
                <div className="text-sm md:text-base font-light break-all">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                    key={i}
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
            <p>&copy; 2025 Bentley VIP Transport. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </footer>
    </div>
  )
}

export default BentleyWeddingSite
