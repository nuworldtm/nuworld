import { Reveal } from '@/components/reveal'

const cells = [
  {
    num: '01',
    title: 'PLANT',
    color: 'var(--teal)',
    copy: 'Underused corners of the neighborhood become living gardens — fruits, vegetables, herbs, and flowers grown by the community, for the community.',
  },
  {
    num: '02',
    title: 'NOURISH',
    color: 'var(--yellow)',
    copy: 'Workshops, youth programming, and hands-in-the-dirt education that build food independence, environmental stewardship, and real-life skills.',
  },
  {
    num: '03',
    title: 'HEAL',
    color: 'var(--pink)',
    copy: 'Time with the earth is medicine. We create spaces where people grow together — physically, emotionally, and spiritually.',
  },
]

export function Mission() {
  return (
    <section id="mission" className="border-t-2 border-foreground bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2 className="max-w-4xl text-balance font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
            WE GROW MORE THAN <span className="text-stroke">GARDENS.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-px border-2 border-foreground bg-foreground md:grid-cols-3">
          {cells.map((cell, i) => (
            <Reveal key={cell.num} delay={i * 0.12}>
              <div
                className="flex h-full flex-col gap-4 p-6 md:p-8"
                style={{ background: cell.color }}
              >
                <span className="font-display text-2xl tracking-tight">
                  {cell.num}
                </span>
                <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                  {cell.title}
                </h3>
                <p className="text-pretty leading-relaxed">{cell.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
