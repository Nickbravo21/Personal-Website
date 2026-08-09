"use client";

import { motion } from "framer-motion";

import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-shell py-16 sm:py-20 lg:py-24">
      <div className="mb-8">
        <div className="hud-label">Section 04</div>
        <h2 className="hud-title mt-2">Technical Skill Matrix</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="grid-card"
          >
            <div className="hud-label">{group.title}</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/10 bg-black/25 px-3 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}