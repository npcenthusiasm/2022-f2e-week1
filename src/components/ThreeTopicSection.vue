<template>
  <section class="section-three_topic">
    <SectionTitle class="three_topic-title" :imgUrl="titleImg" />
    <div class="section4__subtitle text-secondary-dark text-title-h5">
      各路廠商強強聯手<br />
      共同設計出接地氣的網頁互動挑戰關卡
    </div>

    <div class="section4__stage1 flex items-start">
      <img src="/images/main/week_1.png" alt="" class="mr-10" />
      <div class="flex flex-col">
        <div class="text-highlight text-title-h2">WEEK 1</div>
        <div class="text-primary text-title-h3">The F2E 活動網站設計</div>
        <div class="flex mb-6">
          <div class="px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark mr-4">Parallax Scrolling</div>
          <div class="px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark">#版塊設計</div>
        </div>
        <div>
          <div class="inline-block px-6 py-1 rounded-full border border-secondary-dark bg-secondary-dark text-white">查看關卡細節</div>
        </div>
      </div>
    </div>

    <div class="section4__stage2 flex flex-row-reverse items-start">
      <img src="/images/main/week_2.png" alt="" class="ml-10" />
      <div class="flex flex-col">
        <div class="text-highlight text-title-h2">WEEK 2</div>
        <div class="text-primary text-title-h3">今晚，我想來點點簽</div>
        <div class="flex mb-6">
          <div class="px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark mr-4">Canvas</div>
          <div class="px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark">#凱鈿行動科技</div>
        </div>
        <div>
          <div class="inline-block px-6 py-1 rounded-full border border-secondary-dark bg-secondary-dark text-white">查看關卡細節</div>
        </div>
      </div>
    </div>

    <div class="section4__stage3 flex items-start">
      <img src="/images/main/week_3.png" alt="" class="mr-10" />
      <div class="flex flex-col">
        <div class="text-highlight text-title-h2">WEEK 3</div>
        <div class="text-primary text-title-h3">Scrum 新手村</div>
        <div class="flex mb-6">
          <div class="px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark mr-4">JS draggable</div>
          <div class="px-6 py-1 rounded-full border border-secondary-dark text-secondary-dark">#鈦坦科技</div>
        </div>
        <div>
          <div class="inline-block px-6 py-1 rounded-full border border-secondary-dark bg-secondary-dark text-white">查看關卡細節</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import SectionTitle from "./common/SectionTitle.vue";
import titleImg from "../assets/images/text/talking_4.png";

const showMarker = process.env.NODE_ENV !== "production";

onMounted(() => {
  gsap.registerPlugin(scrollTrigger);
  const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-three_topic",
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
    .from([".three_topic-title", ".section4__subtitle"], { opacity: 0, duration: 6 })
    .to([".ch_f2e"], { scale: 120 / 370, transformOrigin: "bottom right", duration: 6 })
    .to([".ch_ui"], { scale: 120 / 370, transformOrigin: "bottom", duration: 6 }, "<")
    .to([".ch_team"], { scale: 120 / 370, transformOrigin: "bottom left", duration: 6 }, "<")
    .to([".road-bg"], { scale: 800 / 1175, transformOrigin: "bottom", duration: 6 }, "<")

    .from([".section4__stage1"], { opacity: 0, y: "95%", duration: 6 }, ">")

    .to([".section4__stage1"], { y: "-80%", opacity: 0.4, duration: 6 })
    .from([".section4__stage2"], { opacity: 0, y: "95%", duration: 6 }, "<")

    .to([".section4__stage1"], { opacity: 0, y: "-140%", duration: 6 })
    .to([".section4__stage2"], { y: "-80%", opacity: 0.4, duration: 6 }, "<")
    .from([".section4__stage3"], { opacity: 0, y: "95%", duration: 6 }, "<")

    .to([".section4__stage2"], { opacity: 0, y: "-140%", duration: 6 })
    .to([".section4__stage3"], { y: "-80%", opacity: 0.4 })

    .to([".section4__stage3"], { opacity: 0, y: "-140%", duration: 6 }, ">")
    // 中間那隻 ch_ui 370 -> 220
    // TODO: 位置要在喬一下，喬到跑道上
    .to([".three_topic-title", ".section4__subtitle"], { opacity: 0 }, ">")
    .to([".ch_f2e"], { scale: 220 / 370, transformOrigin: "bottom right" }, "<")
    .to([".ch_ui"], { scale: 220 / 370, transformOrigin: "bottom" }, "<")
    .to([".ch_team"], { scale: 220 / 370, transformOrigin: "bottom left" }, "<")
    .to([".road-bg"], { scale: 1100 / 1175, transformOrigin: "bottom" }, "<")
    // 把一些用不到隱藏
    .to([".three_topic-title", ".section4__subtitle", ".section4__stage1", ".section4__stage2", ".section4__stage3"], {
      display: "none",
    });
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";
.section-three_topic {
  height: 100vh;

  .section4 {
    &__stage1 {
      // TODO: fix  top 目前 top 是抓大概不精準
      @include tlwh(342px, 359px, 871px, 253px);
      z-index: 6;
      // TODO: fix  max-width
      img {
        max-width: 280px;
      }
    }

    &__stage2 {
      @include tlwh(342px, 874px, 806px, 240px);
      z-index: 6;
      // TODO: fix  max-width
      img {
        max-width: 280px;
      }
    }

    &__stage3 {
      @include tlwh(342px, 359px, 871px, 253px);
      z-index: 6;
      // TODO: fix  max-width
      img {
        max-width: 280px;
      }
    }
    &__subtitle {
      position: fixed;
      text-align: center;
      top: relative-height-percent(191px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
