<script setup lang="ts">
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';
  import VBalanceText from './VBalanceText.vue';
  import VCountriesInfo from './VCountriesInfo.vue';
  import VFiatOptions from './VFiatOptions.vue';
  import VPaymentOptions from './VPaymentMethods.vue';
  import VPaymentsOptions from './VPaymentTemplates.vue';

  import { useStoreMain } from '@/stores';

  const storeMain = useStoreMain();
</script>

<template>
  <body class="mt-[1.5625rem] px-[0.9375rem] font-roboto sm:mt-10">
    <LayoutWidthLimiter>
      <VBalanceText />
      <VFiatOptions
        class="mt-[0.9375rem] sm:mt-[1.875rem]"
        :fiats="storeMain.fiats"
        @choose-payment="storeMain.changePaymentMethod"
      />
      <VPaymentOptions
        :chosen-payment="storeMain.chosenPayment"
        class="mt-[1.25rem] sm:mt-[1.875rem]"
        :payment-methods="storeMain.paymentMethods"
      />
      <VCountriesInfo class="mt-[0.625rem] sm:mt-[0.9375rem]" />
      <VPaymentsOptions
        class="mb-[1.5625rem] mt-[1.25rem] sm:mb-[5rem] sm:mt-[1.875rem]"
      />
    </LayoutWidthLimiter>
  </body>
</template>

<style lang="scss"></style>
