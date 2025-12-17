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
  title: "Finance Flow",
  description: "Manage your finances with ease - by asadjn99",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        dmSans.variable, 
        "font-sans bg-background text-white antialiased min-h-screen flex flex-col"
      )}>
        {children}
      </body>
    </html>
  );
}