export function SiteFooter() {
  return (
    <footer
      id="connect"
      className="relative overflow-hidden border-t-2 border-foreground bg-foreground text-background"
    >
      <div className="mx-auto max-w-7xl px-4 pt-16 md:px-8 md:pt-24">
        <h2 className="text-balance font-display text-5xl leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
          GROW <span className="text-teal">WITH</span> US
          <span className="text-coral">.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 pb-40 md:grid-cols-2 md:pb-56">
          <div>
            <p className="text-lg leading-relaxed">
              Reach out, plant something, or just say hello — every seed counts.
            </p>
            <div className="mt-6 flex flex-col gap-3 font-display text-2xl tracking-tight md:text-3xl">
              <a
                href="mailto:nuworldest@gmail.com"
                className="text-yellow transition-colors hover:text-pink"
              >
                nuworldest@gmail.com
              </a>
              <a
                href="https://instagram.com/nuworldtm?igsi=bG8xNm0yY3hhbTRh&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal transition-colors hover:text-pink"
              >
                @nuworldtm on Instagram
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-sans text-sm leading-relaxed uppercase tracking-widest text-background/70">
              NuWorld™ — A community-centered nonprofit
              <br />
              Cultivating resilience, opportunity &amp; healing
            </p>
          </div>
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 left-0 w-full select-none text-center font-display text-[24vw] leading-none tracking-tighter text-background/5 md:-bottom-12"
      >
        NUWORLD
      </span>
    </footer>
  )
}
