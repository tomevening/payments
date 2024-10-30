<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    sum: number;
  }>();

  const emit = defineEmits<{
    (event: 'chooseSum', sum: number): void;
  }>();

  const prettierSum = computed(() => {
    return new Intl.NumberFormat('de').format(props.sum) + '₽';
  });
</script>

<template>
  <input
    class="cursor-pointer rounded-[0.625rem] border-0 bg-transparent-4 px-3 py-2"
    type="button"
    @click="emit('chooseSum', sum)"
    :value="prettierSum"
  />
</template>

<style lang="scss"></style>
