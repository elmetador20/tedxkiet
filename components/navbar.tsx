"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/components/theme-provider"

/* ================= TYPES ================= */

interface DropdownItem {
  href: string
  label: string
}

interface NavItem {
  href?: string
  label: string
  dropdown?: DropdownItem[]
}

/* ================= DATA ================= */

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { label: "Theme", href: "/AshesRemain" },
  {
    label: "About",
    dropdown: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "TEDx Team" },
    ],
  },
  {
    label: "Speakers",
    dropdown: [
      { href: "/speakers", label: "Our Past Speakers" },
      { href: "/speakers#new", label: "New Speakers" },
      { href: "/contact#speak", label: "Apply To Speak" },
    ],
  },
  { href: "/event", label: "Events" },
  { href: "/contact", label: "Contact us" },
]

/* ================= DESKTOP DROPDOWN ================= */

function Dropdown({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
}) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        isOpen && onToggle()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, onToggle])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors",
          isOpen
            ? "text-accent"
            : "text-foreground/80 hover:text-foreground"
        )}
      >
        {item.label}
        <ChevronDown
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute top-full left-0 mt-2 min-w-[180px] bg-popover border border-border rounded-xl shadow-xl overflow-hidden z-50 transition-all",
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        )}
      >
        {item.dropdown?.map((sub) => (
          <Link
            key={sub.href}
            href={sub.href}
            onClick={onToggle}
            className="block px-4 py-3 text-sm hover:bg-accent hover:text-accent-foreground"
          >
            {sub.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ================= NAVBAR ================= */

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Close mobile properly */
  const closeMobile = () => {
    setIsOpen(false)
    setMobileDropdown(null)
  }

  return (
    <header className="fixed top-4 left-4 right-4 z-50">

      {/* ================= NAV ================= */}
      <nav
        className={cn(
          "mx-auto max-w-7xl rounded-full border transition-all duration-300",
          scrolled
            ? "bg-background/70 backdrop-blur-xl border-border shadow-lg"
            : "bg-background/70 backdrop-blur-md border-border/50"
        )}
      >
        <div className="flex items-center justify-between px-4 lg:px-6 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/tedblack.png" className="h-7 dark:hidden" />
            <img src="/tedwhite.png" className="h-7 hidden dark:block" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 opacity-80">
            {navLinks.map((link) =>
              link.dropdown ? (
                <Dropdown
                  key={link.label}
                  item={link}
                  isOpen={openDropdown === link.label}
                  onToggle={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label
                    )
                  }
                />
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="px-4 py-2 text-sm font-medium rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/10"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2 opacity-80">
            <Link
              href="/payments"
              className="bg-accent text-accent-foreground px-5 py-2 rounded-full font-semibold text-sm hover:scale-105 transition"
            >
              Get Tickets
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-foreground/10"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </nav>



      <div
        className={cn(
          "fixed inset-0 z-[999] lg:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        {/* Overlay */}
        <div
          onClick={closeMobile}
          className="absolute inset-0 bg-black/60"
        />

        {/* Drawer */}
      <div
  className={cn(
    "absolute top-0 right-0 h-full w-[80%] max-w-sm",
    "bg-background/50 backdrop-blur-2xl",
    "border-l border-border/40 shadow-2xl",
    "transition-transform duration-300",
    isOpen ? "translate-x-0" : "translate-x-full"
  )}
>
          <div className="p-6 space-y-4">

            {/* Close */}
            <button onClick={closeMobile} className="mb-4">
              <X className="w-6 h-6" />
            </button>

            {/* Links */}
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>

                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.label
                          ? null
                          : link.label
                      )
                    }
                    className="flex justify-between w-full py-3 font-medium"
                  >
                    {link.label}

                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        mobileDropdown === link.label && "rotate-180"
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      "pl-4 overflow-hidden transition-all",
                      mobileDropdown === link.label
                        ? "max-h-40"
                        : "max-h-0"
                    )}
                  >
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMobile}
                        className="block py-2 text-muted-foreground"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>

                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  onClick={closeMobile}
                  className="block py-3 font-medium"
                >
                  {link.label}
                </Link>
              )
            )}

            {/* CTA */}
            <Link
              href="/payments"
              onClick={closeMobile}
              className="block w-full mt-6 bg-accent text-accent-foreground py-3 rounded-full text-center font-semibold"
            >
              Get Tickets
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}
