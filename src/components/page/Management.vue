<template>
  <BaseTitle :pagesTitle="'Management Page'" />
</template>

<script>
import BaseTitle from "@/components/base/BaseTitle.vue";
export default {
  name: "vueManagement",
  components: { BaseTitle },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/page/management.scss";
</style>
