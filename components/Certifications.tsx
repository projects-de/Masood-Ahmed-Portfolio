import { Section, SectionHeading } from "./Section";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Credentials" title="Certifications" />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {certifications.map((c) => (
          <div
            key={c}
            className="flex items-center gap-3 rounded-xl border border-border-soft bg-surface/40 px-5 py-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-strong">
              ✓
            </span>
            <p className="text-sm text-foreground-dim">{c}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
