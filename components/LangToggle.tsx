import Link from 'next/link';
import type { Lang } from '@/lib/site';

const base =
  'rounded-full px-3.5 py-1.5 font-mono text-xs tracking-[0.04em] transition-colors';

export default function LangToggle({ current }: { current: Lang }) {
  const opts: { code: Lang; href: string; label: string }[] = [
    { code: 'pt', href: '/', label: 'PT' },
    { code: 'en', href: '/en/', label: 'EN' },
  ];

  return (
    <nav
      aria-label={current === 'pt' ? 'Idioma' : 'Language'}
      className="fixed top-3.5 right-3.5 z-50 flex gap-1 rounded-full border border-line bg-surface/85 p-1 backdrop-blur-md"
    >
      {opts.map((o) =>
        o.code === current ? (
          <span key={o.code} aria-current="true" className={`${base} bg-accent text-bg`}>
            {o.label}
          </span>
        ) : (
          <Link
            key={o.code}
            href={o.href}
            hrefLang={o.code}
            className={`${base} text-muted hover:text-fg`}
          >
            {o.label}
          </Link>
        ),
      )}
    </nav>
  );
}
