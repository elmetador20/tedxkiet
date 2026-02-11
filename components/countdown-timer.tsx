"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}
interface CountdownTimerProps {
  targetTime: Date
}


 function CountdownTimer({ targetTime }: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setMounted(true)

    // ✅ Target date: 25 April 2026, 00:00:00 IST
    const targetTime = new Date("2026-04-10T00:00:00+05:30").getTime()

    if (isNaN(targetTime)) return

    const updateCountdown = () => {
      const now = Date.now()
      const diff = targetTime - now

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <div className="grid grid-cols-4 gap-4 text-center">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div key={label}>
            <div className="text-5xl font-bold">--</div>
            <div className="text-sm uppercase">{label}</div>
          </div>
        ))}
      </div>
    )
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]


  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {units.map((unit, index) => (
          <div key={unit.label} className="relative group">
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-4 sm:p-6 text-center transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
              <div className="text-3xl sm:text-5xl md:text-6xl font-black text-foreground tabular-nums transition-all">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-2 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>
            {/* Separator colon */}
            {index < 3 && (
              <div className="absolute -right-1 sm:-right-2 top-1/2 -translate-y-1/2 text-2xl sm:text-4xl text-accent font-bold hidden sm:block animate-pulse">
                :
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
  )
}
export default CountdownTimer
