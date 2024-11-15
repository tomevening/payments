<script lang="ts">
  const templates = [1000, 2000, 5000, 10000, 20000, 50000];
</script>

<script setup lang="ts">
  import VPaymentTemplate from '@/components/VPaymentTemplate.vue';
  import { ref, watchEffect } from 'vue';

  const emit = defineEmits<{
    (event: 'payment-amount-changed', paymentAmount: number): void;
  }>();

  const inputMoney = ref<number | ''>('');

  watchEffect(() => {
    let paymentAmount = inputMoney.value;
    if (paymentAmount === '') paymentAmount = 0;
    emit('payment-amount-changed', paymentAmount);
  });

  function setPaymentAmount(newAmount: number) {
    inputMoney.value = newAmount;
  }
</script>

<template>
  <div>
    <div class="text-sm text-dark-650 sm:text-xl">Укажите сумму платежа</div>
    <input
      v-model="inputMoney"
      class=""
      :class="[
        'mt-[0.625rem] w-full rounded-lg border border-transparent-10 p-4',
        'sm:mt-[0.9375rem] sm:rounded-xl sm:px-[1.25rem] sm:py-4',
      ]"
      placeholder="Минимальная сумма платежа: 1.000₽"
      type="number"
    />
    <div
      class="mt-[0.625rem] flex items-center justify-start gap-2.5 text-sm font-medium text-transparent-60"
    >
      <VPaymentTemplate
        v-for="template in templates"
        :key="template"
        :money="template"
        @choose-amount="setPaymentAmount"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
