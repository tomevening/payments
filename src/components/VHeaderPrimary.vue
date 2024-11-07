<script setup lang="ts">
  import VMainSiteBlock from '@/components/VMainSiteBlock.vue';
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
      <VMainSiteBlock class="mr-4" />

      <a
        class="rounded border border-transparent-10 px-[0.8125rem] py-[0.3125rem] sm:hidden"
        href="http://localhost:5173/"
      >
        <img
          class="size-[1.875rem]"
          src="/images/menu.svg"
        />
      </a>
      <div class="sm:justify-left hidden sm:flex sm:items-center sm:gap-4">
        <div
          class="flex items-center justify-center gap-8 font-roboto text-[0.8125rem] text-neutral-400"
        >
          <a
            v-for="link in topHeaderLinks"
            :key="link.text"
            :href="link.address"
            >{{ link.text }}</a
          >
        </div>
        <div class="h-[3.4537rem] w-[0.06225rem] bg-zinc-500"></div>
        <div
          class="flex items-center justify-center font-sans text-[0.8125rem] text-neutral-400"
        >
          <a
            class="mx-4 flex flex-col items-center gap-[2px]"
            href="http://localhost:5173/"
          >
            <img
              class="h-[1.22rem]"
              src="/images/login.svg"
            />
            Авторизация
          </a>

          <a
            class="mx-4 flex flex-col items-center gap-[2px]"
            href="http://localhost:5173/"
          >
            <img
              class="h-[1.22rem]"
              src="/images/register.svg"
            />
            Регистрация
          </a>
          <a
            class="flex items-center justify-center gap-2 rounded-[0.3125rem] bg-zinc-500 px-2 py-3"
            href="http://localhost:5173/"
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
