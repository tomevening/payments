<script setup lang="ts">
  import PaymentMethod from '@/components/PaymentMethod.vue';
  import { ref, type Ref } from 'vue';

  const payments = [
    'Картой РФ',
    'Картой МИР',
    'СБП',
    'Payeer',
    'SteamPay',
    'Мегафон',
    'Билайн',
    'Теле2',
    'PayPal',
    'Stripe',
    'FKWallet',
    'Lava',
    'Volet',
    'PerfectMoney',
    'Другой',
    'Cryptomus',
  ];

  const money: Ref<number | ''> = ref('');

  function setMoney(amount: number) {
    money.value = amount;
  }
</script>

<template>
  <div class="px-10 my-10 font-roboto">
    <div class="mx-auto max-w-[74.375rem]">
      <div class="inline-block text-4xl font-bold">
        Пополните баланс,
        <span class="text-dark-300 font-medium">
          чтобы получить номер для приёма смс
        </span>
      </div>

      <div class="mt-[1.875rem] text-xl flex items-center gap-[0.1875rem]">
        <span>Выберите валюту оплаты</span>
        <span
          ><img
            class="h-[0.875rem] ml-[0.5312rem]"
            src="/images/Question.svg"
        /></span>
      </div>

      <div class="flex justify-start items-center gap-4 mt-[0.9375rem]">
        <div
          style="box-shadow: 0px 0px 15px 0px #0000000f"
          class="h-[4.25rem] px-6 py-4 rounded-2xl relative flex items-center gap-[0.625rem] leading-none"
        >
          <div
            class="absolute top-[0.1875rem] right-[0.1875rem] bg-gradient-to-r from-fulvous-600 to-fulvous-300 text-white py-[0.125rem] px-[0.375rem] rounded-full text-[0.526rem]"
          >
            Рекомендуем
          </div>

          <img
            class="h-6 w-6"
            src="/images/Bitcoin.svg"
          />
          Криптовалюты
        </div>
        <div
          style="box-shadow: 0px 0px 15px 0px #0000000f"
          class="h-[4.25rem] px-6 py-4 rounded-2xl relative flex items-center gap-[1.25rem] leading-none"
        >
          <div class="font-medium flex items-center gap-3">
            <img
              class="size-[1.75rem]"
              src="/images/flagRound.svg"
            />
            RUB
          </div>
          <div class="bg-transparent-10 w-[0.0625rem] h-[3.25rem]"></div>
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

      <div class="text-xl mt-[1.875rem]">Выберите способ оплаты</div>

      <div class="grid grid-cols-5 gap-4 h-40 overflow-y-auto mt-[0.3125rem]">
        <PaymentMethod
          v-for="payment in payments"
          :key="payment"
          :text="payment"
        />
      </div>
      <div class="flex items-center mt-2 text-sm font-medium">
        <img
          class="inline-block h-4 mr-1 pt-[2px]"
          src="/images/Ex.png"
        />
        Внимание, при нажатии раскрывается информация про страны
      </div>
      <div class="mt-3">Укажите сумму платежа</div>
      <input
        v-model="money"
        class="my-2 w-full shadow-xs border rounded-lg p-3 text-sm"
        placeholder="Минимальная сумма платежа: 1.000₽"
      />
      <div class="inline-block font-medium text-xs text-zinc-500">
        <input
          class="mr-2 bg-neutral-100 border-0 rounded-xl px-2 py-1"
          type="button"
          @click="setMoney(1000)"
          value="1.000₽"
        />
        <input
          class="mr-2 bg-neutral-100 border-0 rounded-xl px-2 py-1"
          type="button"
          @click="setMoney(2000)"
          value="2.000₽"
        />
        <input
          class="mr-2 bg-neutral-100 border-0 rounded-xl px-2 py-1"
          type="button"
          @click="setMoney(5000)"
          value="5.000₽"
        />
        <input
          class="mr-2 bg-neutral-100 border-0 rounded-xl px-2 py-1"
          type="button"
          @click="setMoney(10000)"
          value="10.000₽"
        />
        <input
          class="mr-2 bg-neutral-100 border-0 rounded-xl px-2 py-1"
          type="button"
          @click="setMoney(20000)"
          value="20.000₽"
        />
        <input
          class="mr-2 bg-neutral-100 border-0 rounded-xl px-2 py-1"
          type="button"
          @click="setMoney(50000)"
          value="50.000₽"
        />
      </div>
      <input
        class="w-full my-4 bg-custom-4 border-0 rounded-xl py-3 text-gray-100"
        type="button"
        value="Оплатить"
      />
    </div>
  </div>
</template>

<style lang="scss">
  // * {
  //   @apply outline outline-red-500;
  // }
</style>
