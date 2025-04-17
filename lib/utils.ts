import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Function to handle URL shortening (mock implementation)
export async function shortenUrl(originalUrl: string): Promise<string> {
  // In a real implementation, this would call the sahiurl.in API
  // For now, we'll just return a mock shortened URL
  const randomId = Math.random().toString(36).substring(2, 8)
  return `https://sahiurl.in/${randomId}`
}

// Function to track user progress through the feed
export function trackUserProgress(userId: string, cardsViewed: number): void {
  // In a real implementation, this would save to a database or analytics service
  console.log(`User ${userId} has viewed ${cardsViewed} cards`)
}

// Function to get destination URL from shortened URL (mock implementation)
export async function getDestinationUrl(shortUrl: string): Promise<string> {
  // In a real implementation, this would look up the destination URL
  // For now, we'll just return a mock destination
  return "https://example.com/destination"
}
