<script setup lang="ts">
  import { ECurrency } from '@/enums';
  import { useStoreMain } from '@/stores';
  import type { TFiat, TPaymentMethod } from '@/types';
  import { computed, shallowReactive, type ShallowReactive } from 'vue';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';
  import VBalanceText from './VBalanceText.vue';
  import VButtonSubmit from './VButtonSubmit.vue';
  import VCountriesInfo from './VCountriesInfo.vue';
  import VFiatOptions from './VFiatOptions.vue';
  import VPaymentMethods from './VPaymentMethods.vue';
  import VPaymentTemplates from './VPaymentTemplates.vue';

  const storeMain = useStoreMain();

  type TPaymentDetails = ShallowReactive<{
    paymentMethod: TPaymentMethod | null;
    approach: ECurrency;
    fiat: TFiat | null;
    amount: number | null;
  }>;

  const paymentDetails: TPaymentDetails = shallowReactive({
    paymentMethod: null,
    approach: ECurrency.CRYPTO,
    fiat: null,
    amount: null,
  });

  const chosenPaymentApproach = computed(() => paymentDetails.approach);

  function extractAndSetFiats(approach: ECurrency, fiat: TFiat | null) {
    paymentDetails.approach = approach;
    paymentDetails.fiat = fiat;
  }

  function setPaymentMethod(paymentMethod: TPaymentMethod) {
    paymentDetails.paymentMethod = paymentMethod;
  }

  function setMoneyAmount(amount: number) {
    paymentDetails.amount = amount;
  }

  function confirmPayment() {
    if (paymentDetails.amount === null) {
      alert('Please choose a sum');
      return;
    }
    if (paymentDetails.amount <= 0) {
      alert('Please choose positive number as sum');
      return;
    }
    if (paymentDetails.approach === ECurrency.CRYPTO) {
      alert(
        `Payment accepted. \n \nChosen payment method: ${paymentDetails.paymentMethod?.name}. Chosen sum: ${paymentDetails.amount} roubles`,
      );
      return;
    }
    if (paymentDetails.approach === ECurrency.CASH) {
      alert(
        `Payment accepted. \n \nChosen fiat: ${paymentDetails.fiat?.name}. Chosen payment method: ${paymentDetails.paymentMethod?.name}. Chosen sum: ${paymentDetails.amount} roubles`,
      );
      return;
    }
  }
</script>

<template>
  <main class="mt-[1.5625rem] px-[0.9375rem] font-roboto sm:mt-10">
    <LayoutWidthLimiter>
      <VBalanceText />
      <VFiatOptions
        class="mt-[0.9375rem] sm:mt-[1.875rem]"
        :fiats="storeMain.fiats"
        @update-fiat-options="extractAndSetFiats"
      />
      <VPaymentMethods
        :chosen-payment-approach="chosenPaymentApproach"
        class="mt-[1.25rem] sm:mt-[1.875rem]"
        :payment-methods="storeMain.paymentMethods"
        @update-chosen-payment="setPaymentMethod"
      />
      <VCountriesInfo class="mt-[0.625rem] sm:mt-[0.9375rem]" />
      <VPaymentTemplates
        class="mt-[1.25rem] sm:mt-[1.875rem]"
        @payment-amount-changed="setMoneyAmount"
      />
      <VButtonSubmit
        class="mb-[1.5625rem] sm:mb-[5rem]"
        @confirm-payment="confirmPayment"
      />
    </LayoutWidthLimiter>
  </main>
</template>

<style lang="scss"></style>
