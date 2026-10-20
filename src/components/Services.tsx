"use client";

import Image from "next/image";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

export function Services() {
  return (
    <section id="services" className="relative">
      {/* Intro */}
      <div className="section-pad bg-section-alt pb-10 sm:pb-14">
        <div className="container-page">
          <SectionReveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ray">
              Services
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-chrome-bright">
              Every service, clearly defined — with the work you can see.
            </h2>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">
              From a solid wash to paintless dent repair, Rocking Rays keeps each job focused,
              honest, and finished to a high standard for Northern Indiana drivers.
            </p>
          </SectionReveal>
        </div>
      </div>

      {/* Per-service zigzag blocks */}
      <div className="flex flex-col">
        {SERVICES.map((service, index) => {
          const imageLeft = index % 2 === 0;
          const altBg = index % 2 === 1;

          return (
            <article
              key={service.id}
              id={service.id}
              className={`relative scroll-mt-[calc(var(--nav-h)+1rem)] ${
                altBg ? "bg-section-alt" : "bg-bg"
              }`}
            >
              <div className="container-page section-pad !py-[clamp(3.5rem,8vw,5.5rem)]">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                    imageLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <SectionReveal delay={0.04}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11]">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        priority={index === 0}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/35 via-transparent to-transparent"
                        aria-hidden
                      />
                    </div>
                  </SectionReveal>

                  <SectionReveal delay={0.12}>
                    <div className={imageLeft ? "lg:pl-2" : "lg:pr-2"}>
                      <span className="font-display text-5xl font-extrabold text-chrome/10 sm:text-6xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="-mt-7 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] font-bold leading-tight text-chrome-bright">
                        {service.name}
                      </h3>
                      <p className="mt-3 font-display text-lg font-semibold leading-snug text-ray sm:text-xl">
                        {service.headline}
                      </p>
                      <p className="mt-4 text-muted leading-relaxed">{service.description}</p>
                      <ul className="mt-7 space-y-2.5 text-sm text-chrome">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span
                              className="mt-2 h-px w-6 shrink-0 bg-ray"
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <a href={BUSINESS.phoneTel} className="btn-primary">
                          Call Now
                        </a>
                        <a href="#contact" className="btn-ghost">
                          Get a Quote
                        </a>
                      </div>
                    </div>
                  </SectionReveal>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
