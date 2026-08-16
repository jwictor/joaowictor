import LangToggle from './LangToggle';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Stack from './Stack';
import Contact from './Contact';
import Footer from './Footer';
import JsonLd from './JsonLd';
import { dict } from '@/content';
import type { Lang } from '@/lib/site';

export default function Page({ lang }: { lang: Lang }) {
  const t = dict[lang];

  return (
    <>
      <JsonLd t={t} />
      <LangToggle current={lang} />
      <main id="conteudo">
        <Hero t={t} />
        <About t={t} />
        <Services t={t} />
        <Projects t={t} lang={lang} />
        <Stack t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
