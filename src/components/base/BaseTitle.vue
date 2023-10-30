<template>
  <h2 class="todos-title">{{ pagesTitle }}</h2>
</template>

<script>
export default {
  props: {
    pagesTitle:{
      type: String,
      default: ()=> ''
    }
  },

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base-title.scss'
</style>