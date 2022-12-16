<template>
  <section class="first-section">
    <img src="/images/logo/logo_text.png" alt="" class="logo-text" />

    <div class="title-text bg-highlight text-white text-title-h4 inline-block px-10 py-2 rounded-full">互動式網頁設計</div>
    <!-- 兩邊的雲 -->
    <img src="/images/bg/bg_decorate_01.png" alt="" class="cloud-left" />
    <img src="/images/bg/bg_decorate_05.png" alt="" class="cloud-right" />

    <div class="f2e-info-area">
      <div class="f2e-area">
        <div class="text-primary text-title-h5 mb-2">前端工程師</div>
        <div class="bg-primary text-white text-title-h4 inline-block px-10 py-1 rounded-full">920</div>
      </div>

      <div class="f2e-area">
        <div class="text-primary text-title-h5 mb-2">UI 設計師</div>
        <div class="bg-primary text-white text-title-h4 inline-block px-10 py-1 rounded-full">110</div>
      </div>

      <div class="f2e-area">
        <div class="text-primary text-title-h5 mb-2">團體組</div>
        <div class="bg-primary text-white text-title-h4 inline-block px-10 py-1 rounded-full">41</div>
      </div>
    </div>

    <!-- 右下 join -->
    <div class="btn-join-area">
      <div class="text-primary text-title-h5 mb-2">JOIN</div>
      <img src="/images/btn/btn_joinHand.png" alt="" class="btn_joinHand" />
      <img src="/images/btn/btn_join.png" alt="" class="btn_join" />
    </div>

    <div class="traffic-light-area inline-block">
      <div class="traffic-light-content">
        <div class="relative h-[40px]">
          <div class="ready-text absolute text-center w-full text-highlight text-title-h4">READY？</div>
          <div class="go-text absolute text-center w-full text-highlight text-title-h4">GO！！</div>
        </div>
        <div class="light-wrap">
          <img src="/images/main/ready_frame.png" alt="" class="ready_frame" />
          <img src="/images/main/ready_1.png" alt="" class="green-light" />
          <img src="/images/main/ready_2.png" alt="" class="yellow-light" />
          <img src="/images/main/ready_3.png" alt="" class="red-light" />
        </div>
      </div>
    </div>

    <div class="first-trigger-target"></div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
const showMarker = process.env.NODE_ENV !== "production";

// const lightText = ref("READY?");

onMounted(() => {
  gsap.registerPlugin(scrollTrigger);
  const timeLineStage = gsap.timeline({
    scrollTrigger: {
      trigger: ".first-trigger-target",
      // pin: true,
      start: "top 100%",
      end: "top 1%",
      scrub: true,
      markers: showMarker,
    },
  });
  timeLineStage
    .to(".cloud-left", { y: 0, x: 300, scale: 0.4, opacity: 0, duration: 10 })
    .to(".cloud-right", { y: 0, x: -300, scale: 0.4, opacity: 0, duration: 10 }, "<")

    .to([".yellow-light", ".green-light"], { opacity: 0, duration: 2 }, 0)
    .to([".ready-text"], { opacity: 0, duration: 2 }, "<")

    .to([".red-light"], { opacity: 0, duration: 2 }, ">")
    .to([".yellow-light"], { opacity: 1, duration: 2 }, "<")

    .to([".yellow-light"], { opacity: 0, duration: 2 }, ">")
    .to([".green-light"], { opacity: 1, duration: 2 }, "<")
    .from([".go-text"], { opacity: 0 }, "<+2")

    .to([".traffic-light-area", ".f2e-info-area"], { opacity: 0, duration: 4 })
    .to([".title-text", ".logo-text", ".start-bg"], { opacity: 0, duration: 4 }, ">")

    // 隱藏兩邊的雲
    .to([".cloud-left", ".cloud-right", ".traffic-light-area", ".f2e-info-area", ".start-bg", ".logo-text"], { display: "none" });
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixin";

.first-section {
  height: 100vh;
  position: relative;
  .first-trigger-target {
    position: absolute;
    bottom: 0;
  }

  .logo-text {
    position: fixed;
    top: relative-height-percent(44px);
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    width: relative-width-percent(680px);
  }

  .title-text {
    position: fixed;
    top: relative-height-percent(268px);
    left: 50%;
    transform: translateX(-50%);
  }

  .cloud-left {
    position: fixed;
    top: relative-height-percent(423px);
    left: relative-width-percent(142px);
    width: relative-width-percent(430px);
    z-index: 1;
  }

  .cloud-right {
    position: fixed;
    right: 0;
    top: relative-height-percent(455px);
    right: relative-width-percent(91px);
    width: relative-width-percent(485px);
    z-index: 1;
  }

  .f2e-info-area {
    position: fixed;
    display: flex;
    justify-content: space-around;
    width: 59%;
    max-width: 1196px;

    top: relative-height-percent(371px);
    left: relative-width-percent(362px);
    z-index: 10;
    text-align: center;
  }

  .btn-join-area {
    position: fixed;
    bottom: relative-height-percent(20px);
    right: relative-width-percent(20px);
    text-align: center;
    width: relative-width-percent(103px);

    .btn_joinHand {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      // width: 57px;
    }
    .btn_join {
      // width: 103px;
    }
  }

  .traffic-light-area {
    position: fixed;
    right: 0;
    top: relative-height-percent(463px);
    width: relative-width-percent(275px);
    z-index: 10;

    .traffic-light-content {
      position: relative;
    }

    .light-wrap {
      position: relative;
      width: 275px;
      height: 100%;
      width: 100%;
      height: relative-height-percent(108px);

      .ready_frame {
        /* position: absolute; */
        position: relative;
        z-index: 2;
        width: 100%;
        height: auto;
      }

      .green-light,
      .yellow-light,
      .red-light {
        position: absolute;
        z-index: 1;
        width: relative-light-width-percent(49px);
        top: relative-light-height-percent(29px);
      }

      .red-light {
        left: relative-light-width-percent(32px);
      }
      .yellow-light {
        left: relative-light-width-percent(97px);
      }
      .green-light {
        left: relative-light-width-percent(162px);
      }
    }
  }
}
</style>
