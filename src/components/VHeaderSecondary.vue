<script setup lang="ts">
  import { type TLink } from '@/types';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';

  const bottomHeaderLinks: TLink[] = [
    { text: 'Аренда номеров от 1 дня', address: 'http://localhost:5173/' },
    { text: 'Аренда на 20 минут', address: 'http://localhost:5173/' },
    { text: 'Пригласить друга', address: 'http://localhost:5173/' },
    { text: 'API', address: 'http://localhost:5173/' },
    { text: 'Служба поддержки', address: 'http://localhost:5173/' },
  ];

  const bottomHeaderLinksMobile: TLink[] = [
    { text: 'Купить номер', address: 'http://localhost:5173/' },
    { text: 'История транзакций', address: 'http://localhost:5173/' },
  ];
</script>

<template>
  <div
    class="bg-gradient-to-r from-dark-550 to-dark-400 px-[1.9375rem] py-[0.625rem] font-roboto text-dark-100 sm:px-[0.9375rem] sm:py-[1.25rem]"
  >
    <div
      class="flex items-center gap-[1.8925rem] text-[0.8125rem] font-medium sm:hidden"
    >
      <a
        v-for="link in bottomHeaderLinksMobile"
        :key="link.text"
        :href="link.address"
        >{{ link.text }}</a
      >
    </div>
    <LayoutWidthLimiter
      class="hidden items-center justify-end gap-12 text-[0.9rem] sm:flex"
    >
      <a
        v-for="link in bottomHeaderLinks"
        :key="link.text"
        :href="link.address"
        >{{ link.text }}</a
      >
    </LayoutWidthLimiter>
  </div>
</template>

<style lang="scss"></style>
