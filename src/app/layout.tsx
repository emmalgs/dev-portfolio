import type { Metadata } from 'next'
import { VT323, IM_Fell_English } from 'next/font/google'
import './globals.css'

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-console',
})

const imFellEnglish = IM_Fell_English({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Emma Gerig — Software Engineer',
  description: 'Portfolio of Emma Gerig, full-stack software engineer and artist.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${vt323.variable} ${imFellEnglish.variable}`}>
      <body>{children}</body>
    </html>
  )
}
