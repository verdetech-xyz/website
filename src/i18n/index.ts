import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    brand: {
      name: 'WebStudio'
    },
    hero: {
      title: 'Create Your Dream Website',
      subtitle: 'Fill out our briefing form to start your journey'
    },
    form: {
      name: 'Name',
      email: 'Email',
      company: 'Company',
      budget: 'Budget Range',
      selectBudget: 'Select budget range',
      timeline: 'Timeline',
      oneMonth: '1 Month',
      twoMonths: '2 Months',
      threeMonths: '3 Months',
      requirements: 'Project Requirements',
      submit: 'Submit Briefing',
      submitting: 'Submitting',
      success: 'Form submitted successfully!',
      error: 'An error occurred. Please try again.'
    }
  },
  pt: {
    brand: {
      name: 'WebStudio'
    },
    hero: {
      title: 'Crie o Site dos Seus Sonhos',
      subtitle: 'Preencha nosso briefing para começar sua jornada'
    },
    form: {
      name: 'Nome',
      email: 'Email',
      company: 'Empresa',
      budget: 'Faixa de Orçamento',
      selectBudget: 'Selecione a faixa de orçamento',
      timeline: 'Prazo',
      oneMonth: '1 Mês',
      twoMonths: '2 Meses',
      threeMonths: '3 Meses',
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