import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import { Icon, type IconName } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { site, links, mapEmbedUrl, schedule } from "@/lib/site";

const channels: {
  icon: IconName;
  title: string;
  lines: string[];
  action: { label: string; href: string };
  external: boolean;
}[] = [
  {
    icon: "pin",
    title: "Dirección",
    lines: [
      `${site.address.street}`,
      `${site.address.locality}, ${site.address.region}`,
    ],
    action: { label: "Cómo llegar", href: mapLink() },
    external: true,
  },
  {
    icon: "phone",
    title: "Teléfono",
    lines: [site.phone.display],
    action: { label: "Llamar", href: `tel:${site.phone.tel}` },
    external: false,
  },
  {
    icon: "icecream",
    title: "Helado por kilo",
    lines: ["Listo para llevar · pedí por teléfono", site.heladoPhone.display],
    action: { label: `Tel. ${site.phone.display}`, href: `tel:${site.phone.tel}` },
    external: false,
  },
  {
    icon: "gift",
    title: "Bono regalo",
    lines: ["Compra 100% online", "para regalar una experiencia"],
    action: { label: "Comprar bono", href: links.giftCard },
    external: true,
  },
];

function mapLink() {
  return "https://www.google.com/maps/search/La+Taberna+Ramon+Falcon+146+Lomas+de+Zamora";
}

export function Visit() {
  return (
    <section id="visitanos" className="scroll-mt-24 border-y hairline bg-paper-light/70 py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Visitános"
              title={
                <>
                  Tu mesa te <em className="italic text-wine">espera</em>
                </>
              }
              intro="En pleno corazón de Lomas de Zamora, en una casona que ya es parte del barrio."
            />
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-olive/15 bg-olive/10 sm:grid-cols-2">
              {channels.map((c) => (
                <li key={c.title} className="flex flex-col gap-1 bg-paper-light p-6">
                  <span className="flex items-center gap-2 text-wine">
                    <Icon name={c.icon} className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider text-ink">
                      {c.title}
                    </span>
                  </span>
                  {c.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-ink-soft">
                      {line}
                    </p>
                  ))}
                  <a
                    href={c.action.href}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-wine hover:underline"
                  >
                    {c.action.label}
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-8 rounded-2xl border border-olive/15 bg-paper-light p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-ink">
                <Icon name="clock" className="h-5 w-5 text-wine" />
                Horarios
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {schedule.map((s) => (
                  <div key={s.id} className="flex items-start justify-between gap-4 border-b border-dashed border-olive/25 pb-3 last:border-0 last:pb-0">
                    <dt className="font-medium text-ink">{s.day}</dt>
                    <dd className="text-right">
                      <span className="block text-ink">{s.time}</span>
                      <span className="block text-xs text-ink-soft">{s.source}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-ink-soft">
                {site.hoursNote}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <CtaLink href={links.reservas} external>
                  Reservá tu mesa
                  <Icon name="arrow" className="h-4 w-4" />
                </CtaLink>
                <CtaLink href={links.giftCard} external variant="ghost">
                  <Icon name="gift" className="h-4 w-4" />
                  Bono regalo
                </CtaLink>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative h-72 overflow-hidden rounded-3xl border border-olive/15 sm:h-[26rem]">
              <iframe
                title="Mapa — La Taberna, Cnel. Ramón Falcón 146, Lomas de Zamora"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-olive/15 bg-paper p-5 text-sm text-ink-soft">
              <Icon name="pin" className="mt-0.5 h-5 w-5 flex-none text-wine" />
              <p>
                <span className="font-medium text-ink">{site.address.street}</span>
                {" · "}
                {site.address.locality}, {site.address.postalCode}, Argentina.
                Coordenadas aprox. {site.geo.lat.toFixed(4)},{" "}
                {site.geo.lng.toFixed(4)}.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}