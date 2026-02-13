"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Play } from "lucide-react"
import { speakers } from "@/data/speakers"
import Image from "next/image"

export default function SpeakersPage() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm">
            The Voices
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
            Our <span className="text-accent">Speakers</span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Visionaries, innovators, and change-makers who share ideas worth spreading on our stage.
          </p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {speakers.map((speaker, index) => {
              const isOpen = active === index

              return (
                <div
                  key={index}
                  onClick={() =>
                    setActive(isOpen ? null : index)
                  }
                  className="cursor-pointer rounded-2xl overflow-hidden bg-card border border-border hover:border-accent transition-all duration-500"
                >
                  {/* Image Container */}
                  <div
                    className={`relative w-full overflow-hidden transition-all duration-500 ${
                      isOpen ? "h-48" : "h-[400px]"
                    }`}
                  >
                    <Image
                      src={speaker.image || "/placeholder.svg"}
                      alt={speaker.name}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        isOpen ? "scale-105" : "scale-100"
                      }`}
                      sizes="(max-width:768px) 100vw,
                             (max-width:1200px) 50vw,
                             33vw"
                      priority={index < 3}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                    {/* Name & Topic (Always Visible) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-3">
                        <Play className="w-3 h-3" />
                        {speaker.topic}
                      </div>

                      <h3 className="text-2xl font-bold mb-1">
                        {speaker.name}
                      </h3>

                      <p className="text-muted-foreground">
                        {speaker.title}
                      </p>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOpen
                        ? "max-h-[500px] opacity-100 p-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {speaker.description}
                    </p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
