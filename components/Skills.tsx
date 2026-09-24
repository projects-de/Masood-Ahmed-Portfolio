import { Section, SectionHeading } from "./Section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Toolbox" title="Technical skills" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border-soft bg-surface/40 p-5"
          >
            <p className="mb-4 text-sm font-semibold text-foreground">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-background px-2.5 py-1 font-mono text-[11px] text-foreground-dim ring-1 ring-inset ring-border-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
