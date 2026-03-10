import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: 'John Doe | Security Researcher & Software Developer',
  description: 'Web API penetration testing expert and full-stack developer specializing in building secure, high-performance applications.',
  keywords: ['cybersecurity', 'penetration testing', 'API security', 'web security', 'software developer', 'bug bounty'],
  authors: [{ name: 'John Doe' }],
  creator: 'John Doe',
  openGraph: {
    title: 'John Doe | Security Researcher & Software Developer',
    description: 'Web API penetration testing expert and full-stack developer.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe | Security Researcher & Software Developer',
    description: 'Web API penetration testing expert and full-stack developer.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
