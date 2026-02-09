import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import AshesRemain from "../AshesRemain/page"
import { ArrowRight } from "lucide-react"

export default function ThemePage() {
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
                <span className="text-accent">one</span> +{" "}
                <span className="text-foreground">One</span>
                <span className="text-accent">=</span>
                <span className="text-accent">three</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
                Our theme explores how diverse viewpoints come together to create a richer understanding of our world.
              </p>
            </div>

            {/* RIGHT: Card with Image */}
            <div className="flex justify-center md:justify-end">
              <div className="
                bg-card
                border border-border
                rounded-2xl
                shadow-xl
                p-4
                w-[260px]
                md:w-[340px]
              ">
                <img
                  src="/theme.png"
                  alt="Theme Poster"
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
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
                A mosaic is created when individual pieces, each unique in color and shape,
                come together to form a beautiful, cohesive image. Similarly, our world is
                shaped by countless perspectives — each one adding depth, texture, and
                meaning to our collective understanding.
              </p>

              <p>
                At TEDxKIET 2025, we celebrate this diversity of thought. We bring together
                speakers from various backgrounds — scientists, artists, entrepreneurs,
                educators, and changemakers — each offering their unique piece of the mosaic.
              </p>

              <p>
                Through their stories and ideas, we explore how embracing different
                viewpoints leads to innovation, empathy, and transformative change.
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
                title: "Diversity",
                description:
                  "Celebrating the richness that comes from varied backgrounds, experiences, and ways of thinking.",
                icon: "🌈",
              },
              {
                title: "Connection",
                description:
                  "Finding the threads that bind us together despite our differences.",
                icon: "🔗",
              },
              {
                title: "Transformation",
                description:
                  "Discovering how diverse perspectives catalyze meaningful change.",
                icon: "✨",
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
