<script setup lang="ts">
  import BalanceText from './BalanceText.vue';
  import CountriesInfo from './CountriesInfo.vue';
  import CurrenciesOptions from './CurrenciesOptions.vue';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';
  import PaymentMethods from './PaymentMethods.vue';
  import PaymentsOptions from './PaymentsOptions.vue';
</script>

<template>
  <div class="mt-[1.5625rem] px-[0.9375rem] font-roboto sm:mt-10">
    <LayoutWidthLimiter>
      <BalanceText />
      <CurrenciesOptions class="mt-[0.9375rem] sm:mt-[1.875rem]" />
      <PaymentMethods class="mt-[1.25rem] sm:mt-[1.875rem]" />
      <CountriesInfo class="mt-[0.625rem] sm:mt-[0.9375rem]" />
      <PaymentsOptions
        class="mb-[1.5625rem] mt-[1.25rem] sm:mb-[5rem] sm:mt-[1.875rem]"
      />
    </LayoutWidthLimiter>
  </div>
</template>

<style lang="scss"></style>
