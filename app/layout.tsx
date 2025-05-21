import type React from "react"
import "@/app/globals.css"

export const metadata = {
  title: "Hack Club - A Global Community of Teen Hackers",
  description:
    "We are 66,472 teen hackers from around the world who code together. Join the movement. Build the future.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
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
      <body className="light bg-white text-slate-900">{children}</body>
    </html>
  )
}
