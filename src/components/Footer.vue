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
  <div class="bg-black py-6 font-roboto">
    <div
      class="mx-auto flex max-w-[74.375rem] items-center justify-between px-[0.3rem]"
    >
      <div class="flex items-center justify-start gap-[1.125rem] py-[0.9rem]">
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
      </div>

      <div class="flex items-center justify-end gap-8 text-sm text-white">
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
  </div>
  <div class="h-[0.0625rem] bg-dark-350"></div>
  <div
    class="bg-black px-[0.3rem] py-7 text-[0.8rem] font-medium text-dark-100"
  >
    <div
      class="mx-auto grid max-w-[74.375rem] grid-flow-col grid-rows-4 gap-x-[2.9244rem] gap-y-[0.5937rem]"
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
    SMS SERVICE support@sms-activation-service.com | LLP "Opejs" 231040000683
  </div>
</template>

<style lang="scss"></style>
