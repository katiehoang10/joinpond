import { NextResponse } from "next/server";
import { Resend } from "resend";

import { INDUSTRIES, YEARS_IN_ROLE, NO_PIVOT } from "@/lib/options";

const LABELS: Record<string, string> = {
  industry: "Industry",
  yearsInRole: "Time in current role",
  pivotIndustry: "Wants to switch into",
  workingOn: "Working on / figuring out",
  helpNeeded: "Help needed",
  background: "Background",
  topics: "Topics & availability",
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Your sign-up didn't go through. Try again." }, { status: 400 });
  }

  const role = body.role === "mentor" ? "mentor" : "mentee";
  const name = String(body.name ?? "").trim().slice(0, 200);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const industry = String(body.industry ?? "");
  const yearsInRole = String(body.yearsInRole ?? "");
  const pivotIndustry = String(body.pivotIndustry ?? NO_PIVOT);
  const choicesValid =
    (INDUSTRIES as readonly string[]).includes(industry) &&
    (YEARS_IN_ROLE as readonly string[]).includes(yearsInRole) &&
    (role === "mentor" || pivotIndustry === NO_PIVOT || (INDUSTRIES as readonly string[]).includes(pivotIndustry));

  const extraKeys = role === "mentor" ? ["background", "topics"] : ["workingOn", "helpNeeded"];
  const extras: (readonly [string, string])[] = [
    ["industry", industry],
    ["yearsInRole", yearsInRole],
    ...(role === "mentee" ? [["pivotIndustry", pivotIndustry] as const] : []),
    ...extraKeys.map((k) => [k, String(body[k] ?? "").trim().slice(0, 2000)] as const),
  ];

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !choicesValid || extras.some(([, v]) => !v)) {
    return NextResponse.json({ error: "Fill in every field with a valid email address." }, { status: 400 });
  }

  // Trim stray whitespace/quotes that often sneak in when pasting the key into Vercel
  const apiKey = process.env.RESEND_API_KEY?.trim().replace(/^["']|["']$/g, "");
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Sign-ups aren't connected yet. Email katieehoangg@gmail.com to join." },
      { status: 503 },
    );
  }

  // A shortened key copied from Resend's key list looks like "re_…a1b2" and can never work
  if (/[^\x21-\x7e]/.test(apiKey)) {
    console.error("RESEND_API_KEY contains invalid characters (likely a shortened '…' preview)");
    return NextResponse.json(
      {
        error: "Your sign-up didn't go through. Try again in a minute.",
        detail:
          "Setup issue: the Resend key saved in Vercel is a shortened preview (it contains “…”). Create a new key in Resend and paste the full key.",
      },
      { status: 502 },
    );
  }

  const to = process.env.SIGNUP_NOTIFY_EMAIL || "katieehoangg@gmail.com";
  const from = process.env.SIGNUP_FROM_EMAIL || "Pond <hello@send.pondmentors.com>";
  const roleLabel = role === "mentor" ? "Mentor" : "Mentee";

  const rows = [["Name", name], ["Email", email], ...extras.map(([k, v]) => [LABELS[k], v])]
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;font-weight:600;vertical-align:top">${esc(k)}</td><td style="padding:6px 0">${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New ${roleLabel.toLowerCase()} sign-up: ${name}`,
      html: `<h2 style="font-family:sans-serif">New ${roleLabel} on Pond</h2><table style="font-family:sans-serif;font-size:15px">${rows}</table>`,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    // Key shape only (never the key itself) so a bad paste is easy to spot in Vercel logs
    console.error("Resend failed", {
      reason,
      keyStartsWithRe: apiKey.startsWith("re_"),
      keyLength: apiKey.length,
      from,
      to,
    });
    return NextResponse.json(
      {
        error: "Your sign-up didn't go through. Try again in a minute.",
        // Shown under the error so setup problems are visible without digging through logs
        detail: `Email service said: ${reason}`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
