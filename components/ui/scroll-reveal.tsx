"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-in" | "zoom-in" | "slide-left" | "slide-right"
  duration?: number
  delay?: number
  className?: string
  width?: "w-full" | "w-auto"
  yOffset?: number
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  duration = 0.8,
  delay = 0,
  className = "",
  width = "w-full",
  yOffset = 40,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const el = ref.current
    if (!el) return

    let fromVars: gsap.TweenVars = { opacity: 0 }
    let toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease: "power3.out" }

    switch (animation) {
      case "fade-up":
        fromVars.y = yOffset
        toVars.y = 0
        break
      case "fade-in":
        // just opacity
        break
      case "zoom-in":
        fromVars.scale = 0.9
        toVars.scale = 1
        break
      case "slide-left":
        fromVars.x = 40
        toVars.x = 0
        break
      case "slide-right":
        fromVars.x = -40
        toVars.x = 0
        break
    }

    toVars.scrollTrigger = {
      trigger: el,
      start: "top 85%", // Trigger animation when top of element hits 85% of viewport
      toggleActions: "play none none reverse", // play on enter, reverse on leave back
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, fromVars, toVars)
    }, ref)

    return () => ctx.revert()
  }, [animation, duration, delay, yOffset])

  return (
    <div ref={ref} className={`${width} ${className} opacity-0`}>
      {children}
    </div>
  )
}
