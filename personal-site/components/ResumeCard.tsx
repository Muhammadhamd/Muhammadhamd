"use client";

import { Download, FileText } from "lucide-react";

// WhatsApp / LinkedIn style document card: shows a live preview of the resume's
// first page on top, with a filename + download footer below. The preview is
// the actual PDF rendered by the browser (object tag, no toolbar), clipped to a
// thumbnail and made non-interactive so the whole card is one big download
// click. Dependency-free: no PDF rasteriser or image generation needed.
export default function ResumeCard({
  url,
  filename = "Resume.pdf",
  preview = "/resume-preview.jpg",
}: {
  url: string;
  filename?: string;
  preview?: string;
}) {
  return (
    <a
      href={url}
      download={filename}
      target="_blank"
      rel="noopener noreferrer"
      id="btn-download-resume"
      className="block max-w-[78%] overflow-hidden rounded-2xl rounded-tl-sm border-2 border-zinc-950 bg-white shadow-[3px_3px_0px_0px_rgba(124,59,237,1)] transition hover:-translate-y-0.5"
    >
      {/* First-page preview: a pre-rendered image of the resume's top, clipped
          so the name/title header shows like a WhatsApp/LinkedIn doc card. */}
      <div className="relative h-[155px] w-full overflow-hidden border-b-2 border-zinc-950 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={preview}
          alt="Resume preview"
          className="absolute left-0 top-0 w-full select-none object-cover object-top"
        />
        {/* Soft fade so the clipped page bottom looks intentional. */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Footer: file identity + download affordance. */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-[#7c3bed]">
          <FileText className="h-4.5 w-4.5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-bold text-zinc-950">{filename}</p>
          <p className="text-[11px] font-medium text-zinc-500">PDF · tap to download</p>
        </div>
        <Download className="h-4 w-4 shrink-0 text-[#7c3bed]" />
      </div>
    </a>
  );
}
