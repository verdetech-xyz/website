import { ref, reactive } from 'vue';

interface Form {
  name: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
  requirements: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  requirements?: string;
}

export function useForm() {
  const form = reactive<Form>({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    requirements: ''
  });

  const errors = reactive<FormErrors>({});

  const validateForm = (): boolean => {
    errors.name = '';
    errors.email = '';
    errors.requirements = '';

    let isValid = true;

    if (!form.name) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!form.email) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!form.requirements) {
      errors.requirements = 'Requirements are required';
      isValid = false;
    } else if (form.requirements.length < 125) {
      errors.requirements = 'Requirements must be at least 125 characters';
      isValid = false;
    }

    return isValid;
  };

  const resetForm = () => {
    Object.keys(form).forEach(key => {
      form[key as keyof Form] = '';
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