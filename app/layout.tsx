import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const montserrat = Montserrat({ subsets: ['latin'] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
