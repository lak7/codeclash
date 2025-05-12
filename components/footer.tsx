import {
  Square,
  Triangle,
  Circle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 bg-black border-t border-pink-900/40">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-5">
            <h3 className="text-pink-500 font-bold text-2xl mb-4">CodeClash</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              The Ultimate 24-Hour Hackathon experience. Challenge yourself,
              build something amazing, and win big!
            </p>
            <div className="flex space-x-5 pt-3">
              <Link
                href="https://x.com/codeclash2_0?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/codeclash2.0?igsh=aHltNWs0dTY0bDlv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/codeclash2/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/lak7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-pink-500 font-bold text-2xl mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center group">
                <Mail className="h-5 w-5 mr-3 text-pink-500" />
                <a
                  href="mailto:lakshaygupta2511@gmail.com"
                  className="group-hover:text-pink-400 transition-colors duration-200"
                >
                  lakshaygupta2511@gmail.com
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 mr-3 text-pink-500" />
                <a
                  href="tel:+91-9667945966"
                  className="group-hover:text-pink-400 transition-colors duration-200"
                >
                  +91-9667945966
                </a>
              </li>
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 mr-3 text-pink-500 mt-1" />
                <span className="text-gray-300">Delhi</span>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-pink-500 font-bold text-2xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="#about"
                  className="hover:text-pink-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#tracks"
                  className="hover:text-pink-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                  Tracks
                </a>
              </li>
              <li>
                <a
                  href="#prize-pool"
                  className="hover:text-pink-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                  Prize Pool
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="hover:text-pink-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#participation"
                  className="hover:text-pink-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                  Participation
                </a>
              </li>
              <li>
                <Link
                  href="/code-of-conduct"
                  className="hover:text-pink-400 transition-colors duration-200 flex items-center"
                >
                  <span className="h-1 w-1 bg-pink-500 rounded-full mr-2"></span>
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-8 my-8 pt-8 border-t border-pink-900/40">
          <div className="w-10 h-10 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200">
            <Square className="h-6 w-6" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200">
            <Triangle className="h-6 w-6" />
          </div>
          <div className="w-10 h-10 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-200">
            <Circle className="h-6 w-6" />
          </div>
        </div>

        <p className="text-pink-500/80 font-mono text-center text-sm">
          © 2025 CodeClash 2.0 | The Ultimate 24-Hour Hackathon
        </p>
      </div>
    </footer>
  );
}
