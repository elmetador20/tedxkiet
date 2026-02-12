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

    const targetTimeMs = new Date("2026-04-10T00:00:00+05:30").getTime()

    if (isNaN(targetTimeMs)) return

    const updateCountdown = () => {
      const now = Date.now()
      const diff = targetTimeMs - now

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
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <div
            key={label}
            className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-4"
          >
            <div className="text-3xl sm:text-5xl font-bold">--</div>
            <div className="text-xs uppercase mt-1 text-muted-foreground">
              {label}
            </div>
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
      {/* 2 columns mobile | 4 desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {units.map((unit, index) => (
          <div key={unit.label} className="relative group">
            <div
              className="
              bg-card/70 backdrop-blur-md
              border border-border/40
              rounded-xl sm:rounded-2xl
              py-5 px-4 sm:p-6
              text-center
              transition-all duration-300
              hover:border-accent/50
              hover:shadow-lg hover:shadow-accent/10
              "
            >
              <div className="text-3xl sm:text-5xl md:text-6xl font-black tabular-nums">
                {String(unit.value).padStart(2, "0")}
              </div>

              <div className="text-[10px] sm:text-sm uppercase tracking-wider mt-2 text-muted-foreground">
                {unit.label}
              </div>
            </div>

            {/* Colon only for desktop */}
            {index < 3 && (
              <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-3xl text-accent font-bold animate-pulse">
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
