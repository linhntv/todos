<template>
  <div class="navbar">
    <img :src="logoSrc" alt="" />
    <ul class="navbar-list-btn">
      <li v-for="listBtn in navListBtn" :key="listBtn.name" class="btn">
        <img :src="listBtn.photo" alt="" />
        <router-link :to="listBtn.path" class="btn-link">{{
          listBtn.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { LOGO, NAVLISTBTN } from "@/resources/index";
import { ref } from "vue";
export default {
  name: " vueNavbar",
  setup() {
    const logoSrc = ref(LOGO);
    const navListBtn = ref(NAVLISTBTN);
    return {
      navListBtn,
      logoSrc,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout/navbar.scss";
</style>
