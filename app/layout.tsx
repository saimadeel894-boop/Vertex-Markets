import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Vertex Markets - Trade Smarter. Trade Vertex.',
  description: 'Professional trading conditions, institutional-grade technology, and deep liquidity across global markets.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Preload critical images — prevents layout shift */}
        <link rel="preload" as="image" href="/bull.png" />
        <link rel="preload" as="image" href="/platforms-mockup.png" />
        <link rel="preload" as="image" href="/v-logo-3d.png" />
        <link rel="preload" as="image" href="/icon-liquidity.png" />
        <link rel="preload" as="image" href="/icon-execution.png" />
        <link rel="preload" as="image" href="/icon-security.png" />
        <link rel="preload" as="image" href="/icon-conditions.png" />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
