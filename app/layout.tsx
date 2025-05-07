import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ConsentBanner from "./components/ConsentBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan | Fullstack Developer",
  description:
    "Explore the portfolio of Ryan, a versatile fullstack developer crafting intuitive and powerful web applications with cutting-edge technologies.",
  keywords: [
    "fullstack developer",
    "web development",
    "ReactJS",
    "Node.js",
    "PostgreSQL",
    "JavaScript",
    "Next.js",
  ],
  openGraph: {
    title: "Ryan - Transforming Ideas into Digital Reality",
    description:
      "Discover the work of a passionate fullstack developer with 4 years of experience in creating engaging and efficient web solutions.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1673574263974-c609138eaafe?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Ryan's Website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan | Crafting Digital Experiences",
    description:
      "Explore how I turn complex challenges into elegant web solutions. View my portfolio to see innovation in action.",
    images: [
      "https://images.unsplash.com/photo-1673574263974-c609138eaafe?q=80&w=1200&auto=format&fit=crop",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cfToken = process.env.NEXT_PUBLIC_CF_TOKEN
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className="h-[calc(100vh-4rem)]">{children}</div>
        </div>
        <ConsentBanner />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${cfToken}"}`}
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
