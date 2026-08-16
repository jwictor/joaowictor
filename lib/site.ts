export const site = {
  url: 'https://joaowictor.com.br',
  name: 'João Wictor',
  // TODO: trocar para contato@joaowictor.com.br assim que o Email Routing
  // do Cloudflare estiver configurado (grátis, encaminha para o Gmail).
  email: 'joaowictoroliveira3301@gmail.com',
  linkedin: 'https://www.linkedin.com/in/joao-wictor/',
  instagram: 'https://instagram.com/jwictor',
  github: 'https://github.com/jwictor',
  // TODO: subir o PDF em /public/curriculo-joao-wictor.pdf
  cv: '/curriculo-joao-wictor.pdf',
  /** Vire para true depois de colocar /public/joao.jpg */
  hasPhoto: false,
} as const;

export type Lang = 'pt' | 'en';

export const langHref: Record<Lang, string> = {
  pt: '/',
  en: '/en/',
};
