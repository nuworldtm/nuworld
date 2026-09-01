const phrases = [
  'FRESH FOOD',
  'STRONG ROOTS',
  'REAL HEALING',
  'OUR CULTURE',
  'YOUR PEOPLE',
  'GROWN WITH LOVE',
]

export function Marquee() {
  const row = [...phrases, ...phrases]
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-coral py-4">
      <div className="flex w-max animate-marquee">
        {row.map((phrase, i) => (
          <span
            key={`${phrase}-${i}`}
            className="flex items-center whitespace-nowrap font-display text-2xl tracking-tight md:text-3xl"
          >
            <span className="px-6">{phrase}</span>
            <span className="text-yellow" aria-hidden>
              ✿
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
