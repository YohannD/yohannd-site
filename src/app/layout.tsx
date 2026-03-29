import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yohann Doillon",
    template: "%s | Yohann Doillon",
  },
  description:
    "CCO at 10x Partners. Official Palantir Partner. Building high-impact data products and teams.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yohannd.com",
    siteName: "Yohann Doillon",
    title: "Yohann Doillon",
    description:
      "CCO at 10x Partners. Official Palantir Partner. Building high-impact data products and teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohann Doillon",
    description:
      "CCO at 10x Partners. Official Palantir Partner. Building high-impact data products and teams.",
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
