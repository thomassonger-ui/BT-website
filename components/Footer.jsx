import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bear-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Bear Team Real Estate &middot;
          Orlando, FL
        </p>
        <div className="flex gap-6">
          <Link href="/join" className="hover:text-bear-gold">
            Careers
          </Link>
          <Link href="/contact" className="hover:text-bear-gold">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
