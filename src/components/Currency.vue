<script setup lang="ts">
  import type { Currency } from '@/types';

  defineProps<{
    currency: Currency;
  }>();

  const emit = defineEmits<{
    (event: 'changeActive', currency: Currency): void;
  }>();
</script>

<template>
  <!-- <div
    @click.prevent="emit('changeActive', currency)"
    :class="
      currency.isActive
        ? 'rounded-2xl outline outline-2 outline-fulvous-300'
        : ''
    "
    class="flex h-min cursor-pointer items-center justify-start gap-[0.375rem] rounded-lg border-0 px-[0.9375rem] py-[0.625rem] shadow-sm sm:gap-3 sm:rounded-xl sm:px-[0.625rem] sm:py-[0.75rem]"
  > -->
  <div
    @click.prevent="emit('changeActive', currency)"
    :class="
      currency.isActive
        ? 'rounded-2xl outline outline-2 outline-fulvous-300'
        : ''
    "
    class="flex h-min cursor-pointer items-center justify-start gap-2 rounded-xl border-0 py-[0.625rem] pl-4 pr-[1.3125rem] shadow-sm sm:gap-3 sm:rounded-2xl sm:py-[0.9375rem] sm:pl-5 sm:pr-6"
  >
    <!-- <img
      class="w-9 sm:max-h-12 sm:w-12"
      :src="currency.srcIcon"
    /> -->
    <img
      class="size-6 sm:size-7"
      :src="currency.srcIcon"
    />
    <!-- <div class="flex flex-col gap-[0.125rem] sm:gap-[0.1875rem]"> -->
    <div class="whitespace-nowrap text-xs font-medium text-dark-650 sm:text-sm">
      {{ currency.name }}
    </div>
    <!-- <div class="whitespace-nowrap text-[0.6875rem] sm:text-[0.8125rem]">
        <span class="text-dark-300">Комиссия: </span>
        <span class="font-medium">8%</span>
      </div> -->
    <!-- </div> -->
  </div>
</template>

<style lang="scss"></style>
