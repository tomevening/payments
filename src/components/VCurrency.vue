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
  <div
    class="flex h-min cursor-pointer items-center justify-start gap-2 rounded-xl border-0 py-[0.625rem] pl-4 pr-[1.3125rem] shadow-sm sm:gap-3 sm:rounded-2xl sm:py-[0.9375rem] sm:pl-5 sm:pr-6"
    :class="
      currency.isActive
        ? 'rounded-2xl outline outline-2 outline-fulvous-300'
        : ''
    "
    @click.prevent="emit('changeActive', currency)"
  >
    <img
      class="size-6 sm:size-7"
      :src="currency.srcIcon"
    />

    <div class="whitespace-nowrap text-xs font-medium text-dark-650 sm:text-sm">
      {{ currency.name }}
    </div>
  </div>
</template>

<style lang="scss"></style>
