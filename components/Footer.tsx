import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-soft py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-xs text-foreground-faint">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
