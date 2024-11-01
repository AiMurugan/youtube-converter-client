import React, { useState } from "react"
import { Download, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const API_URL = "http://localhost:3000"

export default function YouTubeConverter() {
  const [youtubeUrl, setYoutubeUrl] = useState("")
  const [videoId, setVideoId] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const handleUrlChange = (event) => {
    const url = event.target.value
    setYoutubeUrl(url)
    const extractedId = extractVideoId(url)
    setVideoId(extractedId)
  }

  const handleDownload = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${API_URL}/convert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoUrl: youtubeUrl }),
      })

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = "youtube-audio.mp3"
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Logo and Title */}
      <div className="text-center mb-12">
        <div className="inline-block animate-[bounce_2s_infinite]">
          <Youtube className="h-16 w-16 text-red-500" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl font-bold tracking-tighter mt-4 dark:text-white text-black">
          YouTube to MP3
        </h1>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-xl">
        <div className="bg-zinc-900/90 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center text-white">
            Enter YouTube URL
          </h2>
          
          <div className="space-y-6">
            <Input
              type="text"
              value={youtubeUrl}
              onChange={handleUrlChange}
              className="w-full px-4 py-3 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
              placeholder="Paste your YouTube URL here"
            />

            {/* Video Preview */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-zinc-800">
              {videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="border-none"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-500">
                  Video preview will appear here
                </div>
              )}
            </div>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={!videoId || isLoading}
              className="w-full h-12 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span>Processing...</span>
              ) : (
                <>
                  <Download className="h-5 w-5" />
                  <span>Download MP3</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}