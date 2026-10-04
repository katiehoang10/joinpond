import Link from "next/link";
import Ripples from "@/components/Ripples";

const steps = [
  {
    title: "Tell us where you are",
    body: "A two-minute sign-up: what you're working on, and what kind of help you want — or can give.",
  },
  {
    title: "Get matched with a peer",
    body: "We pair you with someone a few steps ahead of you on the same path. Not a stranger twenty years out — someone who just did the thing you're trying to do.",
  },
  {
    title: "Meet one-on-one",
    body: "You set the pace: a single conversation, or a standing monthly call. Bring a real question and leave with a next step.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-page items-center gap-8 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.1fr_1fr] md:pt-20">
        <div>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            The right mentor changes everything.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            Pond connects young professionals with peer mentors — people a year or five ahead
            of you who remember exactly what your next step felt like.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/join" className="btn-primary px-6 py-3 text-lg">
              Find a mentor
            </Link>
            <Link href="/join?role=mentor" className="btn-quiet px-6 py-2.5 text-lg">
              Become a mentor
            </Link>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md md:max-w-none">
          <Ripples />
        </div>
      </section>

      {/* Why this exists */}
      <section className="bg-lily">
        <div className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.4fr] md:py-24">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Why Pond exists
          </h2>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
            <p>
              Most mentorship programs assume a mentor has to be ten or twenty years older than
              you. That makes mentors scarce, busy, and a little intimidating to ask.
            </p>
            <p>
              But some of the most useful advice you'll get comes from someone who was in your
              seat recently — who knows which resume line mattered, how to ask for the raise,
              what the first manager conversation actually sounds like.
            </p>
            <p className="font-semibold">
              Pond makes those peer connections on purpose, one-on-one, instead of leaving them
              to luck.
            </p>
          </div>
        </div>
      </section>

      {/* How it works — a real sequence, so it's numbered */}
      <section id="how-it-works" className="scroll-mt-20">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6 md:py-24">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">How it works</h2>
          <ol className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-ink pt-5">
                <span className="font-display text-5xl font-extrabold text-indigo">{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Two paths */}
      <section className="mx-auto max-w-page px-4 pb-16 sm:px-6 md:pb-24">
        <div className="grid overflow-hidden rounded-[2rem] md:grid-cols-2">
          <div className="bg-ink p-8 text-surface sm:p-12">
            <h2 className="font-display text-3xl font-bold">I want a mentor</h2>
            <p className="mt-3 max-w-md leading-relaxed text-surface/80">
              Changing roles, starting out, stuck on a decision? Get matched with someone who
              solved the same problem recently.
            </p>
            <Link
              href="/join"
              className="mt-8 inline-flex rounded-full bg-surface px-6 py-3 font-semibold text-ink hover:bg-lily"
            >
              Find a mentor
            </Link>
          </div>
          <div className="bg-indigo p-8 text-white sm:p-12">
            <h2 className="font-display text-3xl font-bold">I want to mentor</h2>
            <p className="mt-3 max-w-md leading-relaxed text-white/85">
              You don&apos;t need a corner office to be useful. If you&apos;ve figured something
              out, someone a step behind you needs to hear it.
            </p>
            <Link
              href="/join?role=mentor"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-indigo hover:bg-lily"
            >
              Become a mentor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
