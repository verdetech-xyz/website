import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    brand: {
      name: 'VerdeTech'
    },
    hero: {
      title: 'Global Vue.js & Laravel Experts',
      subtitle: 'High-performance solutions for clients worldwide',
      description: 'Specialists in Vue.js, Nuxt, Laravel, and JavaScript, we develop high-performance solutions for clients worldwide. Our Brazilian team combines technical expertise with understanding of international demands.'
    },
    stack: {
      title: 'Main Stack',
      frontend: 'Front-end: Vue.js, Nuxt.js',
      backend: 'Back-end: Laravel, Node.js',
      mobile: 'Mobile: PWAs and hybrid applications'
    },
    advantages: {
      title: 'Our Advantages',
      global: '✅ Global experience - serving clients in America, Europe, and Asia',
      code: '✅ Universal code - following international standards',
      communication: '✅ Multicultural communication (English, Portuguese, Spanish)',
      compliance: '✅ GDPR and LGPD compliance'
    },
    whyUs: {
      title: 'Why Choose Us?',
      description: 'We combine the best of Brazilian development with the ability to deliver projects for any market. Your software will be built with:',
      scalable: 'Scalable architecture',
      performance: 'Optimized performance',
      integrations: 'Efficient integrations',
      slogan: 'From Brazil to the world: code that transcends borders.'
    },
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      siteType: 'Site Type',
      institutional: 'Institutional',
      landingPage: 'Landing Page',
      ecommerce: 'E-commerce',
      blog: 'Blog',
      technologies: 'Technologies',
      wordpress: 'WordPress',
      nuxt: 'Nuxt',
      laravel: 'Laravel',
      vuejs: 'Vue.js',
      budget: 'Budget (USD)',
      timeline: 'Timeline',
      oneWeek: '1 Week',
      twoWeeks: '2 Weeks',
      oneMonth: '1 Month',
      twoMonths: '2 Months',
      requirements: 'Project Requirements',
      submit: 'Submit Briefing',
      submitting: 'Submitting',
      success: 'Form submitted successfully!',
      error: 'An error occurred. Please try again.'
    }
  },
  pt: {
    brand: {
      name: 'VerdeTech'
    },
    hero: {
      title: 'Especialistas Globais em Vue.js & Laravel',
      subtitle: 'Soluções de alto desempenho para clientes em todo o mundo',
      description: 'Especialistas em Vue.js, Nuxt, Laravel e JavaScript, desenvolvemos soluções de alto desempenho para clientes em todo o mundo. Nossa equipe brasileira combina expertise técnica com entendimento das demandas internacionais.'
    },
    stack: {
      title: 'Stack Principal',
      frontend: 'Front-end: Vue.js, Nuxt.js',
      backend: 'Back-end: Laravel, Node.js',
      mobile: 'Mobile: PWAs e aplicações híbridas'
    },
    advantages: {
      title: 'Nossos Diferenciais',
      global: '✅ Experiência global - atendemos clientes na América, Europa e Ásia',
      code: '✅ Código universal - seguindo padrões internacionais',
      communication: '✅ Comunicação multicultural (inglês, português, espanhol)',
      compliance: '✅ Conformidade com GDPR e LGPD'
    },
    whyUs: {
      title: 'Por que nos escolher?',
      description: 'Unimos o melhor do desenvolvimento brasileiro com a capacidade de entregar projetos para qualquer mercado. Seu software será construído com:',
      scalable: 'Arquitetura escalável',
      performance: 'Performance otimizada',
      integrations: 'Integrações eficientes',
      slogan: 'Do Brasil para o mundo: código que ultrapassa fronteiras.'
    },
    form: {
      name: 'Nome',
      email: 'Email',
      company: 'Empresa',
      siteType: 'Tipo de Site',
      institutional: 'Institucional',
      landingPage: 'Landing Page',
      ecommerce: 'E-commerce',
      blog: 'Blog',
      technologies: 'Tecnologias',
      wordpress: 'WordPress',
      nuxt: 'Nuxt',
      laravel: 'Laravel',
      vuejs: 'Vue.js',
      budget: 'Orçamento (BRL)',
      timeline: 'Prazo',
      oneWeek: '1 Semana',
      twoWeeks: '2 Semanas',
      oneMonth: '1 Mês',
      twoMonths: '2 Meses',
      requirements: 'Requisitos do Projeto',
      submit: 'Enviar Briefing',
      submitting: 'Enviando',
      success: 'Formulário enviado com sucesso!',
      error: 'Ocorreu um erro. Por favor, tente novamente.'
    }
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});