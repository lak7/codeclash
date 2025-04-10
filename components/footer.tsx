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
    <footer className="w-full py-12 px-4 bg-black border-t border-pink-900/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-pink-500 font-bold text-xl mb-4">CodeClash</h3>
            <p className="text-gray-400 mb-4">
              The Ultimate 24-Hour Hackathon experience. Challenge yourself,
              build something amazing, and win big!
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/codeclash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/codeclash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/codeclash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com/codeclash"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-pink-500 font-bold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-pink-500" />
                <a
                  href="mailto:lakshaygupta2511@gmail.com"
                  className="hover:text-pink-500"
                >
                  lakshaygupta2511@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-pink-500" />
                <a href="tel:+91-9667945966" className="hover:text-pink-500">
                  +91-9667945966
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-pink-500 mt-1" />
                <span>Paschim Vihar, Delhi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-pink-500 font-bold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-pink-500">
                  About
                </a>
              </li>
              <li>
                <a href="#tracks" className="hover:text-pink-500">
                  Tracks
                </a>
              </li>
              <li>
                <a href="#prize-pool" className="hover:text-pink-500">
                  Prize Pool
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-pink-500">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#participation" className="hover:text-pink-500">
                  Participation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-6 my-6 pt-6 border-t border-pink-900/30">
          <div className="w-8 h-8 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 transition-opacity">
            <Square className="h-6 w-6" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 transition-opacity">
            <Triangle className="h-6 w-6" />
          </div>
          <div className="w-8 h-8 flex items-center justify-center text-pink-500 opacity-70 hover:opacity-100 transition-opacity">
            <Circle className="h-6 w-6" />
          </div>
        </div>
        <p className="text-pink-500 font-mono text-center">
          © 2025 CodeClash 2.0 | The Ultimate 24-Hour Hackathon
        </p>
      </div>
    </footer>
  );
}
