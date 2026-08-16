import Section, { Heading } from './Section';
import type { Dict } from '@/content';
import { projects, type Project } from '@/content/projects';
import type { Lang } from '@/lib/site';

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11.5px] text-subtle"
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

function Links({ p, t }: { p: Project; t: Dict }) {
  if (!p.repo && !p.live) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line/60 pt-4 font-mono text-[13px]">
      {p.repo && (
        <a
          href={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors hover:text-accent-strong"
        >
          {t.projects.repoLabel} <span aria-hidden>↗</span>
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors hover:text-accent-strong"
        >
          {t.projects.liveLabel} <span aria-hidden>↗</span>
        </a>
      )}
    </div>
  );
}

function Problem({ p, t, lang }: { p: Project; t: Dict; lang: Lang }) {
  return (
    <p className="border-l-2 border-line pl-4 text-[15px] leading-relaxed text-subtle text-pretty">
      <span className="mb-1 block font-mono text-[11px] tracking-[0.08em] uppercase">
        {t.projects.problemLabel}
      </span>
      {p.problem[lang]}
    </p>
  );
}

export default function Projects({ t, lang }: { t: Dict; lang: Lang }) {
  return (
    <Section id="projetos">
      <Heading>{t.projects.heading}</Heading>
      <p className="-mt-6 mb-10 max-w-[42em] text-[17px] text-muted">{t.projects.intro}</p>

      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <li
            key={p.id}
            className={`flex flex-col rounded-xl border border-line bg-surface/40 p-6 transition-colors hover:border-accent/50 sm:p-7 ${
              p.featured ? 'sm:col-span-2' : ''
            }`}
          >
            {p.featured ? (
              <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                <div>
                  <p className="eyebrow mb-4">{p.kind[lang]}</p>
                  <h3 className="mb-4 text-2xl font-semibold tracking-[-0.02em]">{p.title[lang]}</h3>
                  <Problem p={p} t={t} lang={lang} />
                </div>
                <div className="flex flex-col">
                  <p className="mb-6 text-[15px] leading-relaxed text-muted text-pretty">
                    {p.solution[lang]}
                  </p>
                  <div className="mt-auto">
                    <Tags items={p.stack} />
                    <Links p={p} t={t} />
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="eyebrow mb-4">{p.kind[lang]}</p>
                <h3 className="mb-4 text-xl font-semibold tracking-[-0.015em]">{p.title[lang]}</h3>

                <div className="mb-4">
                  <Problem p={p} t={t} lang={lang} />
                </div>

                <p className="mb-6 text-[15px] leading-relaxed text-muted text-pretty">
                  {p.solution[lang]}
                </p>

                <div className="mt-auto">
                  <Tags items={p.stack} />
                  <Links p={p} t={t} />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
