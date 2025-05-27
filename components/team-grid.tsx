"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TeamMember, teamMembers } from "@/constants/teamdata";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

export default function TeamGrid() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const featuredMember = teamMembers.find((member) => member.featured);
  const regularMembers = teamMembers.filter((member) => !member.featured);

  return (
    <div className="relative bg-black min-h-screen py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Overlay for readability */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-1 tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-600">
              MEET OUR TEAM
            </span>
          </motion.h1>

          {/* Regular Team Members Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {regularMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-gray-900/50 to-black/80 rounded-2xl p-6 border border-gray-800/50 hover:border-pink-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
              >
                {/* Photo */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-75 blur transition duration-300" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-pink-500/50 transition-all duration-300">
                    <Image
                      src={member.imageUrl || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                      onClick={() => setSelectedMember(member)}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-3">
                  <h3 className="text-white font-semibold text-lg group-hover:text-pink-300 transition-colors duration-300">
                    {member.name}
                  </h3>

                  <p className="text-gray-400 text-sm">{member.role}</p>

                  {/* LinkedIn Button */}
                  {member.linkedinUrl && (
                    <div className="pt-2">
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500 text-pink-300 hover:text-white text-sm rounded-full border border-pink-500/30 hover:border-pink-500 transition-all duration-300 hover:scale-105"
                      >
                        <Linkedin size={16} />
                        <span>Connect</span>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Member Details Modal */}
        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogContent className="sm:max-w-[425px] bg-black/95 border border-white/10">
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white/90">
                    {selectedMember.name}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-6">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-3xl opacity-30 blur" />
                    <div className="relative w-48 h-48 mx-auto rounded-3xl overflow-hidden border border-white/10">
                      <Image
                        src={selectedMember.imageUrl || "/placeholder.svg"}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center px-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <h2 className="text-xl font-semibold text-pink-300/90">
                        {selectedMember.role}
                      </h2>
                      {selectedMember.linkedinUrl && (
                        <a
                          href={selectedMember.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-pink-400 transition-colors p-1 rounded-full hover:bg-pink-500/20"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                    </div>
                    <p className="text-white/80 leading-relaxed text-justify">
                      {selectedMember.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
