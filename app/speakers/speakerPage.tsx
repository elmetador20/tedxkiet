"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Play, ExternalLink } from "lucide-react"
import { speakers } from "@/data/speakers"
import  Image from "next/image"

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {speakers.map((speaker, index) => (
              <div
                key={index}
                tabIndex={0}
                onClick={(e) => e.currentTarget.focus()}
                className="group relative overflow-hidden rounded-2xl
                           bg-card border border-border
                           transition-colors duration-500
                           hover:border-accent
                           focus-within:border-accent
                           focus:outline-none"
              >

                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden relative">

                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
                    className="object-cover
               transition-transform duration-700
               group-hover:scale-105
               group-focus-within:scale-105"
                    priority={index < 3}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0
                               bg-gradient-to-t
                               from-background
                               via-background/50
                               to-transparent"
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <div className="inline-flex items-center gap-2
                                  px-3 py-1 rounded-full
                                  bg-accent/20 text-accent
                                  text-sm font-medium mb-3">

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

                {/* Action Button */}
                <button
                  aria-label="View speaker details"
                  className="absolute top-4 right-4
                             w-10 h-10 rounded-full
                             bg-background/80 backdrop-blur
                             flex items-center justify-center

                             opacity-0
                             transition-opacity duration-300

                             group-hover:opacity-100
                             group-focus-within:opacity-100

                             hover:bg-accent
                             hover:text-accent-foreground"
                >
                  <ExternalLink className="w-5 h-5" />
                </button>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Past Talks */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Watch Past Talks
            </h2>

            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Relive the inspiring moments from our previous events.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.youtube.com/@tedxkiet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3
                         bg-accent hover:bg-accent/90
                         text-accent-foreground
                         px-8 py-4 rounded-full
                         font-semibold

                         transition-transform duration-300
                         hover:scale-105"
            >
              <Play className="w-5 h-5" />
              Watch on YouTube
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
