<template>
  <section class="section-date_line">
    <div class="section5__dateline-wrap">
      <div class="section5__dateline_block"></div>
      <img class="section5__dateline" src="/images/main/date_line.png" alt="" />
    </div>

    <div class="section5__date-container">
      <img class="section5__date_weekLine1" src="/images/main/date_weekLine.png" alt="" />
      <div class="section5__date_weekLine1-content">
        <div class="section5__btn_join_1 flex flex-col items-center justify-center">
          <img src="/images/btn/date_week1_pointer.png" alt="" class="mb-4" width="103" />
          <div class="text-highlight text-title-h2">SIGN UP</div>
          <div class="inline-block px-6 py-1 rounded-full text-title-h4 border border-primary bg-primary text-white mb-3">10/13 - 11/6</div>
          <div class="text-secondary-dark text-center">截止前可修改報名組別</div>
        </div>
      </div>

      <img class="section5__date_weekLine2" src="/images/main/date_weekLine.png" alt="" />
      <div class="section5__date_weekLine2-content">
        <div class="section5__btn_join_1 flex flex-col items-center justify-center">
          <img src="/images/main/date_start.png" alt="" class="mb-4" width="140" />
          <div class="text-highlight text-title-h2">START</div>
          <div class="inline-block px-6 py-1 rounded-full text-title-h4 border border-primary bg-primary text-white mb-3">10/31 - 11/28</div>
          <div class="text-secondary-dark text-center">
            10/31(一) UI、團體組開賽<br />
            11/7(一) 前端組開賽
          </div>
        </div>
      </div>

      <div class="section5__weekLine">
        <img class="section5__date_weekLine3" src="/images/main/date_weekLine.png" alt="" />
      </div>
      <div class="section5__date_weekLine3-content">
        <div class="section5__btn_join_1 flex flex-col items-center justify-center">
          <img src="/images/main/date_upload.png" alt="" class="mb-4" width="140" />
          <div class="text-highlight text-title-h2">UPLOAD</div>
          <div class="inline-block px-6 py-1 rounded-full text-title-h4 border border-primary bg-primary text-white mb-3">10/31 - 11/28</div>
          <div class="text-secondary-dark text-center">
            依賽程登錄作品<br />
            <span class="text-highlight"> 額外競賽： 主題豐厚獎金等著你</span>
          </div>
        </div>
      </div>
    </div>

    <img src="/images/bg/bg_decorate_03.png" alt="" class="section5__cloud-left" />
    <img src="/images/bg/bg_decorate_07.png" alt="" class="section5__cloud-right" />

    <div class="section5__text2 w-full text-title-h2 text-highlight">
      <div class="text-center">區區修煉已經無法滿足了嗎？</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
// import SectionTitle from "./common/SectionTitle.vue";

const showMarker = process.env.NODE_ENV !== "production";

onMounted(() => {
  gsap.registerPlugin(scrollTrigger);
  const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-date_line",
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
    .fromTo([".section5__dateline_block"], { display: "none", right: "0" }, { display: "block", right: "-100%", delay: 1 })
    .from([".section5__dateline"], { opacity: 0 }, "<")

    .from([".section5__date_weekLine1"], { opacity: 0, delay: 0.33 })
    .from([".section5__date_weekLine1-content"], { opacity: 0, y: 60 }, "<")

    .from([".section5__date_weekLine2"], { opacity: 0, delay: 0.66 })
    .from([".section5__date_weekLine2-content"], { opacity: 0, y: 60 }, "<")

    .from([".section5__date_weekLine3"], { opacity: 0, delay: 0.99 })
    .from([".section5__date_weekLine3-content"], { opacity: 0, y: 60 }, "<")
    .to(
      [
        ".section5__date_weekLine1",
        ".section5__date_weekLine1-content",
        ".section5__date_weekLine2",
        ".section5__date_weekLine2-content",
        ".section5__date_weekLine3",
        ".section5__date_weekLine3-content",
      ],
      { opacity: 0, y: -60 },
    )
    .to(".section5__dateline", { opacity: 0 }, "<")

    .from([".section5__text2"], { display: "none", opacity: 0, scale: 3 })
    .from([".section5__cloud-left"], { opacity: 0, x: -400, y: 100 }, "<")
    .from([".section5__cloud-right"], { opacity: 0, x: 400, y: 100 }, "<")

    .to([".section5__cloud-left"], { opacity: 0, x: 300, y: -60, scale: 0.2 })
    .to([".section5__cloud-right"], { opacity: 0, x: -300, y: -60, scale: 0.2 }, "<")
    .to([".section5__text2"], { opacity: 0 }, "<");
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";
.section-date_line {
  height: 100vh;
  .section5__dateline-wrap {
    overflow: hidden;
    position: fixed;
    height: 103px;
    width: 100%;
    top: relative-height-percent(548px);
  }
  .section5 {
    &__dateline {
      position: fixed;
      left: relative-width-percent(240px);
      right: relative-width-percent(240px);
      height: 103px;
      width: calc(100% - relative-width-percent(480px));
      z-index: 3;
    }

    // trick
    &__dateline_block {
      position: fixed;
      height: 103px;
      width: 100%;
      z-index: 4;
      // background-color: aqua;
      @apply bg-secondary;
    }

    &__date_weekLine1 {
      position: fixed;
      top: relative-height-percent(472px);
      height: relative-height-percent(140px);
      left: relative-width-percent(435.5px);
    }

    &__date_weekLine2 {
      position: fixed;
      top: relative-height-percent(426px);
      height: relative-height-percent(140px);
      left: relative-width-percent(936px);
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0% 100%);
    }

    &__date_weekLine3 {
      position: fixed;
      top: relative-height-percent(472px);
      height: relative-height-percent(140px);
      left: relative-width-percent(1444.5px);
      clip-path: polygon(0 20%, 100% 20%, 100% 100%, 0% 100%);
    }
    &__date-container {
      position: fixed;
      top: relative-height-percent(140px);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 75%;
      left: 12.5%;
      right: 12.5%;
    }
    &__date_weekLine1-content {
      /* position: fixed; */
      /* top: relative-height-percent(180px); */
      /* height: relative-height-percent(392px); */
      /* left: relative-width-percent(300px); */
      /* flex-basis: 302px; */
      flex: 1;
      /* max-width: 302px; */
    }
    &__date_weekLine2-content {
      /* position: fixed; */
      /* top: relative-height-percent(140px); */
      /* height: relative-height-percent(392px); */
      /* left: relative-width-percent(820.5px); */
      /* flex-basis: 338px; */
      flex: 1;
    }

    &__date_weekLine3-content {
      /* flex-basis: 318px; */
      flex: 1;
      /* position: fixed; */
      /* top: relative-height-percent(80px); */
      /* height: relative-height-percent(392px); */
      /* left: relative-width-percent(1301.5px); */
    }

    &__cloud-left {
      @include tlwh(396px, 206px, 368px, 178px);
    }
    &__cloud-right {
      @include trwh(292px, 114px, 450px, 333.5px);
    }

    &__text2 {
      position: fixed;
      top: relative-height-percent(232px);
      // @include trwh(292px, 114px, 450px, 333.5px);
    }
  }
}
</style>
