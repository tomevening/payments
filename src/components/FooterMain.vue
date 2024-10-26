<script setup lang="ts">
  import MainSiteBlock from './MainSiteBlock.vue';
</script>

<template>
  <div class="bg-black px-3 py-6 font-roboto sm:px-[0.3rem]">
    <div
      class="mx-auto flex max-w-[74.375rem] flex-col items-start justify-start sm:flex-row sm:items-center sm:justify-between"
    >
      <MainSiteBlock />

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
</template>

<style lang="scss"></style>
