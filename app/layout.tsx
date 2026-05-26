import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { StyledComponentsRegistry } from "@/components/StyledComponentsRegistry";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const siteUrl = new URL(siteConfig.url);
const profileImageUrl = new URL(
  siteConfig.profileImage,
  siteUrl
).toString();

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: {
    default: "EY Channim — Software Developer & Cybersecurity Student",
    template: "%s | EY Channim",
  },

  description:
    "EY Channim — a Software Development and Cybersecurity student. Explore projects, technical skills, certifications, learning journey, and contact information.",

  keywords: [
    "EY Channim",
    "Channim",
    "Ey Channim",
    "Channim EY",
    "EY Channim portfolio",
    "software developer Cambodia",
    "cybersecurity student Cambodia",
    "web security student",
    "API security",
    "penetration testing",
    "ethical hacking student",
    "Next.js developer",
    "React developer Cambodia",
    "full stack developer",
    "TypeScript developer",
    "Java developer",
    "Spring Boot developer",
    "Phnom Penh developer",
    "IT student Cambodia",
    "ISTAD student",
    "IT Academy STEP student",
  ],

  authors: [
    {
      name: "EY Channim",
      url: siteConfig.url,
    },
  ],

  creator: "EY Channim",
  publisher: "EY Channim",
  applicationName: "EY Channim Portfolio",

  category: "technology",

  alternates: {
    canonical: siteConfig.url,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "EY Channim Portfolio",

    title: "EY Channim — Software Developer & Cybersecurity Student",

    description:
      "Explore the portfolio of EY Channim featuring web development, cybersecurity, API security, and software engineering projects.",

    images: [
      {
        url: profileImageUrl,
        width: 1200,
        height: 630,
        alt: "EY Channim Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "EY Channim — Software Developer & Cybersecurity Student",

    description:
      "Portfolio showcasing projects, technical skills, cybersecurity learning, and software engineering experience.",

    creator: "@yourTwitterUsername",

    images: [profileImageUrl],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "google-site-verification-code",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: siteConfig.name,

    alternateName: [
      "Channim",
      "Channim EY",
      "Ey Channim",
    ],

    url: siteConfig.url,

    image: profileImageUrl,

    email: siteConfig.email,

    jobTitle: "Software Developer & Cybersecurity Student",

    description:
      "Software Development and Cybersecurity student focused on web development, API security, penetration testing, and modern frontend technologies.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Phnom Penh",
      addressCountry: "Cambodia",
    },

    sameAs: [
      siteConfig.github,
      siteConfig.linkedin,
      siteConfig.facebook,
    ],

    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "IT Academy STEP",
      },
      {
        "@type": "EducationalOrganization",
        name: "ISTAD",
      },
    ],

    knowsAbout: [
      "Software Development",
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Java",
      "Spring Boot",
      "Cybersecurity",
      "Web Security",
      "API Security",
      "Penetration Testing",
      "OWASP",
      "Frontend Development",
      "Backend Development",
    ],
  };

  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
<script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js').catch(() => {});
            }
            window.addEventListener('offline', function() {
              if (window.location.pathname !== '/offline') {
                window.location.href = '/offline';
              }
            });`,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}