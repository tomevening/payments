<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    text: string;
  }>();

  const imageLink = computed(() => `/images/payments/${props.text}.png`);
</script>

<template>
  <div
    class="w-36 h-12 flex justify-start items-center border-0 rounded-md shadow-sm"
  >
    <img
      class="w-8 mx-2"
      :src="imageLink"
    />
    <div class="flex flex-col p-1">
      <div class="text-sm whitespace-nowrap font-semibold">
        {{ text }}
      </div>
      <div class="text-xs whitespace-nowrap">Комиссия: 8%</div>
    </div>
  </div>
</template>

<style lang="scss"></style>
