import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "FinanceFlow – Smart Crypto Platform",
    template: "%s | FinanceFlow",
  },

  description:
    "FinanceFlow helps you manage crypto assets, track tokens, and earn rewards securely.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "FinanceFlow – Smart Crypto Platform",
    description:
      "Track crypto, manage tokens, and earn rewards with FinanceFlow.",
    url: "https://finance-flow-asad.netlify.app/",
    siteName: "FinanceFlow",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "FinanceFlow Website Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FinanceFlow – Smart Crypto Platform",
    description:
      "Track crypto, manage tokens, and earn rewards with FinanceFlow.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          dmSans.variable,
          "font-sans bg-background text-white antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}
