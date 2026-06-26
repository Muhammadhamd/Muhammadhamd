export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className={className}>
      <path d="M2 20C10 8 20 2 30 10C40 18 50 12 58 20" stroke="#195DE6" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L13.09 8.26L19 9.27L14.5 13.14L16.18 19.02L12 15.77L7.82 19.02L9.5 13.14L5 9.27L10.91 8.26L12 2Z" fill="#195DE6" opacity="0.25" />
    </svg>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M8 0L10 6L16 8L10 10L8 16L6 10L0 8L6 6L8 0Z" fill="#195DE6" opacity="0.25" />
    </svg>
  );
}

export function Dot({ className = "" }: { className?: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={className}>
      <circle cx="6" cy="6" r="6" fill="#10B981" opacity="0.25" />
    </svg>
  );
}

export function Triangle({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className={className}>
      <path d="M9 0L18 16H0L9 0Z" fill="#195DE6" opacity="0.2" />
    </svg>
  );
}

export function CircleAvatar({ className = "", color = "#195DE6", label = "" }: { className?: string; color?: string; label?: string }) {
  return (
    <div className={"w-14 h-14 rounded-full flex items-center justify-center shadow-md " + className} style={{ backgroundColor: color }}>
      <span className="text-lg font-bold text-white">{label || "👤"}</span>
    </div>
  );
}

export function CharacterPlaceholder({ className = "", variant = 1 }: { className?: string; variant?: number }) {
  const colors = [
    { shirt: "#195DE6", pants: "#0F1B2D", skin: "#F5D6C5", hair: "#3D2B1F" },
    { shirt: "#4A7CF7", pants: "#0F1B2D", skin: "#F5D6C5", hair: "#3D2B1F" },
    { shirt: "#10B981", pants: "#0F1B2D", skin: "#F5D6C5", hair: "#3D2B1F" },
  ];
  const c = colors[(variant - 1) % colors.length];

  return (
    <svg viewBox="0 0 200 280" fill="none" className={className}>
      <ellipse cx="100" cy="270" rx="45" ry="8" fill="#000" opacity="0.06" />
      <rect x="72" y="200" width="18" height="60" rx="4" fill={c.pants} />
      <rect x="110" y="200" width="18" height="60" rx="4" fill={c.pants} />
      <rect x="65" y="120" width="70" height="85" rx="12" fill={c.shirt} />
      <rect x="40" y="130" width="22" height="50" rx="10" fill={c.skin} />
      <rect x="138" y="130" width="22" height="50" rx="10" fill={c.skin} />
      <rect x="42" y="170" width="18" height="20" rx="8" fill={c.pants} />
      <rect x="140" y="170" width="18" height="20" rx="8" fill={c.pants} />
      <rect x="88" y="108" width="24" height="16" rx="4" fill={c.skin} />
      <circle cx="100" cy="75" r="40" fill={c.skin} />
      <path d="M60 70C60 35 140 35 140 70V72H60V70Z" fill={c.hair} />
      <path d="M62 68C64 40 136 40 138 68" fill={c.hair} />
      <ellipse cx="85" cy="72" rx="4" ry="5" fill="#1A1A1A" />
      <ellipse cx="115" cy="72" rx="4" ry="5" fill="#1A1A1A" />
      <path d="M88 88C92 95 108 95 112 88" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
