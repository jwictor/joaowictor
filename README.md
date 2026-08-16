# joaowictor.com.br

Landing page pessoal em Next.js (App Router) + Tailwind v4, exportada como site
estático e publicada no Cloudflare Pages.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera ./out
```

## Antes de publicar

- [ ] `public/joao.jpg` — foto (4:5, mínimo 800px) e virar `hasPhoto: true` em `lib/site.ts`
- [ ] `content/index.ts` → `about.stats` — trocar os `—` por números reais
- [ ] `content/projects.ts` → `nia-bike.live` — URL do projeto no ar
- [ ] `content/projects.ts` → `bontrack` — trocar o link do `pages.dev` pelo domínio final se o cliente fechar
- [ ] `public/curriculo-joao-wictor.pdf`
- [ ] `lib/site.ts` → `email` — trocar pelo `contato@joaowictor.com.br`
- [ ] Conferir se o handle do Instagram é mesmo `@jwictor`

## Estrutura

```
app/
  (pt)/          -> /        html lang="pt-BR"
  (en)/en/       -> /en/     html lang="en"
```

São dois *root layouts* (padrão de múltiplos root layouts do App Router): cada
rota gera seu próprio HTML, com seu próprio `<title>`, `canonical` e `hreflang`.
Nada de renderizar os dois idiomas e esconder um com `display:none` — o Google
via conteúdo duplicado na mesma URL e a página pesava o dobro.

- `content/index.ts` — todo o texto das duas versões, tipado. Editar copy é aqui.
- `content/projects.ts` — os projetos (problema, solução, stack, links).
- `lib/site.ts` — URLs, handles, e-mail. Um lugar só.
- `app/globals.css` — tokens de cor e tipografia no bloco `@theme` do Tailwind v4.

### Regra ao escrever projeto

Descreva por **problema e arquitetura**. Sem nome de cliente, endpoint interno,
tabela do ERP ou print de produção. Se estiver na dúvida sobre publicar algum
caso do trabalho, confirme com a empresa antes.

## Deploy no Cloudflare Pages

O `next.config.mjs` já está com `output: 'export'` e `images.unoptimized`.

**Não rode `wrangler deploy`.** Ele detecta Next, instala o OpenNext e quebra com
`ENOENT ... pages-manifest.json`, porque o OpenNext espera um build `.next/`
com funções de servidor e aqui a saída é estática.

Use o fluxo de Pages:

1. Dashboard → Workers & Pages → Create → **Pages** → Connect to Git
2. Build command: `npx next build`
3. Build output directory: `out`
4. Custom domain: `joaowictor.com.br`

No Registro.br, aponte os nameservers para os da Cloudflare.

### Depois do deploy

- **Email Routing** (grátis): `contato@joaowictor.com.br` → seu Gmail
- **Web Analytics** (grátis, sem cookie, sem banner LGPD)

## Formulário de contato

Hoje abre o app de e-mail via `mailto:` — funciona no export estático, sem
backend. A limitação é real: em celular sem app de e-mail configurado, não
acontece nada. Por isso os links diretos (LinkedIn, GitHub, e-mail) ficam ao
lado do formulário, não escondidos.

Para receber de verdade no servidor, o caminho é uma Pages Function em
`functions/api/contact.ts` — aí o `output: 'export'` continua valendo, porque a
função roda fora do Next.
