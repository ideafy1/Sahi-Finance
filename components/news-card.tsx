import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { NewsItem } from "@/types/news"
import { Heart, Send } from "lucide-react"

interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card
      className="h-screen border-none rounded-none shadow-none bg-black text-white flex flex-col"
    >
      <CardContent className="p-0 flex flex-col flex-1 min-h-0">
        {/* Reduced top padding to utilize space better */}
        <div className="relative w-full px-4 pt-4 flex-shrink-0 max-h-[35%]">
          {/* Reduced top padding from pt-8 to pt-4 */}
          <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden">
            <Image src={news.imageUrl || "/placeholder.svg"} alt={news.title} fill className="object-cover" priority />
            <div className="absolute top-4 right-4">
              <button className="bg-black/70 hover:bg-black/90 text-white rounded-full px-4 py-2 text-sm font-medium">READ MORE »</button>
            </div>
          </div>
        </div>

        {/* Title - Added more space between image and title */}
        <div className="px-4 pt-6 pb-4 flex-shrink-0 text-center">
          {/* Increased space above title (pt-6) and below (pb-4) */}
          <h2 className="text-xl font-bold text-green-500 line-clamp-2">{news.title}</h2>
        </div>

        {/* Content - Added relative positioning for icon placement */}
        <div className="relative px-4 pb-8 flex-shrink-0 max-h-[33vh]">
          <div className="bg-zinc-800 rounded-3xl p-5 h-full overflow-y-auto">
            <p className="text-base leading-relaxed pr-8">{news.content}</p>
          </div>
          
          {/* Like/Share Icons - Positioned vertically on the right with backgrounds and animations */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 flex flex-col space-y-4 z-10">
            {/* Reduced spacing slightly (space-y-4) */}
            
            {/* Like Button */} 
            <button className="group focus:outline-none">
              <div className="bg-black/50 group-hover:bg-black/75 group-active:scale-95 transition-all duration-200 ease-in-out p-2.5 rounded-xl shadow-lg">
                {/* Background div with padding, rounded corners, shadow, hover effects, active scale */} 
                <Heart className="h-6 w-6 text-white group-hover:text-red-500 transition-colors duration-200 ease-in-out" fill="currentColor" /> 
                {/* Adjusted icon size, added group-hover color change */} 
              </div>
            </button>

            {/* Share Button */} 
            <button className="group focus:outline-none">
               <div className="bg-black/50 group-hover:bg-black/75 group-active:scale-95 transition-all duration-200 ease-in-out p-2.5 rounded-xl shadow-lg">
                {/* Background div with padding, rounded corners, shadow, hover effects, active scale */} 
                 <Send className="h-6 w-6 text-white group-hover:text-blue-500 transition-colors duration-200 ease-in-out" /> 
                 {/* Adjusted icon size, added group-hover color change */} 
              </div>
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
