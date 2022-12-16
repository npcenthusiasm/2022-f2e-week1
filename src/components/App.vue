<template>
  <div class="app-screen bg-secondary"></div>
  <img src="/images/main/start.png" alt="" class="start-bg" />

  <img src="/images/character/character_f2e.gif" alt="" class="ch_f2e" />
  <img src="/images/character/character_ui.gif" alt="" class="ch_ui" />
  <img src="/images/character/character_team.gif" alt="" class="ch_team" />

  <img src="/images/main/road.png" alt="" class="road-bg" />
  <img src="/images/main/map.svg" alt="" class="map" />

  <FirstSection />
  <Questions />
  <WebDesignSection />
  <ThreeTopicSection />
  <Dateline />
  <RacePride />
  <SubUnit />

  <!-- 最後的 scroll -->
  <div style="height: 100vh"></div>
</template>

<script setup lang="ts">
import FirstSection from "./FirstSection.vue";
import Questions from "./Questions.vue";
import WebDesignSection from "./WebDesignSection.vue";
import ThreeTopicSection from "./ThreeTopicSection.vue";
import Dateline from "./Dateline.vue";
import RacePride from "./RacePride.vue";
import SubUnit from "./SubUnit.vue";

// import { defineComponent, ref } from "vue";
// import gsap from "gsap";
// import scrollTrigger from "gsap/ScrollTrigger";
// import { onMounted } from "vue";

// onMounted(() => {});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";

.app-screen {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.start-bg {
  user-select: none;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  width: relative-width-percent(1430px);
  height: 100%;
  z-index: 5;
  position: fixed;
}

.road-bg {
  user-select: none;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: relative-width-percent(1175px);
  position: fixed;
  z-index: 5;
}

.ch_f2e {
  user-select: none;
  bottom: relative-height-percent(16px);
  left: relative-width-percent(449px);
  width: relative-width-percent(351px);
  z-index: 10;
  position: fixed;
}

.ch_ui {
  user-select: none;
  bottom: relative-height-percent(27.5px);
  left: relative-width-percent(776px);
  width: relative-width-percent(370px);
  z-index: 10;
  position: fixed;
}

.ch_team {
  user-select: none;
  bottom: relative-height-percent(9px);
  right: relative-width-percent(439px);
  width: relative-width-percent(351px);
  z-index: 10;
  position: fixed;
}

.map {
  z-index: 10;
  position: fixed;
  bottom: relative-height-percent(20px);
  left: relative-width-percent(30px);
  width: relative-width-percent(260px);
}
</style>
