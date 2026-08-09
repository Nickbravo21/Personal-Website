"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-shell py-16 sm:py-20 lg:py-24">
      <div className="mb-8">
        <div className="hud-label">Section 03</div>
        <h2 className="hud-title mt-2">Key Repositories and Systems</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className="grid-card group flex h-full flex-col"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                <div className="hud-label">{project.label}</div>
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              </div>
              <div className="rounded-full border border-radar/30 bg-radar/10 p-2 text-radar transition group-hover:scale-110 group-hover:shadow-glow">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-tactical text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-5 flex-1 text-sm leading-7 text-slate-300 sm:text-base">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-tactical text-radar transition hover:text-cyan-300"
            >
              Open System <Github className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}