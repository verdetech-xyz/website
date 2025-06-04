<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import BriefingForm from '../components/BriefingForm.vue';

const { t } = useI18n();
</script>

<template>
  <div>
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('hero.title') }}</h1>
      <p class="text-xl text-gray-600 mb-6">{{ t('hero.subtitle') }}</p>
      <p class="text-lg text-gray-700 max-w-3xl mx-auto">{{ t('hero.description') }}</p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 mb-16">
      <div class="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">{{ t('stack.title') }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Frontend -->
          <div class="text-center">
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="focus:outline-none">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" class="h-16 w-auto mx-auto" onerror="this.onerror=null;this.src='https://raw.githubusercontent.com/vuejs/art/master/logo.png';" />
              <p class="text-sm mt-2">Vue.js</p>
            </a>
          </div>
          <div class="text-center">
            <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer" class="focus:outline-none">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt.js" class="h-16 w-auto mx-auto" />
              <p class="text-sm mt-2">Nuxt.js</p>
            </a>
          </div>
          <!-- Backend -->
          <div class="text-center">
            <a href="https://laravel.com/" target="_blank" rel="noopener noreferrer" class="focus:outline-none">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" class="h-16 w-auto mx-auto" onerror="this.onerror=null;this.src='https://raw.githubusercontent.com/laravel/art/master/laravel-logo.png';" />
              <p class="text-sm mt-2">Laravel</p>
            </a>
          </div>
          <div class="text-center">
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" class="focus:outline-none">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" class="h-16 w-auto mx-auto" />
              <p class="text-sm mt-2">Node.js</p>
            </a>
          </div>
          <!-- Mobile -->
          <div class="text-center">
            <a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer" class="focus:outline-none">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" class="h-16 w-auto mx-auto" />
              <p class="text-sm mt-2">PWA</p>
            </a>
          </div>
          <div class="text-center">
            <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer" class="focus:outline-none">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" alt="Hybrid Apps" class="h-16 w-auto mx-auto" />
              <p class="text-sm mt-2">Hybrid Apps</p>
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">{{ t('advantages.title') }}</h2>
        <ul class="space-y-2">
          <li>{{ t('advantages.global') }}</li>
          <li>{{ t('advantages.code') }}</li>
          <li>{{ t('advantages.communication') }}</li>
          <li>{{ t('advantages.compliance') }}</li>
        </ul>
      </div>
    </div>

    <div class="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-16">
      <h2 class="text-2xl font-bold mb-4">{{ t('whyUs.title') }}</h2>
      <p class="text-lg mb-4">{{ t('whyUs.description') }}</p>
      <ul class="grid md:grid-cols-3 gap-4 mb-6">
        <li class="bg-blue-50 p-4 rounded-lg text-center">{{ t('whyUs.scalable') }}</li>
        <li class="bg-blue-50 p-4 rounded-lg text-center">{{ t('whyUs.performance') }}</li>
        <li class="bg-blue-50 p-4 rounded-lg text-center">{{ t('whyUs.integrations') }}</li>
      </ul>
      <p class="text-lg font-semibold text-center italic">{{ t('whyUs.slogan') }}</p>
    </div>

    <BriefingForm />
  </div>
</template>

