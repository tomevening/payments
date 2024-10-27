<script setup lang="ts">
  import PaymentMethod from '@/components/PaymentMethod.vue';
  import { type PaymentMethod as PaymentMethodType } from '@/types';
  import { ref, shallowRef, type Ref } from 'vue';

  const payments: Ref<PaymentMethodType[]> = ref([
    {
      name: 'Картой РФ',
      srcIcon: '/images/payments/RUCard.png',
      isActive: true,
    },
    {
      name: 'Картой МИР',
      srcIcon: '/images/payments/MirCard.png',
      isActive: false,
    },
    {
      name: 'СБП',
      srcIcon: '/images/payments/СБП.png',
      isActive: false,
    },
    {
      name: 'Payeer',
      srcIcon: '/images/payments/Payeer.png',
      isActive: false,
    },
    {
      name: 'SteamPay',
      srcIcon: '/images/payments/SteamPay.png',
      isActive: false,
    },
    {
      name: 'Мегафон',
      srcIcon: '/images/payments/Мегафон.png',
      isActive: false,
    },
    {
      name: 'Билайн',
      srcIcon: '/images/payments/Билайн.png',
      isActive: false,
    },
    {
      name: 'Теле2',
      srcIcon: '/images/payments/Теле2.png',
      isActive: false,
    },
    {
      name: 'PayPal',
      srcIcon: '/images/payments/PayPal.png',
      isActive: false,
    },
    {
      name: 'Stripe',
      srcIcon: '/images/payments/Stripe.png',
      isActive: false,
    },
    {
      name: 'FKWallet',
      srcIcon: '/images/payments/FKWallet.png',
      isActive: false,
    },
    {
      name: 'Lava',
      srcIcon: '/images/payments/Lava.png',
      isActive: false,
    },
    {
      name: 'Volet',
      srcIcon: '/images/payments/Volet.png',
      isActive: false,
    },
    {
      name: 'PerfectMoney',
      srcIcon: '/images/payments/PerfectMoney.png',
      isActive: false,
    },
    {
      name: 'Другой',
      srcIcon: '/images/payments/Other.png',
      isActive: false,
    },
    {
      name: 'Cryptomus',
      srcIcon: '/images/payments/Cryptomus.png',
      isActive: false,
    },
  ]);

  const activePayment = shallowRef(payments.value[0]);

  function changeActive(payment: PaymentMethodType) {
    activePayment.value.isActive = false;
    payment.isActive = true;
    activePayment.value = payment;
  }
</script>

<template>
  <div>
    <div class="text-sm sm:text-xl">Выберите способ оплаты</div>
    <div
      class="grid h-[10.6875rem] grid-cols-[repeat(auto-fill,minmax(8.8125rem,1fr))] gap-4 overflow-y-scroll px-[0.25rem] pb-[0.25rem] pt-[0.3125rem] scrollbar scrollbar-track-white scrollbar-thumb-dark-25 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-[6.25rem] sm:h-[13.375rem] sm:grid-cols-5"
    >
      <PaymentMethod
        v-for="payment in payments"
        :key="payment.name"
        :payment="payment"
        @change-active="payment => changeActive(payment)"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
