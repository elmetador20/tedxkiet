"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export function AnimatedPoster() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Reveal the poster with a zoom-out and fade-in effect
      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.15,
          opacity: 0,
          y: 60,
          filter: "blur(15px)",
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        }
      )

      // Add a subtle parallax effect on scrolling
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      
      // Animate the text
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background glow for the poster */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={textRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase text-accent">Theme Revealed</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            अन्विति
            <span className="block text-2xl md:text-3xl font-bold text-muted-foreground mt-4 font-sans tracking-[0.2em] uppercase">
              A Thousand Tomorrows
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Step into the future where infinite possibilities converge into singular moments of brilliance. Experience the dawn of a thousand new ideas.
          </p>
        </div>

        <div className="relative w-full max-w-[90rem] mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10 aspect-[21/9] bg-black">
          <img
            ref={imageRef}
            src="/anviti-poster.png"
            alt="अन्विति | A Thousand Tomorrows"
            className="w-full h-full object-cover origin-center"
          />
          {/* Overlay gradient for aesthetics and depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
