<script setup lang="ts">
  import VPaymentMethod from '@/components/VPaymentMethod.vue';
  import type { ECurrency } from '@/enums';
  import { type TPaymentMethod } from '@/types';
  import { shallowRef, watch, watchEffect, type ShallowRef } from 'vue';

  const props = defineProps<{
    chosenPayment: ECurrency;
    paymentMethods: Map<ECurrency, TPaymentMethod[]>;
  }>();

  const currentPaymentsArray: ShallowRef<TPaymentMethod[] | []> = shallowRef(
    props.paymentMethods.get(props.chosenPayment) ?? shallowRef([]),
  );

  const activePayment = shallowRef(currentPaymentsArray.value[0]);

  function changeActive(payment: TPaymentMethod) {
    activePayment.value.isActive = false;
    payment.isActive = true;
    activePayment.value = payment;
  }

  watchEffect(() => {
    currentPaymentsArray.value =
      props.paymentMethods.get(props.chosenPayment) ?? [];
  });

  watch(
    () => props.chosenPayment,
    () => {
      const newActivePayment = props.paymentMethods.get(
        props.chosenPayment,
      )![0];
      if (newActivePayment === undefined) return;
      changeActive(newActivePayment);
    },
  );
</script>

<template>
  <div>
    <div class="text-sm sm:text-xl">Выберите способ оплаты</div>
    <div
      class=" "
      :class="[
        'grid grid-cols-[repeat(auto-fill,minmax(8.8125rem,1fr))] gap-4',
        'scrollbar scrollbar-track-white scrollbar-thumb-dark-25 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-[6.25rem]',
        'h-[10.6875rem] overflow-y-scroll px-[0.25rem] pb-[0.25rem] pt-[0.3125rem]',
        'sm:h-[13.375rem] sm:grid-cols-5',
      ]"
    >
      <VPaymentMethod
        v-for="payment in currentPaymentsArray"
        :key="payment.name"
        :payment="payment"
        @change-active="payment => changeActive(payment)"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
