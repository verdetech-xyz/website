<script setup lang="ts">
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import BriefingForm from './components/BriefingForm.vue';

const { t } = useI18n();

onMounted(() => {
  document.body.classList.add('fade-in');
});
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-bold text-gray-800">{{ t('brand.name') }}</span>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="$i18n.locale = 'en'" :class="{ 'font-bold': $i18n.locale === 'en' }">EN</button>
            <button @click="$i18n.locale = 'pt'" :class="{ 'font-bold': $i18n.locale === 'pt' }">PT</button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('hero.title') }}</h1>
        <p class="text-xl text-gray-600">{{ t('hero.subtitle') }}</p>
      </div>

      <BriefingForm />
    </main>

    <footer class="bg-gray-800 text-white mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p class="text-center">&copy; 2023 {{ t('brand.name') }}</p>
      </div>
    </footer>
  </div>
</template>

<style>
.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>