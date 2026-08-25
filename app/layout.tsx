import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'CDMSD — Center for Disaster Management & Sustainable Development',
    template: '%s — CDMSD',
  },
  description:
    'A registered independent multidisciplinary consulting firm established in Pakistan in 2013, specializing in disaster risk management, resilience, climate change adaptation, WASH, and sustainable development.',
  keywords: [
    'CDMSD Pakistan',
    'Center for Disaster Management and Sustainable Development',
    'disaster management Pakistan',
    'disaster risk reduction Pakistan',
    'climate resilience Pakistan',
    'sustainable development Pakistan',
    'WASH Pakistan',
    'community based disaster risk management Pakistan',
  ],
  metadataBase: new URL('https://cdmsd.org.pk'),
  openGraph: {
    title: 'CDMSD — Center for Disaster Management & Sustainable Development',
    description: 'Building Resilience. Advancing Sustainable Development. Multidisciplinary consulting firm in Pakistan.',
    url: 'https://cdmsd.org.pk',
    siteName: 'CDMSD',
    locale: 'en_PK',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
