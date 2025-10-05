import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';
import './globals.css';

const cabin = Cabin({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'HackMUIC 2026',
  description: 'HackMUIC is a hackathon club at MUIC in Salaya, Mahidol Campus',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cabin.className}>{children}</body>
    </html>
  );
}
