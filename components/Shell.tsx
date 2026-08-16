import type { ReactNode } from 'react';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import type { Lang } from '@/lib/site';
import '@/app/globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };

export default function Shell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={htmlLang[lang]} className={`${display.variable} ${mono.variable}`}>
      <body className="bg-bg text-fg antialiased" suppressHydrationWarning>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-bg"
        >
          {lang === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}
        </a>
        {children}
      </body>
    </html>
  );
}
