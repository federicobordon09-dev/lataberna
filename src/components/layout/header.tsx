"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Icon } from "@/components/ui/icon";
import { nav, links, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const focusables = dialog
      ? Array.from(
          dialog.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        )
      : [];
    focusables[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-olive/15 bg-paper/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="#inicio"
          className="font-display text-xl font-semibold leading-none tracking-tight text-wine"
        >
          La Taberna
          <span className="block text-[0.6rem] font-sans font-medium uppercase tracking-[0.3em] text-ink-soft">
            Ristorante · Lomas de Zamora
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-ink-soft">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-wine"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <CtaLink href={links.reservas} external size="md">
            Reservá tu mesa
            <Icon name="arrow" className="h-4 w-4" />
          </CtaLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-olive/25 text-wine lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" fill="none">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" fill="none">
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
          )}
        </button>
      </Container>

      {open ? (
        <div
          ref={dialogRef}
          id={menuId}
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <Container className="flex flex-col gap-1 border-t border-olive/15 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-lg font-medium text-ink transition-colors hover:bg-wine/5 hover:text-wine"
              >
                {item.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <CtaLink href={links.reservas} external size="lg">
                Reservá tu mesa
                <Icon name="arrow" className="h-4 w-4" />
              </CtaLink>
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-wine/40 text-sm font-semibold text-wine"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone.display}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}