import Image from 'next/image'
import { GrowingCard } from '@/components/growing-card'
import { OffsetButton } from '@/components/offset-button'

const chips = [
  { label: 'Community Gardens', color: 'var(--teal)' },
  { label: 'Holistic Wellness', color: 'var(--yellow)' },
  { label: 'Family Support', color: 'var(--pink)' },
]

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* Left: illustration card */}
        <div className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-pink shadow-[6px_6px_0_0_var(--foreground)]">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-2 top-4 select-none font-display text-[22vw] leading-none tracking-tighter text-foreground/10 lg:text-[10vw]"
          >
            NUWORLD
          </span>
          <div className="relative mt-auto aspect-square w-full">
            <Image
              src="/images/nuworld-character.png"
              alt="NuWorld mascot: a hand-drawn character with green locs, silver glasses, a purple tee and teal jeans, cradling planet Earth"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          <h1 className="text-balance font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-6xl">
            It starts with a seed. It grows into a{' '}
            <span className="text-stroke">world.</span>
          </h1>

          <GrowingCard />

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            A community-centered nonprofit turning overlooked spaces into
            gardens, gardens into healing, and healing into futures — for every
            family that deserves a chance to thrive.
          </p>

          <ul className="flex flex-wrap gap-3">
            {chips.map((chip) => (
              <li
                key={chip.label}
                className="border-2 border-foreground px-4 py-2 font-display text-xs tracking-tight md:text-sm"
                style={{ background: chip.color }}
              >
                {chip.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <OffsetButton href="/menu" color="var(--teal)">
              View Our Menu
            </OffsetButton>
            <a
              href="#mission"
              className="font-display text-sm tracking-widest underline-offset-4 hover:underline"
            >
              DIG IN ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
