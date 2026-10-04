"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Role = "mentee" | "mentor";

const fields: Record<Role, { name: string; label: string; hint?: string; long?: boolean }[]> = {
  mentee: [
    { name: "workingOn", label: "What are you working on or figuring out?", hint: "e.g. switching from marketing into product, or prepping for my first performance review", long: true },
    { name: "helpNeeded", label: "What kind of help would be most useful?", hint: "e.g. resume feedback, someone to talk through offers with", long: true },
  ],
  mentor: [
    { name: "background", label: "Your background in a sentence", hint: "e.g. two years as a data analyst at a fintech startup, came from a non-CS degree" },
    { name: "topics", label: "What can you help with, and how often?", hint: "e.g. breaking into analytics, salary negotiation — one call a month", long: true },
  ],
};

export default function JoinForm() {
  const params = useSearchParams();
  const router = useRouter();
  const role: Role = params.get("role") === "mentor" ? "mentor" : "mentee";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  function switchRole(next: Role) {
    setStatus("idle");
    setError("");
    router.replace(next === "mentor" ? "/join?role=mentor" : "/join", { scroll: false });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, role }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Your sign-up didn't go through. Try again in a minute.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Your sign-up didn't go through. Try again in a minute.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl bg-lily p-8 sm:p-10">
        <h2 className="font-display text-3xl font-bold">You&apos;re on the list.</h2>
        <p className="mt-3 max-w-md text-lg leading-relaxed">
          {role === "mentor"
            ? "Thanks for offering your time. We'll email you when we have a mentee who's a good fit."
            : "We'll email you when we've found a peer mentor who's a good fit for what you're working on."}
        </p>
      </div>
    );
  }

  const input =
    "mt-2 w-full rounded-xl border-2 border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-indigo focus:outline-none";

  return (
    <div>
      <div role="tablist" aria-label="I want to" className="inline-flex rounded-full bg-ink/10 p-1">
        {(["mentee", "mentor"] as Role[]).map((r) => (
          <button
            key={r}
            role="tab"
            type="button"
            aria-selected={role === r}
            onClick={() => switchRole(r)}
            className="rounded-full px-5 py-2 font-semibold text-ink/70 aria-selected:bg-white aria-selected:text-ink aria-selected:shadow-sm"
          >
            {r === "mentee" ? "Find a mentor" : "Become a mentor"}
          </button>
        ))}
      </div>

      <form key={role} onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="font-semibold">Name</span>
            <input name="name" required autoComplete="name" className={input} />
          </label>
          <label className="block">
            <span className="font-semibold">Email</span>
            <input name="email" type="email" required autoComplete="email" className={input} />
          </label>
        </div>
        {fields[role].map((f) => (
          <label key={f.name} className="block">
            <span className="font-semibold">{f.label}</span>
            {f.long ? (
              <textarea name={f.name} required rows={3} placeholder={f.hint} className={input} />
            ) : (
              <input name={f.name} required placeholder={f.hint} className={input} />
            )}
          </label>
        ))}

        {status === "error" && (
          <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 font-medium text-red-800">
            {error}
          </p>
        )}

        <button type="submit" disabled={status === "sending"} className="btn-primary px-7 py-3 text-lg disabled:opacity-60">
          {status === "sending" ? "Joining…" : "Join Pond"}
        </button>
      </form>
    </div>
  );
}
