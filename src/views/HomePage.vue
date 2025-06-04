<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLanguage } from '../i18n';
import BriefingForm from '../components/BriefingForm.vue';
import verdeTechLogo from '../assets/verdetech.png';

const usFlag = 'https://flagicons.lipis.dev/flags/4x3/us.svg';
const brFlag = 'https://flagicons.lipis.dev/flags/4x3/br.svg';
const mobileMenuOpen = ref(false);

const { t } = useI18n();

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

onMounted(() => {
  document.body.classList.add('fade-in');
});</script>

<template>
  <div class="min-h-screen bg-gray-50/90">
    <nav class="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <a href="/" class="flex">
              <img :src="verdeTechLogo" alt="VerdeTech Logo" class="h-12 w-auto mr-2" />
              <span class="text-xl font-bold text-green-400 pt-3">Verde<span class="text-blue-600">Tech</span></span>
            </a>
          </div>
          <div class="hidden md:flex items-center space-x-6 ml-8">
            <router-link to="/" class="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">{{ t('nav.home') }}</router-link>
            <router-link to="/register" class="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">{{ t('nav.register') }}</router-link>
            <router-link to="/login" class="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">{{ t('nav.login') }}</router-link>
            <router-link to="/admin" class="text-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium">{{ t('nav.admin') }}</router-link>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="setLanguage('en')" class="p-1 rounded">
              <img :src="usFlag" alt="English" class="h-6 w-auto" :class="{ 'grayscale opacity-50': $i18n.locale !== 'en' }" />
            </button>
            <button @click="setLanguage('pt')" class="p-1 rounded">
              <img :src="brFlag" alt="Português" class="h-6 w-auto" :class="{ 'grayscale opacity-50': $i18n.locale !== 'pt' }" />
            </button>
            <!-- Menu móvel (hamburger) para telas menores -->
            <div class="md:hidden">
              <button @click="toggleMobileMenu" class="text-gray-700 hover:text-green-500 focus:outline-none">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Menu móvel para telas pequenas -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white/95 backdrop-blur-sm shadow-lg">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">{{ t('nav.home') }}</router-link>
        <router-link to="/register" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">{{ t('nav.register') }}</router-link>
        <router-link to="/login" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">{{ t('nav.login') }}</router-link>
        <router-link to="/admin" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50">{{ t('nav.admin') }}</router-link>
      </div>
    </div>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
    </main>

    <footer class="bg-gray-800 text-white mt-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex items-center justify-center">
          <img :src="verdeTechLogo" alt="VerdeTech Logo" class="h-8 w-auto mr-2" />
          <p class="pt-2">&copy; {{ new Date().getFullYear() }} {{ t('brand.name') }}</p>
        </div>
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

