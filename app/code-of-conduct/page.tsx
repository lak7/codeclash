import {
  Shield,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <div className="relative w-full py-24 bg-gradient-to-b from-pink-500/20 to-transparent overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(221,31,122,0.25)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(221,31,122,0.25)_0%,rgba(0,0,0,0)_60%)]"></div>

        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 left-[-5%] w-40 h-40 border border-pink-500/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-[10%] w-32 h-32 border border-pink-500/40 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 left-[15%] w-24 h-24 border-2 border-pink-500/20 rounded-full animate-ping opacity-20"></div>
        <div className="absolute bottom-1/4 right-[25%] w-16 h-16 border border-pink-500/30 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-6">
          <div className="flex items-center mb-10">
            <Link
              href="/"
              className="group flex items-center text-pink-500 hover:text-pink-400 transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Home</span>
            </Link>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-pink-500/20 rounded-full"></div>
              <Shield className="relative h-20 w-20 text-pink-500 mb-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-pink-500 tracking-tight">
              CodeClash 2.0
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mt-4 text-white opacity-90">
              Code of Conduct
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-pink-500 to-pink-300 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Main content */}
          <div className="md:col-span-8 space-y-12">
            {/* Introduction */}
            <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors duration-300">
                    <AlertCircle className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Introduction
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
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
            <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors duration-300">
                    <CheckCircle2 className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Expected Behavior
                  </h3>
                  <ul className="text-gray-300 space-y-4">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Be respectful, inclusive, and collaborative.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Participate actively and engage constructively.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Respect different viewpoints and experiences.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Use welcoming and inclusive language.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Follow event instructions and team guidelines.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Unacceptable Behavior */}
            <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors duration-300">
                    <AlertCircle className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Unacceptable Behavior
                  </h3>
                  <ul className="text-gray-300 space-y-4">
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Harassment, discrimination, or intimidation in any form.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Offensive or inappropriate comments or content.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Disruption of talks, sessions, or event activities.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Inappropriate physical contact or unwelcome attention.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                      <span className="text-lg">
                        Plagiarism or unethical hacking behavior.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-10">
            {/* Reporting & Action */}
            <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
              <div className="flex flex-col">
                <div className="p-3 bg-pink-500/10 rounded-lg inline-flex w-fit group-hover:bg-pink-500/20 transition-colors duration-300 mb-4">
                  <HelpCircle className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Reporting & Action
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 text-lg">
                  If you observe or experience unacceptable behavior, report it
                  to the organizing team immediately.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Violations may result in:
                </p>
                <ul className="text-gray-300 space-y-3 my-4">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">A warning from organizers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">
                      Expulsion from the event (in-person or online)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">
                      Disqualification from prizes
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* How to Report */}
            <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
              <div className="flex flex-col">
                <div className="p-3 bg-pink-500/10 rounded-lg inline-flex w-fit group-hover:bg-pink-500/20 transition-colors duration-300 mb-4">
                  <MessageSquare className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  How to Report
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Contact organizers at the help desk or designated contact
                  point (Available on Whatsapp Group).
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-pink-500 mr-3 mt-1.5" />
                    <div className="flex flex-col space-y-4">
                      <a
                        href="mailto:shivanshdas@gmail.com"
                        className="text-pink-500 text-lg hover:text-pink-300 transition-colors duration-300"
                      >
                        shivanshdas@gmail.com
                      </a>
                      <a
                        href="mailto:lakshaygupta2511@gmail.com"
                        className="text-pink-500 text-lg hover:text-pink-300 transition-colors duration-300"
                      >
                        lakshaygupta2511@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Return to home button */}
      <div className="container mx-auto px-6 py-16 flex justify-center">
        <Link
          href="/"
          className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white font-semibold rounded-md transition-all duration-300 shadow-lg shadow-pink-700/20 hover:shadow-pink-500/40 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
          Return to Homepage
        </Link>
      </div>

      {/* Footer divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent mb-8"></div>
    </main>
  );
}
