import type { SVGProps } from 'react'

type DoodleProps = SVGProps<SVGSVGElement>

export function Sprout(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M24 42V22" />
      <path d="M24 26C24 20 19 15 11 15c0 6 5 11 13 11Z" />
      <path d="M24 22c0-6 5-11 13-11 0 6-5 11-13 11Z" />
    </svg>
  )
}

export function Flower(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <circle cx="24" cy="20" r="4" />
      <path d="M24 16c0-5-2-9-2-9M24 16c0-5 2-9 2-9M20.5 18C16 15.5 12 15 12 15M27.5 18C32 15.5 36 15 36 15M20.5 22C16 24.5 12 25 12 25M27.5 22C32 24.5 36 25 36 25" />
      <path d="M24 24v18" />
      <path d="M24 34c-4 0-7-3-7-3M24 30c4 0 7-3 7-3" />
    </svg>
  )
}

export function Heart(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M24 40S8 30 8 19a8 8 0 0 1 16-3 8 8 0 0 1 16 3c0 11-16 21-16 21Z" />
    </svg>
  )
}

export function Leaf(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M40 8C20 8 10 20 10 34c0 0 0 6 0 6M10 40c0-16 12-28 30-32" />
      <path d="M10 40C8 30 12 18 24 12" />
    </svg>
  )
}

export function Star(props: DoodleProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M24 6l4 14 14 4-14 4-4 14-4-14-14-4 14-4 4-14Z" />
    </svg>
  )
}
