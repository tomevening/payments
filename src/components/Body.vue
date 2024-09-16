<script setup lang="ts">
  import PaymentMethod from '@/components/PaymentMethod.vue';

  const payments = [
    'Картой РФ',
    'Картой МИР',
    'СБП',
    'Payeer',
    'SteamPay',
    'Мегафон',
    'Билайн',
    'Теле2',
    'PayPal',
    'Stripe',
    'FKWallet',
    'Lava',
    'Volet',
    'PerfectMoney',
    'Другой',
    'Cryptomus',
  ];
</script>

<template>
  <div class="mx-auto w-8/12">
    <div class="inline-block mt-6 text-2xl font-semibold">
      Пополните баланс,
    </div>
    <div class="inline-block ml-[0.25rem] text-2xl text-custom-3">
      чтобы получить номер для приёма смс
    </div>
    <div class="mt-4 text-sm">Выберите валюту оплаты</div>

    <div class="mb-2">
      <img
        class="h-12 inline-block shadow-xs border rounded-lg mt-4"
        src="/images/Cryptocurrency.png"
      />
      <img
        class="h-12 inline-block shadow-xs border rounded-lg ml-2 mt-4"
        src="/images/RubAndOthers.png"
      />
    </div>

    <div class="grid grid-cols-5 gap-4 h-40 overflow-y-auto">
      <PaymentMethod
        v-for="payment in payments"
        :key="payment"
        :text="payment"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
