import { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import  SpeakersPage from "./speakerPage"

/* ================= SEO METADATA ================= */

export const metadata: Metadata = {
  //  metadataBase: new URL("https://yourdomain.com"),
  title: "Our Speakers | TEDxKIET",
  description:
    "Visionaries, innovators, and change-makers who share ideas worth spreading on our stage.",
  keywords: [
    "TEDxKIET",
    "TEDx Speakers",
    "KIET",
    "TEDx Leadership",
    "Speakers",
  ],
  openGraph: {
    title: "Our Speakers | TEDxKIET",
    description: "Visionaries, innovators, and change-makers who share ideas worth spreading on our stage.",
    images: ["/tedgroup.jpeg"],
    type: "website",
  },
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <SpeakersPage />
      <Footer />
    </>
  )
}
