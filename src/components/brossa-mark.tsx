import { site } from "@/lib/site";

/**
 * Ilustración de autor en tinta rojo vino, a mano alzada, en el espíritu de la
 * identidad ilustrada de La Taberna. Es una pieza ORIGINAL de la web, no la
 * obra del artista "miguel brossa": debe reemplazarse por la ilustración real
 * del menú cuando el restaurante la disponga (ver local.md §4).
 */
export function BrossaMark({
  className = "h-72 w-72",
  alt = "Ilustración de tinta roja inspirada en la identidad de La Taberna",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      role="img"
      aria-label={alt}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{`Ilustración — ${site.name}`}</title>
      {/* plato */}
      <ellipse cx="300" cy="330" rx="170" ry="46" />
      <path d="M130 330c6 76 76 132 170 132 94 0 164-56 170-132" />
      <path d="M130 330c-30 4-42 22-28 40 12 15 38 18 62 12" />
      <path d="M470 330c30 4 42 22 28 40-12 15-38 18-62 12" />
      {/* tallarines sobre el plato */}
      <path d="M182 306c22-26 44-22 62-4 20 20 44 22 64 0 18-18 38-20 58-8" />
      <path d="M196 292c20-24 40-20 56-4 18 18 38 18 56 0 20-20 44-18 62-4" />
      <path d="M214 276c18-22 38-18 52-2 16 18 36 16 52-2 22-22 42-16 58 0" />
      <path d="M168 320c20 12 40 10 58 0 20-12 44-10 64 2 18 10 40 12 60 0" />
      {/* vapor */}
      <path d="M248 222c-8-18 8-26 2-44-4-12 4-22 0-34" />
      <path d="M308 216c8-16-6-24 0-40 4-12-4-24 0-38" />
      <path d="M360 228c6-14-4-22 2-36 4-12 0-24 4-34" />
      {/* tenedor */}
      <path d="M436 92c6 6 10 16 8 28l-14 66-34 34-10 30" />
      <path d="M446 92c-4 4-10 8-16 16" />
      <path d="M456 84c-6 8-12 14-16 24" />
      <path d="M438 96c6 4 8 10 8 16" />
      {/* albahaca y hojas */}
      <path d="M128 236c-18 10-20 30-8 44 12 12 30 8 38-6 8-16 0-34-30-38Z" />
      <path d="M120 240c8-4 14-2 18 2" />
      <path d="M470 250c20 6 26 26 14 40-12 14-32 10-40-4-8-16 4-34 26-36Z" />
      {/* helado */}
      <path d="M78 470c-20-6-26-26-14-40" />
      <circle cx="74" cy="404" r="30" />
      <path d="M74 434c-6 8-2 18 2 26" />
      <path d="M82 384c-12 4-18 14-16 24" />
      {/* copa de lemoncello */}
      <path d="M520 470l-24-62" />
      <path d="M520 470h-38" />
      <path d="M498 408l-2 22" />
      <path d="M500 398c-12-6-20 0-18 8 2 6 10 8 16 4 6-2 8-6 8-10-2-4-6-6-10-8-4 2-4 6 0 6Z" />
      {/* destellos */}
      <path d="M230 150l6 14 14 6-14 6-6 14-6-14-14-6 14-6Z" />
      <path d="M470 170l5 12 12 5-12 5-5 12-5-12-12-5 12-5Z" />
      <path d="M120 320l4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" />
      <path d="M160 460l5 12 12 5-12 5-5 12-5-12-12-5 12-5Z" />
    </svg>
  );
}