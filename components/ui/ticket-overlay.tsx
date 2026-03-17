"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { useTicketModal } from "@/hooks/use-ticket-modal"
import { X, CheckCircle2 } from "lucide-react"

export function TicketOverlay() {
  const { isOpen, closeModal } = useTicketModal()
  const overlayRef = useRef<HTMLDivElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  
  // Track if animation is finished to allow interactions with the form
  const [isFormActive, setIsFormActive] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setIsFormActive(false)
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setIsFormActive(true)
      })

      // 1. Initial State: Background hidden, Form hidden, Text hidden
      gsap.set(overlayRef.current, { display: "flex", opacity: 0, backdropFilter: "blur(0px)" })
      gsap.set(textContainerRef.current, { display: "flex", opacity: 1 })
      gsap.set(".scatter-text", { opacity: 0, y: 50, scale: 0.8 })
      gsap.set(formRef.current, { opacity: 0, scale: 0.9, y: 30, display: "none" })

      // 2. Fade in the background overlay
      tl.to(overlayRef.current, {
        opacity: 1,
        backdropFilter: "blur(20px)",
        duration: 0.5,
        ease: "power2.out",
      })

      // 3. Stagger in the loading text "Preparing your ticket..."
      tl.to(".scatter-text", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
      })

      // 4. Hold briefly
      tl.to({}, { duration: 0.8 })

      // 5. Fade out and scale up the text
      tl.to(textContainerRef.current, {
        opacity: 0,
        scale: 1.5,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          if (textContainerRef.current) textContainerRef.current.style.display = "none"
        }
      })

      // 6. Reveal the Form Card
      tl.set(formRef.current, { display: "block" })
      tl.to(formRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power4.out",
      }, "-=0.1") // overlap slightly with text fade out

    }, overlayRef)

    return () => ctx.revert()
  }, [isOpen])

  // Handle closing animation
  const handleClose = () => {
    if (!isOpen) return

    setIsFormActive(false)
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        opacity: 0,
        backdropFilter: "blur(0px)",
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          closeModal()
          if (overlayRef.current) overlayRef.current.style.display = "none"
        }
      })
    }, overlayRef)
  }

  if (!isOpen && !isFormActive) return null

  // Split text for stagger effect
  const loadingText = "Preparing your ticket...".split("")

  return (
    <div 
      ref={overlayRef} 
      className="fixed inset-0 z-50 hidden bg-background/90 items-center justify-center p-4 overflow-y-auto"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent pointer-events-none" />

      {/* Intro Text Animation */}
      <div ref={textContainerRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight flex">
          {loadingText.map((char, index) => (
            <span key={index} className="scatter-text inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h2>
      </div>

      {/* Registration / Payment Form */}
      <div ref={formRef} className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden hidden">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background border border-border text-muted-foreground hover:text-foreground transition-all z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-black mb-2">Complete Purchase</h3>
            <p className="text-muted-foreground">Secure your spot at TEDxKIET 2026.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Ticket Info Summary */}
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-6 mt-8">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-accent/10">
                <span className="font-semibold">General Admission</span>
                <span className="font-bold">₹999</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Total Amount</span>
                <span className="text-lg font-black text-foreground">₹999</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] mt-8"
            >
              Pay Now <CheckCircle2 className="w-5 h-5" />
            </button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Secured via Razorpay
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
