// An illustrated example of the first email a mentee sends their mentor,
// built in HTML so it stays crisp, readable, and responsive (not a flat image).
const questions = [
  "What made you decide to leave consulting, and how did you know product was the right move?",
  "What did you do in your first 90 days that helped you get taken seriously?",
  "If you were in my seat right now, what's the one thing you'd do this month?",
];

export default function EmailPreview() {
  return (
    <figure className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-[0_24px_60px_-28px_rgba(16,48,74,0.45)]">
        {/* Window bar */}
        <div className="flex items-center gap-2 border-b border-ink/10 bg-surface px-4 py-3" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-ink/15" />
          <span className="h-3 w-3 rounded-full bg-ink/15" />
          <span className="h-3 w-3 rounded-full bg-ink/15" />
          <span className="ml-3 text-sm font-medium text-ink/60">New message</span>
        </div>

        {/* Headers */}
        <dl className="divide-y divide-ink/10 px-5 text-sm sm:px-7">
          <div className="flex gap-3 py-2.5">
            <dt className="w-16 shrink-0 text-ink/50">From</dt>
            <dd>Jordan Lee</dd>
          </div>
          <div className="flex gap-3 py-2.5">
            <dt className="w-16 shrink-0 text-ink/50">To</dt>
            <dd>Maya Patel</dd>
          </div>
          <div className="flex gap-3 py-2.5">
            <dt className="w-16 shrink-0 text-ink/50">Subject</dt>
            <dd className="font-semibold">Pond intro: consulting → product</dd>
          </div>
        </dl>

        {/* Body */}
        <div className="space-y-4 border-t border-ink/10 px-5 py-6 leading-relaxed sm:px-7">
          <p>Hi Maya,</p>
          <p>
            Thanks for being matched with me on Pond! I&apos;m two years into consulting and
            seriously weighing a move into product — which I hear is exactly the switch you made
            last year.
          </p>
          <p>A few questions I&apos;d love to start with on our call:</p>
          <ol className="space-y-2.5 rounded-xl bg-lily/60 p-4">
            {questions.map((q, i) => (
              <li key={q} className="flex gap-3">
                <span className="font-display font-extrabold text-indigo">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
          <p>Does a 30-minute call next week work? Happy to fit your schedule.</p>
          <p>
            Thanks,
            <br />
            Jordan
          </p>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-sm text-ink/60">
        An example first message. Pond helps you draft the starter questions for your match.
      </figcaption>
    </figure>
  );
}
