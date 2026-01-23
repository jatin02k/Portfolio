import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
<<<<<<< HEAD
import { SmoothScroll } from "@/components/smooth-scroll";
=======
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a

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
    default: "Jatin Kumar — Web Developer",
    template: "%s — Jatin Kumar",
  },
  description:
    "Portfolio of Jatin Kumar, a web developer specializing in Next.js, MERN, and TypeScript.",
  metadataBase: new URL("https://portfolio-phi-lake-xi9cvdnaw5.vercel.app"),

  openGraph: {
    title: "Jatin Kumar — Web Developer",
    description:
      "Portfolio of Jatin Kumar, a web developer specializing in Next.js, MERN, and TypeScript.",
    url: "https://portfolio-phi-lake-xi9cvdnaw5.vercel.app",
    siteName: "Jatin Kumar Portfolio",
    images: [
      {
        url: "https://portfolio-phi-lake-xi9cvdnaw5.vercel.app/portfolio.png", 
        width: 1200,
        height: 630,
        alt: "Jatin Kumar Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jatin Kumar — Web Developer",
    description:
      "Portfolio of Jatin Kumar, a web developer specializing in Next.js, MERN, and TypeScript.",
    images: [
      "https://portfolio-phi-lake-xi9cvdnaw5.vercel.app/portfolio.png",
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
<<<<<<< HEAD
        <SmoothScroll>
          <ThemeProvider>
            <Header />
            <main className="pt-16">{children}</main>
          </ThemeProvider>
        </SmoothScroll>
=======
        <ThemeProvider>
          <Header />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
>>>>>>> d1a7e1d3a4798862f394c96a630c6e32b448e67a
      </body>
    </html>
  );
}
