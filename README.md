# La Taberna Ristorante · Landing

Landing **premium de estilo editorial** para **La Taberna Ristorante** (Cnel. Ramón Falcón 146, Lomas de Zamora, Buenos Aires): cocina italiana de autor hecha en casa, con más de 20 años de historia. Construida como demo presentable para el negocio, con datos reales verificados (dossier `local.md`), **sin datos inventados**.

> 🎨 Estilo: **Editorial** — crema `#F2E9D8` / rojo vino `#9B1B30` / mostaza `#D4A017` / oliva `#6B7A3F`. Tipografías **Fraunces** (display) + **Work Sans** (body).

## Stack

- **Next.js 16.3** (App Router, Turbopack) + **React 19**
- **TypeScript** · **Tailwind CSS v4** (`@theme`)
- **next/font** para Google Fonts · **next/og** para OpenGraph image
- SEO: `sitemap.ts`, `robots.ts`, metadata + **Schema.org** (`Restaurant`, `Menu`, `LocalBusiness`, `AggregateRating`) inyectado vía JSON-LD
- Package manager: **pnpm**

## Estado del proyecto

- ✅ Landing completa y responsiva, demo presentable
- ✅ Datos centralizados en `src/lib` (punto único de referencia)
- ✅ Captions de ilustración/foto reformulados como placeholders estilizados (listo para presentar al cliente)
- ✅ Favicon propio (`src/app/icon.svg`) reemplaza el de la plantilla
- ✅ Push a GitHub: `federicobordon09-dev/lataberna` (branch `master`)
- 🔴 Demo viva: `lataberna-six.vercel.app` (deploy manual; requiere verificar auto-deploy desde GitHub)
- 🔴 **Sin fotos reales todavía**: se usa el `brossa-mark` (SVG) y placeholders de marca. Las fotos reales de la casona se integran al confirmar el proyecto
- 🔴 Dominio `latabernalomas.com.ar` **pendiente de activar/enlazar**. Mientras tanto `site.ts` usa la URL de la demo (`lataberna-six.vercel.app`) para que canonical/sitemap/robots/OG sean válidos

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx            → metadata, fonts, JSON-LD, webmanifest
│  ├─ page.tsx              → orden de secciones de la landing
│  ├─ globals.css           → tokens @theme de la paleta, animaciones
│  ├─ icon.svg              → favicon
│  ├─ opengraph-image.tsx   → imagen OG (next/og)
│  ├─ sitemap.ts · robots.ts
├─ lib/
│  ├─ site.ts               → identidad, contacto, dirección, ratings, links, nav
│  ├─ menu.ts               → carta completa por categorías (tipos incluidos)
│  ├─ reviews.ts            → reseñas reales (TripAdvisor / Google)
│  ├─ schema.ts             → Restaurant + Menu + LocalBusiness JSON-LD
│  ├─ format.ts             → formateo de precios ARS
│  └─ data.ts               → índice/re-export de todos los datos
├─ components/
│  ├─ layout/               → header, footer
│  ├─ sections/             → hero, social-proof, story, menu, reviews, visit, faq, cta-final
│  ├─ ui/                   → container, cta-link, icon, reveal, section-heading, eyebrow
│  ├─ brossa-mark.tsx       → ilustración de marca (SVG)
│  └─ json-ld.tsx
```

## Comandos

```bash
pnpm install        # instalar dependencias
pnpm dev            # servidor de desarrollo (http://localhost:3000)
pnpm build          # build de producción
pnpm start          # servir el build
pnpm lint           # ESLint
```

## Arquitectura de datos

Todo el contenido vive en `src/lib` y se consume desde los componentes sin duplicar textos. Para **reutilizar esta landing como plantilla para otro negocio**, ver las instrucciones en `src/lib/data.ts`.

## Fuentes verificadas

Los datos provienen de fuentes públicas verificadas (agosto 2026): Instagram `@latabernaristorante`, Linktree, menú oficial en Google Drive, CoverManager, TripAdvisor, Facebook, Rappi, carta.menu, Changuito, La Nación, Diario Lomas y LinkedIn del grupo Los W. Detalle completo en `local.md`. Los datos no verificables se marcan explícitamente en el dossier.

## PTAs principales

| Acción | URL |
| --- | --- |
| Reserva online | covermanager.com (módulo `la-taberna-buenosaires`) |
| Bono regalo | covermanager.com (buy_products `la-taberna-buenosaires`) |
| Delivery | Rappi |
| Menú PDF | Google Drive |

## Pendiente / próximos pasos

1. **Sesión de fotos real**: hero (pasta recién servida o salón de la casona), serie de pastas, mariscos/carnes, postres, heladería, BTS, exterior en Falcón 146.
2. Reemplazar `brossa-mark` y captions placeholder por las fotos reales al confirmar el proyecto.
3. **Activar dominio** `latabernalomas.com.ar` y actualizarlo en Vercel + `site.ts` (recordá: el cambio de URL se hace en `src/lib/site.ts`).
4. Revisar/definir horarios oficiales (hoy: según fuentes públicas, en `visit.tsx`).
5. Verificar auto-deploy en Vercel desde el repo de GitHub (último deploy fue manual).
6. Opcional para producción final: WhatsApp Business verificada, menú ejecutivo de mediodía destacado, newsletter.