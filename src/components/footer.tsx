"use client";

import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { quickLinks } from "@/data/portfolio";

type FooterProps = {
  onResumeClick: () => void;
};

export function Footer({ onResumeClick }: FooterProps) {
  return (
    <footer id="contact" className="section-shell py-16 sm:py-20 lg:py-24">
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid-card"
        >
          <div className="hud-label">Section 06</div>
          <h2 className="hud-title mt-2">Resume and Contact</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 font-mono text-sm uppercase tracking-tactical text-slate-300">
              [ RESUME_DOCUMENT_V2026.PDF ]
            </div>
            <button type="button" onClick={onResumeClick} className="terminal-button w-full md:w-auto">
              Download Resume <Download className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="grid-card flex flex-col justify-between"
        >
          <div>
            <div className="hud-label">Quick Links</div>
            <div className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-tactical text-slate-200 transition hover:border-radar/40 hover:text-white"
                >
                  <span>{link.label}</span>
                  <ExternalLink className="h-4 w-4 text-radar" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/5 pt-6 font-mono text-xs uppercase tracking-tactical text-slate-400">
            © 2026 Vincent Nicholas Buzali. All systems operational.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}