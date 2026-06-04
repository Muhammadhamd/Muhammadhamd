"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const EMAIL = "muhammadhamdali572@gmail.com";

/**
 * Lightweight client island: builds a prefilled mailto link from the form and
 * opens the visitor's email client. No backend required, works everywhere.
 */
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project inquiry from ${name || "your site"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full bg-white border-2 border-zinc-950 rounded-xl px-4 py-3 text-[14px] text-zinc-900 font-medium placeholder-zinc-400 focus:outline-none focus:border-[#7c3bed] shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className={field}
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className={field}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        className={`${field} min-h-[120px] resize-y`}
        placeholder="What are you trying to build or automate?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-[#7c3bed] text-white font-extrabold text-[15px] px-6 py-3.5 rounded-full border-2 border-zinc-950 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] active:translate-y-0 transition-all cursor-pointer"
      >
        <Send size={16} /> Send message
      </button>
    </form>
  );
}
