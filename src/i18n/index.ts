import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    nav: {
      home: 'Home',
      register: 'Sign Up',
      login: 'Sign In',
      admin: 'Admin Panel'
    },
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
    },
    errors: {
      nameRequired: 'Name is required',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email format',
      siteTypeRequired: 'Site type is required',
      technologiesRequired: 'At least one technology must be selected',
      requirementsRequired: 'Requirements are required',
      requirementsLength: 'Requirements must be at least 125 characters'
    },
    auth: {
      fields: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password'
      },
      register: {
        title: 'Create your account',
        subtitle: 'Sign up to access VerdeTech platform',
        submit: 'Sign Up',
        submitting: 'Signing up...',
        success: 'Account created successfully! Redirecting to login...',
        alreadyHaveAccount: 'Already have an account?',
        loginLink: 'Sign In'
      },
      login: {
        title: 'Welcome back',
        subtitle: 'Sign in to your account',
        submit: 'Sign In',
        processing: 'Signing in...',
        rememberMe: 'Remember me',
        forgotPassword: 'Forgot password?',
        noAccount: "Don't have an account?",
        registerLink: 'Sign Up',
        invalidCredentials: 'Invalid email or password'
      },
      errors: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email format',
        passwordRequired: 'Password is required',
        passwordLength: 'Password must be at least 8 characters',
        passwordMismatch: 'Passwords do not match'
      }
    }
  },
  pt: {
    nav: {
      home: 'Início',
      register: 'Cadastro',
      login: 'Entrar',
      admin: 'Painel Admin'
    },
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
    },
    errors: {
      nameRequired: 'Nome é obrigatório',
      emailRequired: 'Email é obrigatório',
      emailInvalid: 'Formato de email inválido',
      siteTypeRequired: 'Tipo de site é obrigatório',
      technologiesRequired: 'Pelo menos uma tecnologia deve ser selecionada',
      requirementsRequired: 'Os requisitos são obrigatórios',
      requirementsLength: 'Os requisitos devem ter pelo menos 125 caracteres'
    },
    auth: {
      fields: {
        name: 'Nome',
        email: 'Email',
        password: 'Senha',
        confirmPassword: 'Confirmar Senha'
      },
      register: {
        title: 'Crie sua conta',
        subtitle: 'Cadastre-se para acessar a plataforma VerdeTech',
        submit: 'Cadastrar',
        submitting: 'Cadastrando...',
        success: 'Conta criada com sucesso! Redirecionando para o login...',
        alreadyHaveAccount: 'Já possui uma conta?',
        loginLink: 'Entrar'
      },
      login: {
        title: 'Bem-vindo de volta',
        subtitle: 'Entre em sua conta',
        submit: 'Entrar',
        processing: 'Entrando...',
        rememberMe: 'Lembrar de mim',
        forgotPassword: 'Esqueceu a senha?',
        noAccount: 'Não tem uma conta?',
        registerLink: 'Cadastre-se',
        invalidCredentials: 'Email ou senha inválidos'
      },
      errors: {
        nameRequired: 'Nome é obrigatório',
        emailRequired: 'Email é obrigatório',
        emailInvalid: 'Formato de email inválido',
        passwordRequired: 'Senha é obrigatória',
        passwordLength: 'A senha deve ter pelo menos 8 caracteres',
        passwordMismatch: 'As senhas não coincidem'
      }
    }
  }
};

// Função para detectar se o usuário está vindo do Brasil
function isUserFromBrazil() {
  // Verifica se estamos no navegador
  if (typeof navigator !== 'undefined') {
    // Opção 1: Verificar pelo idioma do navegador
    const userLanguage = navigator.language || (navigator as any).userLanguage;
    if (userLanguage && userLanguage.toLowerCase().startsWith('pt-br')) {
      return true;
    }

    // Opção 2: Verificar pelo timezone (funciona mesmo se o idioma do navegador não for pt-BR)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timezone && timezone.includes('Brasilia') || timezone.includes('Brazil')) {
      return true;
    }

    // Opção 3: Utilizando a API de geolocalização (apenas detecção, não armazenamento)
    // Esta opção requer permissão do usuário, então não é usada como verificação principal
  }
  
  return false;
}

// Determinar o idioma com base na localização do usuário
const detectedLocale = isUserFromBrazil() ? 'pt' : 'en';

export const i18n = createI18n({
  legacy: false,
  locale: detectedLocale, // Usa o idioma detectado automaticamente
  fallbackLocale: 'en',
  messages
});

// Exporta uma função para mudar o idioma manualmente, se necessário
export function setLanguage(locale: string) {
  i18n.global.locale.value = locale;
}
