type NodeDef = {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  icon: "database" | "files" | "stream" | "saas" | "ingest" | "lakehouse" | "bi" | "ai" | "shield";
};

const W = 860;
const H = 520;

const sources: NodeDef[] = [
  { id: "s1", label: "Databases", sub: "SQL · Oracle", x: 100, y: 40, icon: "database" },
  { id: "s2", label: "Files & APIs", sub: "REST · Flat Files", x: 100, y: 165, icon: "files" },
  { id: "s3", label: "Streaming Events", sub: "Kafka", x: 100, y: 290, icon: "stream" },
  { id: "s4", label: "SaaS Apps", sub: "Cloud Platforms", x: 100, y: 415, icon: "saas" },
];

const hub: NodeDef = { id: "hub", label: "Ingestion / ETL", sub: "Spark · ADF", x: 330, y: 227, icon: "ingest" };
const core: NodeDef = { id: "core", label: "Lakehouse", sub: "Delta Lake · Snowflake", x: 530, y: 227, icon: "lakehouse" };

const destinations: NodeDef[] = [
  { id: "d1", label: "BI & Analytics", sub: "Power BI · Tableau", x: 750, y: 102, icon: "bi" },
  { id: "d2", label: "AI / ML", sub: "Azure OpenAI", x: 750, y: 227, icon: "ai" },
  { id: "d3", label: "Governance", sub: "RBAC · Compliance", x: 750, y: 352, icon: "shield" },
];

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = x1 + (x2 - x1) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
}

const icons: Record<NodeDef["icon"], React.ReactNode> = {
  database: (
    <>
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  files: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 13h6M9 17h6" />
    </>
  ),
  stream: <path d="M13 2 4 14h6l-1 8 9-12h-6z" />,
  saas: <path d="M6.5 19a4.5 4.5 0 0 1 0-9 6 6 0 0 1 11.6-1.5A4 4 0 0 1 17.5 19h-11z" />,
  ingest: <path d="M4 4h16l-6 8v6l-4 2v-8z" />,
  lakehouse: (
    <>
      <path d="M12 3 3 8l9 5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </>
  ),
  bi: (
    <>
      <rect x="4" y="12" width="3.2" height="8" />
      <rect x="10.4" y="6" width="3.2" height="14" />
      <rect x="16.8" y="9" width="3.2" height="11" />
    </>
  ),
  ai: <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" />,
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

function NodeBadge({ node }: { node: NodeDef }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: `${(node.x / W) * 100}%`, top: `${(node.y / H) * 100}%` }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/40 bg-surface text-accent shadow-sm">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          {icons[node.icon]}
        </svg>
      </div>
      <div className="text-center leading-tight">
        <p className="whitespace-nowrap text-[11px] font-semibold text-foreground">{node.label}</p>
        <p className="whitespace-nowrap font-mono text-[9px] text-foreground-faint">{node.sub}</p>
      </div>
    </div>
  );
}

function FlowPath({ d, duration, delay }: { d: string; duration: number; delay: number }) {
  return (
    <>
      <path d={d} fill="none" stroke="var(--border)" strokeWidth="1.5" />
      <circle r="3.5" fill="var(--accent)">
        <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" path={d} />
      </circle>
    </>
  );
}

export function DataFlowDiagram() {
  const sourcePaths = sources.map((s) => curve(s.x + 22, s.y, hub.x - 22, hub.y));
  const hubToCore = `M${hub.x + 22},${hub.y} L${core.x - 22},${core.y}`;
  const destPaths = destinations.map((d) => curve(core.x + 22, core.y, d.x - 22, d.y));

  return (
    <div
      className="relative min-w-0 animate-fade-up overflow-x-auto px-3 py-8 [animation-delay:250ms]"
      aria-hidden
    >
      <div className="relative" style={{ minWidth: 560, aspectRatio: `${W} / ${H}` }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
          {sourcePaths.map((d, i) => (
            <FlowPath key={sources[i].id} d={d} duration={2.6} delay={i * 0.4} />
          ))}
          <FlowPath d={hubToCore} duration={1.3} delay={0} />
          {destPaths.map((d, i) => (
            <FlowPath key={destinations[i].id} d={d} duration={2.6} delay={i * 0.5} />
          ))}
        </svg>

        {[...sources, hub, core, ...destinations].map((n) => (
          <NodeBadge key={n.id} node={n} />
        ))}
      </div>
    </div>
  );
}
