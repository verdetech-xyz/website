<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '../composables/useForm';

const { t } = useI18n();
const isLoading = ref(false);
const textarea = ref<HTMLTextAreaElement | null>(null);

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    resetForm();
    alert(t('form.success'));
  } catch (error) {
    alert(t('form.error'));
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg space-y-6">
    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.name') }}*</label>
      <input
        v-model="form.name"
        type="text"
        required
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        :class="{ 'border-red-500': errors.email }"
      >
      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
    </div>

    <div v-if="showCompany">
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.company') }}</label>
      <input
        v-model="form.company"
        type="text"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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
            class="mr-2"
          >
          {{ t('form.institutional') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.siteType"
            value="landing_page"
            class="mr-2"
          >
          {{ t('form.landingPage') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.siteType"
            value="ecommerce"
            class="mr-2"
          >
          {{ t('form.ecommerce') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.siteType"
            value="blog"
            class="mr-2"
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
            value="wordpress"
            class="mr-2"
          >
          {{ t('form.wordpress') }}
        </label>
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="form.technologies"
            value="ecommerce"
            class="mr-2"
          >
          {{ t('form.ecommerce') }}
        </label>
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="form.technologies"
            value="nuxt"
            class="mr-2"
          >
          {{ t('form.nuxt') }}
        </label>
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="form.technologies"
            value="laravel"
            class="mr-2"
          >
          {{ t('form.laravel') }}
        </label>
        <label class="flex items-center">
          <input
            type="checkbox"
            v-model="form.technologies"
            value="vuejs"
            class="mr-2"
          >
          {{ t('form.vuejs') }}
        </label>
      </div>
      <p v-if="errors.technologies" class="text-red-500 text-sm mt-1">{{ errors.technologies }}</p>
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.budget') }}*</label>
      <input
        v-model="form.budget"
        type="number"
        required
        min="1000"
        step="1000"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
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
            class="mr-2"
          >
          {{ t('form.oneWeek') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="2_weeks"
            class="mr-2"
          >
          {{ t('form.twoWeeks') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="1_month"
            class="mr-2"
          >
          {{ t('form.oneMonth') }}
        </label>
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="2_months"
            class="mr-2"
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
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[100px]"
        :class="{ 'border-red-500': errors.requirements }"
      ></textarea>
      <p v-if="errors.requirements" class="text-red-500 text-sm mt-1">{{ errors.requirements }}</p>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      :disabled="isLoading"
    >
      <span v-if="isLoading">{{ t('form.submitting') }}...</span>
      <span v-else>{{ t('form.submit') }}</span>
    </button>
  </form>
</template>