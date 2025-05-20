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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              MEET OUR TEAM
            </span>
          </motion.h1>

          {/* Regular Team Members Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto"
          >
            {regularMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group w-40 h-40 md:w-56 md:h-56 mx-auto"
              >
                <div className="relative w-full h-full">
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-50 blur transition duration-1000 group-hover:duration-200" />

                  {/* Square container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
                    <div
                      className="w-full h-full cursor-pointer"
                      onClick={() => setSelectedMember(member)}
                    >
                      <Image
                        src={member.imageUrl || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Always visible info overlay with semi-transparent background */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/70">
                      <div className="text-center">
                        <p className="text-white/90 font-bold text-sm md:text-base mb-0.5">
                          {member.name}
                        </p>
                        <p className="text-blue-300/90 text-xs md:text-sm">
                          {member.role}
                        </p>
                        {member.linkedinUrl && (
                          <div className="mt-1.5 flex justify-center">
                            <a
                              href={member.linkedinUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/80 hover:text-blue-400 transition-colors p-1 rounded-full hover:bg-white/20"
                            >
                              <Linkedin size={16} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl opacity-30 blur" />
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
                      <h2 className="text-xl font-semibold text-blue-300/90">
                        {selectedMember.role}
                      </h2>
                      {selectedMember.linkedinUrl && (
                        <a
                          href={selectedMember.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-blue-400 transition-colors p-1 rounded-full hover:bg-white/10"
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
