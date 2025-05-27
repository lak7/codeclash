import {
  Shield,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Mail,
  MessageSquare,
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Award,
  Laptop,
  Building,
  FileText,
  GitBranch,
  Presentation,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export default function CodeOfConduct() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <div className="relative w-full py-5 bg-gradient-to-b from-pink-500/20 to-transparent overflow-hidden">
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
              Official Participant Timeline & Rules
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

            {/* General Overview */}
            <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
              <div className="flex items-start">
                <div className="mr-6 mt-1">
                  <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors duration-300">
                    <FileText className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    General Overview
                  </h3>

                  <div className="space-y-8">
                    {/* Event Details */}
                    <div>
                      <h4 className="text-xl font-semibold text-pink-400 mb-3">
                        Event Details
                      </h4>
                      <ul className="text-gray-300 space-y-3">
                        <li className="flex items-start">
                          <Users className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Team Size: 2–4 members
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Award className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Eligibility: Open to all students and developers
                            across India
                          </span>
                        </li>
                        <li className="flex items-start">
                          <MessageSquare className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Registration Method: Website and WhatsApp groups
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Building className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Final Round Venue: Google Office, Gurugram
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Key Dates */}
                    <div>
                      <h4 className="text-xl font-semibold text-pink-400 mb-3">
                        Key Dates
                      </h4>
                      <ul className="text-gray-300 space-y-3">
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Registration Closes: June 20, 2025 (11:00 PM)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Idea Submission: June 21, 2025 (11:00 PM)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Laptop className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Online Round 1: June 23, 2025
                          </span>
                        </li>
                        <li className="flex items-start">
                          <UserCheck className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Mentor Round: June 25, 2025
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Building className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                          <span className="text-lg">
                            Final Round: June 28, 2025
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                    <span className="text-lg">Expulsion from the event</span>
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
                  Contact admins directly
                </p>
                <div className="space-y-4">
                  {/* <div className="flex items-start">
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
                  </div> */}
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-pink-500 mr-3 mt-1.5" />
                    <div>
                      <a
                        href="https://shorturl.at/uP8WS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 text-lg hover:text-pink-300 transition-colors duration-300"
                      >
                        WhatsApp Group - Contact Admins
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Phase Details - Full Width */}
        <div className="mt-12">
          <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
            <div className="flex items-start">
              <div className="mr-6 mt-1">
                <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors duration-300">
                  <Clock className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Phase Timeline & Details
                </h3>

                <div className="space-y-10">
                  {/* Phase 1 */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 flex items-center justify-center text-white font-bold mr-3">
                        1
                      </div>
                      <h4 className="text-xl font-semibold text-pink-400">
                        Phase 1: Registrations
                      </h4>
                    </div>

                    <div className="ml-11 space-y-6">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Rules
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Teams must assign a point of contact for
                              communication
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              No changes to team structure after registration
                              closes
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 2 */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 flex items-center justify-center text-white font-bold mr-3">
                        2
                      </div>
                      <h4 className="text-xl font-semibold text-pink-400">
                        Phase 2: Registration Close & Idea Submission
                      </h4>
                    </div>

                    <div className="ml-11 space-y-6">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Timeline
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Registration Closes: June 20, 2025 (11:00 PM)
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Idea Submission Deadline: June 21, 2025 (11:00 PM)
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Requirements
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Domain of the Project</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Problem Statement</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Project Description (under 150 words)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Rules
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Submissions must be original and relevant to the
                              chosen domain
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Plagiarized or AI-generated content without
                              modification will be rejected
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Late submissions will not be accepted under any
                              circumstances
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 3 */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 flex items-center justify-center text-white font-bold mr-3">
                        3
                      </div>
                      <h4 className="text-xl font-semibold text-pink-400">
                        Phase 3: Online Round 1 – Initial Project Submission
                      </h4>
                    </div>

                    <div className="ml-11 space-y-6">
                      <div>
                        <p className="text-lg text-gray-300 mb-3">
                          <span className="font-semibold text-white">
                            Date:
                          </span>{" "}
                          June 23, 2025
                        </p>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Schedule
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Opening Ceremony: 10:00 - 10:30 AM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Judging Session 1: 10:30 AM - 2:00 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Lunch Break: 2:00 – 3:00 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Judging Session 2: 3:00 - 7:00 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Results Compilation: 7:00 - 8:00 PM</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Requirements
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              GitHub Repository with MVP (basic functionality)
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Idea Presentation (PDF or slide deck)</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Rules
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              MVP must showcase core functionality related to
                              the problem statement
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Presentation should clearly outline architecture,
                              approach, and scope
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Team must use the provided naming and submission
                              format
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Allowed Tools: Any programming language, APIs, and
                              open-source libraries
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 4 */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 flex items-center justify-center text-white font-bold mr-3">
                        4
                      </div>
                      <h4 className="text-xl font-semibold text-pink-400">
                        Phase 4: Online Round 2 – Mentor Round
                      </h4>
                    </div>

                    <div className="ml-11 space-y-6">
                      <div>
                        <p className="text-lg text-gray-300 mb-3">
                          <span className="font-semibold text-white">
                            Date:
                          </span>{" "}
                          June 25, 2025
                        </p>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Schedule
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Mentoring Session 1: 10:00 AM - 1:00 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Lunch Break: 1:00 – 2:00 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Mentoring Session 2: 2:00 - 4:00 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Results Announcements: 4:00 - 5:00 PM</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Activities
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Live project demonstration</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Real-time Q&A with a mentor panel</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Rules
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Teams must attend at their assigned time slot;
                              absence = disqualification
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              All team members must be present unless previously
                              communicated
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Projects must reflect significant progress from
                              Round 1
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase 5 */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 flex items-center justify-center text-white font-bold mr-3">
                        5
                      </div>
                      <h4 className="text-xl font-semibold text-pink-400">
                        Phase 5: Final Round – Google Office Gurugram
                      </h4>
                    </div>

                    <div className="ml-11 space-y-6">
                      <div>
                        <p className="text-lg text-gray-300 mb-3">
                          <span className="font-semibold text-white">
                            Date:
                          </span>{" "}
                          June 28, 2025
                        </p>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Schedule
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Opening Ceremony: 9:00 AM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Judging Session: 10:30 AM - 1:30 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Lunch Break: 1:30-2:15 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Judging Session: 2:30 - 3:30 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Results Announcement: 3:30 PM</span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Closing Ceremony: 4:00 PM</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Activities
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Project development, mentoring, evaluation and
                              final presentations
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>Closing ceremony and prize distribution</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Rules
                        </h5>
                        <ul className="text-gray-300 space-y-2">
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              All work during the event must be done onsite
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Teams are expected to follow a smart casual or
                              branded dress code
                            </span>
                          </li>
                          <li className="flex items-start text-lg">
                            <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                            <span>
                              Respect venue rules, mentors, and fellow
                              participants
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* General Rules & Code of Conduct - Full Width */}
        <div className="mt-12">
          <section className="group bg-zinc-900/50 border border-pink-900/40 hover:border-pink-700/50 rounded-xl p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-pink-900/10">
            <div className="flex items-start">
              <div className="mr-6 mt-1">
                <div className="p-3 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors duration-300">
                  <CheckCircle2 className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  General Rules & Code of Conduct
                </h3>

                <ul className="text-gray-300 space-y-4">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">
                      <span className="font-semibold text-white">
                        Team Changes:
                      </span>{" "}
                      No Team Changes after June 20, 2025
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">
                      <span className="font-semibold text-white">
                        Originality:
                      </span>{" "}
                      Submissions must be original. Plagiarism leads to
                      disqualification
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">
                      <span className="font-semibold text-white">Conduct:</span>{" "}
                      Respectful and ethical conduct is mandatory throughout
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">
                      <span className="font-semibold text-white">
                        Communication:
                      </span>{" "}
                      All communications will be via registered emails and
                      WhatsApp groups
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-pink-400 rounded-full mr-3 mt-2.5"></span>
                    <span className="text-lg">
                      <span className="font-semibold text-white">
                        Final Authority:
                      </span>{" "}
                      Judges' decisions are final and binding
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
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
