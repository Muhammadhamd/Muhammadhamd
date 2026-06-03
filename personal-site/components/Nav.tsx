import Link from "next/link";

const links = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6">
      <nav className="mx-auto mt-4 flex max-w-[1120px] items-center justify-between rounded-full border border-line/80 bg-cream/80 px-4 py-2.5 backdrop-blur-md sm:px-5">
        {/* Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-1 font-display text-[17px] font-extrabold tracking-tight text-ink no-underline"
        >
          Hamd
          <span className="mb-2 inline-block h-1.5 w-1.5 rounded-full bg-coral transition-transform group-hover:scale-150" />
        </Link>

        {/* Links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-[14px] font-medium text-ink-soft no-underline transition-colors hover:bg-white hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:muhammadhamdali572@gmail.com"
          className="rounded-full bg-ink px-4 py-2 text-[13.5px] font-semibold text-cream no-underline transition-transform hover:-translate-y-0.5 sm:px-5"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
