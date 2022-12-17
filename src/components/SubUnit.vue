<template>
  <section class="sub-unit-section">
    <SectionTitle class="section7__title" :imgUrl="titleImg" />

    <img src="/images/bg/bg_decorate_08.png" alt="" class="section7__tree-left" />
    <img src="/images/bg/bg_decorate_08.png" alt="" class="section7__tree-right" />

    <div class="section7__logo-wrap-1 text-center">
      <img src="/images/main/logo_blockstudio_border.png" alt="" class="mb-4" />

      <div class="inline-block px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark text-highlight-desc mr-4">#版塊設計</div>
    </div>

    <div class="section7__logo-wrap-2 text-center">
      <img src="/images/main/logo_titansoft_border.png" alt="" class="mb-4" />

      <div class="inline-block px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark text-highlight-desc mr-4">#鈦坦科技</div>
    </div>

    <div class="section7__logo-wrap-3 text-center">
      <img src="/images/main/logo_kdanmobile_border.png" alt="" class="mb-4" />

      <div class="inline-block px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark text-highlight-desc mr-4">#凱鈿科技</div>
    </div>

    <img src="/images/bg/bg_decorate_01.png" alt="" class="section7__cloud-left" />
    <img src="/images/bg/bg_decorate_05.png" alt="" class="section7__cloud-right" />

    <img src="/images/main/finish.png" alt="" class="section7__finish" />

    <img src="/images/main/finishLine_l.png" alt="" class="section7__finishLine_l" />
    <img src="/images/main/finishLine_r.png" alt="" class="section7__finishLine_r" />

    <img src="/images/logo/logo.png" alt="" class="section7__logo" />

    <div class="section7__join text-center">
      <img src="/images/btn/btn_final_hand.png" alt="" class="btn_join mb-5" />
      <div class="text-highlight text-title-h2">立即報名</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "./common/SectionTitle.vue";
import titleImg from "../assets/images/text/talking_7.png";

const showMarker = process.env.NODE_ENV !== "production";

