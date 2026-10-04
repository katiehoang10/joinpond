import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const LINKEDIN_URL = "https://www.linkedin.com/in/REPLACE-ME";

export const metadata: Metadata = {
  title: "About — Pond",
  description: "Why Katie started Pond, a peer mentoring network for young professionals.",
};

// ✏️ Katie: your photo is /public/katie-hoang.jpg (square works best),
// and edit the story paragraphs below in your own words.
export default function AboutPage() {
  return (
    <>
      <section className="mx-auto grid max-w-page items-start gap-10 px-4 py-12 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20">
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-[6px] border-lily bg-lily md:sticky md:top-28">
          <Image
            src="/katie-hoang.jpg"
            alt="Katie, founder of Pond"
            fill
            sizes="(min-width: 768px) 24rem, 80vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Hi, I&apos;m Katie.
          </h1>
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            <p className="font-display text-2xl font-semibold leading-snug">
              It takes a village to do most meaningful things — especially as a first-gen
              college graduate.
            </p>
            <p>
              I knew what I didn&apos;t want in a career, and I knew what I did. The best thing
              that happened on my journey was trusting my gut and exploring UX design. Along the
              way, I learned that the qualities I&apos;d built as the oldest child of immigrant
              parents were exactly what tech was looking for.
            </p>
            <p>
              The second best thing was finding mentors — by cold-DMing them on LinkedIn. They
              became pivotal. They gave me confidence, clarity, and the reassurance that a
              career in tech was possible for someone scrappy and willing to figure it out.
            </p>
            <p>
              They remembered what it was like. They knew which questions actually mattered,
              and they had time to answer them. That kind of help shouldn&apos;t depend on who
              you happen to sit next to.
            </p>
            <p>
              Pond is my attempt to make it on purpose: a network where young professionals
              mentor and are mentored by their peers, matched one-on-one by people who care
              about getting the fit right.
            </p>
            <p>
              We&apos;re just getting started, and I&apos;m matching the first members myself.
              If that sounds like something you want in on, I&apos;d love to meet you.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/join" className="btn-primary px-6 py-3 text-lg">
              Join Pond
            </Link>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Katie on LinkedIn (opens in a new tab)"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink/80 text-ink transition-colors hover:bg-ink hover:text-surface"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.84v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14v5.42h-4v-4.8c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.84 1.25-1.84 2.54v4.88h-4v-11z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-lily">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl font-bold">What Pond believes</h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            <li>
              <h3 className="font-display text-xl font-bold">Close beats senior</h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                Someone who just solved your problem often explains it better than someone who
                solved it a decade ago.
              </p>
            </li>
            <li>
              <h3 className="font-display text-xl font-bold">Everyone has something to give</h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                Most members will be a mentee in one area and a mentor in another.
              </p>
            </li>
            <li>
              <h3 className="font-display text-xl font-bold">One-on-one, on purpose</h3>
              <p className="mt-2 leading-relaxed text-ink/80">
                No crowded group chats. Every match is a real introduction between two people.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
