import {
  Shield,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <div className="relative w-full py-16 bg-gradient-to-b from-pink-500/20 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(221,31,122,0.2)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(221,31,122,0.2)_0%,rgba(0,0,0,0)_60%)]"></div>

        {/* Geometric shapes for decoration */}
        <div className="absolute top-1/4 left-[-5%] w-32 h-32 border border-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-[10%] w-24 h-24 border border-pink-500/30 rotate-45 animate-pulse"></div>

        <div className="container mx-auto px-6">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="text-pink-500 hover:text-pink-400 transition-all duration-200"
            >
              Home
            </Link>
            <span className="mx-2 text-pink-500/50">/</span>
            <span className="text-white">Code of Conduct</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <Shield className="h-16 w-16 text-pink-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500">
              CodeClash 2.0
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">
              Code of Conduct
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main content */}
          <div className="md:col-span-8 space-y-12">
            {/* Introduction */}
            <section className="bg-zinc-900/50 border border-pink-900/40 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <AlertCircle className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Introduction
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    CodeClash 2.0 is a community-driven event committed to
                    providing a safe, inclusive, and respectful environment for
                    all participants—regardless of gender, race, ethnicity,
                    religion, age, sexual orientation, disability, or
                    background.
                  </p>
                </div>
              </div>
            </section>

            {/* Expected Behavior */}
            <section className="bg-zinc-900/50 border border-pink-900/40 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <CheckCircle2 className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Expected Behavior
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>Be respectful, inclusive, and collaborative.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Participate actively and engage constructively.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>Respect different viewpoints and experiences.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>Use welcoming and inclusive language.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Follow event instructions and team guidelines.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Unacceptable Behavior */}
            <section className="bg-zinc-900/50 border border-pink-900/40 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <AlertCircle className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Unacceptable Behavior
                  </h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Harassment, discrimination, or intimidation in any form.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Offensive or inappropriate comments or content.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Disruption of talks, sessions, or event activities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>
                        Inappropriate physical contact or unwelcome attention.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                      <span>Plagiarism or unethical hacking behavior.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-8">
            {/* Reporting & Action */}
            <section className="bg-zinc-900/50 border border-pink-900/40 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex flex-col">
                <HelpCircle className="h-6 w-6 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  Reporting & Action
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you observe or experience unacceptable behavior, report it
                  to the organizing team immediately.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Violations may result in:
                </p>
                <ul className="text-gray-300 space-y-2 my-4">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                    <span>A warning from organizers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                    <span>Expulsion from the event (in-person or online)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 bg-pink-500 rounded-full mr-2 mt-2"></span>
                    <span>Disqualification from prizes</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How to Report */}
            <section className="bg-zinc-900/50 border border-pink-900/40 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex flex-col">
                <MessageSquare className="h-6 w-6 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">
                  How to Report
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Contact organizers at the help desk or designated contact
                  point (Available on Whatsapp Group).
                </p>
                <div className="flex items-center mt-2">
                  <Mail className="h-5 w-5 text-pink-500 mr-2" />
                  <a
                    href="mailto:shivanshdas@gmail.com"
                    className="text-pink-400 hover:text-pink-300 transition-colors duration-200"
                  >
                    shivanshdas@gmail.com
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Return to home button */}
      <div className="container mx-auto px-6 py-12 flex justify-center">
        <Link
          href="/"
          className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white font-semibold rounded-md transition-all duration-300 shadow-lg shadow-pink-700/20 hover:shadow-pink-500/30 flex items-center"
        >
          Return to Homepage
        </Link>
      </div>

      {/* Footer divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent"></div>
    </main>
  );
}
