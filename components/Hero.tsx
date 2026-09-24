import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-slow" />
            Open to Senior Data Engineering Opportunities
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-gradient sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-3 max-w-xl text-sm text-foreground-faint sm:text-base">
            {profile.subtitle}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-dim">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.03] hover:bg-accent-strong"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-on-accent"
            >
              Get in Touch
            </a>
            <a
              href={profile.resumeFile}
              download
              className="text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-strong"
            >
              Download Resume ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
