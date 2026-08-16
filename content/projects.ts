import type { Lang } from '@/lib/site';

export type Project = {
  id: string;
  /** Rótulo curto em mono, acima do título. */
  kind: Record<Lang, string>;
  title: Record<Lang, string>;
  /** O problema, em uma frase. É o que prende a leitura. */
  problem: Record<Lang, string>;
  /** O que foi construído. */
  solution: Record<Lang, string>;
  stack: string[];
  repo?: string;
  live?: string;
  /** Ocupa a linha inteira do grid. Use em um projeto só. */
  featured?: boolean;
};

/*
  Regra ao editar: descreva por problema e arquitetura.
  Nada de nome de cliente, endpoint interno, tabela do ERP ou print de produção.
*/
export const projects: Project[] = [
  {
    id: 'api-gateway',
    kind: { pt: 'Arquitetura', en: 'Architecture' },
    title: {
      pt: 'API Gateway corporativo',
      en: 'Corporate API gateway',
    },
    problem: {
      pt: 'Cada sistema se conectava direto no ERP, com credencial própria e contrato próprio. Qualquer mudança quebrava alguém.',
      en: 'Every system connected straight to the ERP, each with its own credentials and its own contract. Any change broke someone.',
    },
    solution: {
      pt: 'Porta única de entrada com OAuth2/JWT, limite de requisição por consumidor, retry com circuit breaker e log estruturado compatível com a LGPD. Documentação OpenAPI para quem integra.',
      en: 'A single entry point with OAuth2/JWT, per-consumer rate limiting, retry with circuit breaker, and structured logging built for Brazil\u2019s data protection law. OpenAPI docs for whoever integrates.',
    },
    stack: ['Node.js', 'Fastify', 'OAuth2 / JWT', 'OpenAPI'],
    featured: true,
  },
  {
    id: 'pesquisa-whatsapp',
    kind: { pt: 'Automação', en: 'Automation' },
    title: {
      pt: 'Pesquisa de satisfação por WhatsApp',
      en: 'WhatsApp satisfaction survey',
    },
    problem: {
      pt: 'A pesquisa de pós-venda era feita à mão, uma ligação por vez, e a resposta não chegava ao CRM.',
      en: 'The post-sale survey was done by hand, one call at a time, and the answers never reached the CRM.',
    },
    solution: {
      pt: 'Fluxo conversacional que faz a pergunta, valida a resposta, repergunta quando vem fora do padrão e grava tudo. A nota final volta para o card do cliente no CRM sem ninguém digitar.',
      en: 'A conversational flow that asks, validates the answer, asks again when it comes back malformed, and stores everything. The final score lands on the customer record in the CRM with no manual entry.',
    },
    stack: ['n8n', 'Gupshup', 'MySQL', 'Bitrix24'],
    repo: 'https://github.com/jwictor/Pesquisa-Cliente',
  },
  {
    id: 'telemedicina',
    kind: { pt: 'Integração', en: 'Integration' },
    title: {
      pt: 'Integração de telemedicina',
      en: 'Telemedicine integration',
    },
    problem: {
      pt: 'Licenças eram liberadas na plataforma parceira sem conferir quantas o contrato realmente cobria — e reprocessamentos geravam duplicidade.',
      en: 'Licences were released on the partner platform without checking how many the contract actually covered \u2014 and reruns created duplicates.',
    },
    solution: {
      pt: 'Serviço que compara os beneficiários elegíveis com o que foi contratado, limita a liberação ao saldo disponível e marca quem já foi enviado, tornando a rotina segura para rodar quantas vezes for preciso.',
      en: 'A service that reconciles eligible members against what was contracted, caps releases at the remaining balance, and flags who was already sent \u2014 making the job safe to run as often as needed.',
    },
    stack: ['TLPP', 'Protheus', 'REST'],
    repo: 'https://github.com/jwictor/Mediquo-Service',
  },
  {
    id: 'bontrack',
    kind: { pt: 'Web', en: 'Web' },
    title: {
      pt: 'Bontrack UTV Service',
      en: 'Bontrack UTV Service',
    },
    problem: {
      pt: 'Uma loja que vende UTV de trezentos mil atendia tudo pelo Instagram: preço, revisão, parcela e disponibilidade viravam uma conversa manual começada do zero, uma por uma.',
      en: 'A dealership selling machines worth a small house handled everything over Instagram: price, servicing, instalments and availability each turned into a manual conversation started from scratch.',
    },
    solution: {
      pt: 'Catálogo com filtro por marca, lugares e faixa de preço, simulador de financiamento, loja com carrinho e formulários de agendamento e avaliação — cada ação termina numa mensagem de WhatsApp já escrita com o contexto. Sem backend: o site prepara a conversa, o vendedor só responde.',
      en: 'A catalogue filtered by brand, seats and price range, a financing simulator, a store with a cart, and booking and trade-in forms \u2014 every action ends in a WhatsApp message already written with the full context. No backend: the site drafts the conversation, the seller just replies.',
    },
    stack: ['React', 'Next.js', 'Cloudflare Pages'],
    live: 'https://bontrack-service.pages.dev/',
  },
  {
    id: 'nia-bike',
    kind: { pt: 'Web', en: 'Web' },
    title: {
      pt: 'Nia Bike',
      en: 'Nia Bike',
    },
    problem: {
      pt: 'Uma bicicletaria de bairro existia só no Instagram: quem procurava por horário ou endereço caía num mapa desatualizado.',
      en: 'A neighbourhood bike shop existed only on Instagram: anyone looking for hours or an address landed on an outdated map.',
    },
    solution: {
      pt: 'Landing page com serviços, horário real e contato direto no WhatsApp, montada para ser compartilhada e carregar rápido em rede móvel.',
      en: 'A landing page with services, real opening hours and a direct WhatsApp link \u2014 built to be shared and to load fast on mobile data.',
    },
    stack: ['Next.js', 'Cloudflare Pages'],
    // TODO: colocar a URL final do projeto no Cloudflare
    live: undefined,
  },
];
