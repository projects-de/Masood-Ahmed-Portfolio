import { Section } from "./Section";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-surface/50 px-8 py-16 text-center sm:px-16">
        <div
          className="section-glow left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-accent"
          aria-hidden
        />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Get in touch</p>
        <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Let&apos;s talk about your data platform.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-foreground-dim">
          Open to senior/lead data engineering roles and select consulting engagements in
          healthcare and regulated data environments.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-transform hover:scale-[1.03] hover:bg-accent-strong"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent-strong"
          >
            {profile.phone}
          </a>
        </div>

        <p className="mt-8 font-mono text-xs text-foreground-faint">{profile.location}</p>
      </div>
    </Section>
  );
}
