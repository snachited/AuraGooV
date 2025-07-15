import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AppName - Build Your Million Dollar App",
  description:
    "The all-in-one platform that helps entrepreneurs validate, build, and scale their ideas into profitable businesses.",
  keywords: ["startup", "entrepreneur", "saas", "business", "app development"],
  authors: [{ name: "AppName Team" }],
  openGraph: {
    title: "AppName - Build Your Million Dollar App",
    description:
      "The all-in-one platform that helps entrepreneurs validate, build, and scale their ideas into profitable businesses.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
