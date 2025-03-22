import { Square, Triangle, Circle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-black border-t border-pink-900/30">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <div className="w-8 h-8 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 transition-opacity">
            <Square className="h-6 w-6" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 transition-opacity">
            <Triangle className="h-6 w-6" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 transition-opacity">
            <Circle className="h-6 w-6" />
          </div>
        </div>
        <p className="text-pink-500 font-mono">© 2025 CodeClash 2.0 | The Ultimate 24-Hour Hackathon</p>
      </div>
    </footer>
  )
}

