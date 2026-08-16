import { site } from '@/lib/site';
import type { Dict } from '@/content';

export default function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex w-full max-w-shell flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-[13px] text-subtle sm:px-8">
        <span>joaowictor.com.br</span>
        <span>
          {t.footer.rights} · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
