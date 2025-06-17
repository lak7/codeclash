import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SponsorsSection() {
  const sponsors = [
    {
      name: "Codecrafters",
      logo: "/codecraft.png",
      website: "https://codecrafters.io",
    },
    {
      name: "Powergrid",
      logo: "/powergrid.png",
      website: "https://www.powergrid.in/",
    },
    {
      name: "Physics Wallah",
      logo: "/physics.png",
      website: "https://www.pw.live/",
    },
    {
      name: "AllTripp",
      logo: "/alltrip.png",
      website: "https://alltripp-travel.vercel.app/",
    },
    {
      name: "Red Bull",
      logo: "/redbull5.png",
      website: "https://www.redbull.com/in-en",
    },
    {
      name: "GitHub",
      logo: "/github.png",
      website: "https://github.com/",
    },
    {
      name: "Genesis",
      logo: "/genesis.png",
      website:
        "https://www.instagram.com/zk_genesis?utm_source=qr&igsh=MWR0MjFsMWNpaWQ1dA==",
    },
    {
      name: "Geek Room",
      logo: "/geek.png",
      website: "https://www.geekroom.in/",
    },
    {
      name: "Unstop",
      logo: "/unstop-white.png",
      website: "https://unstop.com/",
    },
    {
      name: "Nonilion",
      logo: "/nonilion.png",
      website: "https://nonilion.com/",
    },
    {
      name: "Omnidimension",
      logo: "/omnidimLogo-bg-new.webp",
      website: "https://omnidimension.com",
    },
    {
      name: "Duality AI",
      logo: "/DualityLogo.svg",
      website: "https://duality.ai",
    },
  ];

  return (
    <section id="sponsors" className="w-full py-10 relative overflow-hidden">
      {/* Squid Game inspired background with hexagonal pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      {/* Squid Game inspired decorative shapes */}
      <div className="absolute -left-24 top-1/3 w-48 h-48 rounded-full border-2 border-pink-500/20 opacity-30"></div>
      <div className="absolute -right-24 bottom-1/3 w-48 h-48 rounded-full border-2 border-pink-500/20 opacity-30"></div>
      <div className="absolute left-1/4 -bottom-16 w-32 h-32 rounded-sm rotate-45 border-2 border-pink-500/20 opacity-20"></div>
      <div className="absolute right-1/4 -top-16 w-32 h-32 rounded-sm rotate-45 border-2 border-pink-500/20 opacity-20"></div>

      {/* Squid Game triangle */}
      <div className="absolute right-10 top-10 w-16 h-16 opacity-20 md:opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-pink-500/30">
          <polygon points="50,15 85,85 15,85" />
        </svg>
      </div>

      {/* Squid Game circle */}
      <div className="absolute left-10 bottom-10 w-16 h-16 rounded-full border-2 border-pink-500/30 opacity-20 md:opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
            OUR SPONSORS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We are proudly supported by industry leaders who believe in
            nurturing tech talent and innovation.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              <Link
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer transition-transform hover:scale-105"
                title={`Visit ${sponsor.name}'s website`}
              >
                <div className="w-48 aspect-square relative mb-4 overflow-hidden">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-6 transition-transform duration-300"
                  />
                </div>
                <span className="text-white font-semibold text-center block">
                  {sponsor.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <Link
            href="https://www.instagram.com/codeclash2.0?igsh=aHltNWs0dTY0bDlv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="inline-flex items-center gap-2 bg-pink-500/10 px-4 py-2 rounded-full border border-pink-500/20 hover:bg-pink-500/20 transition-colors">
              <CircleDollarSign className="h-5 w-5 text-pink-500" />
              <span className="text-gray-300">
                Interested in sponsoring? Contact us!
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
