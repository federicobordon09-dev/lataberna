"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { menu, menuFooterNote } from "@/lib/menu";
import { formatPrice } from "@/lib/format";
import { links } from "@/lib/site";

export function MenuSection() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];
  const tablistRef = useRef<HTMLDivElement | null>(null);

  function onTabListKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    const buttons = Array.from(
      tablistRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? [],
    );
    const idx = buttons.findIndex((b) => b.id === `tab-${activeId}`);
    let next = -1;
    if (e.key === "ArrowRight") next = (idx + 1) % buttons.length;
    else if (e.key === "ArrowLeft") next = (idx - 1 + buttons.length) % buttons.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = buttons.length - 1;
    if (next < 0) return;
    e.preventDefault();
    const target = menu[next];
    setActiveId(target.id);
    buttons[next]?.focus();
  }

  return (
    <section id="carta" className="scroll-mt-24 border-y hairline bg-paper-light/70 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="La carta"
            align="center"
            title={
              <>
                De la cocina <em className="italic text-wine">a tu mesa</em>
              </>
            }
            intro="Hecho todos los días, en el local. Precios de la carta; consultá el plato del día y la pesca del momento."
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            ref={tablistRef}
            role="tablist"
            aria-label="Categorías de la carta"
            aria-orientation="horizontal"
            onKeyDown={onTabListKeyDown}
            className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-2 sm:justify-center"
          >
            {menu.map((category) => {
              const selected = category.id === activeId;
              return (
                <button
                  key={category.id}
                  role="tab"
                  id={`tab-${category.id}`}
                  tabIndex={selected ? 0 : -1}
                  aria-selected={selected}
                  aria-controls={`panel-${category.id}`}
                  onClick={() => setActiveId(category.id)}
                  className={`h-10 flex-none rounded-full border px-5 text-sm font-medium transition-colors ${
                    selected
                      ? "border-wine bg-wine text-paper-light"
                      : "border-olive/25 text-ink-soft hover:border-wine/50 hover:text-wine"
                  }`}
                >
                  {category.navLabel ?? category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="mx-auto mt-10 max-w-4xl"
          >
            <p className="mx-auto max-w-2xl text-center font-display text-xl italic text-ink-soft">
              {active.intro}
            </p>

            <div className="mt-10 space-y-12">
              {active.groups.map((group) => (
                <div key={group.title ?? group.note}>
                  {group.title ? (
                    <h3 className="mb-5 flex items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-wine">
                      <span className="h-px flex-1 bg-olive/25" />
                      {group.title}
                      <span className="h-px flex-1 bg-olive/25" />
                    </h3>
                  ) : null}

                  {group.items.length > 0 ? (
                    <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-baseline gap-3 text-[0.95rem]"
                        >
                          <span className="font-medium leading-snug text-ink">
                            {item.name}
                            {item.note ? (
                              <span className="ml-2 text-xs italic text-ink-soft">
                                {item.note}
                              </span>
                            ) : null}
                          </span>
                          <span className="price-dots h-0 flex-1" aria-hidden="true" />
                          <span className="flex-none whitespace-nowrap font-display text-base tabular-nums text-wine">
                            {item.price != null
                              ? formatPrice(item.price)
                              : "Consultar"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {group.note ? (
                    <p className="mt-4 text-sm italic text-ink-soft">
                      {group.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>

            {active.highlight ? (
              <p className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 rounded-full border border-olive/25 bg-paper px-5 py-3 text-center text-sm text-ink-soft">
                <Icon name="leaf" className="h-4 w-4 flex-none text-olive" />
                {active.highlight}
              </p>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-wine/20 bg-paper p-8 text-center sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-mustard/40 bg-paper-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft">
              <Icon name="clock" className="h-3.5 w-3.5 text-mustard" />
              Almuerzo · Menú ejecutivo de mediodía
            </span>
            <h3 className="mt-5 font-display text-2xl font-medium text-ink sm:text-3xl">
              El mediodía también tiene su mesa
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-ink-soft">
              Abrimos los mediodías con menú ejecutivo (referencia de nuestros
              precios: $11.700 en efectivo). Consultá la disponibilidad del día
              al reservar.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaLink href={links.reservas} external>
                Reservá tu mesa
                <Icon name="arrow" className="h-4 w-4" />
              </CtaLink>
              <CtaLink href={links.menuPdf} external variant="ghost">
                Menú completo en PDF
              </CtaLink>
              <CtaLink href={links.rappi} external variant="ghost">
                <Icon name="truck" className="h-4 w-4" />
                Delivery por Rappi
              </CtaLink>
            </div>
          </div>
        </Reveal>

        <p className="mt-10 text-center text-xs leading-relaxed text-ink-soft/80">
          {menuFooterNote}
        </p>
      </Container>
    </section>
  );
}