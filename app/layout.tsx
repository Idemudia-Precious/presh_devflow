import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
const inter = localFont({
  src: "./fonts/inter.woff",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 700 700 900",
});
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.woff",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700 700 900",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A better version of StackOverFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
