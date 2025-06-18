import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useLenis = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // LENIS SMOOTH SCROLL SETUP
    const lenis = new Lenis({
      duration: 1.2, // speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    // Connect Lenis to GSAP's ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000) // Sync Lenis's frame updates with GSAP's
    })

    gsap.ticker.lagSmoothing(0)

    // Refresh ScrollTrigger after Lenis is initialized
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        lenis.scrollTo(this.getAttribute('href'))
      })
    })

    return () => {
      lenis.destroy()
    }
  }, [])
} 