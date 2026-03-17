"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface StaggerRevealProps {
  children: React.ReactNode
  className?: string
  stagger?: number
  duration?: number
  yOffset?: number
}

// Container that triggers the stagger animation on all `.stagger-item` children
export function StaggerReveal({
  children,
  className = "",
  stagger = 0.1,
  duration = 0.8,
  yOffset = 30,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll(".stagger-item")
    if (items.length === 0) return

    // Set initial state
    gsap.set(items, { opacity: 0, y: yOffset })

    const ctx = gsap.context(() => {
      gsap.to(items, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [stagger, duration, yOffset])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

// Helper component to mark children to be staggered
export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`stagger-item opacity-0 ${className}`}>
      {children}
    </div>
  )
}
