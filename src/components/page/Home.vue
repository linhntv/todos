<template>
  <BaseTitle :pagesTitle="'Home Page'" />
</template>

<script>
import BaseTitle from "@/components/base/BaseTitle.vue";
export default {
  name: "vueHome",
  components: { BaseTitle },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/page/home.scss'
</style>
