"use client";

import { useState } from "react";
import { Section, SectionHeading } from "./Section";
import { experience, type ExperienceEntry } from "@/lib/data";

function ExperienceCard({
  entry,
  defaultOpen,
  isLast,
}: {
  entry: ExperienceEntry;
  defaultOpen?: boolean;
  isLast?: boolean;
}) {
  const [expanded, setExpanded] = useState(Boolean(defaultOpen));

  return (
    <div className="relative pl-10 sm:pl-12">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background" />
      {!isLast && (
        <div className="absolute left-[5px] top-5 bottom-[-2.5rem] w-px bg-border-soft" />
      )}

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
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've built"
        description="A decade-plus across healthcare systems and SaaS — from junior ETL developer to leading a 16-person data engineering team."
      />
      <div className="flex flex-col gap-10">
        {experience.map((entry, i) => (
          <ExperienceCard
            key={entry.company}
            entry={entry}
            defaultOpen={i === 0}
            isLast={i === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
