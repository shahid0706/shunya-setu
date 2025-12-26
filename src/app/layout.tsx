import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { ThemeProvider } from '@/providers/theme-provider';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Shunya Setu',
  description: 'A comprehensive platform for digital literacy and learning',
  keywords: [
    'digital literacy',
    'learning platform',
    'education',
    'online courses',
    'skill development',
  ],
  authors: [
    {
      name: 'Shunya Setu',
      url: 'https://shunya-setu.com',
    },
  ],
  creator: 'Shunya Setu Team',
  publisher: 'Shunya Setu',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shunya-setu.com',
    siteName: 'Shunya Setu',
    title: 'Shunya Setu',
    description: 'A comprehensive platform for digital literacy and learning',
    images: [
      {
        url: 'https://shunya-setu.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shunya Setu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shunya Setu',
    description: 'A comprehensive platform for digital literacy and learning',
    images: ['https://shunya-setu.com/twitter-image.png'],
    creator: '@shunya_setu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Shunya Setu',
  },
  appLinks: {
    ios: [
      {
        app_id: '123456789.com.shunya-setu',
        app_name: 'Shunya Setu',
        url: 'https://shunya-setu.com',
      },
    ],
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
