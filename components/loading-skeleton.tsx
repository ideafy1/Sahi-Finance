export function LoadingSkeleton() {
  return (
    <div className="flex flex-col h-full w-full bg-black overflow-hidden pt-16 pb-20">
      {/* Content Skeleton - Only for main area */}
      <div className="flex-1 flex flex-col px-4 overflow-hidden">
        {/* Image placeholder - Matches news-card */}
        <div className="relative w-full pt-4 flex-shrink-0 max-h-[35%] mb-6">
          <div className="relative w-full aspect-[4/3] rounded-[24px] bg-gray-700/50 animate-pulse"></div>
        </div>

        {/* Title placeholder - Matches news-card */}
        <div className="h-6 bg-gray-700/50 rounded-full w-3/4 animate-pulse mb-4 mx-auto flex-shrink-0"></div>

        {/* Content placeholder - Matches news-card */}
        <div className="flex-shrink-0 max-h-[33vh] pb-8">
          <div className="bg-zinc-800/70 rounded-3xl p-5 space-y-3 h-full animate-pulse">
            <div className="h-4 bg-gray-700/50 rounded-full w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded-full w-11/12"></div>
            <div className="h-4 bg-gray-700/50 rounded-full w-10/12"></div>
            <div className="h-4 bg-gray-700/50 rounded-full w-full"></div>
            <div className="h-4 bg-gray-700/50 rounded-full w-9/12"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
