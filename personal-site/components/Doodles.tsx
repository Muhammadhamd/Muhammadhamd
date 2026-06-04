import React from "react";

// Playful hand-drawn doodles using clean SVG vectors

export function DoodleSquiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className={`h-2.5 fill-none stroke-[#7c3bed]/80 stroke-[3.5] stroke-linecap-round ${className}`}
    >
      <path d="M2.5,5.5 C10.5,2.5 18.5,8.5 26.5,5.5 C34.5,2.5 42.5,8.5 50.5,5.5 C58.5,2.5 66.5,8.5 74.5,5.5 C82.5,2.5 90.5,8.5 97.5,5.5" />
    </svg>
  );
}

export function DoodleDoubleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      className={`h-3 fill-none stroke-[#7c3bed] stroke-[2.5] stroke-linecap-round ${className}`}
    >
      <path d="M3,5 C25,2 60,3 97,4" />
      <path d="M7,9 C32,7 68,6 94,8" />
    </svg>
  );
}

export function DoodleStar({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-[#7c3bed] ${className}`}
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      <path d="M12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
    </svg>
  );
}

export function DoodlePlayfulStar({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 fill-[#7c3bed] stroke-[#18181b] stroke-[2] stroke-linejoin-round ${className}`}
    >
      <path d="M12,1.5 L14.8,8.2 L22,8.8 L16.5,13.5 L18.2,20.5 L12,16.8 L5.8,20.5 L7.5,13.5 L2,8.8 L9.2,8.2 Z" />
    </svg>
  );
}

export function DoodleSparkle({ className = "", size = 20 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`fill-[#7c3bed] stroke-[#18181b] stroke-[2] stroke-linecap-round stroke-linejoin-round ${className}`}
    >
      <path d="M12 3 L13.5 9 L19.5 10.5 L13.5 12 L12 18 L10.5 12 L4.5 10.5 L10.5 9 Z" />
    </svg>
  );
}

export function DoodleLoop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 40"
      fill="none"
      className={`stroke-[#18181b] stroke-[2] stroke-linecap-round stroke-linejoin-round ${className}`}
    >
      <path d="M5,35 C15,35 25,30 25,20 C25,10 15,10 15,20 C15,30 35,35 45,25 C50,20 52,15 48,10 C44,5 38,12 35,18" />
    </svg>
  );
}

export function DoodleArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      className={`stroke-[#7c3bed]/80 stroke-[2.5] stroke-linecap-round stroke-linejoin-round ${className}`}
    >
      <path d="M6,10 C18,8 32,15 40,24" />
      <path d="M33,25 L41,25 L40,17" />
    </svg>
  );
}

export function DoodleArrowCurly({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 50"
      fill="none"
      className={`stroke-[#7c3bed] stroke-[2] stroke-linecap-round stroke-linejoin-round ${className}`}
    >
      <path d="M10,10 C15,25 5,45 25,40 C35,37 45,20 40,15 C38,12 28,18 35,28 C40,35 48,32 52,24" />
      <path d="M47,20 L53,24 L53,16" />
    </svg>
  );
}

export function SpeechBubble({
  text,
  className = "",
  orientation = "left",
}: {
  text: string;
  className?: string;
  orientation?: "left" | "right";
}) {
  return (
    <div
      className={`relative bg-[#7c3bed] text-white text-[13px] font-semibold py-2.5 px-4 rounded-2xl shadow-md border-2 border-[#18181b] max-w-[210px] text-center ${className}`}
    >
      {text}
      <div
        className={`absolute bottom-[-10px] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#7c3bed] z-10 ${
          orientation === "left" ? "left-6" : "right-6"
        }`}
      />
      <div
        className={`absolute bottom-[-13px] w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[11px] border-t-[#18181b] ${
          orientation === "left" ? "left-[23px]" : "right-[23px]"
        }`}
      />
    </div>
  );
}

export function DottedPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute pointer-events-none opacity-[0.25] [background-image:radial-gradient(#18181b_1.5px,transparent_1.5px)] [background-size:16px_16px] ${className}`}
    />
  );
}
