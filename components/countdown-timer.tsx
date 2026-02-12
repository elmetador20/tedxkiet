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

export default function CountdownTimer({ targetTime }: CountdownTimerProps) {
  const target = new Date("2026-04-10T00:00:00+05:30").getTime()

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = Date.now()
      const diff = target - now

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    }

    // Set immediately after mount
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [target])

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-4 gap-4">
        {units.map((unit, index) => (
          <div key={unit.label} className="relative text-center">
            <div className="bg-card/80 backdrop-blur-md border border-border/50 rounded-xl p-6">

              {/* Fixed width prevents CLS */}
              <div className="text-6xl font-black tabular-nums w-[100px] mx-auto">
                {String(unit.value).padStart(2, "0")}
              </div>

              <div className="text-sm text-muted-foreground font-medium mt-2 uppercase tracking-wider">
                {unit.label}
              </div>
            </div>

            {index < 3 && (
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-4xl text-accent font-bold hidden sm:block">
                :
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
