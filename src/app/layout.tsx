import type { Metadata, Viewport } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "La Taberna | Restaurante Italiano en Lomas de Zamora — Pastas y Helados Artesanales",
    template: "%s | La Taberna Lomas de Zamora",
  },
  description: site.description,
  keywords: [
    "restaurante italiano Lomas de Zamora",
    "pastas caseras Lomas de Zamora",
    "La Taberna Lomas de Zamora",
    "helado artesanal Lomas de Zamora",
    "helados por kilo Lomas",
    "mejor restaurante zona sur",
    "reservar mesa Lomas de Zamora",
    "menú ejecutivo Lomas de Zamora",
    "cena romántica Lomas de Zamora",
    "mariscos Lomas de Zamora",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "La Taberna — Cocina Italiana de Autor en Lomas de Zamora",
    description:
      "Más de 20 años de tradición en una casona de Lomas. Pastas hechas en casa, mariscos y helados artesanales. Reservá tu mesa.",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Taberna — Cocina Italiana de Autor en Lomas de Zamora",
    description: "Pastas hechas en casa, mariscos y helados artesanales. Reservá tu mesa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "restaurant",
  applicationName: site.name,
  creator: site.name,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2e9d8" },
    { media: "(prefers-color-scheme: dark)", color: "#241b12" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${workSans.variable} antialiased`}
    >
      <head>
        <link rel="canonical" href={site.url} />
        <link rel="manifest" href="/site.webmanifest" />
        <JsonLd />
      </head>
      <body className="flex min-h-svh flex-col">{children}</body>
    </html>
  );
}