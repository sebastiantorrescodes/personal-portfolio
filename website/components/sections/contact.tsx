"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";
import SectionHeading from "@/components/layout/section-heading";
import { EMAIL } from "@/lib/constants";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto mt-24 max-w-xl scroll-mt-24 lg:mt-36 lg:max-w-2xl"
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        What&apos;s Next?
      </p>
      <h3 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
        Get In Touch
      </h3>
      <p className="mt-4 max-w-md leading-relaxed text-slate">
        Feel free to reach out! I&apos;m always happy to chat.
      </p>
      <button
        type="button"
        onClick={copyEmail}
        className="group mt-8 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-6 py-3 font-mono text-sm text-accent shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-accent/20"
      >
        {copied ? (
          <>
            <Check size={16} />
            Copied to clipboard
          </>
        ) : (
          <>
            <Mail size={16} />
            Say Hello
          </>
        )}
      </button>
    </section>
  );
}
