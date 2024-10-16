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
    // const formattedNumber = new Intl.NumberFormat('de').format(props.sum);
    // return formattedNumber + '₽';
  });
</script>

<template>
  <input
    class="bg-transparent-4 border-0 rounded-[0.625rem] px-3 py-2"
    type="button"
    @click="emit('chooseSum', sum)"
    :value="prettierSum"
  />
</template>

<style lang="scss"></style>
