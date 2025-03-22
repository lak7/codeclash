"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Square, Circle, Triangle } from "lucide-react"

export function FloatingShapes({ count = 9 }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    // Update dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const shapes = [
    { component: Square, color: "text-pink-500/60" },
    { component: Circle, color: "text-pink-500/60" },
    { component: Triangle, color: "text-pink-500/60" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const randomShape = shapes[i % shapes.length]
        const ShapeComponent = randomShape.component
        const size = 12 + Math.random() * 8 // Random size between 12-20

        return (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
              opacity: 0.1 + Math.random() * 0.3, // Random opacity
            }}
            animate={{
              x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
              y: [
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
                Math.random() * dimensions.height,
              ],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + Math.random() * 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div
              className="relative backdrop-blur-sm rounded-lg border border-pink-500/10 flex items-center justify-center transform transition-transform"
              style={{ width: `${size}px`, height: `${size}px` }}
            >
              <ShapeComponent
                className={`${randomShape.color}`}
                style={{ width: `${size / 2}px`, height: `${size / 2}px` }}
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

