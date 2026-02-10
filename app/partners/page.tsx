import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Handshake, ArrowRight } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import { partners } from "@/data/partners"


export const metadata: Metadata = {
  title: "Our Partners | TEDxKIET",
  description:
    "Meet the sponsors and partners who support TEDxKIET and help spread powerful ideas.",
  openGraph: {
    title: "Our Partners | TEDxKIET",
    description:
      "Organizations that believe in the power of ideas and support TEDxKIET.",
    type: "website",
  },
}



export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Supporters
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
              Our <span className="text-accent">Partners</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Organizations that believe in the power of ideas and support our
              mission.
            </p>

          </div>
        </div>
      </section>

   

      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {partners.map((partner, index) => (
              <article
                key={partner.id}
                tabIndex={0}
                aria-label={`Partner ${partner.name}`}
                className="
                  group p-8 rounded-2xl bg-card border border-border
                  transition-all duration-300
                  hover:border-accent hover:shadow-lg
                  active:scale-95
                  focus-visible:ring-2 focus-visible:ring-accent
                  cursor-pointer
                  outline-none
                "
              >

           

                <div
                  className="
                    aspect-[2/1] rounded-xl bg-muted
                    flex items-center justify-center
                    p-6 mb-6
                    transition-all duration-300
                    group-hover:bg-accent/5
                  "
                >
                  <div className="relative w-full h-full">

                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index < 3}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="
                        object-contain
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    />

                  </div>
                </div>

                

                <span
                  className="
                    inline-flex items-center gap-2
                    px-3 py-1 rounded-full
                    bg-accent/10 text-accent
                    text-sm font-medium mb-3
                  "
                >
                  {partner.category}
                </span>

          

                <h3 className="text-xl font-bold">
                  {partner.name}
                </h3>

              </article>
            ))}

          </div>

        </div>
      </section>

      
      <section className="py-20 bg-card">

        <div className="container mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">

            <div
              className="
                w-20 h-20 rounded-full bg-accent/10
                flex items-center justify-center
                mx-auto mb-8
              "
            >
              <Handshake className="w-10 h-10 text-accent" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Partner
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Partner with TEDxKIET and be part of a movement that spreads ideas.
            </p>

            <Link
              href="/contact"
              className="
                inline-flex items-center gap-3
                bg-accent hover:bg-accent/90
                text-accent-foreground
                px-8 py-4 rounded-full
                font-semibold
                transition-all
                hover:scale-105
                active:scale-95
                focus-visible:ring-2 focus-visible:ring-accent
                outline-none
              "
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  )
}
