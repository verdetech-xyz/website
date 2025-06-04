<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import verdeTechLogo from '../../assets/verdetech.png';

const { t } = useI18n();
</script>

<template>
  <footer class="bg-gray-800 text-white mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex items-center justify-center">
        <img :src="verdeTechLogo" alt="VerdeTech Logo" class="h-8 w-auto mr-2" />
        <p class="pt-2">&copy; {{ new Date().getFullYear() }} {{ t('brand.name') }}</p>
      </div>
    </div>
  </footer>
</template>

