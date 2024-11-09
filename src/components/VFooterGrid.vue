<script setup lang="ts">
  import type { TLink } from '@/types';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';

  const footerLinks: TLink[] = [
    { text: 'Цены на номера', address: 'http://localhost:5173/' },
    { text: 'Скидки на номера', address: 'http://localhost:5173/' },
    { text: 'Долгосрочная аренда', address: 'http://localhost:5173/' },
    { text: 'Беслпатные номера', address: 'http://localhost:5173/' },
    { text: 'API подключение', address: 'http://localhost:5173/' },
    { text: 'Реферальная программа', address: 'http://localhost:5173/' },
    { text: 'Владельцем софта', address: 'http://localhost:5173/' },
    { text: 'Новости сервиса', address: 'http://localhost:5173/' },
    { text: 'Политика конфиденциальности', address: 'http://localhost:5173/' },
    { text: 'Политика доставки', address: 'http://localhost:5173/' },
    { text: 'Политика возврата', address: 'http://localhost:5173/' },
    { text: 'Условия оказания услуг', address: 'http://localhost:5173/' },
    { text: 'Связаться с поддержкой', address: 'http://localhost:5173/' },
    { text: 'Вопросы и ответы', address: 'http://localhost:5173/' },
  ];
</script>

<template>
  <div
    :class="[
      'bg-black px-[1.3125rem] py-[0.8125rem] text-[0.8rem] font-medium text-dark-100',
      'sm:px-[0.3rem] sm:py-7',
    ]"
  >
    <LayoutWidthLimiter
      :class="[
        'flex flex-col gap-[0.625rem]',
        'sm:grid sm:grid-flow-col sm:grid-rows-4 sm:gap-x-[2.9244rem] sm:gap-y-[0.5937rem]',
      ]"
    >
      <a
        v-for="link in footerLinks"
        :key="link.text"
        :href="link.address"
        >{{ link.text }}</a
      >
    </LayoutWidthLimiter>
  </div>
</template>

<style lang="scss"></style>
