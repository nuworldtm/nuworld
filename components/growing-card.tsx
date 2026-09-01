import { Flower, Heart, Leaf, Sprout, Star } from '@/components/doodles'

const items = [
  {
    label: 'FOOD',
    copy: 'Fresh community-grown produce',
    color: 'var(--teal)',
    Icon: Sprout,
  },
  {
    label: 'WELLNESS',
    copy: 'Healing through nature + education',
    color: 'var(--yellow)',
    Icon: Flower,
  },
  {
    label: 'FUTURES',
    copy: 'Support for mothers, children & families',
    color: 'var(--pink)',
    Icon: Heart,
  },
]

export function GrowingCard() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border-2 border-foreground bg-card p-6 shadow-[6px_6px_0_0_var(--foreground)] md:p-8">
      {/* scattered garden doodles (desktop) */}
      <Leaf className="pointer-events-none absolute right-6 top-24 hidden h-10 w-10 rotate-12 text-teal md:block" />
      <Star className="pointer-events-none absolute right-10 bottom-10 hidden h-8 w-8 text-yellow md:block" />
      <Flower className="pointer-events-none absolute left-4 bottom-24 hidden h-9 w-9 -rotate-6 text-pink md:block" />

      <div className="flex items-center gap-3">
        <Sprout className="h-7 w-7 text-teal" />
        <h3 className="font-display text-2xl tracking-tight md:text-3xl">
          What We&apos;re Growing
        </h3>
      </div>

      <div className="relative mt-6 flex flex-1 flex-col justify-between gap-6 md:mt-10 md:gap-10">
        {/* hand-drawn vine connecting items (desktop) */}
        <svg
          className="pointer-events-none absolute left-[26px] top-8 hidden h-[calc(100%-4rem)] w-6 text-foreground md:block"
          viewBox="0 0 24 400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M12 0C4 60 20 90 12 150c-8 60 8 90 0 150s8 90 0 100" />
        </svg>

        {items.map(({ label, copy, color, Icon }) => (
          <div key={label} className="relative flex items-center gap-4 md:gap-5">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-foreground md:h-16 md:w-16"
              style={{ background: color }}
            >
              <Icon className="h-7 w-7 text-foreground md:h-8 md:w-8" />
            </div>
            <div>
              <p className="font-display text-lg tracking-tight md:text-2xl">
                {label}
              </p>
              <p className="text-sm text-muted-foreground md:text-base">
                {copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
