import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Umair Ul Hassan — Full-Stack Developer | Web, Mobile, SaaS & Applied AI',
    template: '%s | Umair Ul Hassan',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  description:
    'I build full-stack web and mobile applications with TypeScript, React, React Native, Node.js, and Python-based AI systems. My work spans multi-vendor commerce, educational ERP, SaaS platforms, mobile AR, and computer vision.',
  keywords: [
    'Umair Ul Hassan',
    'Full-Stack Developer',
    'React Native',
    'Next.js',
    'Applied AI',
    'Computer Vision',
    'PyTorch',
    'Pakistan Full-Stack Developer',
  ],
  authors: [{ name: 'Umair Ul Hassan' }],
  creator: 'Umair Ul Hassan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Umair Ul Hassan — Full-Stack Developer | Web, Mobile, SaaS & Applied AI',
    description:
      'I build full-stack web and mobile applications with TypeScript, React, React Native, Node.js, and Python-based AI systems.',
    siteName: 'Umair Ul Hassan',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umair Ul Hassan — Full-Stack Developer | Web, Mobile, SaaS & Applied AI',
    description:
      'I build full-stack web and mobile applications with TypeScript, React, React Native, Node.js, and Python-based AI systems.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: 'IUHJ2hdBGo1XhB7E1L-XGtskLc_rxRs0m8cjXc3M8ug',
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
        <meta name="google-site-verification" content="IUHJ2hdBGo1XhB7E1L-XGtskLc_rxRs0m8cjXc3M8ug" />
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
