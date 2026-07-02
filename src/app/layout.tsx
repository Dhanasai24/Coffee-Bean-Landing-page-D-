import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bean & Brew | Premium Specialty Coffee Beans",
    template: "%s | Bean & Brew",
  },
  description: "Discover the world's finest specialty coffee beans. Ethically sourced, expertly roasted, delivered fresh to your door. Experience coffee at its peak.",
  keywords: ["specialty coffee", "coffee beans", "premium coffee", "single origin", "coffee subscription", "fresh roasted"],
  authors: [{ name: "Bean & Brew" }],
  creator: "Bean & Brew",
  publisher: "Bean & Brew",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beanandbrew.com",
    siteName: "Bean & Brew",
    title: "Bean & Brew | Premium Specialty Coffee Beans",
    description: "Discover the world's finest specialty coffee beans. Ethically sourced, expertly roasted, delivered fresh.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bean & Brew - Premium Coffee Beans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bean & Brew | Premium Specialty Coffee Beans",
    description: "Discover the world's finest specialty coffee beans. Ethically sourced, expertly roasted, delivered fresh.",
    images: ["/og-image.jpg"],
    creator: "@beanandbrew",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1310" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}