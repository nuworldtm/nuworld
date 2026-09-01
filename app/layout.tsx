import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo_Black, DM_Sans } from 'next/font/google'
import './globals.css'

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'NuWorld™ — It starts with a seed. It grows into a world.',
  description:
    'NuWorld™ is a community-centered nonprofit turning overlooked spaces into gardens, gardens into healing, and healing into futures for every family that deserves a chance to thrive.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F2F2F2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivoBlack.variable} ${dmSans.variable}`}>
      <body className="bg-background antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
