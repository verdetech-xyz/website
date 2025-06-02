<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '../composables/useForm';

const { t } = useI18n();
const isLoading = ref(false);

const {
  form,
  errors,
  validateForm,
  resetForm
} = useForm();

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
  <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
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

    <div>
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

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.company') }}</label>
      <input
        v-model="form.company"
        type="text"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.budget') }}*</label>
      <select
        v-model="form.budget"
        required
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
      >
        <option value="">{{ t('form.selectBudget') }}</option>
        <option value="small">$1,000 - $5,000</option>
        <option value="medium">$5,000 - $10,000</option>
        <option value="large">$10,000+</option>
      </select>
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.timeline') }}*</label>
      <div class="grid grid-cols-3 gap-4">
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="1_month"
            required
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
        <label class="flex items-center">
          <input
            type="radio"
            v-model="form.timeline"
            value="3_months"
            class="mr-2"
          >
          {{ t('form.threeMonths') }}
        </label>
      </div>
    </div>

    <div>
      <label class="block text-gray-700 font-medium mb-2">{{ t('form.requirements') }}*</label>
      <textarea
        v-model="form.requirements"
        required
        rows="5"
        class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
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