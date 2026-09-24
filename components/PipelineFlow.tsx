const stages = [
  { label: "Ingest", sub: "Kafka · ADF" },
  { label: "Bronze", sub: "Raw" },
  { label: "Silver", sub: "Curated" },
  { label: "Gold", sub: "Modeled" },
  { label: "Serve", sub: "BI · APIs" },
];

const CYCLE_SECONDS = 6;

export function PipelineFlow() {
  return (
    <div
      className="relative mx-auto mt-14 max-w-2xl animate-fade-up [animation-delay:250ms]"
      aria-hidden
    >
      <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-faint">
        How data moves through my pipelines
      </p>

      <div className="relative">
        <div className="absolute left-0 right-0 top-[15px] h-px bg-border-soft sm:top-[17px]" />

        <div
          className="pipeline-dot absolute top-[11px] h-2 w-2 rounded-full bg-accent sm:top-[13px]"
          style={{ animationDuration: `${CYCLE_SECONDS}s` }}
        />

        <div className="relative flex justify-between">
          {stages.map((stage, i) => (
            <div key={stage.label} className="flex flex-col items-center gap-2.5">
              <div
                className="pipeline-node flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background text-[11px] font-semibold text-accent-strong"
                style={{
                  animationDuration: `${CYCLE_SECONDS}s`,
                  animationDelay: `${(i / (stages.length - 1)) * CYCLE_SECONDS}s`,
                }}
              >
                {i + 1}
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-foreground">{stage.label}</p>
                <p className="hidden font-mono text-[10px] text-foreground-faint sm:block">
                  {stage.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
