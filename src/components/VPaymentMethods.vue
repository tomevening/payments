<script setup lang="ts">
  import VPaymentMethod from '@/components/VPaymentMethod.vue';
  import type { ECurrency } from '@/enums';
  import { type TPaymentMethod } from '@/types';
  import { computed, shallowRef, watch, type ShallowRef } from 'vue';

  const props = defineProps<{
    chosenPaymentMethod: ECurrency;
    paymentMethods: Map<ECurrency, TPaymentMethod[]>;
  }>();

  const paymentsToShow = computed(() =>
    props.paymentMethods.get(props.chosenPaymentMethod),
  );

  const currentlyActivePayment: ShallowRef<TPaymentMethod | null> =
    shallowRef(null);

  watch(
    () => props.chosenPaymentMethod,
    () => {
      const activeArray = props.paymentMethods.get(props.chosenPaymentMethod);
      if (activeArray === undefined) return;
      changeActive(activeArray[0]);
    },
    { immediate: true },
  );

  function changeActive(payment: TPaymentMethod) {
    if (currentlyActivePayment.value)
      currentlyActivePayment.value.isActive = false;
    payment.isActive = true;
    currentlyActivePayment.value = payment;
  }
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
        v-for="payment in paymentsToShow"
        :key="payment.name"
        :payment="payment"
        @change-active="payment => changeActive(payment)"
      />
      <!-- <VPaymentMethod
        v-for="payment in currentPaymentsArray"
        :key="payment.name"
        :payment="payment"
        @change-active="payment => changeActive(payment)"
      /> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
