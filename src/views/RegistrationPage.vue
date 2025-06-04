<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
}

const form = reactive<FormState>({
  email: '',
  password: '',
  confirmPassword: ''
});

// Variável para controlar a exibição do campo de confirmação de senha
const showConfirmPassword = ref(false);

const errors = reactive({
  email: '',
  password: '',
  general: ''
});

const isSubmitting = ref(false);

const validateForm = (): boolean => {
  let isValid = true;
  
  // Reset errors
  errors.email = '';
  errors.password = '';
  errors.general = '';
  
  // Validate email
  if (!form.email.trim()) {
    errors.email = t('auth.errors.emailRequired');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('auth.errors.emailInvalid');
    isValid = false;
  }
  
  // Validate password
  if (!form.password) {
    errors.password = t('auth.errors.passwordRequired');
    isValid = false;
  }
  
  return isValid;
};

const submitForm = async () => {
  if (!validateForm()) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, you would register with your backend
    console.log('Registration attempted:', { email: form.email });
    
    // After successful registration, redirect to home page
    router.push('/home');
    
  } catch (error) {
    console.error('Registration error:', error);
    errors.general = t('auth.login.invalidCredentials'); // Usando a mesma mensagem de erro do login
  } finally {
    isSubmitting.value = false;
  }
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 min-h-[600px]">
      <div class="flex flex-col w-full max-w-[420px] space-y-8">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">{{ t('auth.register.title') }}</h2>
          <p class="mt-2 text-sm text-gray-600">
            {{ t('auth.register.subtitle') }}
          </p>
        </div>
        
        <!-- General error message -->
        <div v-if="errors.general" class="rounded-md bg-red-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">{{ errors.general }}</p>
            </div>
          </div>
        </div>
        
        <!-- Registration form -->
        <form class="mt-8 space-y-6" @submit.prevent="submitForm">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">{{ t('auth.fields.email') }}</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                     v-model="form.email"
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                     :placeholder="t('auth.fields.email')" />
              <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
            </div>
            <div>
              <label for="password" class="sr-only">{{ t('auth.fields.password') }}</label>
              <input id="password" name="password" type="password" autocomplete="new-password" required
                     v-model="form.password"
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                     :class="{'rounded-b-md': !form.password}"
                     :placeholder="t('auth.fields.password')" />
              <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
            </div>
            
            <div v-if="form.password">
              <label for="confirm-password" class="sr-only">{{ t('auth.fields.confirmPassword') }}</label>
              <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required
                     v-model="form.confirmPassword"
                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                     :placeholder="t('auth.fields.confirmPassword')" />
            </div>
          </div>
          
          <div>
            <button type="submit"
                    :disabled="isSubmitting"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="isSubmitting">{{ t('auth.register.submitting') }}</span>
              <span v-else>{{ t('auth.register.submit') }}</span>
            </button>
          </div>
          
          <div class="text-sm text-center">
            <span>{{ t('auth.register.alreadyHaveAccount') }}</span>
            <button type="button" @click="goToLogin" class="font-medium text-green-600 hover:text-green-500 ml-1">
              {{ t('auth.register.loginLink') }}
            </button>
          </div>
        </form>
      </div>
  </div>
</template>