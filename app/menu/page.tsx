import type { Metadata } from 'next'
import { Reveal } from '@/components/reveal'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'The Menu — NuWorld™',
  description:
    'Grown by the community, for the community. Fresh garden harvest bags — peppers, tomatillos, and herbs picked to order.',
}

const bags = [
  {
    tag: 'Fig. 01 — The Weekly',
    name: 'Standard Garden Harvest Bag',
    price: '$35',
    color: 'var(--teal)',
    items: [
      '7 hot peppers',
      '2–3 green peppers',
      '2–3 tomatillos',
      'A small handful of fresh basil leaves',
    ],
    note: null,
  },
  {
    tag: 'Fig. 02 — Build Your Own',
    name: 'Heavier / Custom Bag',
    price: '$40–$55',
    color: 'var(--pink)',
    items: [
      'Everything in the Standard bag',
      'Extra peppers, tomatillos & herbs',
      'Priced by weight & what you add',
    ],
    note: "Tell us what your kitchen needs — we'll pack it fresh.",
  },
]

const extras = [
  { label: '2 green peppers', price: '+$4' },
  { label: '4 green peppers', price: '+$7' },
  { label: '5 hot peppers', price: '+$3' },
  { label: '10 hot peppers', price: '+$5' },
  { label: '3 tomatillos', price: '+$4' },
  { label: '6 tomatillos', price: '+$7' },
  { label: 'Extra mixed handful', price: '+$5' },
]

export default function MenuPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Title */}
        <section className="mx-auto max-w-7xl px-4 pt-10 md:px-8 md:pt-16">
          <h1 className="font-display leading-[0.8] tracking-tighter text-[17.5vw]">
            THE MENU
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Grown by the community, for the community. Every bag is picked fresh
            from our gardens — peppers, tomatillos, and herbs harvested to
            order.
          </p>
        </section>

        {/* Bags */}
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <div className="grid grid-cols-1 gap-px border-2 border-foreground bg-foreground md:grid-cols-2">
            {bags.map((bag, i) => (
              <Reveal key={bag.name} delay={i * 0.12}>
                <div
                  className="flex h-full flex-col gap-6 p-6 md:p-10"
                  style={{ background: bag.color }}
                >
                  <span className="font-sans text-xs font-medium uppercase tracking-widest">
                    {bag.tag}
                  </span>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <h2 className="max-w-xs text-balance font-display text-2xl leading-tight tracking-tight md:text-3xl">
                      {bag.name}
                    </h2>
                    <span className="font-display text-3xl tracking-tight md:text-4xl">
                      {bag.price}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3 border-t-2 border-foreground pt-5">
                    {bag.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base leading-relaxed"
                      >
                        <span className="text-foreground" aria-hidden>
                          ✿
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {bag.note && (
                    <p className="mt-auto border-t-2 border-foreground pt-5 font-display text-sm tracking-tight">
                      {bag.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Extras */}
        <section className="mx-auto max-w-7xl px-4 pb-12 md:px-8 md:pb-16">
          <Reveal>
            <div className="flex items-baseline gap-4">
              <h2 className="font-display text-4xl tracking-tight md:text-5xl">
                EXTRAS
              </h2>
              <span className="font-sans text-sm font-medium uppercase tracking-widest text-muted-foreground">
                (Add to any bag)
              </span>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-px border-2 border-foreground bg-foreground sm:grid-cols-2">
            {extras.map((extra, i) => {
              const isLast = i === extras.length - 1
              const isOdd = extras.length % 2 === 1
              return (
                <div
                  key={extra.label}
                  className={`flex items-center justify-between gap-4 bg-card px-5 py-4 md:px-6 md:py-5 ${
                    isLast && isOdd ? 'sm:col-span-2' : ''
                  }`}
                >
                  <span className="text-base md:text-lg">{extra.label}</span>
                  <span className="font-display tracking-tight text-coral">
                    {extra.price}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Order prompt */}
        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
          <Reveal>
            <div className="border-2 border-foreground bg-yellow p-8 shadow-[6px_6px_0_0_var(--foreground)] md:p-12">
              <h2 className="text-balance font-display text-3xl leading-tight tracking-tight md:text-5xl">
                READY TO PLACE AN ORDER?
              </h2>
              <div className="mt-8 flex flex-col gap-4 font-display text-xl tracking-tight md:flex-row md:gap-10 md:text-2xl">
                <a
                  href="mailto:nuworldest@gmail.com?subject=Garden%20Harvest%20Bag%20Order"
                  className="group inline-flex items-center gap-2 hover:text-coral"
                >
                  Email your order
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href="https://instagram.com/nuworldtm?igsi=bG8xNm0yY3hhbTRh&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 hover:text-coral"
                >
                  DM on Instagram
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
