<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { setLanguage } from '../../i18n';
import verdeTechLogo from '../../assets/verdetech.png';

const usFlag = 'https://flagicons.lipis.dev/flags/4x3/us.svg';
const brFlag = 'https://flagicons.lipis.dev/flags/4x3/br.svg';
const mobileMenuOpen = ref(false);

const { t } = useI18n();

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<template>
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
</template>

