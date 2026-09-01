'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ReactNode } from 'react'

export function OffsetButton({
  href,
  children,
  color = 'var(--teal)',
  external = false,
}: {
  href: string
  children: ReactNode
  color?: string
  external?: boolean
}) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      className="inline-block"
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: { y: 0 },
        hover: { y: -2 },
        tap: { y: 1 },
      }}
    >
      <motion.div
        variants={{
          rest: { x: 4, y: 4 },
          hover: { x: 7, y: 7 },
          tap: { x: 2, y: 2 },
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 22 }}
        style={{ position: 'absolute', inset: 0, background: 'var(--foreground)', zIndex: 0 }}
        aria-hidden
      />
      <Link
        href={href}
        {...linkProps}
        className="relative z-10 flex min-h-[44px] items-center justify-center border-2 border-foreground px-7 py-3 font-display text-base tracking-tight text-foreground"
        style={{ background: color }}
      >
        {children}
      </Link>
    </motion.div>
  )
}
