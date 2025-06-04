<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

onMounted(() => {
  document.body.classList.add('fade-in');
});
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50/90">
    <Navbar />
    
    <main class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <slot></slot>
    </main>

    <Footer class="mt-auto" />
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

