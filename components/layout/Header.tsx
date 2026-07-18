"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { primaryNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";
import { ExternalIcon, SearchHomesLink, ButtonLink } from "@/components/ui/Button";

/**
 * Sticky site header.
 * - Transparent over page heroes, transitions to solid ink after scrolling.
 * - Accessible dropdown (About) and mobile menu: aria-expanded, Escape to
 *   close, click-outside handling, visible keyboard focus throughout.
 * - Active page state via aria-current.
 * - "Search Homes" is always the centralized external link.
 */
export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const menuId = useId();
  const dropdownId = useId();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Escape + click-outside for the dropdown.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdownOpen(false);
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [dropdownOpen]);

  // Escape closes the mobile menu; lock body scroll while open.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid || mobileOpen ? "bg-ink/95 shadow-lg backdrop-blur" : "bg-gradient-to-b from-ink/70 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-soft-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Bear Team <span className="text-gold-light">Real Estate</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-sm font-medium text-cream/90">
            {primaryNav.map((item) => {
              if (item.external) {
                return (
                  <li key={item.label}>
                    <SearchHomesLink
                      variant="ghost"
                      className="!min-h-0 whitespace-nowrap !px-1 !py-1 !text-cream/90 no-underline hover:!text-gold-light"
                      label="Search Homes"
                    />
                  </li>
                );
              }
              if (item.children) {
                return (
                  <li key={item.label} ref={dropdownRef} className="relative">
                    <button
                      type="button"
                      aria-expanded={dropdownOpen}
                      aria-controls={dropdownId}
                      onClick={() => setDropdownOpen((v) => !v)}
                      className={cn(
                        "flex items-center gap-1 py-1 transition-colors hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                        isActive(item.href) && "text-gold-light",
                      )}
                    >
                      {item.label}
                      <svg aria-hidden="true" viewBox="0 0 12 8" className={cn("h-2 w-3 transition-transform", dropdownOpen && "rotate-180")} fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m1 1 5 5 5-5" />
                      </svg>
                    </button>
                    <ul
                      id={dropdownId}
                      className={cn(
                        "absolute left-0 top-full mt-2 w-52 rounded-md border border-cream/10 bg-ink/95 py-2 shadow-xl backdrop-blur",
                        dropdownOpen ? "block" : "hidden",
                      )}
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className="block px-4 py-2 hover:bg-charcoal hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "border-b-2 border-transparent py-1 transition-colors hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold",
                      isActive(item.href) && "border-gold text-gold-light",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/sell" variant="outline-light" className="!min-h-0 !px-4 !py-2">
            Sell Your Home
          </ButtonLink>
          <SearchHomesLink variant="primary" className="!min-h-0 !px-4 !py-2" />
        </div>

        {/* Mobile: click-to-call + menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "") || ""}`}
            className="rounded-md border border-cream/30 p-2.5 text-cream hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            aria-label={`Call Bear Team Real Estate at ${siteConfig.phone}`}
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
              <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" />
            </svg>
          </a>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-md border border-cream/30 p-2.5 text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="m5 5 10 10M15 5 5 15" />
              </svg>
            ) : (
              <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 5h14M3 10h14M3 15h14" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <nav
        id={menuId}
        aria-label="Mobile"
        className={cn(
          "lg:hidden",
          mobileOpen ? "block max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-cream/10 bg-ink/98 px-6 pb-8 pt-4" : "hidden",
        )}
      >
        <ul className="space-y-1 text-base font-medium text-cream">
          {primaryNav.map((item) =>
            item.external ? (
              <li key={item.label} className="py-2">
                <SearchHomesLink variant="primary" className="w-full" />
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-3 py-3 hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold",
                    isActive(item.href) && "bg-charcoal text-gold-light",
                  )}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="ml-4 border-l border-cream/15 pl-2">
                    {item.children.slice(1).map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-md px-3 py-2.5 text-sm text-cream/80 hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-gold"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ),
          )}
          <li className="pt-3">
            <ButtonLink href="/sell" variant="outline-light" className="w-full">
              Sell Your Home
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
