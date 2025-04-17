import { NextResponse } from "next/server"
import { newsData } from "@/data/news-data"

export async function GET() {
  // In a real application, this would fetch from a database
  return NextResponse.json(newsData)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // In a real application, this would validate and save to a database
    // For now, we'll just return the data that was sent
    return NextResponse.json(
      {
        success: true,
        message: "News item created successfully",
        data: body,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create news item",
      },
      { status: 400 },
    )
  }
}