onMounted(() => {
  gsap.registerPlugin(scrollTrigger);
  const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".sub-unit-section",
      // pin: true,
      start: "top 1%",
      // end: "top 1%",
      scrub: true,
      markers: showMarker,
    },
    defaults: {
      duration: 6,
    },
  });

  timeLineStage
    .from([".section7__title"], { opacity: 0 })
    .from([".section7__tree-left"], { opacity: 0, x: -400, y: 100 }, "<")
    .from([".section7__tree-right"], { opacity: 0, x: 400, y: 100 }, "<")

    // TODO: 少一個數的偏移 timeline
    .from([".section7__logo-wrap-1"], { opacity: 0, y: 100 })
    .from([".section7__logo-wrap-2"], { opacity: 0, y: 200 })
    .from([".section7__logo-wrap-3"], { opacity: 0, y: 300 })

    .to([".section7__title"], { opacity: 0 })
    .to([".section7__logo-wrap-1", ".section7__logo-wrap-2", ".section7__logo-wrap-3"], { opacity: 0, y: 40 })
    .to([".section7__tree-left"], { scale: 0.2, opacity: 0, x: "+=460", y: "-=6" }, "<")
    .to([".section7__tree-right"], { scale: 0.2, opacity: 0, x: "-=460", y: "-=6" }, "<")

    .from([".section7__cloud-left"], { x: "-=460", y: "+=600", opacity: 0 })
    .from([".section7__cloud-right"], { x: "+=460", y: "+=600", opacity: 0 }, "<")

    .to([".section7__cloud-left"], { x: "+=360", y: "-=60", opacity: 0, scale: 0.4, duration: 40 })
    .to([".section7__cloud-right"], { x: "-=340", y: "-=60", opacity: 0, scale: 0.4, duration: 40 }, "<")
    // 中間那隻 ch_ui 370 -> 220
    // TODO: 位置要在喬一下，喬到跑道上
    .to([".ch_f2e"], { scale: 339 / 370, transformOrigin: "bottom right" }, "<")
    .to([".ch_ui"], { scale: 339 / 370, transformOrigin: "bottom" }, "<")
    .to([".ch_team"], { scale: 339 / 370, transformOrigin: "bottom left" }, "<")
    .to([".road-bg"], { scale: 1, transformOrigin: "bottom" }, "<")

    .from([".section7__finish"], { display: "none", opacity: 0 }, "<")
    .from([".section7__finishLine_l", ".section7__finishLine_r"], { scale: 1.2, y: "+=400", duration: 20 }, "<")

    .to([".section7__finishLine_l"], { rotate: -5, x: -20, y: 40 }, ">-1")
    .to([".section7__finishLine_r"], { rotate: 5, x: 20, y: 40 }, "<")

    // 中間那隻 ch_ui 370 -> 220
    // TODO: 位置要在喬一下，喬到跑道上
    .to([".ch_f2e"], { scale: 1, transformOrigin: "bottom right" }, "<+2")
    .to([".ch_ui"], { scale: 1, transformOrigin: "bottom" }, "<")
    .to([".ch_team"], { scale: 1, transformOrigin: "bottom left" }, "<")

    .to([".section7__finishLine_l"], { opacity: 0, x: -400, y: 40 }, "<+2")
    .to([".section7__finishLine_r"], { opacity: 0, x: 400, y: 40 }, "<")

    .to([".ch_f2e"], { scale: 1.3, transformOrigin: "bottom right" }, "<+2")
    .to([".ch_ui"], { scale: 1.3, transformOrigin: "bottom" }, "<")
    .to([".ch_team"], { scale: 1.3, transformOrigin: "bottom left" }, "<")

    .to([".ch_f2e"], { opacity: 0, scale: 1.7, transformOrigin: "bottom right" }, "<+2")
    .to([".ch_ui"], { opacity: 0, scale: 1.7, transformOrigin: "bottom" }, "<")
    .to([".ch_team"], { opacity: 0, scale: 1.7, transformOrigin: "bottom left" }, "<")
    .delay(1)

    .to([".section7__finish"], { opacity: 0 }, "<+2")
    // 隱藏左上 logo
    .to(".main-logo", { opacity: 0 }, "<")
    .from([".section7__logo"], { y: 200, opacity: 0, duration: 1 })
    .from([".section7__join"], { y: 300, opacity: 0, duration: 2 }, "<");
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";
.sub-unit-section {
  height: 200vh;

  .section7 {
    &__tree-left {
      @include tlwh(540px, 300px, 351px, 548px);
      transform: rotateY(180deg);
    }
    &__tree-right {
      @include trwh(566px, 342px, 351px, 548px);
    }

    &__logo-wrap-1 {
      @include tlwh(244px, 362px, 315px, 369px);
      img {
        width: 100%;
      }
    }
    &__logo-wrap-2 {
      @include tlwh(244px, 802px, 315px, 369px);
      img {
        width: 100%;
      }
    }
    &__logo-wrap-3 {
      @include tlwh(244px, 1243px, 315px, 369px);
      img {
        width: 100%;
      }
    }

    &__cloud-left {
      @include tlwh(423px, 142px, 430px, 280px);
      z-index: 10;
    }

    &__cloud-right {
      @include trwh(455px, 91px, 485px, 255px);
      z-index: 10;
    }

    &__finish {
      @include tlwh(0px, 245px, 1430px, 1080px);
    }

    &__finishLine_l {
      // 1920/ 2
      @include tlwh(731px, 15px, 960px, 129.5px);
      z-index: 10;
    }
    &__finishLine_r {
      @include trwh(731px, 15px, 960px, 129.5px);
      z-index: 10;
    }

    &__logo {
      @include tlwh(124px, 700px, 520px, 387.15px);
      z-index: 10;
    }

    &__join {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @include tlwh(540px, 836px, 249px, 304.71px);
      img {
        width: 160px;
      }
    }
  }
}
</style>
