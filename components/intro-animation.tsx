'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const words = [
  { text: 'GROW.', color: 'var(--teal)' },
  { text: 'HEAL.', color: 'var(--pink)' },
  { text: 'BUILD.', color: 'var(--yellow)' },
  { text: 'NUWORLD™', color: 'var(--background)' },
]

export function IntroAnimation() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)

  // step 0..3 -> words, step 4 -> logo lockup, step 5 -> slide up, then unmount
  useEffect(() => {
    if (step < 6) {
      const delay = step < 4 ? 520 : step === 4 ? 900 : 720
      const t = setTimeout(() => setStep((s) => s + 1), delay)
      return () => clearTimeout(t)
    }
    setDone(true)
  }, [step])

  // Hard fallback so the intro can never permanently block the page.
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 5000)
    return () => clearTimeout(t)
  }, [])

  // Unmount synchronously — removal is not gated on any animation event.
  if (done) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground"
      initial={{ y: 0 }}
      animate={step >= 5 ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <AnimatePresence mode="wait">
          {step < 4 && (
            <motion.span
              key={words[step].text}
              className="font-display text-5xl tracking-tight sm:text-7xl md:text-8xl"
              style={{ color: words[step].color }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.32 }}
            >
              {words[step].text}
            </motion.span>
          )}

          {step >= 4 && (
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
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
