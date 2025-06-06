"use client";

import { Button } from "@/components/ui/button";
import { UserPlus, Code, PresentationIcon } from "lucide-react";
import Image from "next/image";

export default function ParticipationSection() {
  const steps = [
    {
      number: "1",
      icon: <UserPlus className="h-6 w-6 text-pink-500" />,
      title: "Register Online",
      description: "Sign up and secure your spot.",
    },
    {
      number: "2",
      icon: <UserPlus className="h-6 w-6 text-pink-500" />,
      title: "Form a Team",
      description: "Build your dream team or participate solo!",
    },
    {
      number: "3",
      icon: <Code className="h-6 w-6 text-pink-500" />,
      title: "Start Hacking",
      description: "Code, create, and innovate for 24 hours.",
    },
    {
      number: "4",
      icon: <PresentationIcon className="h-6 w-6 text-pink-500" />,
      title: "Pitch Your Idea",
      description: "Present your project and compete for top prizes.",
    },
  ];

  return (
    <section id="participate" className="w-full pt-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
            HOW TO PARTICIPATE
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-6 hover:border-pink-500/40 transition-all hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4 relative">
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-pink-500 text-black font-bold text-sm flex items-center justify-center shadow-md">
                  {step.number}
                </span>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">
                {step.title}
              </h4>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-md">
              <Image
                src="/style1.jpg"
                alt="CodeClash Participation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Ready to Join the Game?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Don't miss this opportunity to showcase your skills, learn from
              the best, and potentially win amazing prizes. Register now to
              secure your spot in CodeClash 2.0!
            </p>
            <Button
              size="lg"
              onClick={() =>
                window.open("https://unstop.com/o/Tpkf7NZ", "_blank")
              }
              className="bg-pink-600 hover:bg-pink-700 text-white border-none px-8 py-6 text-lg rounded-md shadow-glow"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
