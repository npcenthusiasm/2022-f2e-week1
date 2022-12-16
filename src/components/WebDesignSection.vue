<template>
  <section class="section-webdesign">
    <SectionTitle class="section3__title" imgUrl="/images/text/talking_3.png" />
    <div class="section3__subtitle text-secondary-dark text-title-h5">以下兩個角色進行攜手合作</div>

    <div class="section3__btn_join_1 flex flex-col items-center justify-center">
      <img src="/images/btn/btn_join.png" alt="" class="mb-4" />
      <div class="text-primary text-title-h4">前端工程師</div>
    </div>

    <div class="section3__btn_join_2 flex flex-col items-center justify-center">
      <img src="/images/btn/btn_join.png" alt="" class="mb-4" />
      <div class="text-primary text-title-h4">ＵＩ設計師</div>
    </div>

    <div class="section3__btn_join_3 flex flex-col items-center justify-center">
      <img src="/images/btn/btn_join.png" alt="" class="mb-4" />
      <div class="text-primary text-title-h4">團體組(UI+前端)</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "./common/SectionTitle.vue";
const showMarker = process.env.NODE_ENV !== "production";

onMounted(() => {
  gsap.registerPlugin(scrollTrigger);
  const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-webdesign",
      start: "top 1%",
      // end: "top 1%",
      scrub: true,
      markers: showMarker,
    },
  });
  timeLineStage
    .from([".section3__title", ".section3__subtitle"], { opacity: 0, duration: 5 })
    .from([".section3__btn_join_1", ".section3__btn_join_2", ".section3__btn_join_3"], { opacity: 0, y: 60, duration: 5 }, ">")

    .to([".section3__title", ".section3__subtitle"], { opacity: 0, duration: 5 })
    .to([".section3__btn_join_1", ".section3__btn_join_2", ".section3__btn_join_3"], { opacity: 0, y: 60, duration: 5 }, "<")
    // 把一些用不到隱藏
    .to([".section3__title", ".section3__subtitle", ".section3__btn_join_1", ".section3__btn_join_2", ".section3__btn_join_3"], {
      display: "none",
    });
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";

.section-webdesign {
  height: 100vh;

  .section3 {
    &__btn_join_1 {
      @include blwh(595px, 362px, 358.67px, 196px);
      img {
        width: calc(103px / 358.67px) * 100%;
      }
    }
    &__btn_join_2 {
      @include blwh(595px, 780.67px, 358.67px, 196px);
      img {
        width: calc(103px / 358.67px) * 100%;
      }
    }
    &__btn_join_3 {
      @include blwh(595px, 1199.33px, 358.67px, 196px);
      img {
        width: calc(103px / 358.67px) * 100%;
      }
    }

    &__subtitle {
      position: fixed;
      text-align: center;
      /* @include tlwh(191px, 569px, 302px, 34px); */
      top: relative-height-percent(191px);
      left: 50%;
      transform: translateX(-50%);
      /* transform: translateX(-50%); */
    }
  }
}
</style>
