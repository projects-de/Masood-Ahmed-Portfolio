"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (!ref.current || Number.isNaN(numeric)) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 1100;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * numeric).toString());
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border-soft pt-10 sm:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="text-center sm:text-left">
          <p className="font-mono text-3xl font-semibold text-gradient sm:text-4xl">
            <AnimatedValue value={m.value} />
          </p>
          <p className="mt-2 text-sm text-foreground-dim">{m.label}</p>
        </div>
      ))}
    </div>
  );
}
