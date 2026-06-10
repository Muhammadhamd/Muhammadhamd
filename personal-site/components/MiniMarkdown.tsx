import React from "react";

// Tiny dependency-free markdown renderer for chat bubbles. The agent sometimes
// emits light markdown (**bold**, *italic*, `code`, links, simple bullet or
// numbered lists). This turns that into real formatting instead of showing the
// raw asterisks. Intentionally minimal: no tables, no images, no HTML pass
// through, so there is no XSS surface (everything becomes React text nodes).

// Inline spans: bold, italic, inline code, and [text](url) links.
function renderInline(text: string, keyBase: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex =
    /\*\*(.+?)\*\*|__(.+?)__|\*(.+?)\*|_(.+?)_|`(.+?)`|\[(.+?)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const key = `${keyBase}-${i++}`;
    if (m[1] !== undefined || m[2] !== undefined) {
      nodes.push(<strong key={key}>{m[1] ?? m[2]}</strong>);
    } else if (m[3] !== undefined || m[4] !== undefined) {
      nodes.push(<em key={key}>{m[3] ?? m[4]}</em>);
    } else if (m[5] !== undefined) {
      nodes.push(
        <code key={key} className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-[0.85em] text-zinc-800">
          {m[5]}
        </code>
      );
    } else if (m[6] !== undefined && m[7] !== undefined) {
      const external = m[7].startsWith("http");
      nodes.push(
        <a
          key={key}
          href={m[7]}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-semibold text-[#7c3bed] underline underline-offset-2"
        >
          {m[6]}
        </a>
      );
    }
    last = regex.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

// Join inline-rendered lines with <br/> for soft line breaks inside a block.
function withBreaks(lines: string[], keyBase: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  lines.forEach((line, idx) => {
    if (idx > 0) out.push(<br key={`${keyBase}-br-${idx}`} />);
    out.push(...renderInline(line, `${keyBase}-l${idx}`));
  });
  return out;
}

export default function MiniMarkdown({ text }: { text: string }) {
  // Safety net: the model is told never to use em dashes but sometimes does.
  // Strip any em dash to a comma so they can never reach the UI.
  const lines = text.replace(/\s*—\s*/g, ", ").split("\n");
  const blocks: React.ReactNode[] = [];
  let para: string[] = [];
  let bullets: string[] = [];
  let ordered: string[] = [];
  let k = 0;

  const flushPara = () => {
    if (!para.length) return;
    blocks.push(
      <p key={`p-${k++}`} className="m-0">
        {withBreaks(para, `p-${k}`)}
      </p>
    );
    para = [];
  };
  const flushBullets = () => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={`ul-${k++}`} className="my-1 list-disc space-y-0.5 pl-4">
        {bullets.map((b, idx) => (
          <li key={idx}>{renderInline(b, `ul-${k}-${idx}`)}</li>
        ))}
      </ul>
    );
    bullets = [];
  };
  const flushOrdered = () => {
    if (!ordered.length) return;
    blocks.push(
      <ol key={`ol-${k++}`} className="my-1 list-decimal space-y-0.5 pl-4">
        {ordered.map((b, idx) => (
          <li key={idx}>{renderInline(b, `ol-${k}-${idx}`)}</li>
        ))}
      </ol>
    );
    ordered = [];
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
    const num = line.match(/^\s*\d+[.)]\s+(.*)$/);
    const heading = line.match(/^\s*#{1,6}\s+(.*)$/);

    if (heading) {
      flushPara();
      flushBullets();
      flushOrdered();
      blocks.push(
        <p key={`h-${k++}`} className="m-0 font-bold">
          {renderInline(heading[1], `h-${k}`)}
        </p>
      );
    } else if (bullet) {
      flushPara();
      flushOrdered();
      bullets.push(bullet[1]);
    } else if (num) {
      flushPara();
      flushBullets();
      ordered.push(num[1]);
    } else if (line.trim() === "") {
      flushPara();
      flushBullets();
      flushOrdered();
    } else {
      flushBullets();
      flushOrdered();
      para.push(line);
    }
  }
  flushPara();
  flushBullets();
  flushOrdered();

  return <div className="space-y-1.5">{blocks}</div>;
}
