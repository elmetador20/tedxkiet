"use client"

import { useEffect, useRef } from "react"

export default function TedxParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: {
      x: number
      y: number
      r: number
      vx: number
      vy: number
      opacity: number
    }[] = []

    const resize = () => {
      canvas.width = window.innerHeight * (16 / 9)
      canvas.height = window.innerHeight* (9 / 16)
    }

    resize()
    window.addEventListener("resize", resize)

    // const createParticles = () => {
    //   particles = Array.from({ length: 40 }).map(() => ({
    //     x: Math.random() * canvas.width,
    //     y: Math.random() * canvas.height,
    //     r: Math.random() * 1.5 + 0.5,
    //     vx: (Math.random() - 0.5) * 0.15,
    //     vy: (Math.random() - 0.5) * 0.15,
    //     opacity: Math.random() * 0.4 + 0.2,
    //   }))
    // }

    // createParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  )
}
