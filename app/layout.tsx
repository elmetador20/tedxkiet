import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"



const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "TEDxKIET | Ideas Worth Spreading",
  description:
    "TEDxKIET is an independently organized TED event focused upon bringing together speakers and participants under one roof to strike up conversations that matter.",
  keywords: ["TEDx", "KIET", "TEDxKIET", "Ideas Worth Spreading", "TED Talks", "Ghaziabad"],
  authors: [{ name: "TEDxKIET Team" }],
  openGraph: {
    title: "TEDxKIET | Ideas Worth Spreading",
    description:
      "TEDxKIET is an independently organized TED event focused upon bringing together speakers and participants under one roof to strike up conversations that matter.",
    type: "website",
    locale: "en_US",
    siteName: "TEDxKIET",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tedxkiet",
    creator: "@tedxkiet",
  },
  icons: {
    icon: "/TEDX.jpg",
    apple: "/TEDX.jpg",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
         
          {children}
           
        </ThemeProvider>
       
        <Analytics />
      </body>
    </html>
  )
}
