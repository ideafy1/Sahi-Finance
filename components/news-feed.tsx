"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { NewsCard } from "@/components/news-card"
import { newsData } from "@/data/news-data"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NewsFeed() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDestination, setShowDestination] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const feedRef = useRef<HTMLDivElement>(null)

  // Required number of cards to view before showing destination
  const requiredViews = 3

  useEffect(() => {
    // Check if user has viewed enough cards to show destination
    if (currentIndex >= requiredViews - 1) {
      setShowDestination(true)
    }
  }, [currentIndex])

  // Handle scroll events with debounce to ensure one-at-a-time scrolling
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return

      setIsScrolling(true)

      if (e.deltaY > 0 && currentIndex < newsData.length - 1) {
        // Scroll down
        setCurrentIndex((prev) => prev + 1)
      } else if (e.deltaY < 0 && currentIndex > 0) {
        // Scroll up
        setCurrentIndex((prev) => prev - 1)
      }

      // Reset scrolling state after animation completes (match CSS duration)
      setTimeout(() => {
        setIsScrolling(false)
      }, 500)
    }

    const feedElement = feedRef.current
    if (feedElement) {
      feedElement.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (feedElement) {
        feedElement.removeEventListener("wheel", handleWheel)
      }
    }
  }, [currentIndex, isScrolling])

  // Handle touch events for mobile with improved one-at-a-time control
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isScrolling) return
    setTouchStart(e.targetTouches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isScrolling) return
    setTouchEnd(e.targetTouches[0].clientY)
  }

  const handleTouchEnd = () => {
    if (isScrolling || !touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isSwipeDown = distance > 50
    const isSwipeUp = distance < -50

    if (isSwipeDown || isSwipeUp) {
      setIsScrolling(true)

      if (isSwipeDown && currentIndex < newsData.length - 1) {
        setCurrentIndex((prev) => prev + 1)
      } else if (isSwipeUp && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1)
      }

      // Reset scrolling state after animation completes (match CSS duration)
      setTimeout(() => {
        setIsScrolling(false)
      }, 500)
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  const handleDestinationClick = () => {
    // In a real implementation, this would redirect to the original destination URL
    alert("Redirecting to original destination URL")
  }

  return (
    <div
      ref={feedRef}
      className="h-full w-full overflow-hidden pt-16 pb-20 no-select"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="transition-transform duration-500 ease-in-out will-change-transform h-full"
        // Use vh units for transform based on index
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {newsData.map((news, index) => (
          // Removed height prop pass
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      {showDestination && (
        <div className="fixed bottom-24 left-0 right-0 flex justify-center z-50 p-4">
          <Button
            onClick={handleDestinationClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg flex items-center"
          >
            Continue to Destination
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}
