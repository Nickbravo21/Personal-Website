"use client";

import { motion } from "framer-motion";

import { gallery } from "@/data/portfolio";

const accentClasses: Record<string, string> = {
  radar: "from-radar/35 via-radar/10 to-transparent",
  amber: "from-amber/35 via-amber/10 to-transparent",
  cyan: "from-cyan-500/35 via-cyan-500/10 to-transparent",
};

export function Gallery() {
  return (
    <section id="gallery" className="section-shell py-16 sm:py-20 lg:py-24">
      <div className="mb-8">
        <div className="hud-label">Section 05</div>
        <h2 className="hud-title mt-2">Field Media and Gallery</h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <motion.figure
            key={item.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="grid-card group min-h-[320px]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${accentClasses[item.accent]}`} />
            <div className="absolute inset-0 hud-grid opacity-15" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)] opacity-40 transition duration-500 group-hover:scale-110" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="hud-label">{item.title}</div>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.caption}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[11px] uppercase tracking-tactical text-slate-300">
                  Placeholder
                </div>
              </div>

              <div className="mt-8 flex min-h-56 items-center justify-center rounded-[1.5rem] border border-dashed border-white/12 bg-black/25 p-6 transition duration-300 group-hover:border-radar/50">
                <div className="relative flex h-40 w-full max-w-sm items-center justify-center rounded-2xl border border-white/10 bg-charcoal/80">
                  <div className="absolute inset-6 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-3/4 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-radar/70 to-transparent" />
                  <div className="absolute left-1/2 top-1/2 h-px w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-radar/70 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_0,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_16px] opacity-30" />
                </div>
              </div>
            </div>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}