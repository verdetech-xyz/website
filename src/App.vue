<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.body.classList.add('fade-in');
});
</script>

<template>
  <router-view />
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
