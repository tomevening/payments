<script setup lang="ts">
  import type { PaymentMethod } from '@/types';

  defineProps<{
    payment: PaymentMethod;
  }>();

  const emit = defineEmits<{
    (event: 'changeActive', payment: PaymentMethod): void;
  }>();
</script>

<template>
  <div
    class="flex h-min cursor-pointer items-center justify-start gap-[0.375rem] rounded-lg border-0 px-[0.9375rem] py-[0.625rem] shadow-sm sm:gap-3 sm:rounded-xl sm:px-5 sm:py-[0.75rem]"
    :class="
      payment.isActive
        ? 'rounded-2xl outline outline-2 outline-fulvous-300'
        : ''
    "
    @click.prevent="emit('changeActive', payment)"
  >
    <img
      class="max-w-9 sm:max-h-12 sm:max-w-12"
      :src="payment.srcIcon"
    />
    <div class="flex flex-col gap-[0.125rem] sm:gap-[0.1875rem]">
      <div
        class="whitespace-nowrap text-[0.8215rem] font-medium text-dark-650 sm:text-base"
      >
        {{ payment.name }}
      </div>
      <div class="whitespace-nowrap text-[0.6875rem] sm:text-[0.8125rem]">
        <span class="text-dark-300">Комиссия: </span>
        <span class="font-medium">8%</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
