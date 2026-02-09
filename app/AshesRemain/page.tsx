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
                TEDxKIET 2025
              </span>

              <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
                <span className="text-accent">Future </span>
                <span className="text-foreground">Fossils</span>{" "}
                <span className="text-accent">Ashes </span>
                <span className="text-foreground">Remain</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto md:mx-0">
               Future Fossils: Ashes Remain explores the paradox of legacy — what endures and what fades. Though weightless, ashes persist. Over time, they merge with history, becoming the fossils of tomorrow.
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
                  src="/future.jpeg"
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
               Fossils are more than remnants of the past — they are proof of existence, preserved through time. They tell the story of what once lived, evolved, and left its mark on the world. Even after life fades, ashes remain — a silent testament to what was.
              </p>

              <p>
                Today, we are unconsciously creating fossils of our own. Every idea, innovation, and decision leaves an imprint that will shape how future generations remember us. Some will become legacies of progress, while others may stand as reminders of forgotten paths.

               “We are living in the past of future generations.” — Richard Feynman
              </p>

              <p>
               Just as past civilizations left behind monuments, manuscripts, and scars of conflict, we are leaving behind the building blocks of this era — code, data, systems, and beliefs. Our choices, both visionary and destructive, will be studied and interpreted by those who come after us
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
                title: "Legacy",
                description:
                  "Understanding how our ideas, actions, and innovations become the footprints we leave behind for future generations.",
                icon: "🪨",
              },
              {
                title: "Responsibility",
                description:
                  "Recognizing our duty to make conscious choices in science, society, and sustainability before they turn into irreversible consequences.",
                icon: "🔗",
              },
              {
                title: "Transformation",
                description:
                  "Exploring how reflection and awareness can turn today’s ashes into tomorrow’s wisdom and progress.",
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
            href="/theme"
            className=" inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
         Theme 2024 <ArrowRight/>
 
          </a></div>

      <Footer />
    </div>
  )
}
