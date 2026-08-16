import type { Metadata, Viewport } from 'next';
import Shell from '@/components/Shell';
import { dict } from '@/content';
import { site } from '@/lib/site';

const t = dict.pt;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: t.meta.title,
  description: t.meta.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    'Protheus',
    'TOTVS',
    'ADVPL',
    'TLPP',
    'integração ERP',
    'API REST',
    'n8n',
    'Node.js',
    'João Wictor',
  ],
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/', en: '/en/' },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    url: site.url,
    siteName: site.name,
    title: t.meta.title,
    description: t.meta.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: t.meta.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.meta.title,
    description: t.meta.description,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#12201b',
  colorScheme: 'dark',
};

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="pt">{children}</Shell>;
}
