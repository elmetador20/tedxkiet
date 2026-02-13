"use client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react"

export default function ThemePage() {
 const [isFlipped, setIsFlipped] = useState<boolean>(false)
 const router=useRouter()
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-background" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            
            {/* LEFT: Text Content */}
            <div className="text-center md:text-left">
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                TEDxKIET 2023
              </span>

              <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
                <span className="text-foreground">Living</span> 
                <span className="text-foreground"> the</span>{" "}
                <span className="text-accent">Wonka</span>
                <span className="text-accent"> World</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                This theme encourages individuals to embrace their inner child, unleash their imagination, and rediscover the joy of playful thinking. It invites the audience to explore how creativity and wonder can transform everyday experiences.
              </p>
            </div>

            {/* RIGHT: Card with Image */}
            <div className="flex justify-center md:justify-end relative">
              <div className=" relative
            
               bg-card
              border border-border
                rounded-2xl
                shadow-xl
                p-4
                w-[260px]
                md:w-[300px]  cursor-pointer group
              " 
                onClick={() => setIsFlipped(!isFlipped)}>
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-red-600/40 via-red-500/20 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-500" ></div>
                <div className="  bg-card border border-border rounded-2xl shadow-xl 
                   group-hover:shadow-[0_20px_60px_rgba(255,0,0,0.35)] transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:rotate-y-6" style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : undefined,
                    backfaceVisibility: "hidden"
                  }}>

                  <img
                    src="/wonka.jpeg"
                    alt="Theme Poster"
                    className="w-full h-auto rounded-xl object-contain"
                  />
                  {/* back */}
                  <div
                    className="absolute inset-0 w-full h-full bg-card border border-border rounded-2xl 
             shadow-xl p-6 flex flex-col justify-center text-center
             group-hover:shadow-[0_20px_60px_rgba(255,0,0,0.35)]"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-4">
                      The Hidden Third
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      When two ideas collide, they do not just add-they multiply.
                      The hidden third force is belief, courage, and vision.
                      This is where transformation begins.

                    </p>
                  </div>



                </div>
              </div>
<button
  onClick={() => router.push("/")}
  className="absolute -right-4 md:-right-25 top-1/2 -translate-y-1/2
             bg-card border border-border
             p-2 rounded-full rounde shadow-lg
             hover:bg-accent hover:text-accent-foreground
             transition-all duration-300 hover:scale-110
             group"
>
  <div className="relative w-8 h-8 animate-arrowMove">
    <ChevronRight className="absolute left-0 top-0" size={28} />
    <ChevronRight className="absolute left-2 top-0 opacity-70" size={28} />
  </div>
</button>


            </div>

          </div>
        </div>
      </section>

      {/* Theme Description */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              About the Theme
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Wonka World celebrates bold ideas, colorful perspectives, and fearless experimentation. It represents a mindset where innovation is valued, risks are embraced, and failure is seen as a natural part of growth and learning.
              </p>

              <p>
               Living the Wonka World also means challenging conventional thinking and questioning established norms. It inspires people to break boundaries, rethink systems, and approach problems with fresh and original perspectives.
              </p>

              <p>
               At its heart, this theme highlights the importance of joy, gratitude, and mindfulness. From simple pleasures to grand discoveries, it reminds us to appreciate life’s magic and beauty.
               Beyond fantasy, the Wonka World reflects real-world challenges and possibilities. Through imagination, it addresses themes such as social responsibility, environmental sustainability, and human potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Theme Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Imagination",
                description:
                  "Encouraging limitless creativity and playful thinking to transform ordinary ideas into extraordinary possibilities.",
                icon: "🌈",
              },
              {
                title: "Innovation",
                description:
                  "Inspiring bold experimentation, risk-taking, and fresh approaches to solving real-world challenges.",
                icon: "🚀",
              },
              {
                title: "Joy",
                description:
                  "Celebrating curiosity, wonder, and gratitude in everyday life while rediscovering the magic in simple moments.",
                icon: "💫",
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-accent transition-colors"
              >
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       <div className="container mx-auto px-6 py-3.5 text-center">
       <a
            href="/"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
         Home <ArrowRight/>
          </a>
</div>
      <Footer />
    </div>
  )
}
