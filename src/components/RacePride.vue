<template>
  <section class="race-pride-section">
    <SectionTitle class="section6__title" :imgUrl="titleImg" />

    <!-- 這邊想要下怎麼不要用 abs -->
    <div class="section6__award">
      <img src="/images/main/award_light.png" alt="" class="section6__award_light" width="736" height="151" />
      <img src="/images/main/award_trophy.png" alt="" class="section6__award_trophy" width="736" height="151" />
    </div>
    <div class="section6__content">
      <div class="mb-8">
        <div class="text-highlight text-title-h4">評審機制</div>
        <div class="text-primary">
          初選： 將由六角學院前端、UI 評審進行第一波篩選。<br />
          決選： 由六角學院與贊助廠商討論，進行最後篩選，並於 12/30(五) 由評審進行直播公布名單！
        </div>
      </div>

      <div class="">
        <div class="text-highlight text-title-h4">獎項</div>
        <div class="text-primary">
          <ol>
            <li>1. 初選佳作 共六十位 數位獎狀</li>
            <li>
              2. 個人企業獎 共六位 NTD
              <span class="text-highlight text-highlight-desc">3,000</span>
              /位
            </li>
            <li>
              3. 團體企業獎 共三組 NTD
              <span class="text-highlight text-highlight-desc">10,000</span>
              /組
            </li>
            <li>4. 以上皆提供完賽數位獎狀</li>
          </ol>
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
import titleImg from "../assets/images/text/talking_6.png";

const showMarker = process.env.NODE_ENV !== "production";

onMounted(() => {
  gsap.registerPlugin(scrollTrigger);
  const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".race-pride-section",
      // pin: true,
      start: "top 1%",
      // end: "top 1%",
      scrub: true,
      markers: showMarker,
    },
  });
  timeLineStage
    .to([".ch_f2e"], { scale: 182 / 370, transformOrigin: "bottom right" })
    .to([".ch_ui"], { scale: 182 / 370, transformOrigin: "bottom" }, "<")
    .to([".ch_team"], { scale: 182 / 370, transformOrigin: "bottom left" }, "<")
    .to([".road-bg"], { scale: 840 / 1175, transformOrigin: "bottom" }, "<")
    .from([".section6__title"], { opacity: 0 }, "<")
    .from([".section6__award_light"], { rotate: 360 }, "<")
    .from([".section6__award", ".section6__content"], { x: -180, opacity: 0 }, "<")

    .to([".section6__title"], { opacity: 0 })
    .to([".section6__award_light"], { rotate: -360 }, "<")
    .to([".section6__award", ".section6__content"], { x: 180, opacity: 0 }, "<");
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";
.race-pride-section {
  height: 100vh;

  .section6 {
    &__content {
      @include tlwh(251px, 795px, 765px, 360px);
    }
    &__award {
      @include tlwh(251px, 360px, 375px, 375px);
    }

    &__award_light {
      position: absolute;
    }
    &__award_trophy {
      position: absolute;
    }
  }
}
</style>
