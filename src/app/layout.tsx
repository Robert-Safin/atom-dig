"use client";
// import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/nav/Navigation";
import { useEffect } from "react";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (!theme) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, []);
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-background min-w-[374px]"
    >
      <body className={`${geistMono.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light" // Optional: you can force 'light' or 'dark' here
          enableSystem={true}
          themes={["light", "dark"]}
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
