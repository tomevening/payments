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

  // const money: Ref<number> | '' = '';
  const money: Ref<number> | Ref<string> = ref('');
  // const money = ref(0);

  function setMoney(amount: number) {
    money.value = amount;
  }
</script>

<template>
  <div class="mx-auto w-8/12">
    <div class="inline-block mt-6 text-2xl font-semibold">
      Пополните баланс,
    </div>
    <div class="inline-block ml-[0.25rem] text-2xl text-custom-3">
      чтобы получить номер для приёма смс
    </div>
    <div class="mt-4 text-sm">Выберите валюту оплаты</div>

    <div class="mb-2">
      <img
        class="h-12 inline-block shadow-xs border rounded-lg mt-4"
        src="/images/Cryptocurrency.png"
      />
      <img
        class="h-12 inline-block shadow-xs border rounded-lg ml-2 mt-4"
        src="/images/RubAndOthers.png"
      />
    </div>

    <div class="grid grid-cols-5 gap-4 h-40 overflow-y-auto">
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
      class="w-full mt-4 bg-custom-4 border-0 rounded-xl py-3 text-gray-100"
      type="button"
      value="Оплатить"
    />
  </div>
</template>

<style lang="scss"></style>
