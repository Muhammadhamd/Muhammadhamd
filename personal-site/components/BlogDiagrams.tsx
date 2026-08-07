import type { DiagramKey } from "@/lib/blog-types";

/**
 * Named inline SVG diagrams for blog articles. Server-rendered, no external
 * files, no client JS. Kept simple and geometric (no literal charting lib)
 * so they read cleanly at any width and match the site's neo-brutalist
 * palette (ink #18181b borders, violet #7c3bed accent, no dark mode).
 */

const INK = "#18181b";
const VIOLET = "#7c3bed";
const MUTED = "#a1a1aa";

function RankingVsCitationGap() {
  return (
    <svg viewBox="0 0 640 280" className="w-full h-auto" role="presentation">
      <line x1="60" y1="230" x2="600" y2="230" stroke={INK} strokeWidth="2" />

      {/* Search ranking bar - tall, filled */}
      <rect x="140" y="60" width="90" height="170" rx="10" fill={VIOLET} stroke={INK} strokeWidth="2" />
      <text x="185" y="45" textAnchor="middle" fontSize="14" fontWeight="800" fill={INK}>Search Ranking</text>
      <text x="185" y="145" textAnchor="middle" fontSize="22" fontWeight="900" fill="#fff">#3</text>

      {/* AI citation bar - short, hollow */}
      <rect x="410" y="205" width="90" height="25" rx="10" fill="#fff" stroke={INK} strokeWidth="2" strokeDasharray="5 4" />
      <text x="455" y="45" textAnchor="middle" fontSize="14" fontWeight="800" fill={INK}>AI Citations</text>
      <text x="455" y="196" textAnchor="middle" fontSize="22" fontWeight="900" fill={INK}>0 / 5</text>

      {/* Gap arrow */}
      <path d="M240 130 L400 195" stroke={MUTED} strokeWidth="2" strokeDasharray="6 5" fill="none" markerEnd="url(#arrowGap)" />
      <defs>
        <marker id="arrowGap" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={MUTED} />
        </marker>
      </defs>
      <text x="320" y="115" textAnchor="middle" fontSize="13" fontWeight="700" fill="#71717a">the visibility gap</text>

      <text x="185" y="255" textAnchor="middle" fontSize="12" fontWeight="600" fill="#71717a">Google</text>
      <text x="455" y="255" textAnchor="middle" fontSize="12" fontWeight="600" fill="#71717a">ChatGPT / Perplexity / Claude</text>
    </svg>
  );
}

function SchemaToAiRetrieval() {
  const nodes = [
    { x: 40, label: "Page HTML", sub: "server-rendered" },
    { x: 210, label: "Structured Data", sub: "JSON-LD" },
    { x: 380, label: "AI Crawler", sub: "GPTBot, ClaudeBot" },
    { x: 550, label: "Cited Answer", sub: "in the chat" },
  ];
  return (
    <svg viewBox="0 0 640 160" className="w-full h-auto" role="presentation">
      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect x={n.x} y="50" width="140" height="60" rx="12" fill={i === 3 ? VIOLET : "#fff"} stroke={INK} strokeWidth="2" />
          <text x={n.x + 70} y="76" textAnchor="middle" fontSize="13" fontWeight="800" fill={i === 3 ? "#fff" : INK}>
            {n.label}
          </text>
          <text x={n.x + 70} y="93" textAnchor="middle" fontSize="10.5" fontWeight="600" fill={i === 3 ? "#e9d5ff" : "#71717a"}>
            {n.sub}
          </text>
          {i < 3 && (
            <path d={`M${n.x + 145} 80 L${n.x + 205} 80`} stroke={INK} strokeWidth="2" markerEnd="url(#arrowFlow)" />
          )}
        </g>
      ))}
      <defs>
        <marker id="arrowFlow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 Z" fill={INK} />
        </marker>
      </defs>
    </svg>
  );
}

