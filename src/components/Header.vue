<script setup lang="ts">
  import { type Link } from '@/types';

  const topHeaderLinks: Link[] = [
    { text: 'Цены', address: 'http://localhost:5173/' },
    { text: 'API', address: 'http://localhost:5173/' },
    { text: 'Временные номера для смс', address: 'http://localhost:5173/' },
  ];

  const bottomHeaderLinks: Link[] = [
    { text: 'Аренда номеров от 1 дня', address: 'http://localhost:5173/' },
    { text: 'Аренда на 20 минут', address: 'http://localhost:5173/' },
    { text: 'Пригласить друга', address: 'http://localhost:5173/' },
    { text: 'API', address: 'http://localhost:5173/' },
    { text: 'Служба поддержки', address: 'http://localhost:5173/' },
  ];

  const bottomHeaderLinksMobile: Link[] = [
    { text: 'Купить номер', address: 'http://localhost:5173/' },
    { text: 'История транзакций', address: 'http://localhost:5173/' },
  ];
</script>

<template>
  <div
    class="bg-gradient-to-r from-dark-900 to-dark-600 sm:py-[0.7175rem] sm:px-10 py-[0.5625rem] pl-[0.5rem] pr-[0.9375rem]"
  >
    <div class="flex justify-between mx-auto max-w-[74.375rem]">
      <div class="flex items-center justify-start gap-[0.9375rem]">
        <div class="flex items-center justify-center">
          <img
            class="size-8 mr-[0.625rem]"
            src="/images/SMS.svg"
          />
          <a
            href="http://localhost:5173/"
            class="text-white text-[1rem] tracking-[0.075rem] font-medium font-roboto"
          >
            SMS SERVICE
          </a>
        </div>

        <div
          class="bg-gray-400 w-[0.0625rem] h-[1.875rem] pb-[0.0431rem]"
        ></div>
        <div
          class="text-white text-[0.6rem] font-roboto pb-[0.0431rem] tracking-[0.0781rem]"
        >
          АРЕНДА НОМЕРА <br />
          ДЛЯ ПРИЕМА СМС
        </div>
      </div>
      <a
        class="sm:hidden py-[0.3125rem] px-[0.8125rem] border rounded border-transparent-10"
        href="http://localhost:5173/"
      >
        <img
          src="/images/menu.svg"
          class="size-[1.875rem]"
        />
      </a>
      <div class="hidden sm:flex sm:items-center sm:justify-left sm:gap-4">
        <div
          class="flex items-center justify-center gap-8 text-neutral-400 text-[0.8125rem] font-roboto"
        >
          <a
            v-for="link in topHeaderLinks"
            key="text"
            :href="link.address"
            >{{ link.text }}</a
          >
        </div>
        <div class="bg-zinc-500 w-[0.06225rem] h-[3.4537rem]"></div>
        <div
          class="flex items-center justify-center text-neutral-400 text-[0.8125rem] font-sans"
        >
          <a
            href="http://localhost:5173/"
            class="flex flex-col items-center gap-[2px] mx-4"
          >
            <img
              class="h-[1.22rem]"
              src="/images/login.svg"
            />
            Авторизация
          </a>

          <a
            href="http://localhost:5173/"
            class="flex flex-col items-center gap-[2px] mx-4"
          >
            <img
              class="h-[1.22rem]"
              src="/images/register.svg"
            />
            Регистрация
          </a>
          <a
            href="http://localhost:5173/"
            class="bg-zinc-500 rounded-[0.3125rem] flex items-center justify-center gap-2 px-2 py-3"
          >
            <img
              class="h-4"
              src="/images/flag.svg"
            />
            <div class="text-white">RU</div>
            <div class="bg-white h-2 w-2"></div>
          </a>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-gradient-to-r from-dark-550 to-dark-400 py-[0.625rem] px-[1.9375rem] text-dark-100 font-roboto sm:py-[1.25rem] sm:px-[0.9375rem]"
  >
    <div
      class="sm:hidden flex items-center gap-[1.8925rem] font-medium text-[0.8125rem]"
    >
      <a
        v-for="link in bottomHeaderLinksMobile"
        :key="link.text"
        :href="link.address"
        >{{ link.text }}</a
      >
    </div>
    <div
      class="hidden sm:flex items-center justify-end gap-12 text-[0.9rem] mx-auto max-w-[74.375rem]"
    >
      <a
        v-for="link in bottomHeaderLinks"
        :key="link.text"
        :href="link.address"
        >{{ link.text }}</a
      >
    </div>
  </div>
</template>

<style lang="scss"></style>
