<script setup lang="ts">
  const emit = defineEmits<{
    (event: 'confirm-payment'): void;
  }>();
</script>

<template>
  <input
    :class="[
      'bg-gradient-to-r from-fulvous-600 to-fulvous-300',
      'mt-[1.875rem] w-full cursor-pointer rounded-xl border-0 py-5 text-lg font-medium text-white',
      'sm:text-xl',
    ]"
    type="button"
    value="Оплатить"
    @click="emit('confirm-payment')"
  />
</template>

<style lang="scss"></style>
