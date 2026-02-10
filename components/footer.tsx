import Link from "next/link"
import { Instagram, Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src="/tedblack.png" alt="TEDxKIET" className="h-10 dark:hidden" />
              <img src="/tedwhite.png" alt="TEDxKIET" className="h-10 hidden dark:block" />
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              TEDxKIET is an independently organized TED event focused upon bringing together speakers and participants
              under one roof to strike up conversations that matter.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/tedxkiet" },
                { icon: Twitter, href: "https://twitter.com/tedxkiet" },
                { icon: Linkedin, href: "https://linkedin.com/company/tedxkiet" },
                { icon: Youtube, href: "https://youtube.com/@tedxkiet" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Team", "Speakers", "Partners", "Event", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>KIET Deemed to be University, Ghaziabad, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:tedxkiet@kiet.edu" className="hover:text-accent transition-colors">
                  tedxkiet@kiet.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} TEDxKIET. This independent TEDx event is operated under license from TED.
          </p>
          <p className="text-muted-foreground text-sm">Designed & Developed with passion</p>
        </div>
      </div>
    </footer>
  )
}
