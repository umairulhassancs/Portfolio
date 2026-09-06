import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Umair Ul Hassan — Full-Stack Engineer & AI Builder',
    template: '%s | Umair Ul Hassan',
  },
  description:
    'Full-Stack Software Engineer building production SaaS platforms, cross-platform mobile ecosystems, and applied AI systems — from database schema to deployed UI.',
  keywords: [
    'Umair Ul Hassan',
    'Full-Stack Engineer',
    'React Native',
    'Next.js',
    'Applied AI',
    'Computer Vision',
    'PyTorch',
    'Pakistan Software Engineer',
  ],
  authors: [{ name: 'Umair Ul Hassan' }],
  creator: 'Umair Ul Hassan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Umair Ul Hassan — Full-Stack Engineer & AI Builder',
    description:
      'Building production SaaS platforms, mobile ecosystems, and applied AI systems.',
    siteName: 'Umair Ul Hassan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umair Ul Hassan — Full-Stack Engineer & AI Builder',
    description:
      'Building production SaaS platforms, mobile ecosystems, and applied AI systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Instrument Serif (display) + JetBrains Mono (code) from Google */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Satoshi (body) from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
