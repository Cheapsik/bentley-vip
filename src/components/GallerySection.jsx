import React from 'react'
import { X } from 'lucide-react'
import gallery1 from '@/assets/images/gallery-1.webp'
import gallery2 from '@/assets/images/gallery-2.webp'
import gallery3 from '@/assets/images/gallery-3.webp'
import gallery4 from '@/assets/images/gallery-4.webp'
import gallery5 from '@/assets/images/gallery-5.webp'
import gallery6 from '@/assets/images/gallery-6.webp'

const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6]

const GallerySection = ({ scrollY, galleryModalSrc, setGalleryModalSrc }) => {
  return (
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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 [column-fill:_balance]">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="group relative mb-4 md:mb-6 break-inside-avoid rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-all duration-500 cursor-pointer overflow-hidden"
              style={{
                opacity: Math.min(1, (scrollY - 1400 - index * 50) / 200),
                transform: `translateY(${Math.max(0, 50 - (scrollY - 1400 - index * 50) / 4)}px)`,
              }}
              onClick={() => setGalleryModalSrc(src)}
            >
              <img
                src={src}
                alt={`Bentley Flying Spur - zdjęcie ${index + 1}`}
                className="w-full h-auto block"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-600/0 group-hover:from-amber-500/10 group-hover:to-yellow-600/10 transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 border-2 border-amber-400 opacity-0 group-hover:opacity-20 scale-105 group-hover:scale-100 transition-all duration-500 rounded-lg pointer-events-none" />
            </div>
          ))}
        </div>

        {galleryModalSrc && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
            onClick={() => setGalleryModalSrc(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-10 p-2 rounded-full border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 transition-colors"
              onClick={() => setGalleryModalSrc(null)}
              aria-label="Zamknij"
            >
              <X size={28} />
            </button>
            <img
              src={galleryModalSrc}
              alt="Powiększenie"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection

