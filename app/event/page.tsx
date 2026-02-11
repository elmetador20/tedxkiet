import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Clock, Users, ArrowRight, CheckCircle } from "lucide-react"
import { toast } from "sonner"

export default function EventPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent bg-accent/10 mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-accent">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-6">
              <span className="text-foreground">TED</span>
              <span className="text-accent">x</span>
              <span className="text-foreground">KIET</span>
              <br />
              <span className="text-accent">2025</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              An immersive experience where groundbreaking ideas meet passionate minds. Be part of something
              extraordinary.
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Calendar, text: "Date TBA" },
                { icon: Clock, text: "Full Day Event" },
                { icon: MapPin, text: "KIET Ghaziabad" },
                { icon: Users, text: "Limited Seats" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <item.icon className="w-5 h-5 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <a
              href="#register"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105"
            >
              Register Interest <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">What to Expect</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inspiring Talks",
                description: "Listen to thought-provoking talks from visionary speakers across diverse fields.",
              },
              {
                title: "Networking",
                description: "Connect with like-minded individuals and build meaningful relationships.",
              },
              {
                title: "Workshops",
                description: "Participate in interactive workshops designed to spark creativity.",
              },
              {
                title: "Performances",
                description: "Experience captivating performances that blend art with ideas.",
              },
              {
                title: "Refreshments",
                description: "Enjoy curated refreshments throughout the event.",
              },
              {
                title: "Exclusive Merchandise",
                description: "Take home exclusive TEDxKIET merchandise as a memento.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Register Your Interest</h2>
              <p className="text-muted-foreground">Be the first to know when registrations open.</p>
            </div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  

                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="john@example.com"
                 
                  
                />
                 
               
                  
               
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Why do you want to attend?</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="Tell us what excites you about TEDxKIET..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02]"
              >
                Submit Registration
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
