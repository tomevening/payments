<script setup lang="ts">
  import { type Link } from '@/types';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';

  const topHeaderLinks: Link[] = [
    { text: 'Цены', address: 'http://localhost:5173/' },
    { text: 'API', address: 'http://localhost:5173/' },
    { text: 'Временные номера для смс', address: 'http://localhost:5173/' },
  ];
</script>

<template>
  <div
    class="bg-gradient-to-r from-dark-900 to-dark-600 py-[0.5625rem] pl-[0.5rem] pr-[0.9375rem] sm:py-[0.7175rem]"
  >
    <LayoutWidthLimiter class="flex justify-between">
      <a
        href="http://localhost:5173/"
        class="flex items-center justify-start gap-2 sm:gap-[0.625rem]"
      >
        <img
          class="size-8"
          src="/images/SMS.svg"
        />
        <div
          class="flex flex-col items-start gap-[0.4rem] sm:flex-row sm:items-center sm:gap-4"
        >
          <div
            href="http://localhost:5173/"
            class="font-roboto text-[1rem] font-medium tracking-[0.175rem] text-white"
          >
            SMS SERVICE
          </div>
          <div
            class="hidden h-[1.875rem] w-[0.0625rem] bg-gray-400 sm:mr-1 sm:block"
          />
          <div
            class="font-roboto text-[0.55rem] tracking-[0.071rem] text-white sm:max-w-[6.7625rem] sm:text-[0.625rem] sm:tracking-[0.0781rem]"
          >
            АРЕНДА НОМЕРА ДЛЯ ПРИЕМА СМС
          </div>
        </div>
      </a>
      <a
        class="rounded border border-transparent-10 px-[0.8125rem] py-[0.3125rem] sm:hidden"
        href="http://localhost:5173/"
      >
        <img
          src="/images/menu.svg"
          class="size-[1.875rem]"
        />
      </a>
      <div class="sm:justify-left hidden sm:flex sm:items-center sm:gap-4">
        <div
          class="flex items-center justify-center gap-8 font-roboto text-[0.8125rem] text-neutral-400"
        >
          <a
            v-for="link in topHeaderLinks"
            key="text"
            :href="link.address"
            >{{ link.text }}</a
          >
        </div>
        <div class="h-[3.4537rem] w-[0.06225rem] bg-zinc-500"></div>
        <div
          class="flex items-center justify-center font-sans text-[0.8125rem] text-neutral-400"
        >
          <a
            href="http://localhost:5173/"
            class="mx-4 flex flex-col items-center gap-[2px]"
          >
            <img
              class="h-[1.22rem]"
              src="/images/login.svg"
            />
            Авторизация
          </a>

          <a
            href="http://localhost:5173/"
            class="mx-4 flex flex-col items-center gap-[2px]"
          >
            <img
              class="h-[1.22rem]"
              src="/images/register.svg"
            />
            Регистрация
          </a>
          <a
            href="http://localhost:5173/"
            class="flex items-center justify-center gap-2 rounded-[0.3125rem] bg-zinc-500 px-2 py-3"
          >
            <img
              class="h-4"
              src="/images/flag.svg"
            />
            <div class="text-white">RU</div>
            <div class="h-2 w-2 bg-white"></div>
          </a>
        </div>
      </div>
    </LayoutWidthLimiter>
  </div>
</template>

<style lang="scss"></style>
