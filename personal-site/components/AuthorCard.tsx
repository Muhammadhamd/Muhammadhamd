import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaMedium, FaXTwitter } from "react-icons/fa6";
import { author } from "@/lib/blog";

const socialLinks = [
  { label: "LinkedIn", href: author.socials.linkedin, Icon: FaLinkedinIn },
  { label: "GitHub", href: author.socials.github, Icon: FaGithub },
  { label: "Medium", href: author.socials.medium, Icon: FaMedium },
  { label: "X", href: author.socials.x, Icon: FaXTwitter },
];

/**
 * Author profile. variant "byline" is the small line under a post title;
 * variant "card" is the full bio block shown at the end of a post / on the index.
 */
export default function AuthorCard({
  variant = "card",
}: {
  variant?: "byline" | "card";
}) {
  if (variant === "byline") {
    return (
      <div className="flex items-center gap-3">
        <Image
          src={author.image}
          alt={author.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full border-2 border-zinc-950 object-cover"
        />
        <div className="leading-tight">
          <p className="font-display text-[14px] font-bold text-zinc-950">
            {author.name}
          </p>
          <p className="text-[12.5px] text-zinc-500">{author.title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border-2 border-zinc-950 bg-[#f7f9ff] p-6 sm:p-7 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <Image
          src={author.image}
          alt={author.name}
          width={84}
          height={84}
          className="h-[84px] w-[84px] shrink-0 rounded-2xl border-2 border-zinc-950 object-cover shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]"
        />
        <div>
          <p className="text-[11px] font-black uppercase tracking-widest text-zinc-400">
            Written by
          </p>
          <h3 className="mt-1 font-display text-[18px] font-extrabold text-zinc-950">
            {author.name}
          </h3>
          <p className="text-[13px] font-bold text-[#7c3bed]">{author.title}</p>
          <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
            {author.longBio}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Link
              href={author.profileUrl}
              className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-950 bg-white px-4 py-2 text-[13px] font-extrabold text-zinc-950 no-underline shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5 transition-all"
            >
              About Muhammad Hamd
            </Link>
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-zinc-950 bg-white text-zinc-700 no-underline shadow-[2px_2px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5 hover:text-[#7c3bed] transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
