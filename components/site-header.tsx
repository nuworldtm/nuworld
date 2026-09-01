import Link from 'next/link'

const nav = [
  { label: 'Mission', href: '/#mission' },
  { label: 'Menu', href: '/menu' },
  { label: 'Roots', href: '/#roots' },
  { label: 'Connect', href: '/#connect' },
]

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight md:text-2xl"
        >
          NUWORLD™
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-sans text-sm font-medium uppercase tracking-widest transition-colors hover:text-coral"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
