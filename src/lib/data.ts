/**
 * ═══════════════════════════════════════════════════════════════
 *  DATOS DEL LOCAL — PUNTO ÚNICO DE REFERENCIA
 * ═══════════════════════════════════════════════════════════════
 *
 *  Para adaptar esta landing a OTRO negocio local:
 *
 *  1. Copiá este proyecto (o reutilizá como plantilla base).
 *  2. Editá SOLO estos archivos de datos, sin tocar componentes:
 *       - src/lib/site.ts      → identidad, contacto, dirección, links, nav
 *       - src/lib/menu.ts      → la carta / menú por categorías
 *       - src/lib/reviews.ts   → reseñas reales (TripAdvisor / Google)
 *  3. Revisá el resto del código una sola vez buscando textos fijos
 *     (ej. nombre de marca en header/footer/hero) y reemplazalos
 *     por estos datos si corresponde.
 *  4. Reemplazá las ilustraciones y placeholders de foto (brossa-mark,
 *     carteles [Foto]) por los del nuevo negocio.
 *  5. Corregí src/app/opengraph-image.tsx y la metadata del layout.
 *  6. `pnpm build` y deploy a Vercel.
 *
 *  Este archivo NO se edita por negocio: es el índice que documenta
 *  dónde vive cada dato y reexporta todo para un solo import.
 * ═══════════════════════════════════════════════════════════════
 */

// Identidad, contacto, dirección, ratings, links, horarios y navegación
export { site, links, mapEmbedUrl, nav, schedule, openingHours } from "./site";

// Carta completa por categorías (tipos incluidos)
export { menu, menuFooterNote } from "./menu";
export type { MenuItem, MenuGroup, MenuCategory } from "./menu";

// Reseñas reales y fragmentos de elogios
export { reviews, praiseFragments } from "./reviews";
export type { Review } from "./reviews";

// Utilidades de formato de precios
export { formatARS, formatPrice } from "./format";

// Schema.org (Restaurant + Menu + LocalBusiness)
export { restaurantSchema, localBusinessSchema, jsonLd } from "./schema";
