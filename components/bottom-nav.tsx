import { Home, SquarePen, Search } from "lucide-react" // Import Search, remove Bell

export function BottomNav() {
  return (
    // Reduced height, adjusted padding, use justify-around
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black h-16 flex items-center justify-around px-6">
      {/* Home Icon - Selected by default */}
      <button className="flex items-center justify-center bg-zinc-800 text-white p-2 rounded-2xl"> {/* Added background + rounding */}
        <Home className="h-6 w-6" />
      </button>

      {/* Edit Icon with background */}
      <button className="flex items-center justify-center text-white p-2">
        <SquarePen className="h-6 w-6" />
      </button>

      {/* Search Icon */}
      <button className="flex items-center justify-center text-white p-2">
        <Search className="h-6 w-6" /> {/* Changed to Search icon */}
      </button>
    </div>
  )
}
