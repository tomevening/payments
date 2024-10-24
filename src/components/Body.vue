<script setup lang="ts">
  import PaymentMethod from '@/components/PaymentMethod.vue';
  import PaymentTemplate from '@/components/PaymentTemplate.vue';
  import { type PaymentMethod as PaymentMethodType } from '@/types';
  import { ref, type Ref } from 'vue';

  const payments: PaymentMethodType[] = [
    {
      name: 'Картой РФ',
      srcIcon: '/images/payments/RUCard.png',
    },
    {
      name: 'Картой МИР',
      srcIcon: '/images/payments/MirCard.png',
    },
    {
      name: 'СБП',
      srcIcon: '/images/payments/СБП.png',
    },
    {
      name: 'Payeer',
      srcIcon: '/images/payments/Payeer.png',
    },
    {
      name: 'SteamPay',
      srcIcon: '/images/payments/SteamPay.png',
    },
    {
      name: 'Мегафон',
      srcIcon: '/images/payments/Мегафон.png',
    },
    {
      name: 'Билайн',
      srcIcon: '/images/payments/Билайн.png',
    },
    {
      name: 'Теле2',
      srcIcon: '/images/payments/Теле2.png',
    },
    {
      name: 'PayPal',
      srcIcon: '/images/payments/PayPal.png',
    },
    {
      name: 'Stripe',
      srcIcon: '/images/payments/Stripe.png',
    },
    {
      name: 'FKWallet',
      srcIcon: '/images/payments/FKWallet.png',
    },
    {
      name: 'Lava',
      srcIcon: '/images/payments/Lava.png',
    },
    {
      name: 'Volet',
      srcIcon: '/images/payments/Volet.png',
    },
    {
      name: 'PerfectMoney',
      srcIcon: '/images/payments/PerfectMoney.png',
    },
    {
      name: 'Другой',
      srcIcon: '/images/payments/Other.png',
    },
    {
      name: 'Cryptomus',
      srcIcon: '/images/payments/Cryptomus.png',
    },
  ];
  const money: Ref<number | ''> = ref('');

  const templates = [1000, 2000, 5000, 10000, 20000, 50000];

  function setMoney(amount: number) {
    money.value = amount;
  }
</script>

<template>
  <div class="px-[0.9375rem] py-[1.5625rem] font-roboto sm:mt-10 sm:px-10">
    <div class="mx-auto max-w-[74.375rem]">
      <div class="text-lg font-bold sm:text-4xl">
        Пополните баланс,
        <span class="font-medium text-dark-300">
          чтобы получить номер для приёма смс
        </span>
      </div>

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
          style="box-shadow: 0px 0px 15px 0px #0000000f"
          class="relative flex h-3 max-w-max items-center gap-[0.5rem] rounded-xl px-[1.375rem] py-[1.5rem] leading-none sm:h-[4.25rem] sm:gap-[0.625rem] sm:rounded-2xl sm:px-6 sm:py-4"
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
          style="box-shadow: 0px 0px 15px 0px #0000000f"
          class="text-[0.8125rem relative flex h-3 max-w-max items-center gap-[0.5rem] rounded-xl px-[1.375rem] py-[1.5rem] leading-none sm:h-[4.25rem] sm:gap-[1.25rem] sm:rounded-2xl sm:px-6 sm:py-4 sm:text-sm"
        >
          <div class="flex items-center gap-3 font-medium">
            <img
              class="size-[1.75rem]"
              src="/images/flagRound.svg"
            />
            RUB
          </div>
          <div
            class="h-10 w-[0.0625rem] bg-transparent-10 sm:h-[3.25rem]"
          ></div>
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

      <div class="mt-[1.25rem] text-sm sm:mt-[1.875rem] sm:text-xl">
        Выберите способ оплаты
      </div>

      <div
        class="scrollbar-thumb-dark-25 mt-[0.3125rem] grid h-[10.6875rem] grid-cols-[repeat(auto-fill,minmax(8.8125rem,1fr))] gap-4 overflow-y-scroll scrollbar scrollbar-track-white scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-w-1 scrollbar-h-[6.25rem] sm:h-[13.375rem] sm:grid-cols-5"
      >
        <PaymentMethod
          v-for="payment in payments"
          :key="payment.name"
          :text="payment.name"
          :srcIcon="payment.srcIcon"
        />
      </div>
      <div
        class="mt-[0.625rem] flex items-center gap-[0.375rem] text-xs font-medium sm:mt-[0.9375rem] sm:text-sm"
      >
        <img
          class="size-[0.875rem]"
          src="/images/Ex.png"
        />
        <div>Внимание, при нажатии раскрывается информация про страны</div>
        <img
          class="size-[0.875rem]"
          src="/images/downArrow.svg"
        />
      </div>
      <div
        class="mt-[1.25rem] text-sm text-dark-650 sm:mt-[1.875rem] sm:text-xl"
      >
        Укажите сумму платежа
      </div>
      <input
        v-model="money"
        class="mt-[0.625rem] w-full rounded-lg border border-transparent-10 p-4 sm:mt-[0.9375rem] sm:rounded-xl sm:px-[1.25rem] sm:py-4"
        placeholder="Минимальная сумма платежа: 1.000₽"
      />
      <div
        class="mt-[0.625rem] flex items-center justify-start gap-2.5 text-sm font-medium text-transparent-60"
      >
        <PaymentTemplate
          :sum="template"
          @choose-sum="setMoney"
          v-for="template in templates"
          :key="template"
        />
      </div>

      <input
        class="mt-[1.875rem] w-full rounded-xl border-0 bg-gradient-to-r from-fulvous-600 to-fulvous-300 py-5 text-lg font-medium text-white sm:mb-[6.25rem] sm:text-xl"
        type="button"
        value="Оплатить"
      />

      <div class="mt-[1.25rem] text-xs text-dark-650 sm:hidden">
        Зачисление до 6 минут
      </div>
      <div class="mt-2 text-xs text-dark-650 sm:hidden">
        Эта платежная система не принимает платежи из стран:
      </div>
      <div class="mb-[1.5625rem] mt-[0.125] text-xs text-dark-650 sm:hidden">
        Армения, Австрия, Азербайджан, Бельгия, Болгария, Кипр, Чешская
        Республика, Дания, Эстония, Финляндия, Франция, Грузия, Германия,
        Греция, Венгрия, Исландия, Ирландия, Испания, Италия, Кыргызстан,
        Латвия, Литва, Люксембург, Мальта, Румыния, Сербия и Черногория,
        Словакия, Словения, Швеция, Швейцария, Таджикистан, Турция,
        Туркменистан, Соединенное Королевство, Узбекистан, Австралия, Норвегия,
        Израиль, Португалия, Нидерланды, Саудовская Аравия, Объединенные
        Арабские Эмираты, Сингапур, Новая Зеландия, Хорватия, Польша,
        Бруней-Даруссалам, Перу, Южная Корея, Катар, Египет.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  // * {
  //   @apply outline outline-red-500;
  // }
</style>
