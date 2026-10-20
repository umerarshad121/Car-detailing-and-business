"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BUSINESS } from "@/lib/constants";
import { HeroCanvas } from "./HeroCanvas";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-[calc(var(--nav-h)+2rem)] sm:items-center sm:pb-24 sm:pt-[var(--nav-h)]"
    >
      {/* Full-bleed atmosphere — real automotive shop, not a card collage */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-atmosphere.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[72%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(14,17,20,0.94) 0%, rgba(14,17,20,0.72) 38%, rgba(14,17,20,0.4) 68%, rgba(14,17,20,0.55) 100%), radial-gradient(ellipse 70% 55% at 75% 40%, rgba(232,163,23,0.12), transparent 60%)",
          }}
        />
      </div>

      <HeroCanvas />

      <div className="container-page relative z-10 w-full px-[clamp(1.25rem,4vw,2.5rem)]">
        <div className="max-w-xl">
          <motion.p
            className="font-display text-[clamp(2.75rem,9vw,5.5rem)] font-extrabold leading-[0.92] tracking-tight"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-ray-gradient">Rocking Rays</span>
          </motion.p>

          <motion.h1
            className="mt-4 font-display text-[clamp(1.35rem,3.5vw,2rem)] font-semibold leading-snug text-chrome-bright"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Auto detailing &amp; dent removal, finished to a mirror shine.
          </motion.h1>

          <motion.p
            className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Precision care for Northern Indiana drivers — South Bend, Elkhart, and the 574.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href={BUSINESS.phoneTel} className="btn-primary">
              Call Now
            </a>
            <a href="#contact" className="btn-ghost">
              Request a Quote
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
