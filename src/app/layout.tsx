import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { SmoothScroll } from "@/components/smooth-scroll";  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jatin Kumar — Full Stack Developer",
    template: "%s — Jatin Kumar",
  },
  description:
    "Portfolio of Jatin Kumar, a web developer specializing in Next.js, MERN, and TypeScript.",
  icons: {
    icon: "/j.jpg",
  },
  metadataBase: new URL("https://jatink-portfolio.vercel.app"),

  openGraph: {
    title: "Jatin Kumar — Full Stack Developer",
    description:
      "Portfolio of Jatin Kumar, a web developer specializing in Next.js, MERN, and TypeScript.",
    url: "https://jatink-portfolio.vercel.app",
    siteName: "Jatin Kumar Portfolio",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Jatin Kumar Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jatin Kumar — Full Stack Developer",
    description:
      "Portfolio of Jatin Kumar, a web developer specializing in Next.js, MERN, and TypeScript.",
    images: [
      "/portfolio.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll>
          <ThemeProvider>
            <Header />
            <main className="pt-16">{children}</main>
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
