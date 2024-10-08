<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    text: string;
  }>();

  const imageLink = computed(() => `/images/payments/${props.text}.png`);
</script>

<template>
  <div
    class="h-[4.25rem] flex justify-start items-center gap-3 border-0 rounded-xl shadow-sm"
  >
    <img
      class="w-12 ml-5"
      :src="imageLink"
    />
    <div class="flex flex-col gap-[0.1875rem]">
      <div class="font-medium whitespace-nowrap text-dark-650">
        {{ text }}
      </div>
      <div class="text-[0.8125rem] whitespace-nowrap">
        <span class="text-dark-300">Комиссия: </span>
        <span class="font-medium">8%</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
