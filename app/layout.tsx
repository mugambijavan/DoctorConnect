import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300','400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "Doctor Connect",
  description: "A healthcare platform that simplifies patient registration, appointment scheduling, and medical records management with seamless forms and SMS notifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkMode = true; // or some condition that is the same on server and client

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""} style={isDarkMode ? { colorScheme: "dark" } : {}}>
      <body
        className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}> 
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