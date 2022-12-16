<template>
  <div class="section-title">
    <img :src="props.imgUrl" alt="" class="" width="736" height="151" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";

.section-title {
  position: fixed;
  top: relative-height-percent(40px);
  left: 50%;
  transform: translateX(-50%);
}
</style>
