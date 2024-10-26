<script setup lang="ts">
  import PaymentTemplate from '@/components/PaymentTemplate.vue';
  import { ref, type Ref } from 'vue';
  const templates = [1000, 2000, 5000, 10000, 20000, 50000];
  const money: Ref<number | ''> = ref('');
  function setMoney(amount: number) {
    money.value = amount;
  }
</script>

<template>
  <div>
    <div class="text-sm text-dark-650 sm:text-xl">Укажите сумму платежа</div>
    <input
      v-model="money"
      class="mt-[0.625rem] w-full rounded-lg border border-transparent-10 p-4 sm:mt-[0.9375rem] sm:rounded-xl sm:px-[1.25rem] sm:py-4"
      placeholder="Минимальная сумма платежа: 1.000₽"
    />
    <div
      class="mt-[0.625rem] flex items-center justify-start gap-2.5 text-sm font-medium text-transparent-60"
    >
      <PaymentTemplate
        :sum="template"
        @choose-sum="setMoney"
        v-for="template in templates"
        :key="template"
      />
    </div>

    <input
      class="mt-[1.875rem] w-full rounded-xl border-0 bg-gradient-to-r from-fulvous-600 to-fulvous-300 py-5 text-lg font-medium text-white sm:mb-[6.25rem] sm:text-xl"
      type="button"
      value="Оплатить"
    />
  </div>
</template>

<style lang="scss"></style>
