import Section, { Heading } from './Section';
import type { Dict } from '@/content';

export default function Services({ t }: { t: Dict }) {
  return (
    <Section id="servicos">
      <Heading>{t.services.heading}</Heading>

      <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {t.services.items.map((s) => (
          <li key={s.title} className="bg-bg p-6 sm:p-7">
            <p className="eyebrow mb-4">{s.kind}</p>
            <h3 className="mb-3 text-lg font-semibold tracking-[-0.01em]">{s.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted text-pretty">{s.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
