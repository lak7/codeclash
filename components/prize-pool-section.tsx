import { Trophy, Medal, Sparkles, Award } from "lucide-react";
import Image from "next/image";

export default function PrizePoolSection() {
  return (
    <section id="prize-pool" className="w-full py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-pink-500/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-10 w-6 h-6 bg-yellow-500/20 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-amber-500/20 rounded-full animate-ping"
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-3 h-3 bg-gray-300/20 rounded-full animate-pulse"
          style={{ animationDuration: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 relative inline-block">
            <Sparkles className="h-6 w-6 absolute -top-4 -left-6 text-yellow-500 animate-pulse" />
            <span className="text-white">PRIZE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              {" "}
              POOL
            </span>
            <Sparkles className="h-6 w-6 absolute -top-4 -right-6 text-yellow-500 animate-pulse" />
          </h2>
          <p className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 mb-4">
            ₹500,000+
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto"></div>
        </div>

        {/* Prize cards with vertical layout - full width */}
        <div className="flex flex-col items-center gap-10 mb-16">
          {/* 1st place - Gold */}
          <div className="w-full relative group">
            {/* Background animations */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-600 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-105"></div>

            <div className="relative w-full rounded-xl border-2 border-yellow-500 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 h-16 w-16 bg-gradient-to-tr from-yellow-400 to-yellow-600 opacity-10 rounded-tr-full"></div>

              {/* Badge */}
              <div className="absolute right-5 top-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1 rounded-b-md font-bold text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                🥇 GOLD
              </div>

              {/* Icon container */}
              <div className="relative mb-6 md:mb-0 md:mr-8">
                <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 p-6 rounded-full border border-yellow-500/30 shadow-inner">
                  <Trophy className="h-20 w-20 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-1 drop-shadow-md">
                  Winner
                </h3>
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-3 drop-shadow-xl">
                  ₹12,000
                </p>
                <div className="h-px w-3/4 mx-auto md:mx-0 bg-gradient-to-r from-yellow-500/50 via-yellow-500/50 to-transparent my-3"></div>
                <p className="text-base md:text-lg font-medium text-gray-200">
                  Cash Prize + Goodies + Swags + Certificate of Excellence +
                  Internship Opportunity
                </p>
              </div>
            </div>
          </div>

          {/* 2nd place - Silver */}
          <div className="w-full relative group">
            {/* Background animations */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-105"></div>

            <div className="relative w-full rounded-xl border border-gray-400 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center text-center md:text-left overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(156,163,175,0.3)]">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-gray-300 to-gray-400 opacity-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 h-12 w-12 bg-gradient-to-tr from-gray-300 to-gray-400 opacity-10 rounded-tr-full"></div>

              {/* Badge */}
              <div className="absolute right-5 top-0 bg-gradient-to-r from-gray-300 to-gray-400 text-black px-4 py-1 rounded-b-md font-bold text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                🥈 SILVER
              </div>

              {/* Icon container */}
              <div className="relative mb-6 md:mb-0 md:mr-8">
                <div className="absolute inset-0 bg-gray-400/10 rounded-full blur-lg animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-gray-400/10 to-gray-400/5 p-6 rounded-full border border-gray-400/30 shadow-inner">
                  <Medal className="h-20 w-20 text-gray-300 transform group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-1 drop-shadow-md">
                  1st Runner-up
                </h3>
                <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400 mb-3 drop-shadow-xl">
                  ₹8,000
                </p>
                <div className="h-px w-3/4 mx-auto md:mx-0 bg-gradient-to-r from-gray-400/50 via-gray-400/50 to-transparent my-3"></div>
                <p className="text-base md:text-lg font-medium text-gray-300">
                  Cash Prize + Goodies + Swags + Certificate of Excellence
                </p>
              </div>
            </div>
          </div>

          {/* Sponsor Prizes */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Omnidimension Challenge */}
            <div className="relative group">
              {/* Background animations */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-105"></div>

              <div className="relative w-full rounded-xl border-2 border-pink-500 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-xl p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)]">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-pink-500 to-purple-500 opacity-10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 h-12 w-12 bg-gradient-to-tr from-pink-500 to-purple-500 opacity-10 rounded-tr-full"></div>

                {/* Badge */}
                <div className="absolute right-3 top-0 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-b-md font-bold text-xs shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  🏆 SPONSOR
                </div>

                {/* Logo container */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-pink-500/10 rounded-full blur-lg animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-4 rounded-full border border-pink-500/30 shadow-inner">
                    <Image
                      src="/omnidimLogo-bg-new.webp"
                      alt="Omnidimension"
                      width={48}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1 drop-shadow-md">
                    Omnidimension Challenge
                  </h3>
                  <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2 drop-shadow-xl">
                    ₹20,000
                  </p>
                  <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-pink-500/50 via-pink-500/50 to-transparent my-2"></div>
                  <p className="text-sm md:text-base font-medium text-gray-300">
                    Agent collaboration & natural language interfaces
                  </p>
                </div>
              </div>
            </div>

            {/* Duality AI */}
            <div className="relative group">
              {/* Background animations */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-all duration-700 group-hover:scale-105"></div>

              <div className="relative w-full rounded-xl border-2 border-blue-500 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-xl p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-10 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 h-12 w-12 bg-gradient-to-tr from-blue-500 to-cyan-500 opacity-10 rounded-tr-full"></div>

                {/* Badge */}
                <div className="absolute right-3 top-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-b-md font-bold text-xs shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  🏆 SPONSOR
                </div>

                {/* Logo container */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-lg animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-full border border-blue-500/30 shadow-inner">
                    <Image
                      src="/DualityLogo.svg"
                      alt="Duality AI"
                      width={48}
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1 drop-shadow-md">
                    Duality AI Challenge
                  </h3>
                  <p className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2 drop-shadow-xl">
                    $200
                  </p>
                  <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-blue-500/50 via-blue-500/50 to-transparent my-2"></div>
                  <p className="text-sm md:text-base font-medium text-gray-300">
                    AI & robotics with Falcon simulator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional benefits - centered */}
        <div className="mt-12 bg-gradient-to-b from-gray-900/90 to-gray-800/90 border border-pink-500/30 rounded-xl p-8 max-w-4xl mx-auto text-center relative group overflow-hidden">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/30 to-pink-500/0 animate-shimmer"
              style={{ backgroundSize: "200% 100%", animationDuration: "3s" }}
            ></div>
          </div>

          <Award className="h-10 w-10 text-pink-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-6 relative">
            <span className="relative">
              Additional Benefits
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
            </span>
          </h3>

          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex items-center justify-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 mr-3">
                •
              </span>
              <span className="text-lg text-gray-200">
                All participants will receive certificates.
              </span>
            </div>

            <div className="flex items-center justify-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/20 text-pink-500 mr-3">
                •
              </span>
              <span className="text-lg text-gray-200">
                Top teams may also be considered for special internship
                opportunities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
