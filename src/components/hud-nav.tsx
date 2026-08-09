"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

type HudNavProps = {
  mobileOpen: boolean;
  onToggleMobile: () => void;
};

export function HudNav({ mobileOpen, onToggleMobile }: HudNavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-obsidian/90 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a href="#top" className="group flex items-center gap-3">
          <div className="h-10 w-10 rounded-full border border-radar/30 bg-radar/10 p-2 text-radar shadow-glow transition group-hover:scale-105">
            <ChevronDown className="h-6 w-6 rotate-[-90deg]" />
          </div>
          <div>
            <div className="font-display text-sm uppercase tracking-tactical text-white">Vincent Nicholas Buzali</div>
            <div className="font-mono text-[11px] uppercase tracking-tactical text-slate-400">System Online</div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onToggleMobile}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm uppercase tracking-tactical text-white lg:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          Menu
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-charcoal/95 lg:hidden"
          >
            <div className="section-shell flex flex-col gap-2 py-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm uppercase tracking-tactical text-slate-200">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}