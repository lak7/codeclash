import { ArrowLeft, Rocket, Brain, Database, Award, Clock, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DualityChallenge() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <Link href="/#tracks" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Tracks
          </Link>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Duality AI</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500"> Space Station</span>
                <span className="text-white block">Hackathon</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Train cutting-edge AI models for Object Detection in a space station environment using Duality AI's synthetic dataset from their digital twin simulation platform - Falcon.
              </p>
              <div className="flex items-center gap-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                <span>Prize Pool: ₹20,000</span>
              </div>
            </div>
            
            <div className="w-48 h-24 relative">
              <Image
                src="/DualityLogo.svg"
                alt="Duality AI"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Challenge Overview
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gray-900/60 border border-blue-500/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Space Station AI Training</h3>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Duality AI presents a challenge designed to test cutting-edge AI training techniques for Object Detection in a space station environment. Participants will train models using synthetic datasets from Duality AI's digital twin simulation platform, achieving accuracy and precision through parameter optimization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-black/40 border border-blue-500/20 rounded-lg p-4">
                <Brain className="h-8 w-8 text-blue-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">AI Training</h4>
                <p className="text-gray-300 text-sm">Learn industry-proven techniques to train AI models using only synthetic data</p>
              </div>
              <div className="bg-black/40 border border-cyan-500/20 rounded-lg p-4">
                <Database className="h-8 w-8 text-cyan-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Digital Twins</h4>
                <p className="text-gray-300 text-sm">Work with realistic virtual representations of space station environments</p>
              </div>
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
                <Target className="h-8 w-8 text-purple-400 mb-3" />
                <h4 className="font-semibold text-white mb-2">Object Detection</h4>
                <p className="text-gray-300 text-sm">Detect and classify critical space station objects for operational safety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Challenge Objectives
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-black/60 border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Primary Goals</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Train a robust object detection model using the provided synthetic dataset</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Accurately detect and classify space station objects for operational safety</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Evaluate model performance across challenging scenarios including varied lighting and occlusions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Benchmark and optimize for accuracy, generalizability, and efficiency</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black/60 border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Target Objects</h3>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🧰 Toolbox</h4>
                  <p className="text-gray-300 text-sm">Essential maintenance equipment detection</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🫁 Oxygen Tank</h4>
                  <p className="text-gray-300 text-sm">Critical life support system identification</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">🧯 Fire Extinguisher</h4>
                  <p className="text-gray-300 text-sm">Emergency safety equipment localization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Structure */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Hackathon Structure
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Engineering */}
            <div className="bg-gray-900/60 border border-blue-500/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Brain className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">AI Engineering</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li>• Train and fine-tune YOLOv8 model</li>
                <li>• Evaluate model performance</li>
                <li>• Optimize accuracy and inference time</li>
                <li>• Use synthetic dataset from Falcon</li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="bg-gray-900/60 border border-cyan-500/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Documentation</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li>• Document complete workflow</li>
                <li>• Create structured reports</li>
                <li>• Prepare final presentations</li>
                <li>• Include performance visualizations</li>
              </ul>
            </div>

            {/* Bonus App */}
            <div className="bg-gray-900/60 border border-purple-500/20 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Bonus Challenge</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li>• Create application using the model</li>
                <li>• Plan for model updates with Falcon</li>
                <li>• Earn up to 15 bonus points</li>
                <li>• Showcase real-world implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
      <section className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Judging Criteria
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/60 border border-blue-500/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-bold text-white">Model Performance</h3>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">80 Points</div>
                <p className="text-gray-300 mb-4">mAP@0.5 (Mean Average Precision at IoU=50%)</p>
                <p className="text-sm text-gray-400">Measures accuracy of object detection and classification. Higher mAP scores indicate better performance.</p>
              </div>
              
              <div className="bg-black/60 border border-cyan-500/20 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-8 w-8 text-cyan-500" />
                  <h3 className="text-xl font-bold text-white">Report Clarity</h3>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">20 Points</div>
                <p className="text-gray-300 mb-4">Structured Findings & Detailed Reporting</p>
                <p className="text-sm text-gray-400">Well-organized documentation of methodology, challenges, and solutions with clear steps.</p>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="h-8 w-8 text-purple-500" />
                <h3 className="text-xl font-bold text-white">Bonus Points</h3>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">+15 Points</div>
              <p className="text-gray-300">Create an application using the detection model and describe how Falcon can keep it updated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Requirements */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Key Deliverables
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-blue-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Trained Model</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Fully trained YOLOv8 model</li>
                <li>• Model weights and config files</li>
                <li>• Training and inference scripts</li>
                <li>• Three object category detection</li>
              </ul>
            </div>
            
            <div className="bg-black/60 border border-cyan-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Performance Report</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• mAP@0.5 scores</li>
                <li>• Confusion matrix analysis</li>
                <li>• Failure case evaluation</li>
                <li>• Performance visualizations</li>
              </ul>
            </div>
            
            <div className="bg-black/60 border border-purple-500/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Documentation</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• README with instructions</li>
                <li>• Methodology documentation</li>
                <li>• Environment requirements</li>
                <li>• Reproduction guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            {/* Special Offer Card */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Ready to Launch?</h3>
              </div>
              <p className="text-lg text-gray-300 mb-6">
                Join Duality AI's Falcon platform and start training your space station object detection model with cutting-edge synthetic data!
              </p>
              <Link 
                href="https://falcon.duality.ai/auth/sign-up?utm_source=hackathon&utm_medium=instructions&utm_campaign=codeclash" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105"
              >
                🛰️ Join Falcon Platform - Start Training
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-900/40 border border-blue-500/20 rounded-lg p-4">
                <Clock className="h-6 w-6 text-blue-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white mb-1">Quick Setup</h4>
                <p className="text-gray-300 text-sm">Environment setup with provided scripts</p>
              </div>
              <div className="bg-gray-900/40 border border-cyan-500/20 rounded-lg p-4">
                <Database className="h-6 w-6 text-cyan-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white mb-1">Quality Data</h4>
                <p className="text-gray-300 text-sm">High-quality synthetic datasets from Falcon</p>
              </div>
              <div className="bg-gray-900/40 border border-purple-500/20 rounded-lg p-4">
                <Users className="h-6 w-6 text-purple-400 mb-2 mx-auto" />
                <h4 className="font-semibold text-white mb-1">Community Support</h4>
                <p className="text-gray-300 text-sm">Discord support throughout the hackathon</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href="/#tracks" 
                className="border border-blue-500 text-blue-400 hover:text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all"
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
