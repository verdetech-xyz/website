import { ref, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

interface Form {
  name: string;
  email: string;
  company: string;
  siteType: string;
  technologies: string[];
  budget: string;
  timeline: string;
  requirements: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  siteType?: string;
  technologies?: string;
  requirements?: string;
}

export function useForm() {
  const { t } = useI18n();
  
  const form = reactive<Form>({
    name: '',
    email: '',
    company: '',
    siteType: '',
    technologies: [],
    budget: '',
    timeline: '',
    requirements: ''
  });

  const errors = reactive<FormErrors>({});

  const validateForm = (): boolean => {
    errors.name = '';
    errors.email = '';
    errors.siteType = '';
    errors.technologies = '';
    errors.requirements = '';

    let isValid = true;

    if (!form.name) {
      errors.name = t('errors.nameRequired');
      isValid = false;
    }

    if (!form.email) {
      errors.email = t('errors.emailRequired');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = t('errors.emailInvalid');
      isValid = false;
    }

    if (!form.siteType) {
      errors.siteType = t('errors.siteTypeRequired');
      isValid = false;
    }

    if (form.technologies.length === 0) {
      errors.technologies = t('errors.technologiesRequired');
      isValid = false;
    }

    if (!form.requirements) {
      errors.requirements = t('errors.requirementsRequired');
      isValid = false;
    } else if (form.requirements.length < 125) {
      errors.requirements = t('errors.requirementsLength');
      isValid = false;
    }

    return isValid;
  };

  const resetForm = () => {
    Object.keys(form).forEach(key => {
      if (key === 'technologies') {
        form[key] = [];
      } else {
        form[key as keyof Form] = '';
      }
    });
    Object.keys(errors).forEach(key => {
      delete errors[key as keyof FormErrors];
    });
  };

  return {
    form,
    errors,
    validateForm,
    resetForm
  };
}