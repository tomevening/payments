<script setup lang="ts">
  import VMainSiteBlock from '@/components/VMainSiteBlock.vue';
  import LayoutWidthLimiter from './LayoutWidthLimiter.vue';
</script>

<template>
  <div class="bg-black px-3 py-6 font-roboto sm:px-[0.3rem]">
    <LayoutWidthLimiter
      class="flex flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between"
    >
      <VMainSiteBlock />

      <div
        class="hidden items-center justify-end gap-8 text-sm text-white sm:flex"
      >
        <a
          class="flex flex-col items-center gap-[0.2275rem] py-2"
          href="http://localhost:5173/"
        >
          <img
            class="h-[1.3125rem]"
            src="/images/Login.png"
          />
          Авторизация
        </a>
        <div class="h-[3.8125rem] w-[0.0625rem] bg-dark-200"></div>

        <a
          class="flex flex-col items-center gap-[0.2275rem] py-2"
          href="http://localhost:5173/"
        >
          <img
            class="h-[1.3125rem]"
            src="/images/Register.png"
          />
          Регистрация
        </a>
      </div>
    </LayoutWidthLimiter>
    <div class="mt-[0.625rem] flex gap-[1.25rem] text-sm text-white sm:hidden">
      <div class="ml-2 flex items-center gap-[0.5625rem]">
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
</template>

<style lang="scss"></style>
