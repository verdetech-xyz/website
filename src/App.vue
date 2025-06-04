<script setup lang="ts">
import MainLayout from './components/layout/MainLayout.vue';
import { onMounted } from 'vue';

// Adicionar classe ao body para impedir movimentação da barra de rolagem
onMounted(() => {
  document.body.classList.add('overflow-y-scroll');
});
</script>

<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  overflow-y: scroll;
}

body {
  /* Forçar a barra de rolagem sempre visível para evitar pulos durante a navegação */
  overflow-y: scroll;
}
</style>
