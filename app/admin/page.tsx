import { NewsForm } from "@/components/admin/news-form"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-zinc-900 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          <span className="text-white">Sahi</span>
          <span className="text-green-500">Finance</span>
          <span className="text-white ml-2">Admin</span>
        </h1>

        <div className="bg-black p-6 rounded-lg border border-zinc-800">
          <h2 className="text-xl font-semibold mb-6">Add New Finance News</h2>
          <NewsForm />
        </div>
      </div>
    </div>
  )
}
