import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Multi Step Form Testing',
  description: 'A projet about how to make a multi step form with testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-zinc-900 text-zinc-50 antialiased">
      <body>{children}</body>
    </html>
  )
}
