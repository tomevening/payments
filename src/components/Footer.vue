<script setup lang="ts">
  import type { Link } from '@/types';

  const footerLinks: Link[] = [
    { text: 'Цены на номера', address: 'http://localhost:5173/' },
    { text: 'Скидки на номера', address: 'http://localhost:5173/' },
    { text: 'Долгосрочная аренда', address: 'http://localhost:5173/' },
    { text: 'Беслпатные номера', address: 'http://localhost:5173/' },
    { text: 'API подключение', address: 'http://localhost:5173/' },
    { text: 'Реферальная программа', address: 'http://localhost:5173/' },
    { text: 'Владельцем софта', address: 'http://localhost:5173/' },
    { text: 'Новости сервиса', address: 'http://localhost:5173/' },
    { text: 'Политика конфиденциальности', address: 'http://localhost:5173/' },
    { text: 'Политика доставки', address: 'http://localhost:5173/' },
    { text: 'Политика возврата', address: 'http://localhost:5173/' },
    { text: 'Условия оказания услуг', address: 'http://localhost:5173/' },
    { text: 'Связаться с поддержкой', address: 'http://localhost:5173/' },
    { text: 'Вопросы и ответы', address: 'http://localhost:5173/' },
  ];
</script>

<template>
  <div class="bg-black px-3 py-6 font-roboto sm:px-[0.3rem]">
    <div
      class="mx-auto flex max-w-[74.375rem] flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="flex items-center justify-start gap-[0.9375rem]">
        <div class="flex items-center justify-center">
          <img
            class="mr-[0.625rem] size-8"
            src="/images/SMS.svg"
          />
          <a
            href="http://localhost:5173/"
            class="font-roboto text-[1rem] font-medium tracking-[0.075rem] text-white"
          >
            SMS SERVICE
          </a>
        </div>

        <div
          class="h-[1.875rem] w-[0.0625rem] bg-gray-400 pb-[0.0431rem]"
        ></div>
        <div
          class="pb-[0.0431rem] font-roboto text-[0.6rem] tracking-[0.0781rem] text-white"
        >
          АРЕНДА НОМЕРА <br />
          ДЛЯ ПРИЕМА СМС
        </div>
      </div>
      <!-- <div class="flex items-center justify-start gap-[1.125rem] py-[0.9rem]">
        <div class="flex items-center gap-[0.625rem]">
          <img
            class="size-8"
            src="/images/SMS.svg"
          />
          <div class="text-lg font-medium tracking-[0.175rem] text-gray-100">
            SMS SERVICE
          </div>
        </div>
        <div class="h-[1.875rem] w-[0.0625rem] bg-white"></div>
        <div class="text-[0.6rem] font-light tracking-[0.0781rem] text-white">
          АРЕНДА НОМЕРА ДЛЯ <br />ПРИЁМА SMS
        </div>
      </div> -->

      <div
        class="hidden items-center justify-end gap-8 text-sm text-white sm:flex"
      >
        <a
          href="http://localhost:5173/"
          class="flex flex-col items-center gap-[0.2275rem] py-2"
        >
          <img
            class="h-[1.3125rem]"
            src="/images/Login.png"
          />
          Авторизация
        </a>
        <div class="h-[3.8125rem] w-[0.0625rem] bg-dark-200"></div>

        <a
          href="http://localhost:5173/"
          class="flex flex-col items-center gap-[0.2275rem] py-2"
        >
          <img
            class="h-[1.3125rem]"
            src="/images/Register.png"
          />
          Регистрация
        </a>
      </div>
    </div>
    <div class="mt-[0.625rem] flex gap-[1.25rem] text-sm text-white sm:hidden">
      <div class="flex items-center gap-[0.5625rem]">
        Авторизация
        <img
          class="h-[0.625rem]"
          src="/images/Login.png"
        />
      </div>
      <div class="flex items-center gap-[0.5625rem]">
        Регистрация
        <img
          class="h-[0.625rem]"
          src="/images/Register.png"
        />
      </div>
    </div>
  </div>
  <div class="h-[0.0625rem] bg-dark-350"></div>
  <div
    class="bg-black px-[1.3125rem] py-[0.8125rem] text-[0.8rem] font-medium text-dark-100 sm:px-[0.3rem] sm:py-7"
  >
    <div
      class="flex flex-col gap-[0.625rem] sm:mx-auto sm:grid sm:max-w-[74.375rem] sm:grid-flow-col sm:grid-rows-4 sm:gap-x-[2.9244rem] sm:gap-y-[0.5937rem]"
    >
      <a
        v-for="link in footerLinks"
        key="text"
        :href="link.address"
        >{{ link.text }}</a
      >
    </div>
  </div>
  <div class="h-[0.0625rem] bg-dark-350"></div>
  <div class="flex justify-center bg-black py-2 text-[0.625rem] text-dark-50">
    <div class="mx-auto max-w-[74.375rem] p-4">
      SMS SERVICE support@sms-activation-service.com | LLP "Opejs" 231040000683
    </div>
  </div>
</template>

<style lang="scss"></style>
