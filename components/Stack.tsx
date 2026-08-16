import Section, { Heading } from './Section';
import type { Dict } from '@/content';

export default function Stack({ t }: { t: Dict }) {
  return (
    <Section id="stack">
      <Heading>{t.stack.heading}</Heading>

      <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.stack.groups.map((g) => (
          <div key={g.label}>
            <dt className="eyebrow mb-4 border-b border-line pb-2">{g.label}</dt>
            <dd>
              <ul className="space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="text-[15px] text-muted">
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
