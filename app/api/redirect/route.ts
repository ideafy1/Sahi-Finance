import { type NextRequest, NextResponse } from "next/server"
import { getDestinationUrl } from "@/lib/utils"

export async function GET(request: NextRequest) {
  // Get the shortened URL from the query parameters
  const url = request.nextUrl.searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
  }

  try {
    // Get the destination URL
    const destinationUrl = await getDestinationUrl(url)

    // In a real implementation, we would redirect to the news feed first
    // and then to the destination URL after the user has viewed enough content

    // For now, we'll just return the destination URL
    return NextResponse.json({ destinationUrl })
  } catch (error) {
    return NextResponse.json({ error: "Failed to get destination URL" }, { status: 500 })
  }
}
