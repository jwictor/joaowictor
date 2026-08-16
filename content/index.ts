import type { Lang } from '@/lib/site';

export type Dict = {
  meta: {
    title: string;
    description: string;
    jobTitle: string;
  };
  nav: { label: string; alt: string };
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    leadStrongSuffix: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
  };
  about: {
    heading: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  services: {
    heading: string;
    items: { kind: string; title: string; body: string }[];
  };
  projects: {
    heading: string;
    intro: string;
    problemLabel: string;
    repoLabel: string;
    liveLabel: string;
  };
  stack: {
    heading: string;
    groups: { label: string; items: string[] }[];
  };
  contact: {
    heading: string;
    body: string;
    cvLabel: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      hint: string;
      /** Use {name} como marcador — trocado no cliente. */
      subject: string;
    };
  };
  footer: { rights: string };
};

const pt: Dict = {
  meta: {
    title: 'João Wictor — Integrações e APIs para TOTVS Protheus',
    description:
      'Desenvolvedor de integrações ERP. Construo APIs em TLPP/ADVPL, automações e aplicações web que fazem o Protheus conversar com o resto da empresa.',
    jobTitle: 'Desenvolvedor de integrações ERP',
  },
  nav: { label: 'Idioma', alt: 'Read in English' },
  hero: {
    eyebrow: 'Desenvolvedor de integrações ERP',
    headline: 'Todo ERP vira gargalo quando não conversa com o resto da empresa.',
    lead: 'Meu trabalho é fazer o Protheus conversar. Sou ',
    leadStrongSuffix:
      ' — construo APIs em TLPP/ADVPL, integrações entre sistemas e aplicações web que tiram a planilha do meio do caminho.',
    ctaPrimary: 'Vamos conversar',
    ctaSecondary: 'Ver projetos',
    photoAlt: 'João Wictor',
  },
  about: {
    heading: 'Sobre',
    paragraphs: [
      'Trabalho transformando o TOTVS Protheus de sistema fechado em plataforma integrada.',
      'Na prática: exponho dados que estavam presos no ERP — clientes, contratos, beneficiários — para o resto da operação usar. Escrevo APIs REST em TLPP/ADVPL, conecto sistemas que não foram feitos para se falar e desenvolvo o que falta em Node.js e TypeScript.',
      'Comecei no suporte e aprendi o ERP por dentro antes de programar nele. É justamente isso que faz diferença: entendo o processo antes de escrever a primeira linha.',
    ],
    // TODO: trocar por números que você consiga defender numa conversa.
    stats: [
      { value: '4+', label: 'anos na área' },
      { value: '—', label: 'integrações em produção' },
      { value: '—', label: 'sistemas conectados' },
    ],
  },
  services: {
    heading: 'Serviços',
    items: [
      {
        kind: 'Integração',
        title: 'Integrações com o Protheus',
        body: 'APIs REST em TLPP/ADVPL que expõem clientes, contratos e compras para e-commerce, BI, portais ou qualquer sistema que precise do dado.',
      },
      {
        kind: 'Desenvolvimento',
        title: 'Aplicações sob medida',
        body: 'Painéis, portais e sistemas internos em Node.js, TypeScript e MySQL — feitos para conversar com o que a empresa já usa.',
      },
      {
        kind: 'Automação',
        title: 'Automação de processo',
        body: 'Aquele relatório exportado à mão toda segunda-feira vira rotina automática. Menos planilha, menos retrabalho, menos erro de digitação.',
      },
    ],
  },
  projects: {
    heading: 'Projetos',
    intro: 'Cinco problemas reais e o que foi construído para resolver cada um.',
    problemLabel: 'O problema',
    repoLabel: 'Código',
    liveLabel: 'Ver no ar',
  },
  stack: {
    heading: 'Stack',
    groups: [
      { label: 'ERP', items: ['ADVPL', 'TLPP', 'TOTVS Protheus'] },
      { label: 'Backend', items: ['Node.js', 'TypeScript', 'Fastify', 'APIs REST', 'OAuth2 / JWT'] },
      { label: 'Dados e automação', items: ['MySQL', 'n8n', 'Docker'] },
      { label: 'Front-end', items: ['React', 'Next.js', 'Angular'] },
    ],
  },
  contact: {
    heading: 'Tem um sistema que não conversa com o outro?',
    body: 'Me conta o problema em duas linhas. Respondo em até 24h — e se não for comigo, te digo com quem é.',
    cvLabel: 'Baixar currículo (PDF)',
    form: {
      name: 'Nome',
      namePlaceholder: 'Como te chamo?',
      email: 'E-mail',
      emailPlaceholder: 'voce@empresa.com',
      message: 'O que você precisa',
      messagePlaceholder: 'Ex: preciso puxar os pedidos do Protheus para o nosso e-commerce.',
      submit: 'Enviar mensagem',
      hint: 'Abre seu app de e-mail com a mensagem pronta.',
      subject: 'Contato do site — {name}',
    },
  },
  footer: { rights: 'João Wictor' },
};

