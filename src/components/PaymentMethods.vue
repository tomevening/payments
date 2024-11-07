<script setup lang="ts">
  import PaymentMethod from '@/components/PaymentMethod.vue';
  import { type PaymentMethod as PaymentMethodType } from '@/types';
  import { shallowRef, watch, watchEffect, type ShallowRef } from 'vue';
  import { EChosenPayment } from './../enums/chosenPayment';

  const props = defineProps<{
    chosenPayment: EChosenPayment;
    paymentMethodsArrays: Map<EChosenPayment, PaymentMethodType[]>;
  }>();

  const currentPaymentsArray: ShallowRef<PaymentMethodType[] | []> = shallowRef(
    props.paymentMethodsArrays.get(props.chosenPayment) ?? shallowRef([]),
  );

  const activePayment = shallowRef(currentPaymentsArray.value[0]);

  function changeActive(payment: PaymentMethodType) {
    activePayment.value.isActive = false;
    payment.isActive = true;
    activePayment.value = payment;
  }

  watchEffect(() => {
    currentPaymentsArray.value =
      props.paymentMethodsArrays.get(props.chosenPayment) ?? [];
  });

  watch(
    () => props.chosenPayment,
    () => {
      const newActivePayment = props.paymentMethodsArrays.get(
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
      class="grid h-[10.6875rem] grid-cols-[repeat(auto-fill,minmax(8.8125rem,1fr))] gap-4 overflow-y-scroll px-[0.25rem] pb-[0.25rem] pt-[0.3125rem] scrollbar scrollbar-track-white scrollbar-thumb-dark-25 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-[6.25rem] sm:h-[13.375rem] sm:grid-cols-5"
    >
      <PaymentMethod
        v-for="payment in currentPaymentsArray"
        :key="payment.name"
        :payment="payment"
        @change-active="payment => changeActive(payment)"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
