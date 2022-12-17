<template>
  <section class="questions">
    <SectionTitle class="section2__title" :imgUrl="titleImg" />

    <img src="/images/bg/bg_decorate_09.png" alt="" class="grass-left" />
    <img src="/images/bg/bg_decorate_10.png" alt="" class="grass-right" />

    <div class="question_1 question">
      <span class="question-text text-highlight text-title-h4">羨慕別人的酷酷網頁動畫？</span>
      <img src="/images/main/question_1.png" alt="" class="" />
    </div>

    <div class="question_2 question">
      <span class="question-text text-highlight text-title-h4">滿足不了同事的許願？</span>
      <img src="/images/main/question_2.png" alt="" class="" />
    </div>

    <div class="question_3 question">
      <span class="question-text text-highlight text-title-h4">動畫技能樹太雜無從下手？</span>
      <img src="/images/main/question_3.png" alt="" class="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "./common/SectionTitle.vue";
import titleImg from "../assets/images/text/talking_2.png";

const showMarker = process.env.NODE_ENV !== "production";

onMounted(() => {
  gsap.registerPlugin(scrollTrigger);
  const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".questions",
      start: "top 1%",
      // end: "top 1%",
      scrub: true,
      markers: showMarker,
    },
  });

  const scaleRatio = 225 / 370;
  timeLineStage
    .from(".section2__title", { opacity: 0, duration: 4 })
    .to([".ch_f2e"], { scale: scaleRatio, transformOrigin: "bottom right", duration: 4 }, "<")
    .to([".ch_ui", ".road-bg"], { scale: scaleRatio, transformOrigin: "bottom", duration: 4 }, "<")
    .to([".ch_team"], { scale: scaleRatio, transformOrigin: "bottom left", duration: 4 }, "<")

    // .fromTo([".grass-left"], { opacity: 0 }, { opacity: 1 }, "<")
    // .fromTo([".grass-right"], { opacity: 0 }, { opacity: 1 }, "<")
    .fromTo([".grass-left"], { display: "none" }, { display: "block", scale: 0, x: 400, y: -40, opacity: 1, duration: 10 }, "<")
    .fromTo([".grass-right"], { display: "none" }, { display: "block", scale: 0, x: -400, y: -40, opacity: 1, duration: 10 }, "<")

    .from([".question_1"], { display: "none", opacity: 0, left: 0, duration: 1, delay: 2 }, 0)
    .from([".question_2"], { display: "none", opacity: 0, duration: 1 }, ">")
    .from([".question_3"], { display: "none", opacity: 0, right: 0, duration: 1 }, ">")
    .to([".section2__title", ".question_1", ".question_2", ".question_3"], { opacity: 0 }, ">")
    .to([".ch_f2e"], { scale: 1, transformOrigin: "bottom right" }, ">")
    .to([".ch_ui", ".road-bg"], { scale: 1, transformOrigin: "bottom" }, "<")
    .to([".ch_team"], { scale: 1, transformOrigin: "bottom left" }, "<")
    // 把一些用不到隱藏
    .to([".section2__title", ".grass-left", ".grass-right", ".question_1", ".question_2", ".question_3"], {
      display: "none",
    });
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";

.questions {
  height: 200vh;
  .question_1 {
    @include tlwh(308px, 240px, 466.67px, 412px);
    z-index: 10;
  }

  .question_2 {
    @include tlwh(308px, 726.67px, 466.67px, 412px);
    z-index: 10;
  }

  .question_3 {
    @include trwh(308px, 240px, 466.67px, 412px);
    z-index: 10;
  }

  .question {
    .question-text {
      position: absolute;
      width: 100%;
      text-align: center;
      top: -80px;
    }
  }

  .grass-left {
    position: fixed;
    top: relative-height-percent(954px);
    left: relative-width-percent(342px);
    width: relative-width-percent(224px);
    height: relative-height-percent(201px);
    /* transform: rotateY(180deg); */
    z-index: 4;
  }

  .grass-right {
    position: fixed;
    top: relative-height-percent(954px);
    right: relative-width-percent(342px);
    width: relative-width-percent(224px);
    height: relative-height-percent(201px);
    z-index: 4;
  }
}
</style>
