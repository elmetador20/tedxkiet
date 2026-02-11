import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Lightbulb, Users, Globe, Sparkles } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6 leading-tight">
              Ideas That
              <br />
              <span className="text-accent">Shape Tomorrow</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              TEDxKIET is where innovation meets inspiration. We bring together the brightest minds to share ideas worth
              spreading.
            </p>
          </div>
        </div>
      </section>

      {/* What is TEDx */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <span className="text-9xl font-black text-accent/30">
                <img className="relative px-5 py-3 rounded-b-md" src="tedximage.webp" alt="" />  </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">
                What is <span className="text-accent">TEDx</span>?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring
                people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers
                combine to spark deep discussion and connection.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-foreground">x = independently organized TED event.</strong> The TED Conference
                provides general guidance for the TEDx program, but individual TEDx events are self-organized, subject
                to certain rules and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is TED */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              What is <span className="text-accent">TED</span>?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in
              California 30 years ago, TED has grown to support its mission with multiple initiatives.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The two annual TED Conferences invite the world&apos;s leading thinkers and doers to speak for 18 minutes
              or less. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, and
              many more visionaries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Cards */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Mission</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Inspire",
                description: "Spark curiosity and inspire new ways of thinking through powerful ideas.",
              },
              {
                icon: Users,
                title: "Connect",
                description: "Build a community of curious minds passionate about making a difference.",
              },
              {
                icon: Globe,
                title: "Impact",
                description: "Create lasting impact by spreading ideas that can change the world.",
              },
              {
                icon: Sparkles,
                title: "Innovate",
                description: "Foster innovation by bringing diverse perspectives together.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-background border border-border hover:border-accent transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                  <item.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to be part of the movement?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join us at our next event and experience the power of ideas worth spreading.
          </p>
          <Link
            href="/event"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
          >
            Register for Event <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
