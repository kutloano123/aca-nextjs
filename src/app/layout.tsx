import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ACA Next.js",
  description: "A simple Next.js app with routes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Navbar using CSS class */}
        <nav className="navbar">
          <Link href="/Home">Home</Link>
          <Link href="/About">About us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/Hairstyles">HairStyles</Link>
        </nav>

        {/* ✅ Page content */}
        <main className="page-content">{children}</main>

        {/* ✅ Footer using CSS class */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} ACA Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
