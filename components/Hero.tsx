import Image from 'next/image';
import type { Dict } from '@/content';
import { site } from '@/lib/site';

export default function Hero({ t }: { t: Dict }) {
  return (
    <header className="mx-auto w-full max-w-shell px-5 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_0.85fr] md:gap-16">
        <div>
          <p className="eyebrow mb-7 flex items-center gap-2.5">
            <span aria-hidden className="inline-block size-[7px] rounded-full bg-accent" />
            {t.hero.eyebrow}
          </p>

          <h1 className="mb-6 text-[clamp(2.125rem,6vw,3.375rem)] leading-[1.06] font-semibold tracking-[-0.03em] text-pretty">
            {t.hero.headline}
          </h1>

          <p className="mb-9 max-w-[32em] text-lg leading-relaxed text-muted text-pretty">
            {t.hero.lead}
            <strong className="font-medium text-fg">{site.name}</strong>
            {t.hero.leadStrongSuffix}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center rounded-lg bg-accent px-6 py-3.5 text-[15px] font-semibold text-bg transition-colors hover:bg-accent-strong"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center rounded-lg border border-line px-6 py-3.5 text-[15px] font-medium text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/*
          Foto: coloque /public/joao.jpg (quadrada ou 4:5, >= 800px) e mude
          hasPhoto para true em lib/site.ts. Sem foto, mostra a marca "jw"
          — um bloco intencional, não um placeholder pedindo imagem.
        */}
        <div className="order-first aspect-4/5 overflow-hidden rounded-xl border border-line bg-surface md:order-none">
          {site.hasPhoto ? (
            <div className="relative size-full">
              <Image
                src="/joao.jpg"
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover"
              />
            </div>
          ) : (
            <div
              aria-hidden
              className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,var(--color-surface-2),var(--color-surface))]"
            >
              <span className="font-mono text-[clamp(4rem,12vw,7rem)] leading-none font-medium text-accent">
                jw
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
