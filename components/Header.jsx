import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-bear-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Bear Team <span className="text-bear-gold">Real Estate</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-bear-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
