import Link from "next/link";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="bg-depth text-surface">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Logo className="text-surface" />
          <p className="mt-2 max-w-xs text-sm text-surface/70">
            Peer mentoring for people early in their careers.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/join" className="hover:underline">Find a mentor</Link>
          <Link href="/join?role=mentor" className="hover:underline">Become a mentor</Link>
          <a href="mailto:katieehoangg@gmail.com" className="hover:underline">Contact</a>
        </nav>
      </div>
      <p className="mx-auto max-w-page px-4 pb-8 text-xs text-surface/50 sm:px-6">
        © {new Date().getFullYear()} Pond
      </p>
    </footer>
  );
}
