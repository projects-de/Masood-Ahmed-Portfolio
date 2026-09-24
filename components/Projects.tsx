import { Section, SectionHeading } from "./Section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Case studies"
        description="A handful of the platforms and pipelines I've shipped, spanning clinical data, compliance, and financial reporting."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-2xl border border-border-soft bg-surface/40 p-6 transition-all hover:-translate-y-1 hover:border-accent/40 hover:bg-surface/70"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{p.org}</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-dim">{p.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border-soft bg-background-alt px-2.5 py-1 font-mono text-[11px] text-foreground-dim"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
