<script setup lang="ts">
  defineProps<{
    text: string;
    srcIcon: string;
  }>();

  // const imageLink = computed(() => `/images/payments/${props.text}.png`);
</script>

<template>
  <div
    class="flex items-center justify-start gap-[0.375rem] rounded-lg border-0 px-[0.9375rem] py-[0.625rem] shadow-sm sm:gap-3 sm:rounded-xl sm:px-[0.625rem] sm:py-[0.75rem]"
  >
    <img
      class="w-9 sm:w-12"
      :src="srcIcon"
    />
    <div class="flex flex-col gap-[0.125rem] sm:gap-[0.1875rem]">
      <div
        class="whitespace-nowrap text-[0.8215rem] font-medium text-dark-650 sm:text-base"
      >
        {{ text }}
      </div>
      <div class="whitespace-nowrap text-[0.6875rem] sm:text-[0.8125rem]">
        <span class="text-dark-300">Комиссия: </span>
        <span class="font-medium">8%</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
