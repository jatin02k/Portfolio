import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Jatin Kumar - AI automation & custom software',
  description: 'I build AI-powered workflows, internal tools and custom software that help businesses automate repetitive processes.',
  openGraph: { title: 'Jatin Kumar — AI automation & custom software', description: 'Software that handles the heavy lifting.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
