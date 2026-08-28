import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { COMPANY } from '@/lib/data';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Ronin Art House — Houston Event Venues',
  description:
    'Two immersive Houston event venues: Ronin Harrisburg in the East End and Ronin 2 in the Downtown Warehouse District.',
  keywords:
    'Ronin Art House, Ronin Harrisburg, Ronin 2, Houston event venue, warehouse district wedding venue, East End Houston venue',
  openGraph: {
    title: `${COMPANY.name} | ${COMPANY.tagline}`,
    description:
      'One brand, two Houston venues — industrial-chic spaces for weddings, events, and celebrations.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* The favicon will be injected automatically via metadata, but in case you want to add manually: */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
