"use client";

import { useEffect, useRef, useState } from "react";
import { impactMetrics } from "@/lib/data";

export function ImpactChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="rounded-2xl border border-border-soft bg-surface/40 p-6 sm:p-8">
      <div className="flex flex-col gap-6">
        {impactMetrics.map((m, i) => (
          <div key={m.label} className="group">
            <div className="mb-2 flex items-baseline justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{m.label}</p>
                <p className="text-xs text-foreground-faint">{m.context}</p>
              </div>
              <p className="shrink-0 font-mono text-sm font-semibold text-accent-strong">
                {m.display}
              </p>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-accent/10 transition-colors group-hover:bg-accent/15">
              <div
                className="h-full rounded-full bg-accent transition-[width] ease-out"
                style={{
                  width: active ? `${m.value}%` : "0%",
                  transitionDuration: "1100ms",
                  transitionDelay: `${i * 90}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
