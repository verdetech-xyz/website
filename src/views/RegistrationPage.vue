<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const router = useRouter();

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const form = reactive<FormState>({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
});

// Field visibility state
const showEmail = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Event handlers to reveal fields
const revealEmail = () => {
  showEmail.value = true;
};

const revealPassword = () => {
  showPassword.value = true;
};

const revealConfirmPassword = () => {
  showConfirmPassword.value = true;
};

const validateForm = (): boolean => {
  let isValid = true;
  
  // Reset errors
  errors.name = '';
  errors.email = '';
  errors.password = '';
  errors.confirmPassword = '';
  
  // Validate name
  if (!form.name.trim()) {
    errors.name = t('auth.errors.nameRequired');
    isValid = false;
  }
  
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
  } else if (form.password.length < 8) {
    errors.password = t('auth.errors.passwordLength');
    isValid = false;
  }
  
  // Validate password confirmation
  if (form.password !== form.confirmPassword) {
    errors.confirmPassword = t('auth.errors.passwordMismatch');
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
    
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', form);
    
    formSubmitted.value = true;
    
    // Reset form
    form.name = '';
    form.email = '';
    form.password = '';
    form.confirmPassword = '';
    
    // Redirect to login after registration
    setTimeout(() => {
      router.push('/login');
    }, 2000);
    
  } catch (error) {
    console.error('Registration error:', error);
  } finally {
    isSubmitting.value = false;
  }
};

const goToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="flex-1 flex items-center justify-center">
      <div class="max-w-md w-full space-y-8">
        <div class="text-center">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">{{ t('auth.register.title') }}</h2>
          <p class="mt-2 text-sm text-gray-600">
            {{ t('auth.register.subtitle') }}
          </p>
        </div>
        
        <!-- Success message -->
        <div v-if="formSubmitted" class="rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800">{{ t('auth.register.success') }}</p>
            </div>
          </div>
        </div>
        
        <!-- Registration form -->
        <form v-else class="mt-8 space-y-6" @submit.prevent="submitForm">
          <div class="space-y-4">
            <div class="rounded-md shadow-sm">
              <div>
                <label for="name" class="sr-only">{{ t('auth.fields.name') }}</label>
                <input id="name" name="name" type="text" required
                       v-model="form.name"
                       @focus="revealEmail"
                       class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                       :placeholder="t('auth.fields.name')" />
                <p v-if="errors.name" class="mt-1 text-sm text-red-600">{{ errors.name }}</p>
              </div>
            </div>
            
            <div v-if="showEmail" class="rounded-md shadow-sm">
              <div>
                <label for="email-address" class="sr-only">{{ t('auth.fields.email') }}</label>
                <input id="email-address" name="email" type="email" autocomplete="email" required
                       v-model="form.email"
                       @focus="revealPassword"
                       class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                       :placeholder="t('auth.fields.email')" />
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">{{ errors.email }}</p>
              </div>
            </div>
            
            <div v-if="showPassword" class="rounded-md shadow-sm">
              <div>
                <label for="password" class="sr-only">{{ t('auth.fields.password') }}</label>
                <input id="password" name="password" type="password" autocomplete="new-password" required
                       v-model="form.password"
                       @focus="revealConfirmPassword"
                       class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                       :placeholder="t('auth.fields.password')" />
                <p v-if="errors.password" class="mt-1 text-sm text-red-600">{{ errors.password }}</p>
              </div>
            </div>
            
            <div v-if="showConfirmPassword" class="rounded-md shadow-sm">
              <div>
                <label for="confirm-password" class="sr-only">{{ t('auth.fields.confirmPassword') }}</label>
                <input id="confirm-password" name="confirm-password" type="password" autocomplete="new-password" required
                       v-model="form.confirmPassword"
                       class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                       :placeholder="t('auth.fields.confirmPassword')" />
                <p v-if="errors.confirmPassword" class="mt-1 text-sm text-red-600">{{ errors.confirmPassword }}</p>
              </div>
            </div>
          </div>
          
          <div class="mt-6">
            <button type="submit"
                    :disabled="isSubmitting || !showConfirmPassword"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed">
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

