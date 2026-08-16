import { site } from '@/lib/site';
import type { Dict } from '@/content';

export default function JsonLd({ t }: { t: Dict }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: t.meta.jobTitle,
    description: t.meta.description,
    knowsAbout: ['TOTVS Protheus', 'ADVPL', 'TLPP', 'Node.js', 'API REST', 'n8n'],
    sameAs: [site.linkedin, site.github, site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
