"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, ShieldCheck } from "lucide-react";

export interface MemberData {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
}

interface TeamMemberProps {
  member: MemberData;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="group relative bg-white dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Scanning Line Effect */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-foreground/50 shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-scan-line"></div>
        </div>

        {/* Role Badge on Image */}
        <div className="absolute bottom-4 left-4 z-20">
          <span className="px-3 py-1 bg-foreground text-background text-xs font-bold uppercase tracking-wider rounded-md">
            {member.role.split(" &")[0]}
          </span>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 md:p-8 flex flex-col grow relative">
        <h3 className="text-2xl font-bold text-foreground mb-1 tracking-tight">
          {member.name}
        </h3>
        <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">
          {member.role}
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
          {member.bio}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {member.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-[10px] uppercase tracking-wide font-semibold text-neutral-600 dark:text-neutral-400 flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" /> {skill}
            </span>
          ))}
        </div>

        {/* Contact Actions */}
        <div className="flex gap-3 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <button className="flex-1 py-2 flex items-center justify-center gap-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors text-sm font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" /> Kontakt
          </button>
          <button
            className="p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
