import { ArrowLeft, Calendar, Phone, Globe, Mic, Clock, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OmnidimensionChallenge() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <Link href="/#tracks" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Tracks
          </Link>
          
          <div className="relative">
            {/* Logo positioned at top right */}
            <div className="absolute top-0 right-0 w-48 h-24 hidden md:block">
        
              <Image
                src="/omnidimLogo-bg-new.webp"
                alt="Omnidimension"
                fill
                className="object-contain"
              />
            </div>
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 md:pr-48">
                <span className="text-white">Omnidimension</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"> Challenge</span>
              </h1>
              
              {/* Mobile logo */}
              <div className="flex justify-center md:hidden mb-6">
                <div className="w-48 h-24 relative">
                  <Image
                    src="/omnidimLogo-bg-new.webp"
                    alt="Omnidimension"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Design the interface, orchestrate agent collaboration, and enable real-time execution of actions like phone calls, bookings, and follow-ups — all triggered by natural language instructions.
              </p>
              <div className="flex items-center gap-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-8">
                <span>Prize Pool: ₹20,000</span>
              </div>
              
              {/* Join Platform Button */}
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <span className="text-xl">🎁</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Special Offer!</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Join with this special link to get extra credits for the OmniDimension platform and boost your development!
                </p>
                <Link 
                  href="https://www.omnidim.io/" 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105"
                >
                  🚀 Get Extra Credits - Join OmniDimension
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statements */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Problem Statements
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Statement 1 */}
            <div className="bg-gray-900/60 border border-pink-500/20 rounded-xl p-8 hover:border-pink-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-pink-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Problem Statement 1</h3>
              </div>
              
              <h4 className="text-xl font-semibold text-pink-400 mb-4">
                Multi-Agent Task Automation System
              </h4>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h5 className="font-semibold text-white mb-2">Description:</h5>
                  <p className="leading-relaxed">
                    Build a user-friendly interface that allows anyone to describe a task in plain language (e.g., "Find providers for X, sort by my preferences, call for the earliest appointment, book it, add it to my calendar, and keep checking for better slots") and have a multi-agent system plan and execute it end-to-end.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">Key Features:</h5>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Natural language task description</li>
                    <li>Multi-agent orchestration</li>
                    <li>External service integration</li>
                    <li>End-to-end automation</li>
                    <li>Real-time execution monitoring</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">Challenge:</h5>
                  <p className="leading-relaxed">
                    Design the interface, orchestrate agent collaboration, and enable real-time execution of actions like phone calls, bookings, and follow-ups — all triggered by natural language instructions.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="flex items-center gap-1 bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm">
                    <Phone className="h-3 w-3" />
                    Phone Integration
                  </span>
                  <span className="flex items-center gap-1 bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm">
                    <Calendar className="h-3 w-3" />
                    Calendar APIs
                  </span>
                  <span className="flex items-center gap-1 bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full text-sm">
                    <Globe className="h-3 w-3" />
                    External Services
                  </span>
                </div>
              </div>
            </div>

            {/* Problem Statement 2 */}
            <div className="bg-gray-900/60 border border-purple-500/20 rounded-xl p-8 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Mic className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Problem Statement 2</h3>
              </div>
              
              <h4 className="text-xl font-semibold text-purple-400 mb-4">
                Voice Agent for Real-Time Auction Participation
              </h4>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h5 className="font-semibold text-white mb-2">Description:</h5>
                  <p className="leading-relaxed">
                    Online auctions move fast — bids change in seconds, and users can miss out on products if they can't act quickly. Build a voice agent that connects with an external auction system, understands auction details in real time, and allows users to place bids during a phone call.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">Your Goal:</h5>
                  <p className="leading-relaxed">
                    Use OmniDimension to create a voice agent that connects to a live or simulated auction system. The agent should provide real-time product and bidding information, allow users to place new bids by voice, and record bids to update the auction state.
                  </p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">System Requirements:</h5>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Total number of bids per product</li>
                    <li>Highest bid for each product</li>
                    <li>Full bidding history (bonus)</li>
                    <li>Real-time auction data</li>
                    <li>Voice-based bid validation</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-2">Implementation Approach:</h5>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Create/simulate external auction system</li>
                    <li>Build APIs for auction data access</li>
                    <li>Implement voice agent with OmniDimension</li>
                    <li>Create real-time dashboard</li>
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="flex items-center gap-1 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">
                    <Mic className="h-3 w-3" />
                    Voice Interface
                  </span>
                  <span className="flex items-center gap-1 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">
                    <Clock className="h-3 w-3" />
                    Real-Time
                  </span>
                  <span className="flex items-center gap-1 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">
                    <TrendingUp className="h-3 w-3" />
                    Auction System
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Technical Requirements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-pink-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-pink-400 mb-4">OmniDimension Integration</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Voice agent implementation</li>
                <li>• API integration</li>
                <li>• Webhook configuration</li>
                <li>• Real-time communication</li>
              </ul>
            </div>
            
            <div className="bg-black/60 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">External Services</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Calendar APIs</li>
                <li>• Booking systems</li>
                <li>• Phone call integration</li>
                <li>• Database management</li>
              </ul>
            </div>
            
            <div className="bg-black/60 border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">User Interface</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Natural language input</li>
                <li>• Real-time monitoring</li>
                <li>• Dashboard creation</li>
                <li>• Progress tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            {/* <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Take on the Challenge?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the Omnidimension Challenge and showcase your skills in building intelligent, voice-powered automation systems that can understand and execute complex tasks through natural language.
            </p> */}
            
            {/* Special Offer Card */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎁</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Special Offer!</h3>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Join with this special link to get extra credits for the OmniDimension platform and boost your development process!
              </p>
              <Link 
                href="https://www.omnidim.io/" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105"
              >
                🚀 Get Extra Credits - Join OmniDim
              </Link>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href="/#tracks" 
                className="border border-pink-500 text-pink-400 hover:text-pink-300 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500/10 transition-all"
              >
                ← Back to All Tracks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 