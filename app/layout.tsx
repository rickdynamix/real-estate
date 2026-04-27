import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PropEase | Real Estate Marketplace',
  description: 'A modern real estate website built with Next.js for buyers, sellers, and admin workflows.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
