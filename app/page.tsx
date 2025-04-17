"use client"

import { useState, useEffect } from "react"
import NewsFeed from "@/components/news-feed"
import { Navbar } from "@/components/navbar"
import { BottomNav } from "@/components/bottom-nav"
import { LoadingSkeleton } from "@/components/loading-skeleton"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex min-h-screen flex-col bg-black overflow-hidden">
      <Navbar />
      <div className="flex-1 overflow-hidden">
        {loading ? <LoadingSkeleton /> : <NewsFeed />}
      </div>
      <BottomNav />
    </main>
  )
}
