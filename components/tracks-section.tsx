import Image from "next/image";
import Link from "next/link";
import { Brain, Link as LinkIcon, Globe, Sparkles, Trophy, Award } from "lucide-react";

export default function TracksSection() {
  return (
    <section id="tracks" className="w-full py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Sponsor Prize Winning Tracks */}
        <h2 className="text-2xl font-bold mb-8 text-center text-white">
          Sponsor Prize Winning Tracks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-md animate-border-move"></div>
            <Link href="/omnidimension" className="block">
              <div className="relative bg-black backdrop-blur-sm rounded-md p-6 transition-all border border-pink-500/20 cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">Omnidimension</h4>
                  <div className="w-32 h-16 rounded-full flex items-center justify-center">
                    <Image
                      src="/omnidimLogo-bg-new.webp"
                      alt="Omnidimension"
                      width={80}
                      height={80}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
                <p className="text-gray-300">
                  Design the interface, orchestrate agent collaboration, and enable real-time execution of actions like phone calls, bookings, and follow-ups — all triggered by natural language instructions.
                </p>
                <div className="mt-4 text-sm text-pink-400 font-semibold">
                  Sponsored by Omnidimension • Prize: ₹20,000
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="relative">
                    {/* Animated background gradient */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-xl opacity-60 animate-pulse blur-sm"></div>
                    
                    {/* Content */}
                    <div className="relative bg-black/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg tracking-wide">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-md animate-border-move" style={{animationDelay: '1.5s'}}></div>
            <div className="relative bg-black backdrop-blur-sm rounded-md p-6 hover:transform hover:scale-105 transition-all border border-pink-500/20 pb-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-white">Duality AI</h4>
                <div className="w-32 h-16 rounded-full flex items-center justify-center">
                  <Image
                    src="/DualityLogo.svg"
                    alt="Duality AI"
                    width={80}
                    height={80}
                    //className="h-6 w-6"
                  />
                </div>
              </div>
              <p className="text-gray-300">
                Build AI and robotics projects using Duality's Falcon simulator — a high-fidelity digital twin platform for testing autonomous systems in photorealistic virtual worlds.
              </p>
              <div className="mt-4 text-sm text-pink-400 font-semibold pt-6">
                Sponsored by Duality AI • Prize: ₹17,000
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center text-white">
          Themed Tracks & Open Innovation
        </h2>
        {/* <p className="text-lg text-gray-300 leading-relaxed text-center mb-12 max-w-3xl mx-auto">
          This year, we are bringing a mix of structured themes and open
          innovation to give you the freedom to create:
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-6 hover:border-pink-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-pink-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Health tech</h4>
            <p className="text-gray-300">
              Build applications for people's health.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-6 hover:border-pink-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
              <LinkIcon className="h-6 w-6 text-pink-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">
              Cyber security
            </h4>
            <p className="text-gray-300">
              Work on secure networks for the future.
            </p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-6 hover:border-pink-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-pink-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">
              Sustainability & Social Impact
            </h4>
            <p className="text-gray-300">Use tech to drive change.</p>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md p-6 hover:border-pink-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-pink-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">
              Wildcard/Open Innovation
            </h4>
            <p className="text-gray-300">Any groundbreaking idea is welcome!</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
            WHAT'S NEW IN CODECLASH 2.0?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center mb-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative border border-pink-500/30 p-6 rounded-md bg-black/60 backdrop-blur-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/10 to-pink-600/10 rounded-lg blur-xl opacity-20"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  💡 Hack Your Way to Glory
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  This is not just a coding competition—it's an experience!
                  You'll have 24 hours to brainstorm, build, and present
                  innovative solutions based on real-world problem statements.
                  Whether you want to revolutionize industries with AI, disrupt
                  finance with blockchain, or solve global challenges—this is
                  your chance to make it happen.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-md">
              <Image
                src="/motivation1.jpg"
                alt="If you dream it you can do it"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
