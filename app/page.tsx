import Link from "next/link"
import { ArrowRight, Calendar, MapPin, Play } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/ui/3d-particles-background"
import CountdownTimer from "@/components/countdown-timer"
import Image from "next/image"
import TedxParticles from "@/components/tedxBacground"


const EVENT_DATE = new Date("2025-04-10")
const EVENT_DISPLAY_DATE = "April 10, 2026"
const EVENT_LOCATION = "KIET Deemed to be University , Delhi NCR"

const STATS = [
  { number: "10+", label: "Events Organized" },
  { number: "50+", label: "Speakers Featured" },
  { number: "5000+", label: "Attendees Inspired" },
  { number: "10K+", label: "Online Views" },
] as const

const FEATURED_SECTIONS = [
  {
    title: "Our Speakers",
    description: "Meet the visionaries who share groundbreaking ideas on our stage.",
    href: "/speakers",
    image: "/SPEAKERBANNER.jpg",
  },
  {
    title: "Our Team",
    description: "The passionate individuals who make TEDxKIET possible.",
    href: "/team",
    image: "/tedgroup.jpeg",
  },
  {
    title: "Partners",
    description: "Organizations that support our mission of spreading ideas.",
    href: "/partners",
    image: "/business-partnership-handshake-modern.jpg",
  },
] as const

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

  
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-accent/5 dark:from-[#0c0c14] dark:via-[#12121a] dark:to-[#1a0f0f]" aria-hidden="true" />

        {/* Decorative blurs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" aria-hidden="true" />
  
        <ParticlesBackground />
        <div className="tedx-hero-bg" aria-hidden="true" />

        {/* Particles */}
        <TedxParticles />

        {/* Noise */}
        <div className="tedx-noise" aria-hidden="true" />

        {/* Radial overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)] opacity-50" aria-hidden="true" />

        <div className="relative z-10 container mx-auto px-6 text-center pt-28">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
              Ideas Worth Spreading
            </span>
          </div>

          {/* Main heading */}
          <h1 
            id="hero-heading"
            className="text-3xl sm:text-3xl md:text-5xl lg:text-8xl font-black tracking-tighter mb-10"
          >
            <span className="text-accent">HELLO</span>{" "}
            <span className="text-foreground">EXPLORER</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Are you ready to unveil the unexplored?
          </p>

          {/* Countdown */}
          <div className="mb-12">
            <CountdownTimer targetTime={EVENT_DATE} />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/event"
              className="group inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Get Tickets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="http://tedxkiet.herolinks.ca"
              className="inline-flex items-center gap-3 border border-border hover:border-foreground bg-background/50 backdrop-blur-sm px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-background/80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Play className="w-5 h-5" aria-hidden="true" />
              Watch Past Talks
            </Link>
          </div>

          {/* Event Info */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-accent" aria-hidden="true" />
              <time dateTime="2026-04-25">{EVENT_DISPLAY_DATE}</time>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
              <span>{EVENT_LOCATION}</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-accent to-transparent" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-card" aria-labelledby="about-heading">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">About TEDx</span>
              <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
                <span className="text-foreground">TED</span>
                <span className="text-accent">x</span>
                <span className="text-foreground">KIET</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring
                people together to share a TED-like experience. At TEDxKIET, TED Talks video and live speakers combine
                to spark deep discussion and connection.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                x = independently organized TED event. The TED Conference provides general guidance for the TEDx
                program, but individual TEDx events are self-organized.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold mt-8 hover:gap-4 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-linear-to-br from-accent/10 to-accent/5 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                  <Image
                    src="/TedxKIET2021.jpg"
                    alt="TEDxKIET 2021 event photo showcasing speakers and attendees"
                    width={600}
                    height={600}
                    className="rounded-3xl object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent rounded-full blur-3xl opacity-30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border" aria-labelledby="stats-heading">
        <div className="container mx-auto px-6">
          <h2 id="stats-heading" className="sr-only">TEDxKIET Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-accent mb-2" aria-label={`${stat.number} ${stat.label}`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-32" aria-labelledby="featured-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Explore</span>
            <h2 id="featured-heading" className="text-4xl md:text-5xl font-bold mt-4">
              Discover TEDxKIET
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SECTIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent transition-all duration-500  
                  transition-all duration-300
                  hover:border-accent hover:shadow-lg
                  active:scale-95
                  focus-visible:ring-2 focus-visible:ring-accent
                  cursor-pointer
                  outline-none"
              >
                <div className="aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.description}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" aria-hidden="true" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="flex items-center gap-2 mt-4 text-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent" aria-labelledby="cta-heading">
        <div className="container mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl md:text-6xl font-black text-accent-foreground mb-6">
            Ready to be Inspired?
          </h2>
          <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-10">
            Join us for an unforgettable experience where ideas come alive and connections are made.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/event"
              className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Register Now <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border-2 border-accent-foreground text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-foreground hover:text-accent transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
