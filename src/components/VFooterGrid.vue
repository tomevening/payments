<script setup lang="ts">
  import { useStoreMain } from '@/stores';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';

  const storeMain = useStoreMain();
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
        v-for="link in storeMain.footerLinks"
        :key="link.text"
        :href="link.address"
        >{{ link.text }}</a
      >
    </LayoutWidthLimiter>
  </div>
</template>

<style lang="scss"></style>
