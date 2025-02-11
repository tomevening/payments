<script setup lang="ts">
  import VFiat from '@/components/VFiat.vue';
  import { ECurrency } from '@/enums';
  import type { TFiat } from '@/types';
  import { useElementBounding } from '@vueuse/core';
  import { ref, shallowRef, watchEffect } from 'vue';

  const el = ref(null);
  const { top, left } = useElementBounding(el);

  const props = defineProps<{
    fiats: TFiat[];
  }>();

  const fiatChosen = shallowRef<TFiat>(props.fiats[0]);
  const approachChosen = shallowRef<ECurrency>(ECurrency.CASH);

  function switchToFiats() {
    toggleFiats();

    approachChosen.value = ECurrency.CASH;
  }

  function switchToCrypto() {
    hideFiats();
    approachChosen.value = ECurrency.CRYPTO;
  }

  const showFiats = shallowRef(false);

  function hideFiats() {
    showFiats.value = false;
  }

  function toggleFiats() {
    showFiats.value = !showFiats.value;
  }

  const emit = defineEmits<{
    (
      event: 'update-fiat-options',
      chosenApproach: ECurrency,
      chosenFiat: TFiat | null,
    ): void;
  }>();

  watchEffect(() =>
    emit('update-fiat-options', approachChosen.value, fiatChosen.value),
  );

  function changeActive(fiat: TFiat) {
    fiatChosen.value = fiat;
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
      :class="[
        'fixed inset-0 m-0 mt-[0.875rem] max-w-[15.4375rem]',
        'rounded-xl px-2 py-3 text-sm font-medium text-dark-650 shadow-[0_0_20px_0px_rgba(0,0,0,0.08)]',
      ]"
      popover
      :style="{ top: `${top}px`, left: `${left}px` }"
    >
      Тут выбирается способ которым вы будете оплачивать
    </div>

    <div
      :class="[
        'mt-[0.625rem] inline-flex cursor-pointer flex-col justify-start gap-[0.875rem]',
        'sm:mt-[0.9375rem] sm:flex-row sm:items-center sm:gap-4',
      ]"
    >
      <!-- Crypto button -->
      <div
        class=""
        :class="[
          'relative h-3 max-w-max rounded-xl px-[1.375rem] py-[1.5rem] leading-none shadow-[0_0_15px_0px_rgba(0,0,0,0.06)]',
          'flex items-center gap-[0.5rem]',
          'sm:h-[4.25rem] sm:gap-[0.625rem] sm:rounded-2xl sm:px-6 sm:py-4',
        ]"
        @click="switchToCrypto"
      >
        <div
          :class="[
            'absolute right-[0.1875rem] top-[0.1875rem] rounded-full px-[0.3125rem] py-[0.125rem] text-[0.5625rem] text-white',
            'sm:px-[0.375rem] sm:text-[0.625rem]',
            'bg-gradient-to-r from-fulvous-600 to-fulvous-300',
          ]"
        >
          Рекомендуем
        </div>

        <img
          class="size-6"
          src="/images/Bitcoin.svg"
        />
        <div class="text-[0.8125rem] sm:text-sm">Криптовалюты</div>
      </div>

      <!-- Fiats button -->
      <div
        :class="[
          'relative flex h-3 max-w-max items-center gap-[0.5rem]',
          'rounded-xl px-[1.375rem] py-[1.5rem] text-[0.8125rem] leading-none shadow-[0_0_15px_0px_rgba(0,0,0,0.06)]',
          'sm:h-[4.25rem] sm:gap-[1.25rem] sm:rounded-2xl sm:px-6 sm:py-4 sm:text-sm',
        ]"
        @click="switchToFiats"
      >
        <div class="flex items-center gap-3 font-medium">
          <img
            class="size-[1.75rem]"
            :src="fiatChosen.srcIcon"
          />
          <div class="w-[2.375rem]">
            {{ fiatChosen.name }}
          </div>
        </div>
        <div class="h-10 w-[0.0625rem] bg-transparent-10 sm:h-[3.25rem]"></div>
        <div class="flex items-center gap-[0.75rem]">
          <img
            class="size-6"
            src="/images/otherCurrency.svg"
          />
          Другие валюты
          <img
            class="size-4"
            :class="[showFiats ? 'rotate-180' : '']"
            src="/images/downArrow.svg"
          />
        </div>
      </div>
    </div>

    <!-- Fiats -->
    <div v-if="showFiats">
      <div
        class=""
        :class="[
          'grid max-h-[10.6875rem] grid-cols-[repeat(auto-fill,minmax(5.75rem,1fr))] gap-2 overflow-y-scroll px-[0.25rem] pb-[0.25rem] pt-[0.3125rem]',
          'scrollbar scrollbar-track-white scrollbar-thumb-dark-25 scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-[6.25rem]',
          'sm:h-[13.375rem] sm:grid-cols-[repeat(auto-fill,minmax(6.9375rem,1fr))]',
        ]"
      >
        <VFiat
          v-for="fiat in fiats"
          :key="fiat.name"
          :class="{
            'rounded-2xl outline outline-2 outline-fulvous-300':
              fiat === fiatChosen,
          }"
          :fiat="fiat"
          @change-active="changeActive"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
