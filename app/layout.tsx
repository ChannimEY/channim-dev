import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/lib/site-config'
import "./globals.css";

const siteUrl = new URL(siteConfig.url);
const profileImageUrl = new URL(siteConfig.profileImage, siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'EY Channim | Portfolio',
    template: '%s | EY Channim',
  },
  description: 'EY Channim, also known as Channim, is a software development and web/API security student in Phnom Penh, Cambodia. View projects, skills, learning path, CV, and contact details.',
  keywords: [
    'EY Channim',
    'Channim',
    'Ey Channim',
    'Channim EY',
    'EY Channim portfolio',
    'Channim portfolio',
    'software development student Cambodia',
    'web API security student',
    'penetration testing student',
    'Next.js developer Cambodia',
    'Phnom Penh developer',
    'IT Academy STEP student',
    'ISTAD cybersecurity student',
  ],
  authors: [{ name: 'EY Channim' }],
  creator: 'EY Channim',
  publisher: 'EY Channim',
  applicationName: 'EY Channim Portfolio',
  category: 'Portfolio',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EY Channim | cybersecurity',
    description: 'Portfolio of EY Channim, a software development and web/API security student based in Phnom Penh, Cambodia.',
    url: '/',
    siteName: 'EY Channim Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: profileImageUrl,
        width: 1200,
        height: 630,
        alt: 'EY Channim portfolio profile image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EY Channim | Channim Portfolio',
    description: 'Software development and web/API security student portfolio for EY Channim.',
    images: [profileImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    alternateName: ['Channim', 'Channim EY', 'Ey Channim'],
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    image: profileImageUrl,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phnom Penh',
      addressCountry: 'KH',
    },
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.facebook],
    knowsAbout: [
      'Software Development',
      'Next.js',
      'React',
      'Web Security',
      'API Security',
      'Penetration Testing',
      'OWASP',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
