<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '../composables/useForm';

const { t } = useI18n();
const isLoading = ref(false);
const textarea = ref<HTMLTextAreaElement | null>(null);
const showNotification = ref(false);
const notificationMessage = ref('');
const notificationType = ref('success');

const {
  form,
  errors,
  validateForm,
  resetForm
} = useForm();

const showEmail = computed(() => form.name.length > 0);
const showCompany = computed(() => form.email.length > 0);

const adjustTextareaHeight = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto';
    textarea.value.style.height = textarea.value.scrollHeight + 'px';
  }
};

onMounted(() => {
  if (textarea.value) {
    textarea.value.addEventListener('input', adjustTextareaHeight);
  }
});

const handleSubmit = async () => {
  if (!validateForm()) return;

  isLoading.value = true;
  try {
    // Send form data to Netlify Function
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        siteType: form.siteType,
        technologies: form.technologies,
        budget: form.budget,
        timeline: form.timeline,
        requirements: form.requirements
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit form');
    }
    
    resetForm();
    notificationMessage.value = t('form.success');
    notificationType.value = 'success';
    showNotification.value = true;
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      showNotification.value = false;
    }, 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    notificationMessage.value = t('form.error') + (error instanceof Error ? `: ${error.message}` : '');
    notificationType.value = 'error';
    showNotification.value = true;
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      showNotification.value = false;
    }, 5000);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="relative">
    <!-- Notification Component -->
    <transition
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transform transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div 
        v-if="showNotification" 
        class="fixed top-4 right-4 z-50 max-w-md shadow-lg rounded-lg overflow-hidden"
        :class="{
          'bg-green-50 border-l-4 border-green-500': notificationType === 'success',
          'bg-red-50 border-l-4 border-red-500': notificationType === 'error'
        }"
      >
        <div class="p-4 flex items-start">
          <div class="flex-shrink-0">
            <!-- Success Icon -->
            <svg v-if="notificationType === 'success'" class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <!-- Error Icon -->
            <svg v-if="notificationType === 'error'" class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3">
            <p 
              class="text-sm font-medium"
              :class="{
                'text-green-800': notificationType === 'success',
                'text-red-800': notificationType === 'error'
              }"
            >
              {{ notificationMessage }}
            </p>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button 
                @click="showNotification = false" 
                class="inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="{
                  'text-green-500 hover:bg-green-100 focus:ring-green-600 focus:ring-offset-green-50': notificationType === 'success',
                  'text-red-500 hover:bg-red-100 focus:ring-red-600 focus:ring-offset-red-50': notificationType === 'error'
                }"
              >
                <span class="sr-only">Close</span>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg space-y-6">
    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.name') }}*</label>
      <input
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-2 border rounded-lg focus:outline-none"
        :class="{ 'border-red-500': errors.name }"
      >
      <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
    </div>

    <div v-if="showEmail">
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.email') }}*</label>
      <input
        v-model="form.email"
        type="email"
        required
        class="w-full px-4 py-2 border rounded-lg focus:outline-none"
        :class="{ 'border-red-500': errors.email }"
      >
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <div v-if="showCompany">
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.company') }}</label>
      <input
        v-model="form.company"
        type="text"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none"
      >
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.siteType') }}*</label>
      <div class="grid grid-cols-2 gap-4">
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.siteType"
            value="institutional"
            required
            class="mr-2 focus:outline-none"
          >
          {{ t('form.institutional') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.siteType"
            value="landing_page"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.landingPage') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.siteType"
            value="ecommerce"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.ecommerce') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.siteType"
            value="blog"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.blog') }}
        </label>
      </div>
      <p v-if="errors.siteType" class="text-red-500 text-sm mt-1">{{ errors.siteType }}</p>
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.technologies') }}*</label>
      <div class="grid grid-cols-2 gap-4">
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="form.technologies"
            value="vuejs"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.vuejs') }}
        </label>
        <label class="flex items-center">
          <input
          type="checkbox"
          v-model="form.technologies"
          value="nuxt"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.nuxt') }}
        </label>
        <label class="flex items-center">
          <input
          type="checkbox"
          v-model="form.technologies"
            value="laravel"
            class="mr-2 focus:outline-none"
            >
            {{ t('form.laravel') }}
          </label>
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="form.technologies"
              value="wordpress"
              class="mr-2 focus:outline-none"
            >
            {{ t('form.wordpress') }}
          </label>
        </div>
        <p v-if="errors.technologies" class="text-red-500 text-sm mt-1">{{ errors.technologies }}</p>
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.budget') }}*</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500">{{ $i18n.locale === 'en' ? '$' : 'R$' }}</span>
        </div>
        <input
          v-model="form.budget"
          type="number"
          required
          :min="$i18n.locale === 'en' ? 50 : 200"
          class="w-full pl-10 px-4 py-2 border rounded-lg focus:outline-none"
        >
      </div>
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.timeline') }}*</label>
      <div class="grid grid-cols-2 gap-4">
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="1_week"
            required
            class="mr-2 focus:outline-none"
          >
          {{ t('form.oneWeek') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="2_weeks"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.twoWeeks') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="1_month"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.oneMonth') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="2_months"
            class="mr-2 focus:outline-none"
          >
          {{ t('form.twoMonths') }}
        </label>
      </div>
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.requirements') }}*</label>
      <textarea
        ref="textarea"
        v-model="form.requirements"
        required
        rows="3"
        class="w-full px-4 py-2 border rounded-lg min-h-[100px] focus:outline-none"
        :class="{ 'border-red-500': errors.requirements }"
      ></textarea>
      <p v-if="errors.requirements" class="text-red-500 text-sm mt-1">{{ errors.requirements }}</p>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition focus:outline-none"
      :disabled="isLoading"
    >
      <span v-if="isLoading">{{ t('form.submitting') }}...</span>
      <span v-else>{{ t('form.submit') }}</span>
    </button>
  </form>
  </div>
</template>
