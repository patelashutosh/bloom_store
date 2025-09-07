import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from '@/components/shared/Header'
import { Providers } from '@/components/providers/SessionProvider'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloom AI - Fresh Flowers & Arrangements",
  description: "Discover beautiful flowers and arrangements at Bloom AI. Fresh, local, and delivered with care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Providers>
          <Header />
          <main className="relative">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
