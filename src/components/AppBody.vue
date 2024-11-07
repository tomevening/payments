<script setup lang="ts">
  import BalanceText from './BalanceText.vue';
  import CountriesInfo from './CountriesInfo.vue';
  import CurrenciesOptions from './CurrenciesOptions.vue';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';
  import PaymentMethods from './PaymentMethods.vue';
  import PaymentsOptions from './PaymentsOptions.vue';

  import { useStoreMain } from '@/stores';

  const storeMain = useStoreMain();
</script>

<template>
  <body class="mt-[1.5625rem] px-[0.9375rem] font-roboto sm:mt-10">
    <LayoutWidthLimiter>
      <BalanceText />
      <CurrenciesOptions
        class="mt-[0.9375rem] sm:mt-[1.875rem]"
        :currencies="storeMain.currencies"
        @choose-payment="
          chosenPayment => storeMain.changePaymentMethod(chosenPayment)
        "
      />
      <PaymentMethods
        :chosen-payment="storeMain.chosenPayment"
        class="mt-[1.25rem] sm:mt-[1.875rem]"
        :payment-methods-arrays="storeMain.paymentMethodsArrays"
      />
      <CountriesInfo class="mt-[0.625rem] sm:mt-[0.9375rem]" />
      <PaymentsOptions
        class="mb-[1.5625rem] mt-[1.25rem] sm:mb-[5rem] sm:mt-[1.875rem]"
      />
    </LayoutWidthLimiter>
  </body>
</template>

<style lang="scss"></style>
