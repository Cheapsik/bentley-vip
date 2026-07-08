import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import App from './App'
import 'lenis/dist/lenis.css'
import './index.css'

const lenisOptions = {
  lerp: 0.08,
  smoothWheel: true,
  wheelMultiplier: 0.85,
}

function AppShell() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (isDesktop) {
    return (
      <ReactLenis root options={lenisOptions}>
        <App />
      </ReactLenis>
    )
  }

  return <App />
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppShell />
  </React.StrictMode>
)
