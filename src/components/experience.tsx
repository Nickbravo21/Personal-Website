"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-shell py-16 sm:py-20 lg:py-24">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <div className="hud-label">Section 02</div>
          <h2 className="hud-title mt-2">Operational Experience</h2>
        </div>
        <div className="hidden max-w-md text-right text-sm leading-7 text-slate-400 md:block">
          Interactive timeline with direct operational context and the systems each role touches.
        </div>
      </div>

      <div className="space-y-4">
        {experience.map((item, index) => (
          <motion.details
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="grid-card group open:border-radar/60"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-2">
                  <div className="hud-label">{item.timeline}</div>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
                  <p className="text-sm uppercase tracking-tactical text-radar">{item.org}</p>
                </div>
                <div className="tactical-chip self-start">{item.domain}</div>
              </div>
            </summary>

            <div className="mt-5 grid gap-4 border-t border-white/5 pt-5 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
                <div className="hud-label">System Notes</div>

                {item.images?.length ? (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {item.images.map((image) => (
                      <div key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={900}
                          height={1125}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                ) : item.imageSrc ? (
                  <div className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.title}
                      width={900}
                      height={1125}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ) : null}

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.org} requires operational discipline, traceable execution, and the ability to turn ambiguous requests into stable tooling.
                </p>
              </div>

              <ul className="space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-7 text-slate-300 sm:text-base">
                    <span className="mt-3 h-1.5 w-1.5 rounded-full bg-radar shadow-[0_0_16px_rgba(16,185,129,0.65)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}