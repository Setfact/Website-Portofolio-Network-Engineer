import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Calvin Umboh | Network & System Administrator",
  description: "Professional Network Engineer with Medallion for Excellence at LKS Nasional 2024. Specializing in Cisco, MikroTik, Linux, and enterprise network infrastructure.",
  keywords: ["Network Engineer", "System Administrator", "Cisco", "MikroTik", "Linux", "LKS Nasional", "IT Network"],
  authors: [{ name: "Calvin Umboh" }],
  openGraph: {
    title: "Calvin Umboh | Network & System Administrator",
    description: "Professional Network Engineer with Medallion for Excellence at LKS Nasional 2024",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
