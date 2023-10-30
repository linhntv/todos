<template>
  <div class="todo" >
    <div class="todo-sidebar">
      <Navbar />
    </div>
    <div class="todo-content">
      <Header/>
      <router-view></router-view>
    </div>
 
  </div>
</template>

<script>
import Header from '@/components/Layout/Header.vue';
import Navbar from '@/components/Layout/Navbar.vue';
export default {
components:{ Header,Navbar},
}
</script>

<style lang="scss" scoped >
@import "@/assets/scss/app.scss";
</style>