function RegionalVisibilityMap() {
  const regions = [
    { label: "Pakistan / Gulf", score: 74 },
    { label: "United Kingdom", score: 41 },
    { label: "United States", score: 28 },
    { label: "Elsewhere", score: 12 },
  ];
  return (
    <svg viewBox="0 0 640 220" className="w-full h-auto" role="presentation">
      {regions.map((r, i) => {
        const x = 30 + i * 155;
        const barH = (r.score / 100) * 120;
        return (
          <g key={r.label}>
            <rect x={x} y="20" width="130" height="140" rx="14" fill="#fafbfd" stroke={INK} strokeWidth="2" />
            <rect x={x + 20} y={150 - barH} width="90" height={barH} rx="6" fill={i === 0 ? VIOLET : "#e4e4e7"} />
            <text x={x + 65} y="175" textAnchor="middle" fontSize="20" fontWeight="900" fill={INK}>
              {r.score}
            </text>
            <text x={x + 65} y="190" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#71717a">
              /100
            </text>
            <text x={x + 65} y="200" textAnchor="middle" fontSize="0" />
          </g>
        );
      })}
      {regions.map((r, i) => {
        const x = 30 + i * 155;
        return (
          <text key={r.label} x={x + 65} y="205" textAnchor="middle" fontSize="12" fontWeight="700" fill={INK}>
            {r.label}
          </text>
        );
      })}
      <text x="320" y="12" textAnchor="middle" fontSize="12" fontWeight="700" fill="#71717a">
        illustrative example: the same product, four markets
      </text>
    </svg>
  );
}

function BeforeAfterSchemaFix() {
  return (
    <svg viewBox="0 0 640 240" className="w-full h-auto" role="presentation">
      {/* Before */}
      <rect x="30" y="40" width="270" height="170" rx="14" fill="#fef2f2" stroke={INK} strokeWidth="2" />
      <text x="165" y="30" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>Before</text>
      <rect x="55" y="65" width="220" height="34" rx="6" fill="#fff" stroke="#fca5a5" strokeWidth="1.5" />
      <text x="65" y="86" fontSize="11" fontFamily="monospace" fill="#71717a">provider: {"{ "}&quot;@id&quot;: &quot;#person&quot; {" }"}</text>
      <circle cx="165" cy="150" r="26" fill="none" stroke="#ef4444" strokeWidth="3" />
      <path d="M150 135 L180 165 M180 135 L150 165" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
      <text x="165" y="195" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#b91c1c">
        dangling reference, no name
      </text>

      {/* After */}
      <rect x="340" y="40" width="270" height="170" rx="14" fill="#f0fdf4" stroke={INK} strokeWidth="2" />
      <text x="475" y="30" textAnchor="middle" fontSize="14" fontWeight="900" fill={INK}>After</text>
      <rect x="365" y="60" width="220" height="46" rx="6" fill="#fff" stroke="#86efac" strokeWidth="1.5" />
      <text x="373" y="76" fontSize="10.5" fontFamily="monospace" fill="#71717a">provider: {"{ "}name: &quot;Muhammad Hamd&quot;,</text>
      <text x="373" y="90" fontSize="10.5" fontFamily="monospace" fill="#71717a">  jobTitle: &quot;...&quot;, url: ... {" }"}</text>
      <circle cx="475" cy="155" r="26" fill="none" stroke="#22c55e" strokeWidth="3" />
      <path d="M462 155 L472 166 L490 143" stroke="#22c55e" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="475" y="200" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#15803d">
        resolves on every page
      </text>
    </svg>
  );
}

export const diagrams: Record<DiagramKey, () => React.ReactElement> = {
  "ranking-vs-citation-gap": RankingVsCitationGap,
  "schema-to-ai-retrieval": SchemaToAiRetrieval,
  "regional-visibility-map": RegionalVisibilityMap,
  "before-after-schema-fix": BeforeAfterSchemaFix,
};
