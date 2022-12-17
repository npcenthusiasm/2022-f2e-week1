<template>
  <div class="section-title">
    <img :src="imgUrl" alt="" class="" width="736" height="151" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  imgUrl: {
    type: String,
  },
});

const imgSrc = computed(() => {
  // return new URL(props.imgUrl || "", import.meta.env.BASE_URL).href;
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
