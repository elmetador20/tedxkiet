import { Metadata } from "next"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import PaymentPage from "./payPage"

/* ================= SEO METADATA ================= */

export const metadata = {
  title: "Secure Payment | TEDx KIET",
  description: "Complete your registration securely",
}
export default function TeamPage() {
  return (
    <>
      <Navbar />
      <PaymentPage/>
      <Footer />
    </>
  )
}
