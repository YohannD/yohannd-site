import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yohann Doillon",
    template: "%s | Yohann Doillon",
  },
  description:
    "Founder at 10x Partners. Writing about building AI-first companies and living abroad.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yohannd.com",
    siteName: "Yohann Doillon",
    title: "Yohann Doillon",
    description:
      "Founder at 10x Partners. Writing about building AI-first companies and living abroad.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohann Doillon",
    description:
      "Founder at 10x Partners. Writing about building AI-first companies and living abroad.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
