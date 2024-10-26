<script setup lang="ts">
  import BanalceText from './BanalceText.vue';
  import CountriesInfo from './CountriesInfo.vue';
  import MobileInfo from './MobileInfo.vue';
  import PaymentMethods from './PaymentMethods.vue';
  import PaymentsOptions from './PaymentsOptions.vue';

  import CurrenciesOptions from './CurrenciesOptions.vue';
</script>

<template>
  <div class="px-[0.9375rem] py-[1.5625rem] font-roboto sm:mt-10 sm:px-10">
    <div class="mx-auto max-w-[74.375rem]">
      <BanalceText />

      <CurrenciesOptions />

      <PaymentMethods />

      <CountriesInfo />

      <PaymentsOptions />

      <MobileInfo />
    </div>
  </div>
</template>

<style lang="scss"></style>
