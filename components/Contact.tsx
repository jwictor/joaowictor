'use client';

import { useState, type FormEvent } from 'react';
import Section, { Heading } from './Section';
import type { Dict } from '@/content';
import { site } from '@/lib/site';

const field =
  'w-full rounded-lg border border-line bg-surface/60 px-3.5 py-3 text-[15px] text-fg placeholder:text-subtle/70 transition-colors hover:border-line focus:border-accent';

export default function Contact({ t }: { t: Dict }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get('nome') ?? '');
    const email = String(f.get('email') ?? '');
    const msg = String(f.get('mensagem') ?? '');

    const subject = t.contact.form.subject.replace('{name}', nome);
    const body = `${msg}\n\n—\n${nome}\n${email}`;

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const links = [
    { label: 'LinkedIn', value: '/in/joao-wictor', href: site.linkedin },
    { label: 'GitHub', value: '@jwictor', href: site.github },
    { label: 'Instagram', value: '@j.wictorr', href: site.instagram },
    { label: 'E-mail', value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <Section id="contato">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <div>
          <Heading>{t.contact.heading}</Heading>
          <p className="mb-8 max-w-[32em] text-[17px] leading-relaxed text-muted text-pretty">
            {t.contact.body}
          </p>

          <ul className="space-y-px overflow-hidden rounded-xl border border-line bg-line">
            {links.map((l) => (
              <li key={l.label} className="bg-bg">
                <a
                  href={l.href}
                  {...(l.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="flex items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-surface"
                >
                  <span className="font-mono text-[13px] tracking-[0.04em] text-subtle uppercase">
                    {l.label}
                  </span>
                  <span className="truncate text-[15px] text-accent">
                    {l.value} <span aria-hidden>↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <a
            href={site.cv}
            className="mt-5 inline-flex items-center gap-2 font-mono text-[13px] text-muted underline underline-offset-4 transition-colors hover:text-accent"
          >
            {t.contact.cvLabel}
          </a>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block">
            <span className="mb-2 block font-mono text-[12px] tracking-[0.06em] text-subtle uppercase">
              {t.contact.form.name}
            </span>
            <input
              name="nome"
              required
              autoComplete="name"
              placeholder={t.contact.form.namePlaceholder}
              className={field}
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-mono text-[12px] tracking-[0.06em] text-subtle uppercase">
              {t.contact.form.email}
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={t.contact.form.emailPlaceholder}
              className={field}
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-mono text-[12px] tracking-[0.06em] text-subtle uppercase">
              {t.contact.form.message}
            </span>
            <textarea
              name="mensagem"
              required
              rows={5}
              placeholder={t.contact.form.messagePlaceholder}
              className={`${field} resize-y`}
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-6 py-3.5 text-[15px] font-semibold text-bg transition-colors hover:bg-accent-strong"
          >
            {t.contact.form.submit}
          </button>

          <p aria-live="polite" className="text-[13px] text-subtle">
            {sent ? t.contact.form.hint : t.contact.form.hint}
          </p>
        </form>
      </div>
    </Section>
  );
}
