// Hero illustration: two sets of ripples spreading from two points and overlapping —
// the moment two peers' circles meet. Animates once on load (see globals.css).
const rings = [28, 58, 92, 130, 172];

export default function Ripples() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="h-auto w-full"
      role="img"
      aria-label="Two sets of ripples on a pond, spreading out and overlapping"
    >
      <g fill="none" strokeWidth="2">
        {rings.map((r, i) => (
          <circle
            key={`a${r}`}
            className="ripple-ring"
            style={{ animationDelay: `${i * 140}ms` }}
            cx="190"
            cy="210"
            r={r}
            stroke="#10304A"
            strokeOpacity={0.85 - i * 0.14}
          />
        ))}
        {rings.map((r, i) => (
          <circle
            key={`b${r}`}
            className="ripple-ring"
            style={{ animationDelay: `${300 + i * 140}ms` }}
            cx="340"
            cy="210"
            r={r}
            stroke="#4F46E5"
            strokeOpacity={0.9 - i * 0.15}
          />
        ))}
      </g>
      {/* the two people at the centers */}
      <circle cx="190" cy="210" r="9" fill="#10304A" />
      <circle cx="340" cy="210" r="9" fill="#4F46E5" />
    </svg>
  );
}
