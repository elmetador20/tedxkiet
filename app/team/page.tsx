import { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import TeamClient from "./TeamClient"

/* ================= SEO METADATA ================= */

export const metadata: Metadata = {
  title: "Our Team | TEDxKIET",
  description:
    "Meet the passionate and dedicated team behind TEDxKIET. Discover our leadership, team heads, and core members.",
  keywords: [
    "TEDxKIET",
    "TEDx Team",
    "KIET",
    "TEDx Leadership",
    "Student Organization",
  ],
  openGraph: {
    title: "Our Team | TEDxKIET",
    description: "Meet the passionate and dedicated team behind TEDxKIET.",
    images: ["/tedgroup.jpeg"],
    type: "website",
  },
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <TeamClient />
      <Footer />
    </>
  )
}
