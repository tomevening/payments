<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    money: number;
  }>();

  const emit = defineEmits<{
    (event: 'choose-amount', amount: number): void;
  }>();

  const formattedMoney = computed(() => {
    return new Intl.NumberFormat('de').format(props.money) + '₽';
  });
</script>

<template>
  <input
    class="cursor-pointer rounded-[0.625rem] border-0 bg-transparent-4 px-3 py-2"
    type="button"
    :value="formattedMoney"
    @click="emit('choose-amount', money)"
  />
</template>

<style lang="scss"></style>
