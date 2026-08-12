import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Icon } from "@/components/ui/icon";
import { BrossaMark } from "@/components/brossa-mark";
import { Reveal } from "@/components/ui/reveal";
import { site, links } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <Container className="grid items-center gap-12 pb-16 pt-28 md:pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pb-24">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-wine/20 bg-paper-light px-4 py-1.5 text-xs font-medium text-wine">
              <Icon name="sparkle" className="h-3.5 w-3.5" />
              Cocina italiana de autor · Lomas de Zamora
            </span>
            <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
              Hecha en casa,
              <br />
              con <em className="italic text-wine">alma</em> de barrio
              <br />
              y clase.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {site.claim}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href={links.reservas} external size="lg">
                Reservá tu mesa
                <Icon name="arrow" className="h-4 w-4" />
              </CtaLink>
              <CtaLink href="#carta" variant="ghost" size="lg">
                Ver la carta
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-olive/20 pt-6 text-sm text-ink-soft">
              <li className="flex items-center gap-2">
                <span aria-hidden className="flex text-mustard">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4" />
                  ))}
                </span>
                {site.ratings.google.value} en Google
              </li>
              <li className="flex items-center gap-2">
                <Icon name="mansion" className="h-4 w-4 text-wine" />
                Casona de principios de siglo
              </li>
              <li className="flex items-center gap-2">
                <Icon name="icecream" className="h-4 w-4 text-wine" />
                Heladería propia
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-olive/20 bg-paper-light shadow-[0_30px_60px_-30px_rgba(36,27,18,0.35)]">
            <div className="float-slow mx-auto max-w-md p-10 text-wine sm:p-14">
              <BrossaMark className="h-auto w-full" />
            </div>
            <figcaption className="flex items-start gap-2 border-t border-olive/15 bg-paper/60 px-6 py-4 text-xs leading-relaxed text-ink-soft">
              <Icon name="sparkle" className="mt-0.5 h-3.5 w-3.5 flex-none text-mustard" />
              <span>
                Ilustración de tinta roja inspirada en la identidad ilustrada de
                La Taberna (artista original del menú: &ldquo;miguel brossa&rdquo;).
                Reemplazar por la obra real y fotografías de la casona.
              </span>
            </figcaption>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}