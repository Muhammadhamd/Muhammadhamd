import Image from "next/image";

/**
 * A neo-brutalist phone mockup that wraps a portrait app screenshot.
 * Used on case-study cards (small) and detail pages (large) to make mobile
 * projects read as real apps rather than flat images.
 */
export function PhoneFrame({
  src,
  alt,
  width = 210,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 aspect-[9/19.5] rounded-[2rem] border-[6px] border-zinc-950 bg-zinc-950 overflow-hidden shadow-[5px_5px_0px_0px_rgba(24,24,27,1)] ${className}`}
      style={{ width }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-zinc-950 rounded-b-xl z-10" />
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${width}px`}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
