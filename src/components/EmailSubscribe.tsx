"use client";

import { useState } from "react";

export default function EmailSubscribe({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    window.location.href = `mailto:yohann@yohannd.com?subject=Subscribe&body=Please subscribe ${email} to Yohann's writing.`;
    setStatus("submitted");
    setEmail("");
  }

  return (
    <div className={className}>
      {status === "submitted" ? (
        <p className="text-sm text-neutral-400">
          Thanks — check your email to confirm.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="your@email.com"
            className="flex-1 border border-neutral-700 bg-transparent px-4 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 outline-none transition-colors focus:border-neutral-400"
          />
          <button
            type="submit"
            className="border border-neutral-200 bg-neutral-100 px-5 py-2.5 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-50 shrink-0"
          >
            Subscribe
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-neutral-500">Enter a valid email address.</p>
      )}
    </div>
  );
}
