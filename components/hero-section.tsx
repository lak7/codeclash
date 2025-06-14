"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  Triangle,
  Square,
  Circle,
  ChevronDown,
  MessageCircle,
} from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { FloatingShapes } from "@/components/ui/floating-shapes";
import Link from "next/link";

// Countdown timer component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date - April 26, 2025
  const targetDate = useMemo(
    () => new Date("June 21, 2025 00:00:00").getTime(),
    []
  );

  useEffect(() => {
    let animationFrameId: number;
    let previousTime = 0;

    const calculateTimeLeft = (timestamp: number) => {
      // Only update if enough time has passed (approximately 1 second)
      // This avoids excessive re-renders while keeping precision
      if (timestamp - previousTime >= 1000 || previousTime === 0) {
        previousTime = timestamp;

        const now = Date.now();
        const difference = targetDate - now;

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        } else {
          // Event has started
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }

      // Request next frame
      animationFrameId = requestAnimationFrame(calculateTimeLeft);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(calculateTimeLeft);

    // Clean up
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [targetDate]);

  // Time unit components with memoization for better performance
  const TimeUnit = useMemo(() => {
    return ({ value, label }: { value: number; label: string }) => (
      <div className="flex flex-col items-center bg-black/40 backdrop-blur-md border border-pink-500/30 rounded-md p-3 min-w-[85px]">
        <div className="text-2xl md:text-3xl font-bold text-white">
          {value < 10 ? `0${value}` : value}
        </div>
        <div className="text-xs md:text-sm text-pink-400">{label}</div>
      </div>
    );
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Enhanced parallax effect values
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const titleY = useTransform(scrollY, [0, 500], [0, -70]);
  const titleScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const subtitleY = useTransform(scrollY, [0, 500], [0, -40]);
  const buttonY = useTransform(scrollY, [0, 500], [0, -20]);
  const cardsY = useTransform(scrollY, [0, 500], [0, 30]);
  const symbolsScale = useTransform(scrollY, [0, 300], [1, 1.3]);
  const symbolsRotate = useTransform(scrollY, [0, 300], [0, 15]);
  const opacitySymbols = useTransform(scrollY, [0, 300], [1, 0.6]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  // Mouse parallax effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const { clientX, clientY } = e;
        const { width, height, left, top } =
          sectionRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Floating Shapes */}
      <div className="absolute inset-0 z-5">
        <FloatingShapes count={12} />
      </div>

      {/* Enhanced Sparkles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.8}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#ec4899"
        />
      </div>

      {/* Background layers with enhanced parallax */}
      <motion.div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black">
          {/* Improved dotted pattern overlay */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "25px 25px",
            }}
          ></div>

          {/* Enhanced gradient beams */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-pink-500/0 via-pink-500/40 to-pink-500/0 blur-[3px]"></div>
            <div className="absolute top-0 right-1/3 w-[2px] h-full bg-gradient-to-b from-pink-500/0 via-pink-500/30 to-pink-500/0 blur-[3px]"></div>
            <div className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500/0 via-pink-500/30 to-pink-500/0 blur-[3px]"></div>

            {/* New diagonal beams */}
            <div className="absolute top-0 left-0 w-[70%] h-[2px] transform rotate-45 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0 blur-[3px]"></div>
            <div className="absolute bottom-0 right-0 w-[70%] h-[2px] transform -rotate-45 bg-gradient-to-r from-pink-500/0 via-pink-500/20 to-pink-500/0 blur-[3px]"></div>
          </div>
        </div>
      </motion.div>

      {/* New glow orbs */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/5 w-[200px] h-[200px] rounded-full bg-pink-500/5 blur-[80px]"></div>
        <div className="absolute bottom-1/4 right-1/5 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[120px]"></div>
      </div>

      {/* Squid Game symbols with parallax */}
      <motion.div
        className="absolute top-20 right-20 z-20 hidden md:block"
        style={{
          scale: symbolsScale,
          rotate: symbolsRotate,
          opacity: opacitySymbols,
        }}
      >
        <div className="relative">
          <Triangle
            className="h-16 w-16 text-pink-500/50 absolute -top-8 -left-8"
            fill="rgba(236, 72, 153, 0.05)"
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 z-20 hidden md:block"
        style={{
          scale: symbolsScale,
          rotate: symbolsRotate,
          opacity: opacitySymbols,
        }}
      >
        <div className="relative">
          <Circle
            className="h-20 w-20 text-pink-500/50 absolute -top-10 -left-10"
            fill="rgba(236, 72, 153, 0.05)"
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 left-[15%] z-20 hidden md:block"
        style={{
          scale: symbolsScale,
          rotate: symbolsRotate,
          opacity: opacitySymbols,
        }}
      >
        <div className="relative">
          <Square
            className="h-14 w-14 text-pink-500/50 absolute -top-7 -left-7"
            fill="rgba(236, 72, 153, 0.05)"
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      {/* Large background symbol */}
      <div className="absolute right-0 top-0 z-5 opacity-10 hidden lg:block">
        <Triangle
          className="h-[400px] w-[400px] text-pink-500/20"
          fill="none"
          strokeWidth={0.5}
        />
      </div>

      <div className="absolute left-0 bottom-0 z-5 opacity-10 hidden lg:block">
        <Circle
          className="h-[350px] w-[350px] text-pink-500/20"
          fill="none"
          strokeWidth={0.5}
        />
      </div>

      <div className="absolute right-[10%] bottom-[20%] z-5 opacity-10 hidden lg:block">
        <Square
          className="h-[250px] w-[250px] text-pink-500/20"
          fill="none"
          strokeWidth={0.5}
        />
      </div>

      {/* Main content with enhanced parallax */}
      <div className="relative z-20 container mx-auto px-4 flex flex-col items-center py-20">
        <motion.div
          className="mb-4 relative"
          // style={{ y: titleY, scale: titleScale }}
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8 }}
        >
          {/* Decorative symbols around title */}
          <div className="absolute -top-14 -left-14 opacity-70 hidden md:block">
            <Triangle className="h-10 w-10 text-pink-500/80" strokeWidth={2} />
          </div>
          <div className="absolute -bottom-14 -right-14 opacity-70 hidden md:block">
            <Circle className="h-10 w-10 text-pink-500/80" strokeWidth={2} />
          </div>
          <div className="absolute -top-10 -right-10 opacity-70 hidden md:block">
            <Square className="h-8 w-8 text-pink-500/80" strokeWidth={2} />
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-300 text-center leading-none tracking-tight">
            CodeClash 2.0
          </h1>

          {/* Powered by Unstop logo */}
          <div className="flex items-center justify-center gap-2 text-white/70 text-sm md:text-base mt-4 md:mt-0 md:absolute md:bottom-0 md:right-0 md:justify-start">
            <span className="font-light">Powered By</span>
            <Image
              src="/unstop-white.png"
              alt="Unstop"
              width={80}
              height={24}
              className="min-w-[80px] h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          <div className="h-1 w-40 mx-auto bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 mt-4 blur-[6px]"></div>

          {/* Added animated glow under the title */}
          <motion.div
            className="w-64 h-1 bg-pink-500/50 rounded-full mx-auto mt-4 blur-[8px]"
            // animate={{
            //   width: ["60%", "80%", "60%"],
            //   opacity: [0.4, 0.8, 0.4],
            // }}
            // transition={{
            //   duration: 4,
            //   repeat: Infinity,
            //   ease: "easeInOut",
            // }}
          />
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl font-light mb-6 text-white/80 text-center max-w-xl"
          // style={{ y: subtitleY }}
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.3, duration: 0.8 }}
        >
          The Ultimate Clash of Code
          <br />
          <a
            href="https://chat.whatsapp.com/Gt6HJlETuPk6XSzA7r0RDL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base text-green-400 hover:text-green-300 transition-all duration-300 mt-3 px-4 py-2 rounded-full bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 hover:border-green-400/50 group"
          >
            <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">Join WhatsApp Community</span>
          </a>
        </motion.p>

        {/* Countdown Timer */}
        <motion.div
          className="mb-1"
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.5, duration: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          className="mb-10 relative"
          // style={{ y: buttonY }}
          // initial={{ opacity: 0, y: 30 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Symbol decorations around button */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-60 hidden lg:block">
            <Triangle className="h-6 w-6 text-pink-500/80" strokeWidth={2} />
          </div>
          <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 opacity-60 hidden lg:block">
            <Circle className="h-6 w-6 text-pink-500/80" strokeWidth={2} />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10">
            <Button
              size="lg"
              onClick={() =>
                window.open("https://unstop.com/o/Tpkf7NZ", "_blank")
              }
              className="bg-pink-500 hover:bg-pink-600 text-white border-none px-6 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-md relative group overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Register Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-px bg-gradient-to-r from-pink-400 to-pink-600 opacity-50 group-hover:opacity-90 blur-md transition-opacity duration-300 -z-10"></span>

              {/* Added pulsing effect */}
              <motion.span
                className="absolute inset-0 bg-pink-400/20 rounded-md"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Button>
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://www.codeclash.in/code-of-conduct",
                  "_blank"
                )
              }
              className="bg-black hover:bg-pink-600 text-white border border-pink-500 px-6 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-md relative group overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Code of Conduct</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-px bg-gradient-to-r from-pink-400 to-pink-600 opacity-50 group-hover:opacity-90 blur-md transition-opacity duration-300 -z-10"></span>

              {/* Added pulsing effect */}
              <motion.span
                className="absolute inset-0 bg-pink-400/20 rounded-md"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Added global CSS animation for card shine effect */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          30% {
            transform: translateX(100%) skewX(-12deg);
          }
          100% {
            transform: translateX(100%) skewX(-12deg);
          }
        }
      `}</style>
    </section>
  );
}
