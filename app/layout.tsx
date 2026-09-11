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
  metadataBase: new URL('https://www.umairulhassan.site'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.umairulhassan.site',
    title: 'Umair Ul Hassan — Full-Stack Developer | Web, Mobile, SaaS & Applied AI',
    description:
      'I build full-stack web and mobile applications with TypeScript, React, React Native, Node.js, and Python-based AI systems.',
    siteName: 'Umair Ul Hassan',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Umair Ul Hassan — Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umair Ul Hassan — Full-Stack Developer | Web, Mobile, SaaS & Applied AI',
    description:
      'I build full-stack web and mobile applications with TypeScript, React, React Native, Node.js, and Python-based AI systems.',
    images: ['/og-image.png'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://www.umairulhassan.site/#person',
      name: 'Umair Ul Hassan',
      url: 'https://www.umairulhassan.site',
      image: 'https://www.umairulhassan.site/images/umair-new.png',
      jobTitle: 'Full-Stack Developer',
      description:
        'Full-Stack Developer building web and mobile applications with TypeScript, React, React Native, Node.js, and Python-based AI systems.',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'GIFT University',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gujranwala',
          addressCountry: 'Pakistan',
        },
      },
      sameAs: [
        'https://github.com/umairulhassancs',
        'https://www.linkedin.com/in/umair-ul-hassan-cs/',
      ],
      knowsAbout: [
        'Full-Stack Development',
        'React',
        'Next.js',
        'React Native',
        'Expo',
        'TypeScript',
        'Node.js',
        'FastAPI',
        'Python',
        'PyTorch',
        'Computer Vision',
        'Vision Transformer',
        'Stripe',
        'MongoDB',
        'PostgreSQL',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.umairulhassan.site/#website',
      url: 'https://www.umairulhassan.site',
      name: 'Umair Ul Hassan — Full-Stack Developer',
      description:
        'Production portfolio of Umair Ul Hassan — Full-Stack Developer | Web, Mobile, SaaS & Applied AI.',
      publisher: {
        '@id': 'https://www.umairulhassan.site/#person',
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
