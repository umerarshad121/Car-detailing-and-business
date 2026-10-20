import { BUSINESS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-elevated">
      <div className="container-page flex flex-col gap-8 px-[clamp(1.25rem,4vw,2.5rem)] py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-chrome-bright">
            <span className="text-ray">Rocking</span> Rays
          </p>
          <p className="mt-2 max-w-sm text-sm text-muted">{BUSINESS.name}</p>
          <p className="mt-1 text-sm text-chrome-dim">{BUSINESS.location}</p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={BUSINESS.phoneTel}
            className="font-display text-lg font-semibold text-chrome-bright transition-colors hover:text-ray"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-steel-soft underline-offset-4 hover:text-ray hover:underline"
          >
            LinkedIn — {BUSINESS.owner}
          </a>
          <p className="mt-2 text-xs text-chrome-dim">
            © 2026 {BUSINESS.shortName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
