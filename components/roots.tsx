import { Reveal } from '@/components/reveal'

export function Roots() {
  return (
    <section id="roots" className="border-t-2 border-foreground bg-coral">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="font-sans text-sm font-medium uppercase tracking-widest">
            (Why we exist)
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-balance font-display text-2xl leading-tight tracking-tight sm:text-3xl md:text-5xl">
            NuWorld was born from lived experience — the belief that every
            mother, every child, every family deserves hope and a community
            willing to stand beside them.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-pretty text-base leading-relaxed md:text-lg">
            As we grow, so does the vision: direct support for mothers and
            children in crisis — food, clothing, transportation, emergency
            assistance — and one day, a safe shelter where families can find
            stability, dignity, and the tools to rebuild. What began as a dream
            of growing food has become a commitment to growing futures.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
