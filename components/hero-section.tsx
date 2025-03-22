"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ChevronDown } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { FloatingShapes } from "@/components/ui/floating-shapes";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect values
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const titleY = useTransform(scrollY, [0, 500], [0, -50]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, -30]);
  const buttonY = useTransform(scrollY, [0, 500], [0, -10]);
  const cardsY = useTransform(scrollY, [0, 500], [0, 20]);
  const symbolsScale = useTransform(scrollY, [0, 300], [1, 1.2]);
  const symbolsRotate = useTransform(scrollY, [0, 300], [0, 10]);
  const opacitySymbols = useTransform(scrollY, [0, 300], [1, 0.6]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 z-5">
        <FloatingShapes count={9} />
      </div>

      {/* Sparkles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={70}
          className="w-full h-full"
          particleColor="#ec4899"
        />
      </div>

      {/* Background layers with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-black">
          {/* Dotted pattern overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Gradient beams */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-pink-500/0 via-pink-500/30 to-pink-500/0 blur-sm"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-pink-500/0 via-pink-500/20 to-pink-500/0 blur-sm"></div>
            <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0 blur-sm"></div>
          </div>
        </div>
      </motion.div>

      {/* Squid Game symbols with parallax */}
      <motion.div
        className="absolute top-10 right-10 z-20 hidden md:block"
        style={{
          scale: symbolsScale,
          rotate: symbolsRotate,
          opacity: opacitySymbols,
        }}
      ></motion.div>

      {/* Main content with parallax */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center">
        <motion.div className="mb-4" style={{ y: titleY }}>
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-400 text-center leading-none tracking-tight">
            CodeClash 2.0
          </h1>
          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 mt-4 blur-sm"></div>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl font-light mb-12 text-white/80 text-center max-w-xl"
          style={{ y: subtitleY }}
        >
          The Ultimate 24-Hour Hackathon
        </motion.p>

        <motion.div className="mb-16" style={{ y: buttonY }}>
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white border-none px-10 py-7 text-lg rounded-md relative group overflow-hidden"
          >
            <span className="relative z-10">Register Now</span>
            <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-px bg-gradient-to-r from-pink-400 to-pink-600 opacity-50 group-hover:opacity-70 blur-md transition-opacity duration-300 -z-10"></span>
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl"
          style={{ y: cardsY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            {
              icon: <Calendar className="h-5 w-5" />,
              title: "Dates",
              content: "April 26-27, 2025",
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              title: "Venue",
              content: "To be announced",
            },
            {
              icon: <Clock className="h-5 w-5" />,
              title: "Duration",
              content: "24 Hours of Hacking",
            },
            {
              icon: <Users className="h-5 w-5" />,
              title: "Participants",
              content: "Open to All",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-md border border-pink-500/20 rounded-md p-5 hover:border-pink-500/40 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-pink-500 font-medium mb-2 text-sm flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <div className="text-white text-lg">{item.content}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-8 w-8 text-pink-500/70" />
      </motion.div>
    </section>
  );
}
