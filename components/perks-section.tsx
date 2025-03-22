import { Code, Gift, Network, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

export default function PerksSection() {
  const perks = [
    {
      icon: <Code className="h-6 w-6 text-pink-500" />,
      title: "Hack for 24 hours",
      description: "Non-stop innovation, brainstorming, and coding.",
    },
    {
      icon: <Gift className="h-6 w-6 text-pink-500" />,
      title: "Exclusive Swag",
      description: "Get certificates, event merchandise, and exciting goodies!",
    },
    {
      icon: <Network className="h-6 w-6 text-pink-500" />,
      title: "Networking Opportunities",
      description:
        "Meet fellow developers, industry leaders, and potential future teammates.",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-pink-500" />,
      title: "Hands-on Learning",
      description:
        "Work with the latest technologies and industry-relevant problem statements.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-pink-500" />,
      title: "Internship & Job Opportunities",
      description:
        "Stand a chance to be noticed by top recruiters and companies.",
    },
  ];

  return (
    <section id="perks" className="w-full py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
            PERKS & BENEFITS
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <ul className="space-y-6">
              {perks.map((perk, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 group p-4 rounded-md hover:bg-pink-900/10 transition-colors"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {perk.title}
                    </h4>
                    <p className="text-gray-300">{perk.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-md">
              <Image
                src="/perks1.jpg"
                alt="CodeClash Perks"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
