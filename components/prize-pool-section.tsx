import { Trophy, Medal } from "lucide-react";

export default function PrizePoolSection() {
  const prizes = [
    {
      level: "Gold",
      icon: <Trophy className="h-16 w-16 text-yellow-500" />,
      title: "Winner",
      amount: "₹12,000",
      extras:
        "Cash Prize + Goodies + Swags + Certificate of Excellence + Internship Opportunity",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500/10",
      textColor: "text-yellow-500",
      badgeColor: "bg-yellow-500",
    },
    {
      level: "Silver",
      icon: <Medal className="h-16 w-16 text-gray-300" />,
      title: "1st Runner-up",
      amount: "₹8,000",
      extras: "Cash Prize + Goodies + Swags + Certificate of Excellence",
      borderColor: "border-gray-300",
      bgColor: "bg-gray-300/10",
      textColor: "text-gray-300",
      badgeColor: "bg-gray-300",
    },
    {
      level: "Bronze",
      icon: <Medal className="h-16 w-16 text-amber-600" />,
      title: "2nd Runner-up",
      amount: "₹5,000",
      extras: "Cash Prize + Goodies + Certificate of Excellence",
      borderColor: "border-amber-600",
      bgColor: "bg-amber-600/10",
      textColor: "text-amber-600",
      badgeColor: "bg-amber-600",
    },
  ];

  return (
    <section id="prize-pool" className="w-full py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-transparent to-transparent opacity-30"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-white">PRIZE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600">
              {" "}
              POOL
            </span>
          </h2>
          <p className="text-4xl md:text-5xl font-bold text-gray-200 mb-16">
            ₹300,000+
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`relative rounded-xl border ${prize.borderColor} bg-gray-900/80 p-8 flex flex-col items-center text-center overflow-hidden group transition-all duration-300 hover:scale-105`}
            >
              {/* Badge at top */}
              <div
                className={`absolute right-5 top-0 ${prize.badgeColor} text-black px-3 py-1 rounded-b-md font-medium text-sm`}
              >
                🏆 {prize.level}
              </div>

              {/* Glow effect */}
              <div
                className={`absolute -inset-1 ${prize.bgColor} opacity-0 group-hover:opacity-20 transition-opacity rounded-xl blur-xl`}
              ></div>

              <div className="mb-4">{prize.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {prize.title}
              </h3>
              <p className={`text-3xl font-extrabold ${prize.textColor} mb-2`}>
                {prize.amount}
              </p>
              <p
                className={`text-sm font-medium text-gray-300 mt-1 max-w-[250px]`}
              >
                {prize.extras}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900/50 border border-pink-500/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">
            Additional Benefits:
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>All participants will receive certificates.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span>
              <span>
                Top teams may also be considered for special internship
                opportunities.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
