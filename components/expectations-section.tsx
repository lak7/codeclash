import Image from "next/image";
import { Trophy, Users, Lightbulb } from "lucide-react";

export default function ExpectationsSection() {
  return (
    <section id="expectations" className="w-full py-10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
            WHAT PARTICIPANTS CAN EXPECT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md overflow-hidden hover:border-pink-500/40 transition-all hover:transform hover:scale-105">
            <div className="h-48 relative">
              <Image
                src="/expec1.jpg"
                alt="Prizes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center border border-pink-500 shadow-glow">
                <Trophy className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white mt-6 text-center">
                Bigger & Better Prizes
              </h3>
              <p className="text-gray-300 text-center">
                The best projects will win exciting prizes, exclusive goodies,
                and recognition from industry experts. Stay tuned for prize
                details!
              </p>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md overflow-hidden hover:border-pink-500/40 transition-all hover:transform hover:scale-105">
            <div className="h-48 relative">
              <Image
                src="/expec2.jpg"
                alt="Mentors"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center border border-pink-500 shadow-glow">
                <Users className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white mt-6 text-center">
                Industry Mentors & Expert Guidance
              </h3>
              <p className="text-gray-300 text-center">
                Struggling with an idea? Need help debugging your code? Our team
                of mentors will be available throughout the hackathon to guide
                you and help you refine your project.
              </p>
            </div>
          </div>

          <div className="bg-black/60 backdrop-blur-sm border border-pink-500/20 rounded-md overflow-hidden hover:border-pink-500/40 transition-all hover:transform hover:scale-105">
            <div className="h-48 relative">
              <Image
                src="/expec1.jpg"
                alt="Pitch"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="p-6 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-black flex items-center justify-center border border-pink-500 shadow-glow">
                <Lightbulb className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white mt-6 text-center">
                Pitch Your Idea to a Panel of Judges
              </h3>
              <p className="text-gray-300 text-center">
                At the end of 24 hours, teams will present their projects to an
                esteemed panel of judges, including tech leaders and
                entrepreneurs. Get constructive feedback, potential investment
                opportunities, and a platform to showcase your skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
