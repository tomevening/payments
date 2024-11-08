<script setup lang="ts">
  import VCurrency from '@/components/VCurrency.vue';
  import { EChosenPayment } from '@/enums';
  import type { TCurrency } from '@/types';
  import { useElementBounding } from '@vueuse/core';
  import { ref, shallowRef } from 'vue';

  const el = ref(null);
  const { top, left } = useElementBounding(el);

  const emit = defineEmits<{
    (event: 'choosePayment', chosenPayment: EChosenPayment): void;
  }>();

  const showCurrencies = shallowRef(false);

  const props = defineProps<{
    currencies: TCurrency[];
  }>();

  function toggleCurrencies() {
    showCurrencies.value = !showCurrencies.value;
  }

  function disableCurrencies() {
    showCurrencies.value = false;
  }

  const activeCurrency = shallowRef(props.currencies[0]);

  function changeActive(currency: TCurrency) {
    activeCurrency.value.isActive = false;
    currency.isActive = true;
    activeCurrency.value = currency;
  }
</script>

<template>
  <div>
    <div class="flex items-center gap-[0.1875rem] text-sm sm:text-xl">
      <div>Выберите валюту оплаты</div>
      <button popovertarget="my-popover">
        <img
          ref="el"
          class="ml-[0.375rem] hidden size-[0.875rem] sm:inline-block"
          src="/images/Question.svg"
        />
      </button>
    </div>

    <div
      id="my-popover"
      class="fixed inset-0 m-0 mt-[0.875rem] max-w-[15.4375rem] rounded-xl px-2 py-3 text-sm font-medium text-dark-650 shadow-[0_0_20px_0px_rgba(0,0,0,0.08)]"
      popover
      :style="{ top: `${top}px`, left: `${left}px` }"
    >
      Тут выбирается способ которым вы будете оплачивать
    </div>

    <div
      class="mt-[0.625rem] inline-flex cursor-pointer flex-col justify-start gap-[0.875rem] sm:mt-[0.9375rem] sm:flex-row sm:items-center sm:gap-4"
    >
      <div
        class="relative flex h-3 max-w-max items-center gap-[0.5rem] rounded-xl px-[1.375rem] py-[1.5rem] leading-none shadow-[0_0_15px_0px_rgba(0,0,0,0.06)] sm:h-[4.25rem] sm:gap-[0.625rem] sm:rounded-2xl sm:px-6 sm:py-4"
        @click="
          emit('choosePayment', EChosenPayment.CRYPTO), disableCurrencies()
        "
      >
        <div
          class="absolute right-[0.1875rem] top-[0.1875rem] rounded-full bg-gradient-to-r from-fulvous-600 to-fulvous-300 px-[0.3125rem] py-[0.125rem] text-[0.5625rem] text-white sm:px-[0.375rem] sm:text-[0.625rem]"
        >
          Рекомендуем
        </div>

        <img
          class="h-6 w-6"
          src="/images/Bitcoin.svg"
        />
        <div class="text-[0.8125rem] sm:text-sm">Криптовалюты</div>
      </div>
      <div
        class="text-[0.8125rem relative flex h-3 max-w-max items-center gap-[0.5rem] rounded-xl px-[1.375rem] py-[1.5rem] leading-none shadow-[0_0_15px_0px_rgba(0,0,0,0.06)] sm:h-[4.25rem] sm:gap-[1.25rem] sm:rounded-2xl sm:px-6 sm:py-4 sm:text-sm"
        @click="toggleCurrencies()"
      >
        <div class="flex items-center gap-3 font-medium">
          <img
            class="size-[1.75rem]"
            src="/images/flagRound.svg"
          />
          RUB
        </div>
        <div class="h-10 w-[0.0625rem] bg-transparent-10 sm:h-[3.25rem]"></div>
        <div class="flex items-center gap-[0.75rem]">
          <img
            class="h-6 w-6"
            src="/images/otherCurrency.svg"
          />
          Другие валюты
          <img
            class="h-[1rem] w-[1rem]"
            :class="[showCurrencies ? 'rotate-180' : '']"
            src="/images/downArrow.svg"
          />
        </div>
      </div>
    </div>

    <div
      v-if="showCurrencies"
      @click="emit('choosePayment', EChosenPayment.CASH)"
    >
      <div
        class="grid max-h-[10.6875rem] grid-cols-[repeat(auto-fill,minmax(5.75rem,1fr))] gap-2 overflow-y-scroll px-[0.25rem] pb-[0.25rem] pt-[0.3125rem] scrollbar scrollbar-track-white scrollbar-thumb-dark-25 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-[6.25rem] sm:h-[13.375rem] sm:grid-cols-[repeat(auto-fill,minmax(6.9375rem,1fr))]"
      >
        <VCurrency
          v-for="currency in currencies"
          :key="currency.name"
          :currency="currency"
          @change-active="changeActive"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
