"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HudNav } from "@/components/hud-nav";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 hud-grid opacity-[0.06]" />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl" />
      <div className="relative z-10">
        <HudNav mobileOpen={mobileNavOpen} onToggleMobile={() => setMobileNavOpen((value) => !value)} />

        <Hero onResumeClick={() => setResumeOpen(true)} />
        <Experience />
        <Projects />
        <Skills />
        <Gallery />
        <Footer onResumeClick={() => setResumeOpen(true)} />
      </div>

      <AnimatePresence>
        {resumeOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
            onClick={() => setResumeOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              className="glass-panel w-full max-w-lg rounded-[2rem] p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="hud-label">Resume Channel</div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Ready for download</h3>
                </div>
                <button
                  type="button"
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white"
                  onClick={() => setResumeOpen(false)}
                  aria-label="Close resume modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Resume placeholder is wired for a future PDF asset. Replace the modal content with a direct file link when the final document is ready.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="terminal-button w-full sm:w-auto" onClick={() => setResumeOpen(false)}>
                  Go to Contact
                </a>
                <button type="button" className="terminal-button secondary w-full sm:w-auto" onClick={() => setResumeOpen(false)}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}