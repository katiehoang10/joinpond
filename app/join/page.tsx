import { Suspense } from "react";
import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join Pond",
  description: "Sign up to find a peer mentor or become one.",
};

export default function JoinPage() {
  return (
    <section className="mx-auto grid max-w-page gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1fr_1.5fr] md:py-20">
      <div>
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">Join Pond</h1>
        <p className="mt-4 max-w-sm text-lg leading-relaxed text-ink/80">
          Pond is in its first season. Sign up and we&apos;ll match you by hand while we build
          the network — no fees, no spam.
        </p>
      </div>
      <Suspense>
        <JoinForm />
      </Suspense>
    </section>
  );
}
