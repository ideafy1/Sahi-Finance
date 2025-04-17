"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { NewsItem } from "@/types/news"

export function NewsForm() {
  const [formData, setFormData] = useState<Partial<NewsItem>>({
    title: "",
    content: "",
    imageUrl: "",
    author: "",
    date: new Date().toISOString().split("T")[0],
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          id: Date.now().toString(),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage("News item created successfully!")
        setFormData({
          title: "",
          content: "",
          imageUrl: "",
          author: "",
          date: new Date().toISOString().split("T")[0],
        })
      } else {
        setMessage(`Error: ${data.message}`)
      }
    } catch (error) {
      setMessage("An error occurred while submitting the form.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea id="content" name="content" value={formData.content} onChange={handleChange} rows={5} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author">Author</Label>
        <Input id="author" name="author" value={formData.author} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="readMoreUrl">Read More URL (Optional)</Label>
        <Input id="readMoreUrl" name="readMoreUrl" value={formData.readMoreUrl || ""} onChange={handleChange} />
      </div>

      {message && <div className={message.includes("Error") ? "text-red-500" : "text-green-500"}>{message}</div>}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Add News Item"}
      </Button>
    </form>
  )
}
