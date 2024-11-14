<script setup lang="ts">
  import VPaymentMethod from '@/components/VPaymentMethod.vue';
  import { ECurrency } from '@/enums';
  import { type TPaymentMethod } from '@/types';
  import { computed, shallowRef, watchEffect } from 'vue';

  const props = defineProps<{
    chosenPaymentApproach: ECurrency;

    paymentMethods: Map<ECurrency, TPaymentMethod[]>;
  }>();

  const paymentsToShow = computed(() =>
    props.paymentMethods.get(props.chosenPaymentApproach),
  );

  const activePayment = shallowRef<TPaymentMethod | null>(null);

  const emit = defineEmits<{
    (event: 'update-chosen-payment', chosenPayment: TPaymentMethod): void;
  }>();

  watchEffect(() => {
    const defaultPaymentMethod = props.paymentMethods.get(
      props.chosenPaymentApproach,
    );

    if (!defaultPaymentMethod) return;

    activePayment.value = defaultPaymentMethod[0];
  });

  function changeActive(payment: TPaymentMethod) {
    if (!payment) return;
    activePayment.value = payment;
    emit('update-chosen-payment', payment);
  }
  watchEffect(() => {
    if (activePayment.value !== null)
      emit('update-chosen-payment', activePayment.value);
  });
</script>

<template>
  <div>
    <div class="text-sm sm:text-xl">Выберите способ оплаты</div>
    <div
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
        :class="{
          'rounded-2xl outline outline-2 outline-fulvous-300':
            payment === activePayment,
        }"
        :payment="payment"
        @change-active="changeActive"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
