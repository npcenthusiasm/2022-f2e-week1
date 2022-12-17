<template>
  <div class="app-screen bg-secondary"></div>
  <div class="loading-screen bg-secondary">
    <img src="/images/main/loading.gif" alt="" />
    <div class="loading-line border-2 border-primary"></div>
  </div>
  <img src="/images/main/start.png" alt="" class="start-bg" />
  <img src="/images/logo/logo.png" alt="" class="main-logo" />
  <img src="/images/btn/btn_user.png" alt="" class="btn-user" />

  <!-- <img src="/images/main/menu.png" alt="" class="btn-user" /> -->

  <div class="sidebar-menu bg-primary" :class="{ open: isOpen }">
    <ul class="">
      <li>
        <div>
          <img class="mx-auto mb-1 block" src="/images/ic/ic_menu_info.png" alt="" />
          <div class="text-secondary">關卡資訊</div>
        </div>
      </li>
      <li>
        <div>
          <img class="mx-auto mb-1 block" src="/images/ic/ic_menu_list.png" alt="" />
          <div class="text-secondary">作品列表</div>
        </div>
      </li>
      <li>
        <div>
          <img class="mx-auto mb-1 block" src="/images/ic/ic_menu_strategy.png" alt="" />
          <div class="text-secondary">攻略資源</div>
        </div>
      </li>
      <li>
        <div>
          <img class="mx-auto mb-1 block" src="/images/ic/ic_menu_job.png" alt="" />
          <div class="text-secondary">求職專區</div>
        </div>
      </li>
    </ul>
    <button class="btn-close" @click="toggleMenuOpen"></button>
  </div>
  <img src="/images/character/character_f2e.gif" alt="" class="ch_f2e" :class="char_dir" />
  <img src="/images/character/character_ui.gif" alt="" class="ch_ui" :class="char_dir" />
  <img src="/images/character/character_team.gif" alt="" class="ch_team" :class="char_dir" />

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

import { defineComponent, ref, onMounted, watch } from "vue";
import gsap from "gsap";
import { useMouse } from "@vueuse/core";
// import { onMounted } from "vue";

const isOpen = ref(false);

const toggleMenuOpen = () => (isOpen.value = !isOpen.value);

const { x, y } = useMouse();

onMounted(() => {
  const tl = gsap.timeline();
  tl.to(".loading-screen", {
    opacity: 0,
    delay: 4,
  });
  tl.set(".loading-screen", { display: "none" });
});

// tl.addLabel("mouseEnterRight");
const char_dir = ref("initial");
watch(x, () => {
  if (x.value > window.innerWidth / 2) {
    char_dir.value = "right";
    // const tl = gsap.timeline();

    // tl.to([".ch_ui", ".ch_team"], { transform: "translateX(40px)" }, "<");
    // tl.to([".ch_f2e"], { transform: "translateX(-40px)" }, "<");
    // tl.play("mouseEnterRight");
    // // gsap.to([".ch_f2e", ".ch_ui", ".ch_team"])
    // console.log("right");
  } else {
    char_dir.value = "initial";

    // const tl = gsap.timeline();

    // tl.to([".ch_ui", ".ch_team"], { transform: "translateX(0px)" }, "<");
    // tl.to([".ch_f2e"], { transform: "translateX(0px)" }, "<");
    // // tl.reverse();
    // console.log("left");
  }
});
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
  transition: transform 0.3s;

  &.right {
    transform: translateX(-24px);
  }
}

.ch_ui {
  user-select: none;
  bottom: relative-height-percent(27.5px);
  left: relative-width-percent(776px);
  width: relative-width-percent(370px);
  z-index: 10;
  position: fixed;
  transition: transform 0.3s;
  &.right {
    transform: translateX(24px);
  }
}

.ch_team {
  user-select: none;
  bottom: relative-height-percent(9px);
  right: relative-width-percent(439px);
  width: relative-width-percent(351px);
  z-index: 10;
  position: fixed;
  transition: transform 0.3s;

  &.right {
    transform: translateX(24px);
  }
}

.main-logo {
  z-index: 10;
  position: fixed;
  top: relative-height-percent(30px);
  left: relative-width-percent(40px);
  width: relative-width-percent(200px);
}
.btn-user {
  z-index: 10;
  position: fixed;
  top: relative-height-percent(30px);
  right: relative-width-percent(20px);
  width: relative-width-percent(80px);
}

.map {
  z-index: 10;
  position: fixed;
  bottom: relative-height-percent(20px);
  left: relative-width-percent(30px);
  width: relative-width-percent(260px);
}

.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 30000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: 100% 100%;
  /* animation: loading-end-transfor 5s infinite; */
  /* background: radial-gradient(circle at center, transparent var(--gradientPercent), #ffc37d 0%); */

  /* background: radial-gradient(circle at center, transparent 25%, #ffc37d 0%); */
  .cover-bg {
    position: absolute;
    z-index: 300000;
    width: 100%;
    height: 100%;
    /* clip-path: circle(13.3% at 50% 50%); */
    background: transparant;
  }
  .loading-line {
    position: relative;
    height: 16px;
    width: 466px;
    border-radius: 20px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      @apply bg-primary;
      animation: loading 3s ease-out;
    }
  }
}

.sidebar-menu {
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  height: 100%;
  padding: 40px 20px;
  width: calc(135px + 20px);
  text-align: center;

  transform: translateX(-135px);
  background-image: url("../images/main/bg_menuSide.png");
  background-repeat: no-repeat;
  background-position: right;
  transition: all 0.5s;

  li {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  img {
    width: 60px;
    height: 60px;
  }

  &.open {
    transform: translateX(0);

    /* width: calc(135px + 20px); */
    .btn-close {
      background-image: url("../images/btn/btn_burger_close.png");
      &:hover {
        background-image: url("../images/btn/btn_burger_close_h.png");
      }
    }
  }

  .btn-close {
    width: 60px;
    height: 66px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -60px;
    background-image: url("../images/btn/btn_burger_open.png");
    background-position: center;
    background-size: contain;

    &:hover {
      background-image: url("../images/btn/btn_burger_open_h.png");
    }

    img {
      width: 100%;
    }
  }
}

@keyframes loading {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes loading-end-transfor {
  from {
    background: radial-gradient(circle at center, transparent var(--gradientPercent), #ffc37d 25.5%);
  }
  to {
    background: radial-gradient(circle at center, transparent var(--gradientPercent), #ffc37d 25.5%);
  }
}
</style>
