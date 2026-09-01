import { FindMe } from '@/components/find-me'
import { Hero } from '@/components/hero'
import { IntroAnimation } from '@/components/intro-animation'
import { Marquee } from '@/components/marquee'
import { Mission } from '@/components/mission'
import { Roots } from '@/components/roots'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function HomePage() {
  return (
    <>
      <IntroAnimation />
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <Roots />
        <Marquee />
        <FindMe />
      </main>
      <SiteFooter />
    </>
  )
}
