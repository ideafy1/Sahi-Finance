import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sahi Finance",
  description: "Latest financial news and updates",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Aggressively preload all news images for ultra-fast loading
  React.useEffect(() => {
    const urls = [
      "https://github.com/ideafy1/Sahi-Finance/blob/main/public/images/stock-exchange.jpg?raw=true",
      "https://github.com/ideafy1/Sahi-Finance/blob/main/public/images/rbi-building.jpg?raw=true",
      "https://github.com/ideafy1/Sahi-Finance/blob/main/public/images/tech-stocks.jpg?raw=true",
      "https://github.com/ideafy1/Sahi-Finance/blob/main/public/images/rupee-dollar.jpg?raw=true",
      "https://github.com/ideafy1/Sahi-Finance/blob/main/public/images/tax-reform.jpg?raw=true"
    ];
    urls.forEach(url => {
      const img = new window.Image();
      img.src = url;
    });
  }, []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
