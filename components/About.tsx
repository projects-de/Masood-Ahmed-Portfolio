import { Section, SectionHeading } from "./Section";
import { about, education, profile } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Senior data engineer, healthcare-tested." />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {about.paragraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-foreground-dim">
              {p}
            </p>
          ))}
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border-soft bg-surface/50 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Based in</p>
            <p className="mt-2 text-sm text-foreground">{profile.location} · US Citizen</p>
          </div>
          <div className="rounded-xl border border-border-soft bg-surface/50 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Education</p>
            <ul className="mt-2 space-y-2">
              {education.map((e) => (
                <li key={e.school} className="text-sm text-foreground">
                  {e.degree}
                  <span className="block text-xs text-foreground-faint">
                    {e.school}
                    {e.period ? ` · ${e.period}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
