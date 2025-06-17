import Image from "next/image";
import { Brain, Link, Globe, Sparkles, Trophy, Award } from "lucide-react";

export default function TracksSection() {
  return (
    <section id="tracks" className="w-full py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Sponsor Prize Winning Tracks - Highlighted Section */}
        <div className="relative mb-20">
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-30"></div>
          <div className="relative bg-black/40 backdrop-blur-sm border border-pink-500/30 rounded-xl p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-pink-500/5 rounded-xl"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400">
                🏆 Sponsor Prize Winning Tracks
              </h2>
              <p className="text-center text-pink-300/80 mb-8 font-medium">
                Special tracks with exclusive prizes from our sponsors
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-400/30 rounded-md p-6 hover:border-pink-400/50 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-pink-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">FinTech Innovation</h4>
                  <p className="text-gray-300">
                    Create next-generation financial solutions with blockchain and AI integration.
                  </p>
                  <div className="mt-4 text-sm text-pink-300 font-semibold bg-pink-500/10 px-3 py-1 rounded-full inline-block">
                    Sponsored by TechCorp • Prize: $10,000
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-400/30 rounded-md p-6 hover:border-pink-400/50 transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-pink-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">
                    Smart City Solutions
                  </h4>
                  <p className="text-gray-300">
                    Build intelligent urban infrastructure using IoT and machine learning.
                  </p>
                  <div className="mt-4 text-sm text-pink-300 font-semibold bg-pink-500/10 px-3 py-1 rounded-full inline-block">
                    Sponsored by UrbanTech • Prize: $8,000
                  </div>
                </div>
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
              <Link className="h-6 w-6 text-pink-500" />
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
