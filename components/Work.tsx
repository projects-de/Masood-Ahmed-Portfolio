"use client";

import { useEffect, useRef, useState } from "react";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { roles, type RoleEntry } from "@/lib/data";

function MetricBars({ impact }: { impact: RoleEntry["impact"] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!impact || impact.length === 0) return null;

  return (
    <div ref={ref} className="mt-5 flex flex-col gap-3 border-t border-border-soft pt-5">
      {impact.map((m, i) => (
        <div key={m.label}>
          <div className="mb-1.5 flex items-baseline justify-between gap-3">
            <p className="text-xs font-medium text-foreground-dim">{m.label}</p>
            <p className="shrink-0 font-mono text-xs font-semibold text-accent-strong">
              {m.display}
            </p>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-accent/10">
            <div
              className="h-full rounded-full bg-accent transition-[width] ease-out"
              style={{
                width: active ? `${m.value}%` : "0%",
                transitionDuration: "1000ms",
                transitionDelay: `${i * 90}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function FocusAreas({ areas }: { areas: RoleEntry["focusAreas"] }) {
  if (!areas || areas.length === 0) return null;

  return (
    <div className="mt-5 border-t border-border-soft pt-5">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-faint">
        Focus Areas
      </p>
      <div className="flex flex-wrap gap-2">
        {areas.map((a) => (
          <span
            key={a}
            className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent-strong"
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

function RoleCard({ entry, defaultOpen, isLast }: { entry: RoleEntry; defaultOpen?: boolean; isLast?: boolean }) {
  const [expanded, setExpanded] = useState(Boolean(defaultOpen));

  return (
    <div className="relative pl-10 sm:pl-12">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      {!isLast && <div className="absolute left-[5px] top-5 bottom-[-2.5rem] w-px bg-border-soft" />}

      <div className="rounded-xl border border-border-soft bg-surface/40 p-6 transition-colors hover:border-accent/30">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
          <span className="font-mono text-xs text-foreground-faint">{entry.period}</span>
        </div>
        <p className="mt-1 text-sm font-medium text-accent-strong">{entry.company}</p>

        <ul className="mt-4 space-y-2.5">
          {entry.bullets.map((b) => (
            <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-foreground-dim">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {b}
            </li>
          ))}
          {expanded &&
            entry.extraBullets?.map((b) => (
              <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-foreground-dim">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {b}
              </li>
            ))}
        </ul>

        {entry.extraBullets && entry.extraBullets.length > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-4 font-mono text-xs uppercase tracking-wide text-accent transition-colors hover:text-accent-strong"
          >
            {expanded ? "Show less −" : "Show more +"}
          </button>
        )}

        <div className="mt-5 rounded-lg bg-background-alt/60 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-faint">
            Project
          </p>
          <p className="mt-1.5 text-sm font-semibold text-foreground">{entry.project.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-dim">{entry.project.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {entry.project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border-soft bg-background px-2.5 py-1 font-mono text-[11px] text-foreground-dim"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {entry.impact ? (
          <MetricBars impact={entry.impact} />
        ) : (
          <FocusAreas areas={entry.focusAreas} />
        )}
      </div>
    </div>
  );
}

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Experience & Projects"
        title="What I've built, and shipped"
        description="A decade-plus across healthcare systems and SaaS — each role paired with the platform I built and the measurable outcome it delivered."
      />
      <div className="flex flex-col gap-10">
        {roles.map((entry, i) => (
          <Reveal key={entry.company} delay={Math.min(i * 100, 300)}>
            <RoleCard entry={entry} defaultOpen={i === 0} isLast={i === roles.length - 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
