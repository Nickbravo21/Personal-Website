"use client";

import { ArrowDownRight, ExternalLink, FileDown, MapPin, UserRound } from "lucide-react";
import { motion } from "framer-motion";

type HeroProps = {
  onResumeClick: () => void;
};

export function Hero({ onResumeClick }: HeroProps) {
  return (
    <section id="top" className="section-shell pt-10 sm:pt-14 lg:pt-20">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="absolute inset-0 hud-grid opacity-20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-radar/70 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-500/8 to-transparent" />

        <div className="relative z-10 space-y-8">
          <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-tactical text-slate-300">
            <span className="tactical-chip"><UserRound className="h-3 w-3 text-radar" /> Vincent Nicholas Buzali</span>
            <span className="tactical-chip">Software Engineering Intern @ Scotiabank</span>
            <span className="tactical-chip"><MapPin className="h-3 w-3 text-radar" /> Toronto, Ontario</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-4xl font-display text-4xl font-semibold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Building practical software for business, technology, and AI.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                Computer science major and business minor at the University of Guelph. I build and work on software, data, and AI tools that support clear decisions and strong user experiences.
              </motion.p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#projects" className="terminal-button">
                  Explore Projects <ArrowDownRight className="h-4 w-4" />
                </a>
                <a href="https://github.com/Nickbravo21" target="_blank" rel="noreferrer" className="terminal-button secondary">
                  GitHub <ExternalLink className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/vincent-nb/" target="_blank" rel="noreferrer" className="terminal-button secondary">
                  LinkedIn <ExternalLink className="h-4 w-4" />
                </a>
                <button type="button" onClick={onResumeClick} className="terminal-button secondary">
                  Download Resume <FileDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="grid-card"
            >
              <div className="hud-label">Professional Snapshot</div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="text-sm uppercase tracking-tactical text-slate-400">Current Focus</div>
                  <div className="mt-2 text-lg font-semibold text-white">Business software, data workflows, and AI-enabled tools</div>
                </div>
                <div>
                  <div className="text-sm uppercase tracking-tactical text-slate-400">Core Stack</div>
                  <div className="mt-2 text-base leading-7 text-slate-300">TypeScript, React, SQL, Python, Java</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}