import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Al Tamdeen Construction | Dubai Authority Approvals & Construction',
  description: 'Al Tamdeen Construction — Dubai\'s trusted partner for construction, fit-out, MEP services, architectural design, and all Dubai authority approvals including DM, DCD, DEWA, Trakhees, RTA, JAFZA.',
  keywords: 'construction dubai, dubai authority approvals, DM approvals dubai, fit out dubai, MEP services dubai, architectural design dubai, trakhees approvals',
  openGraph: {
    title: 'Al Tamdeen Construction | Building Visions, Delivering Excellence',
    description: 'Comprehensive construction, design, and authority approval solutions in Dubai.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
