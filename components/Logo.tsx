// Wordmark: two overlapping ripples — two peers whose circles meet.
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="30" height="22" viewBox="0 0 30 22" aria-hidden="true">
        <circle cx="10" cy="11" r="8" fill="none" stroke="currentColor" strokeWidth="2.4" />
        <circle cx="20" cy="11" r="8" fill="none" stroke="#4F46E5" strokeWidth="2.4" />
      </svg>
      <span className="font-display text-2xl font-extrabold tracking-tight">pond</span>
    </span>
  );
}