const en: Dict = {
  meta: {
    title: 'João Wictor — ERP integrations and APIs for TOTVS Protheus',
    description:
      'ERP integration developer. I build TLPP/ADVPL APIs, automations and web apps that make Protheus talk to the rest of the business.',
    jobTitle: 'ERP integration developer',
  },
  nav: { label: 'Language', alt: 'Ler em português' },
  hero: {
    eyebrow: 'ERP integration developer',
    headline: 'An ERP becomes a bottleneck the moment it stops talking to the rest of the company.',
    lead: 'My job is making Protheus talk. I am ',
    leadStrongSuffix:
      ' — I build TLPP/ADVPL APIs, system integrations and web apps that take the spreadsheet out of the process.',
    ctaPrimary: 'Let us talk',
    ctaSecondary: 'See projects',
    photoAlt: 'João Wictor',
  },
  about: {
    heading: 'About',
    paragraphs: [
      'I turn TOTVS Protheus from a closed system into an integrated platform.',
      'In practice: I unlock data trapped inside the ERP — customers, contracts, members — so the rest of the business can use it. REST APIs in TLPP/ADVPL, integrations between systems never meant to talk, and whatever is missing built in Node.js and TypeScript.',
      'I started in support and learned the ERP from the inside before writing code for it. That is exactly the edge: I understand the process before the first line.',
    ],
    stats: [
      { value: '4+', label: 'years in the field' },
      { value: '—', label: 'integrations in production' },
      { value: '—', label: 'systems connected' },
    ],
  },
  services: {
    heading: 'Services',
    items: [
      {
        kind: 'Integration',
        title: 'Protheus integrations',
        body: 'REST APIs in TLPP/ADVPL exposing customers, contracts and purchasing to e-commerce, BI, portals or any system that needs the data.',
      },
      {
        kind: 'Development',
        title: 'Custom applications',
        body: 'Dashboards, portals and internal tools in Node.js, TypeScript and MySQL — built to talk to what the company already runs.',
      },
      {
        kind: 'Automation',
        title: 'Process automation',
        body: 'That report someone exports by hand every Monday becomes a scheduled job. Less spreadsheet, less rework, fewer typos.',
      },
    ],
  },
  projects: {
    heading: 'Work',
    intro: 'Five real problems and what was built to solve each one.',
    problemLabel: 'The problem',
    repoLabel: 'Code',
    liveLabel: 'View live',
  },
  stack: {
    heading: 'Stack',
    groups: [
      { label: 'ERP', items: ['ADVPL', 'TLPP', 'TOTVS Protheus'] },
      { label: 'Backend', items: ['Node.js', 'TypeScript', 'Fastify', 'REST APIs', 'OAuth2 / JWT'] },
      { label: 'Data and automation', items: ['MySQL', 'n8n', 'Docker'] },
      { label: 'Front-end', items: ['React', 'Next.js', 'Angular'] },
    ],
  },
  contact: {
    heading: 'Got two systems that refuse to talk?',
    body: 'Describe the problem in two lines. I reply within 24h — and if I am not the right fit, I will tell you who is.',
    cvLabel: 'Download CV (PDF)',
    form: {
      name: 'Name',
      namePlaceholder: 'What should I call you?',
      email: 'Email',
      emailPlaceholder: 'you@company.com',
      message: 'What you need',
      messagePlaceholder: 'e.g. we need Protheus orders flowing into our e-commerce.',
      submit: 'Send message',
      hint: 'Opens your mail app with the message ready.',
      subject: 'Website contact — {name}',
    },
  },
  footer: { rights: 'João Wictor' },
};

export const dict: Record<Lang, Dict> = { pt, en };
