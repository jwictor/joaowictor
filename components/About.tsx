import Section, { Heading } from './Section';
import type { Dict } from '@/content';

export default function About({ t }: { t: Dict }) {
  return (
    <Section id="sobre">
      <Heading>{t.about.heading}</Heading>

      <div className="max-w-[46em] space-y-5">
        {t.about.paragraphs.map((p, i) => (
          <p key={i} className="text-[17px] leading-relaxed text-muted text-pretty">
            {p}
          </p>
        ))}
      </div>

      <dl className="mt-12 grid gap-6 border-t border-line/60 pt-8 sm:grid-cols-3">
        {t.about.stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block font-mono text-3xl font-medium text-accent">{s.value}</span>
              <span className="mt-1 block text-sm text-subtle">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
