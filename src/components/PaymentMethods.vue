<script setup lang="ts">
  import PaymentMethod from '@/components/PaymentMethod.vue';
  import { type PaymentMethod as PaymentMethodType } from '@/types';

  const payments: PaymentMethodType[] = [
    {
      name: 'Картой РФ',
      srcIcon: '/images/payments/RUCard.png',
    },
    {
      name: 'Картой МИР',
      srcIcon: '/images/payments/MirCard.png',
    },
    {
      name: 'СБП',
      srcIcon: '/images/payments/СБП.png',
    },
    {
      name: 'Payeer',
      srcIcon: '/images/payments/Payeer.png',
    },
    {
      name: 'SteamPay',
      srcIcon: '/images/payments/SteamPay.png',
    },
    {
      name: 'Мегафон',
      srcIcon: '/images/payments/Мегафон.png',
    },
    {
      name: 'Билайн',
      srcIcon: '/images/payments/Билайн.png',
    },
    {
      name: 'Теле2',
      srcIcon: '/images/payments/Теле2.png',
    },
    {
      name: 'PayPal',
      srcIcon: '/images/payments/PayPal.png',
    },
    {
      name: 'Stripe',
      srcIcon: '/images/payments/Stripe.png',
    },
    {
      name: 'FKWallet',
      srcIcon: '/images/payments/FKWallet.png',
    },
    {
      name: 'Lava',
      srcIcon: '/images/payments/Lava.png',
    },
    {
      name: 'Volet',
      srcIcon: '/images/payments/Volet.png',
    },
    {
      name: 'PerfectMoney',
      srcIcon: '/images/payments/PerfectMoney.png',
    },
    {
      name: 'Другой',
      srcIcon: '/images/payments/Other.png',
    },
    {
      name: 'Cryptomus',
      srcIcon: '/images/payments/Cryptomus.png',
    },
  ];
</script>

<template>
  <div>
    <div class="text-sm sm:text-xl">Выберите способ оплаты</div>
    <div
      class="mt-[0.3125rem] grid h-[10.6875rem] grid-cols-[repeat(auto-fill,minmax(8.8125rem,1fr))] gap-4 overflow-y-scroll scrollbar scrollbar-track-white scrollbar-thumb-dark-25 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-[6.25rem] sm:h-[13.375rem] sm:grid-cols-5"
    >
      <PaymentMethod
        v-for="payment in payments"
        :key="payment.name"
        :text="payment.name"
        :srcIcon="payment.srcIcon"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
