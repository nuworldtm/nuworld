'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const words = [
  { text: 'GROW.', color: 'var(--teal)' },
  { text: 'HEAL.', color: 'var(--pink)' },
  { text: 'BUILD.', color: 'var(--yellow)' },
]

const STEP_MS = 520
const LOCKUP_MS = 900
const SLIDE_MS = 700
// Total time the overlay is on screen before it unmounts.
const TOTAL_MS = words.length * STEP_MS + LOCKUP_MS + SLIDE_MS

export function IntroAnimation() {
  // Start hidden; decide on mount whether to play. This avoids any chance of a
  // permanent block during SSR/hydration and lets us skip it after first play.
  const [play, setPlay] = useState(false)
  const [step, setStep] = useState(0)
  const [sliding, setSliding] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    // Only play once per browser session.
    if (typeof window !== 'undefined' && sessionStorage.getItem('nuworld-intro') === 'seen') {
      setDone(true)
      return
    }

    setPlay(true)
    const timers: ReturnType<typeof setTimeout>[] = []

    // Advance the word steps.
    for (let i = 1; i < words.length + 1; i++) {
      timers.push(setTimeout(() => setStep(i), i * STEP_MS))
    }
    // Kick off the slide-up.
    timers.push(setTimeout(() => setSliding(true), words.length * STEP_MS + LOCKUP_MS))
    // Guaranteed unmount — a single master timer, not gated on any animation event.
    timers.push(
      setTimeout(() => {
        sessionStorage.setItem('nuworld-intro', 'seen')
        setDone(true)
      }, TOTAL_MS),
    )

    return () => timers.forEach(clearTimeout)
  }, [])

  if (done || !play) return null

  const showLockup = step >= words.length

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground"
      initial={{ y: 0 }}
      animate={{ y: sliding ? '-100%' : 0 }}
      transition={{ duration: SLIDE_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        {!showLockup && (
          <motion.span
            key={words[step].text}
            className="font-display text-5xl tracking-tight sm:text-7xl md:text-8xl"
            style={{ color: words[step].color }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
          >
            {words[step].text}
          </motion.span>
        )}

        {showLockup && (
          <motion.div
            key="lockup"
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-background sm:h-36 sm:w-36">
              <Image
                src="/images/nuworld-character.png"
                alt=""
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-display text-4xl tracking-tight text-background sm:text-6xl">
              NUWORLD™
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
