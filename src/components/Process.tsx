"use client";

import Image from "next/image";
import { SectionReveal } from "./SectionReveal";

const STEPS = [
  {
    n: "01",
    title: "Reach out",
    body: "Call or send a quick message with your vehicle and what you need — detailing, dent work, or both.",
  },
  {
    n: "02",
    title: "Assess & schedule",
    body: "We review the job, set clear expectations, and lock in a time that works for your schedule.",
  },
  {
    n: "03",
    title: "Craft & deliver",
    body: "Careful execution, clean finish, and a walkthrough so you leave knowing the work was done right.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="section-pad bg-section-alt">
      <div className="container-page">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <SectionReveal className="lg:col-span-5">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ray">
              Process
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-chrome-bright">
              How it works
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Straightforward from first call to final shine — no runaround.
            </p>
          </SectionReveal>

          <SectionReveal className="lg:col-span-7" delay={0.1}>
            <div className="relative aspect-[16/9] w-full overflow-hidden lg:aspect-[21/9]">
              <Image
                src="/images/service-exterior-detail.jpg"
                alt="Technician machine-polishing a black car door panel during a professional exterior detail"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(14,17,20,0.45) 0%, transparent 55%), linear-gradient(180deg, transparent 40%, rgba(14,17,20,0.5) 100%)",
                }}
                aria-hidden
              />
            </div>
          </SectionReveal>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <SectionReveal key={step.n} delay={0.08 * i}>
              <li className="relative">
                {i < STEPS.length - 1 && (
                  <span
                    className="absolute left-[calc(100%-0.5rem)] top-5 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-line-strong to-transparent md:block"
                    aria-hidden
                  />
                )}
                <span className="font-display text-sm font-bold tracking-widest text-ray">
                  {step.n}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-chrome-bright">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
              </li>
            </SectionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
