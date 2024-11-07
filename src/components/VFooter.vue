<script setup lang="ts">
  import VFooterDivider from '@/components/VFooterDivider.vue';
  import VFooterGrid from '@/components/VFooterGrid.vue';
  import VFooterMain from '@/components/VFooterMain.vue';
  import VFooterSupport from '@/components/VFooterSupport.vue';
</script>

<template>
  <footer>
    <VFooterMain />
    <VFooterDivider />
    <VFooterGrid />
    <VFooterDivider />
    <VFooterSupport />
  </footer>
</template>

<style lang="scss"></style>
