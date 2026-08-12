import { Container } from "@/components/ui/container";
import { Icon, type IconName } from "@/components/ui/icon";
import { site, links } from "@/lib/site";

const socials: { href: string; label: string; icon: IconName }[] = [
  { href: links.instagram, label: "Instagram", icon: "instagram" },
  { href: links.facebook, label: "Facebook", icon: "facebook" },
  { href: links.linktree, label: "Linktree", icon: "linktree" },
  { href: links.rappi, label: "Rappi", icon: "truck" },
];

const footerColumns: { title: string; items: { label: string; href?: string; external?: boolean }[] }[] = [
  {
    title: "Reservas",
    items: [
      { label: "Reservá tu mesa", href: links.reservas, external: true },
      { label: "Bono regalo / Gift card", href: links.giftCard, external: true },
      { label: "Menú completo (PDF)", href: links.menuPdf, external: true },
      { label: "Delivery por Rappi", href: links.rappi, external: true },
    ],
  },
  {
    title: "El restaurante",
    items: [
      { label: "Nuestra historia", href: "#historia" },
      { label: "La carta", href: "#carta" },
      { label: "Reseñas", href: "#resenas" },
      { label: "Visitános", href: "#visitanos" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper" style={{ backgroundColor: "#1f1810" }}>
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold text-paper">
            La Taberna
          </p>
          <p className="mt-1 text-[0.68rem] uppercase tracking-[0.3em] text-paper/50">
            Ristorante · Lomas de Zamora
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/70">
            {site.tagline}, en el corazón de Lomas de Zamora desde hace más de
            20 años.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper/80 transition-colors hover:border-paper hover:text-paper"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-mustard">
              {col.title}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-mustard">
            Contacto
          </p>
          <ul className="mt-5 space-y-4 text-sm text-paper/80">
            <li className="flex gap-3">
              <Icon name="pin" className="mt-0.5 h-4 w-4 flex-none text-paper/50" />
              <span>
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region}, Argentina
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="mt-0.5 h-4 w-4 flex-none text-paper/50" />
              <a href={`tel:${site.phone.tel}`} className="hover:text-paper">
                {site.phone.display}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="icecream" className="mt-0.5 h-4 w-4 flex-none text-paper/50" />
              <span>Helados por kilo: {site.heladoPhone.display}</span>
            </li>
          </ul>
          <a
            href={`mailto:${site.email}`}
            className="mt-5 inline-block text-sm text-paper/70 hover:text-paper"
          >
            {site.email}
          </a>
        </div>
      </Container>

      <div className="border-t border-paper/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Cocina italiana de
            autor en Lomas de Zamora.
          </p>
          <p>Grupo gastronómico Los W</p>
        </Container>
      </div>
    </footer>
  );
}