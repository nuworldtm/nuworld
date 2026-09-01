import { Reveal } from '@/components/reveal'

export function FindMe() {
  return (
    <section id="find-me" className="border-t-2 border-foreground bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <h2 className="text-balance font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
                WHERE TO <span className="text-stroke">FIND ME!</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                You&apos;ll catch me selling fresh, local veggies around the
                neighborhood — picked that morning and packed to order. Pop-ups
                and market days are on the way, so keep an eye out for where the
                garden lands next.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex min-h-[220px] flex-col justify-between gap-6 border-2 border-foreground bg-teal p-8 shadow-[6px_6px_0_0_var(--foreground)] md:min-h-[280px]">
              <span className="font-sans text-sm font-medium uppercase tracking-widest">
                (Locations)
              </span>
              <span className="font-display text-5xl leading-none tracking-tight md:text-7xl">
                COMING SOON!
              </span>
              <span className="text-pretty text-sm md:text-base">
                Follow along on Instagram to be the first to know where to find
                the garden.
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
