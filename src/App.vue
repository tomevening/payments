<script setup lang="ts">
  import AppBody from '@/components/AppBody.vue';
  import AppFooter from '@/components/AppFooter.vue';
  import AppHeader from './components/AppHeader.vue';

  //TODO: Remove font-size from styles
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <body>
    <AppBody />
  </body>
  <footer>
    <AppFooter />
  </footer>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  html {
    font-size: calc(100% * 2 / 3);
  }
</style>
