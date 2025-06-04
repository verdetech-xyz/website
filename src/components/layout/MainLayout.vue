<script setup lang="ts">
import { onMounted } from 'vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

onMounted(() => {
  document.body.classList.add('fade-in');
});
</script>

<template>
  <div class="min-h-screen bg-gray-50/90">
    <Navbar />
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <slot></slot>
    </main>

    <Footer />
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

