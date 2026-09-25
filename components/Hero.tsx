import { profile } from "@/lib/data";
import { DataFlowDiagram } from "./DataFlowDiagram";

export function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="relative flex min-h-screen items-center pb-16 pt-28">
      <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-10 xl:grid-cols-[1.05fr_1fr]">
        <div className="min-w-0 animate-fade-up">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-accent">
            {profile.title}
          </p>
          <h1 className="mt-6 font-serif text-6xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
            {first}{" "}
            <span className="bg-gradient-to-r from-white via-[#c9d6ff] to-[#a5b4f0] bg-clip-text text-transparent">
              {rest.join(" ")}
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground-dim">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-md bg-gradient-to-r from-accent to-accent-2 px-7 py-4 text-base font-semibold text-white transition hover:brightness-110"
            >
              View Work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-strong"
            >
              Get in Touch
            </a>
            <a
              href={profile.resumeFile}
              download
              className="rounded-md border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-strong"
            >
              Download Resume
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-faint">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-accent" />
            Open for Data Engineering/Analytics Engagements
          </p>
        </div>

        <DataFlowDiagram />
      </div>
    </section>
  );
}
