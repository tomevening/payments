<script setup lang="ts">
  import type { TFiat } from '@/types';

  defineProps<{
    fiat: TFiat;
  }>();

  const emit = defineEmits<{
    (event: 'changeActive', fiat: TFiat): void;
  }>();
</script>

<template>
  <div
    :class="[
      'flex items-center justify-start gap-2',
      'h-min cursor-pointer rounded-xl border-0 py-[0.625rem] pl-4 pr-[1.3125rem] shadow-sm',
      'sm:gap-3 sm:rounded-2xl sm:py-[0.9375rem] sm:pl-5 sm:pr-6',
      { 'rounded-2xl outline outline-2 outline-fulvous-300': fiat.isActive },
    ]"
    @click.prevent="emit('changeActive', fiat)"
  >
    <img
      class="size-6 sm:size-7"
      :src="fiat.srcIcon"
    />

    <div class="whitespace-nowrap text-xs font-medium text-dark-650 sm:text-sm">
      {{ fiat.name }}
    </div>
  </div>
</template>

<style lang="scss"></style>
