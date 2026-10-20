"use client";

import { BUSINESS } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

export function Trust() {
  return (
    <section id="why-us" className="section-pad relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(232,163,23,0.2), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="container-page relative">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <SectionReveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ray">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-chrome-bright">
              Local pride. Personal service. A finish that earns its rating.
            </h2>
            <p className="mt-5 max-w-xl text-muted leading-relaxed">
              Rocking Rays is owned and operated by {BUSINESS.owner} — focused on careful
              workmanship for drivers across Northern Indiana, not rushed volume.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.12}>
            <div className="border-l-2 border-ray pl-8">
              <p className="font-display text-[4.5rem] font-extrabold leading-none text-chrome-gradient">
                {BUSINESS.rating}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">
                Client rating
              </p>
              <div className="mt-8 space-y-5 text-chrome">
                <div>
                  <p className="font-display text-lg font-semibold text-chrome-bright">
                    Northern Indiana
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    South Bend / Elkhart area · 574
                  </p>
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-chrome-bright">
                    Owner: {BUSINESS.owner}
                  </p>
                  <a
                    href={BUSINESS.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-steel-soft underline-offset-4 transition-colors hover:text-ray hover:underline"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
