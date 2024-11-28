import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {cn} from '@/lib/utils';
import { ThemeProvider } from "@/components/themeprovider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Doctor Connect",
  description: "A healthcare platform designed to streamline patient registration, appointment scheduling, and medical records.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn ('min-h-screen bg-dark-300 font-sans antialiased')}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
