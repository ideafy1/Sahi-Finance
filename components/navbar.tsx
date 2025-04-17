export function Navbar() {
  return (
    // Increased padding-top to move text down
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-4 px-4">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-extrabold tracking-tight"> 
          {/* Added font-extrabold and tracking-tight for enhanced appearance */}
          <span className="text-white">Sahi</span>
          <span className="text-green-500">Finance</span>
        </h1>
      </div>
    </header>
  )
}
