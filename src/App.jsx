import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import HeroImageSection from '@/components/HeroImageSection'
import GallerySection from '@/components/GallerySection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const BentleyVipSite = () => {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [galleryModalSrc, setGalleryModalSrc] = useState(null)

  const canvasRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const range = 400
  let start = 1300
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 768) start = 900
    else if (width < 1024) start = 1100
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    if (galleryModalSrc) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [galleryModalSrc])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setGalleryModalSrc(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

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

      <Navbar
        scrollY={scrollY}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <Hero scrollY={scrollY} scrollToSection={scrollToSection} />

      <AboutSection scrollY={scrollY} />

      <HeroImageSection translateX={translateX} opacity={opacity} style={style} />

      <GallerySection
        scrollY={scrollY}
        galleryModalSrc={galleryModalSrc}
        setGalleryModalSrc={setGalleryModalSrc}
      />

      <ContactSection />

      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}

export default BentleyVipSite
