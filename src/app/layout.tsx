import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { type ReactNode } from "react"

import { Provider } from "./provider"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dapp Auth Template",
  description: "A modern authentication template for dApps using Privy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dapp Auth Template",
    description: "A modern authentication template for dApps using Privy",
    type: "website",
    locale: "en_US",
    siteName: "Dapp Auth Template",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dapp Auth Template",
    description: "A modern authentication template for dApps using Privy",
  },
}

export const viewport: Viewport = {
  themeColor: "#38CCCD",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
