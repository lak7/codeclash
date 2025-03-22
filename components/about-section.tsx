import Image from "next/image";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-md">
              <Image
                src="/about1.jpg"
                alt="CodeClash Symbols"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              ABOUT
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed">
              CodeClash is back with its second edition, promising bigger
              challenges, better rewards, and an electrifying hackathon
              experience! Whether you're a seasoned developer, an aspiring
              innovator, or a problem-solver looking to build impactful
              solutions—this is your battlefield to showcase your skills.
            </p>

            <div className="pt-4">
              <div className="inline-block">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-pink-600 blur-sm opacity-30"></div>
                  <div className="relative border border-pink-500/30 rounded-md px-6 py-4 bg-black/60">
                    <p className="text-white/90 italic">
                      "If you dream it, you can do it."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-4 hover:border-pink-500/40 transition-all">
                <div className="text-pink-500 font-medium mb-1 text-sm flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Dates</span>
                </div>
                <div className="text-white">April 26-27, 2025</div>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-4 hover:border-pink-500/40 transition-all">
                <div className="text-pink-500 font-medium mb-1 text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Venue</span>
                </div>
                <div className="text-white">To be announced</div>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-4 hover:border-pink-500/40 transition-all">
                <div className="text-pink-500 font-medium mb-1 text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Duration</span>
                </div>
                <div className="text-white">24 Hours of Hacking</div>
              </div>

              <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-4 hover:border-pink-500/40 transition-all">
                <div className="text-pink-500 font-medium mb-1 text-sm flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Participants</span>
                </div>
                <div className="text-white">
                  Open to students and tech enthusiasts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
