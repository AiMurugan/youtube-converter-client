import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "./components/ui/toaster"
import YouTubeConverter from "./components/youtube-converter"
import BackgroundDots from "./components/background-dots"
import { ModeToggle } from "./components/mode-toggle"

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="youtube-converter-theme">
      <div className="relative min-h-screen">
        <BackgroundDots />
        <ModeToggle />
        <YouTubeConverter />
        <Toaster />
      </div>
    </ThemeProvider>
  )
}