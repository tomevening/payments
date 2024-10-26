<script setup lang="ts"></script>

<template>
  <div
    class="mt-[0.9375rem] flex items-center gap-[0.1875rem] text-sm sm:mt-[1.875rem] sm:text-xl"
  >
    <div>Выберите валюту оплаты</div>
    <div>
      <img
        class="ml-[0.5312rem] hidden h-[0.875rem] sm:inline-block"
        src="/images/Question.svg"
      />
    </div>
  </div>

  <div
    class="mt-[0.625rem] inline-flex flex-col justify-start gap-[0.875rem] sm:mt-[0.9375rem] sm:flex-row sm:items-center sm:gap-4"
  >
    <div
      class="relative flex h-3 max-w-max items-center gap-[0.5rem] rounded-xl px-[1.375rem] py-[1.5rem] leading-none shadow-[0_0_15px_0px_rgba(0,0,0,0.06)] sm:h-[4.25rem] sm:gap-[0.625rem] sm:rounded-2xl sm:px-6 sm:py-4"
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
          src="/images/downArrow.svg"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
