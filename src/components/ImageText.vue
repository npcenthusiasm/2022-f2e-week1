<template>
  <div class="relative flex justify-center items-center">
    <img :src="$attrs.src" alt="" class="" :style="style">
    <div class="absolute">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed, onMounted } from "vue";

onMounted(() => {
  
});

const props = defineProps<{
  width: number
  height: number
}>()

// const props = defineProps({
//   width: Number,
//   height: Number
// })

const style = computed(() => {
  return {
    height: `${(props.height / 1080) * 100}%`,
    width: `${(props.width / 1920) * 100 }%`
  }
})

</script>

<style lang="scss" >
@use "sass:math";
@function relative-height-percent($value) {
  @return math.div($value, 1080px) * 100%;
}

@function relative-width-percent($value) {
  @return math.div($value, 1920px) * 100%;
}

@function relative-light-height-percent($value) {
  @return math.div($value, 108px) * 100%;
}

@function relative-light-width-percent($value) {
  @return math.div($value, 275px) * 100%;
}



</style>


