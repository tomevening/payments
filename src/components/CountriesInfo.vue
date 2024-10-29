<script setup lang="ts"></script>

<template>
  <details class="[&_summary]:open:after:rotate-180">
    <summary
      class="flex after:ml-[0.375rem] after:mt-1 after:size-[0.875rem] after:bg-[url('/images/downArrow.svg')] after:bg-contain sm:text-sm"
    >
      <div
        class="flex items-center gap-[0.375rem] text-xs font-medium sm:text-sm"
      >
        <img
          class="size-[0.875rem]"
          src="/images/Ex.png"
        />
        <div>Внимание, при нажатии раскрывается информация про страны</div>
      </div>
    </summary>
    <div class="mt-3 text-xs text-dark-650 sm:mt-[1.1875rem] sm:text-sm">
      <div class="">Зачисление до 6 минут</div>
      <div class="mt-2 sm:mt-[0.625rem]">
        Эта платежная система не принимает платежи из стран:
      </div>
      <div class="mb-[1.5625rem] mt-[0.125]">
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
  </details>
</template>

<style scoped lang="scss">
  // details[open] > summary::after {
  //   transform: rotate(180deg);
  // } // Replaced by <details class="[&_summary]:open:after:rotate-180">
</style>
