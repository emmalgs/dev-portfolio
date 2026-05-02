import type { Metadata } from 'next'
import { VT323, Share_Tech_Mono, IM_Fell_English } from 'next/font/google'
import './globals.css'

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt',
})

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
})

const imFellEnglish = IM_Fell_English({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Emma Gerig — Software Engineer',
  description: 'Portfolio of Emma Gerig, full-stack software engineer and artist.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} ${shareTechMono.variable} ${imFellEnglish.variable}`}>
        {children}
      </body>
    </html>
  )
}
