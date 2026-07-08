import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useLenis } from 'lenis/react'
import * as THREE from 'three'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import HeroImageSection from '@/components/HeroImageSection'
import GallerySection from '@/components/GallerySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const BentleyGoSite = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [galleryModalSrc, setGalleryModalSrc] = useState(null)

  const canvasRef = useRef(null)
  const lenis = useLenis()

  useLenis((instance) => {
    setScrollY(instance.scroll)
  })

  useEffect(() => {
    if (lenis) return undefined

    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [lenis])

  useEffect(() => {
    if (!canvasRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
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

    camera.position.set(4, 3, 5)
    camera.lookAt(0, 0, 0)

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

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    const ringMaterial = new THREE.MeshPhongMaterial({
      color: 0xd4af37,
      shininess: 100,
      transparent: true,
      opacity: 0.5,
    })

    const ringGeometry = new THREE.TorusGeometry(2, 0.01, 16, 100)
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial)

    ring1.rotation.x = Math.PI / 4

    scene.add(ring1)

    const animate = () => {
      requestAnimationFrame(animate)

      particlesMesh.rotation.y += 0.001
      particlesMesh.rotation.x += 0.0005

      ring1.rotation.x += 0.003
      ring1.rotation.y += 0.002

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

  const scrollToSection = useCallback(
    (id) => {
      const el = document.getElementById(id)
      if (el && lenis) {
        lenis.scrollTo(el, { offset: -96, duration: 1.4 })
      } else {
        el?.scrollIntoView({ behavior: 'smooth' })
      }
      setMobileMenuOpen(false)
    },
    [lenis]
  )

  useEffect(() => {
    if (!lenis) return
    if (galleryModalSrc || mobileMenuOpen) lenis.stop()
    else lenis.start()
  }, [lenis, galleryModalSrc, mobileMenuOpen])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setGalleryModalSrc(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="bg-black text-white font-sans relative w-full max-w-full overflow-x-clip">
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

      <header className="relative z-50">
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
        <Navbar
          scrollY={scrollY}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrollToSection={scrollToSection}
        />
      </header>

      <main className="w-full max-w-full overflow-x-clip">
        <Hero scrollY={scrollY} scrollToSection={scrollToSection} />

        <AboutSection scrollY={scrollY} />

        <HeroImageSection />

        <GallerySection
          scrollY={scrollY}
          galleryModalSrc={galleryModalSrc}
          setGalleryModalSrc={setGalleryModalSrc}
        />

        <ContactSection />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default BentleyGoSite
