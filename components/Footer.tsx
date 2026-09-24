import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-soft py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-foreground-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-accent transition-colors hover:text-accent-strong"
          >
            {profile.email}
          </a>
          <span className="text-border">|</span>
          <a
            href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            className="font-medium text-accent transition-colors hover:text-accent-strong"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
