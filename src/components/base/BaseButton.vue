<template>
  <button
  class="common-button"
    :style="{
      height: height + 'px',
      width: width + 'px',
      color: color,
      background: !onMouseout ? background : hoverBackground,
    }"
    @mouseover="changeBackground"
    @mouseout="resetBackground"
    @click="handleClick"
  >
    <slot/>
    {{ nameButton }}
  </button>
</template>

<script>
import {ref} from "vue"
export default {
  name: "vueBaseButton",
  props: {
    height: {
      type: Number,
      default: () => 40,
    },
    width: {
      type: Number,
      default: () => 140,
    },
    color: {
      type: String,
      default: () => "#000",
    },
    nameButton: {
      type: String,
      default: () => "テキスト",
      //required: true,
    },
    background: {
      type: String,
      default: () => "linear-gradient(270deg, #36DEE5 0%, #B647CC 100%)",
    },
    hoverBackground: {
      type: String,
      default: () => "#36DEE5",
    },
  },
  setup(props,context) {
    const onMouseout = ref(false);
    const changeBackground = () =>onMouseout.value = true;


    const resetBackground= () => onMouseout.value = false;
    const handleClick = () => {
        context.emit('on-click')
    }
    return {changeBackground,resetBackground,handleClick,onMouseout}
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/base-button.scss';
</style>
