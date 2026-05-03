import type { Metadata } from 'next'
import { DotGothic16, Archivo_Narrow } from 'next/font/google'
import './globals.css'

const dotGothic = DotGothic16({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-console',
})

const archivoNarrow = Archivo_Narrow({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Emma Gerig — Software Engineer',
  description: 'Portfolio of Emma Gerig, full-stack software engineer and artist.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dotGothic.variable} ${archivoNarrow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
