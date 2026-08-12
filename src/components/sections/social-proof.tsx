import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { site, links } from "@/lib/site";

const items = [
  {
    value: `${site.ratings.google.value}★`,
    label: `${site.ratings.google.count} reseñas en Google`,
    href: "https://www.google.com/maps/search/La+Taberna+Ramon+Falcon+146+Lomas+de+Zamora",
    icon: "star",
  },
  {
    value: `#2`,
    label: "de 152 restaurantes en Lomas de Zamora (TripAdvisor)",
    href: links.tripadvisor,
    icon: "quote",
  },
  {
    value: "20+",
    label: "años en el barrio, desde el año 2000",
    href: "#historia",
    icon: "mansion",
  },
] as const;

export function SocialProof() {
  return (
    <section aria-label="La Taberna en números" className="border-y hairline bg-paper-light/60">
      <Container className="grid divide-y divide-olive/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group flex items-center gap-4 py-6 sm:justify-center sm:px-6 sm:py-8"
          >
            <Icon
              name={item.icon}
              className="h-6 w-6 flex-none text-wine transition-transform group-hover:scale-105"
            />
            <span>
              <span className="block font-display text-2xl font-semibold text-ink">
                {item.value}
              </span>
              <span className="block text-sm text-ink-soft">{item.label}</span>
            </span>
          </a>
        ))}
      </Container>
    </section>
  );
}