<template>
  <div>
    
    <div class="app-screen bg-secondary h-screen relative">
      <!-- <img src="/images/logo/logo_text.png" alt="" class="logo-text">
      <img src="/images/main/start.png" alt="" class="start-bg">
      <img src="/images/main/road.png" alt="" class="road-bg">
      <img src="/images/bg/bg_decorate_01.png" alt="" class="cloud-1">
      <img src="/images/bg/bg_decorate_05.png" alt="" class="cloud-2">

      <img src="/images/character/character_f2e.gif" alt="" class="ch_f2e">
      <img src="/images/character/character_ui.gif" alt="" class="ch_ui">
      <img src="/images/character/character_team.gif" alt="" class="ch_team">


      <div class="btn-join-area">
        <div class="text-primary text-title-h5 mb-2">JOIN</div>
        <img src="/images/btn/btn_joinHand.png" alt="" class="btn_joinHand">
        <img src="/images/btn/btn_join.png" alt="" class="btn_join">
      </div>


      <img src="/images/main/map.svg" alt="" class="map">



      <div class="light-area inline-block">
        <div class="text-center text-highlight text-title-h4">READY?</div>
        <div class="light-wrap">
          <img src="/images/main/ready_frame.png" alt="" class="ready_frame">
          <img src="/images/main/ready_1.png" alt="" class="ready_1">
          <img src="/images/main/ready_2.png" alt="" class="ready_2">
          <img src="/images/main/ready_3.png" alt="" class="ready_3">
        </div>
      </div> -->


      <!-- <div class="title-text bg-highlight text-white text-title-h4 inline-block px-10 py-2 rounded-full">互動式網頁設計</div> -->

      <!-- <div class="f2e-info-area">
        <div class="f2e-area">
          <div class="text-primary text-title-h5 mb-2">前端工程師</div>
          <div class="bg-primary text-white text-title-h4 inline-block px-10 py-1 rounded-full">920</div>
        </div>

        <div class="f2e-area">
          <div class="text-primary text-title-h5 mb-2">UI 設計師</div>
          <div class="bg-primary text-white text-title-h4 inline-block px-10 py-1 rounded-full">920</div>
        </div>

        <div class="f2e-area">
          <div class="text-primary text-title-h5 mb-2">團體組</div>
          <div class="bg-primary text-white text-title-h4 inline-block px-10 py-1 rounded-full">41</div>
        </div>
      </div> -->
    </div>

    <Section2 /> 
    <div class="h-screen"></div>
    <div class="trigger-1  w-20 h-20 bg-red-700 relative z-20" ></div>
    <div class="h-screen"></div>
    <div class="trigger-2  w-20 h-20 bg-blue-700 relative z-20" ></div>
    <div class="h-screen"></div>
    <div class="h-screen"></div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'

import { onMounted } from "vue";
import Section2 from './components/Section2.vue'

onMounted(() => {
  gsap.registerPlugin(scrollTrigger)

  // const tl = gsap.timeline()
  // tl.to('.cloud-2', {
  //   x: -200,
  //   scale: 0.6,
  //   duration: 3,
  //   scrollTrigger: {
  //     trigger: '.trigger-1',
  //     scrub: 2,
  //     toggleActions: 'restart none none none',
  //     start: 'top 80%',
  //     end: 'top: 30%',
  //     markers: true,
  //     toggleClass: 'rounded-full'
  //   }
  // })


  // gsap.to('.cloud-1', {
  //   x: 200,
  //   scale: 0.6,
  //   duration: 3,
  //   scrollTrigger: {
  //     trigger: '.trigger-1',
  //     scrub: 2,
  //     toggleActions: 'restart none none none',
  //     start: 'top 80%',
  //     end: 'top: 30%',
  //     markers: true,
  //     toggleClass: 'rounded-full'
  //   }
  // })
});
</script>

<style lang="scss" >
@use "sass:math";
@function relative-height-percent($value) {
  @return math.div($value, 1080px) * 100%;
}

@function relative-width-percent($value) {
  @return math.div($value, 1920px) * 100%;
}

@function relative-light-height-percent($value) {
  @return math.div($value, 108px) * 100%;
}

@function relative-light-width-percent($value) {
  @return math.div($value, 275px) * 100%;
}

body {
  height: 2000px;
}

.app-screen {
  position: fixed;
  // height: 2000px;
  // // position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // overflow-y: auto;
}
.logo-text {
  position: absolute;
  top: relative-height-percent(44px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: relative-width-percent(680px);
}

.start-bg {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  width: relative-width-percent(1430px);
  height: 100%;
  z-index: 5;
}

.road-bg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: relative-width-percent(1175px);
}

.cloud-1 {
  position: absolute;
  top: relative-height-percent(423px);
  left: relative-width-percent(142px);
  width: relative-width-percent(430px);
}

.cloud-2 {
  position: absolute;
  right: 0;
  top: relative-height-percent(455px);
  right: relative-width-percent(91px);
  width: relative-width-percent(485px);
}

// gif

.ch_f2e {
  position: absolute;
  bottom: relative-height-percent(16px);
  left: relative-width-percent(449px);
  width: relative-width-percent(351px);
}

.ch_ui {
  position: absolute;
  bottom: relative-height-percent(27.5px);
  left: relative-width-percent(776px);
  width: relative-width-percent(370px);

}

.ch_team {
  position: absolute;
  bottom: relative-height-percent(9px);
  right: relative-width-percent(439px);
  width: relative-width-percent(351px);
}

.btn-join-area {
  position: absolute;
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



.f2e-info-area {
  display: flex;
  justify-content: space-around;
  max-width: 1196px;
  width: 100%;
  position: absolute;
  top: relative-height-percent(371px);
  left: relative-width-percent(362px);
}


.light-area {
  position: absolute;
  right: 0;
  top: relative-height-percent(463px);
  width: relative-width-percent(275px);
  // TODO: fix position
}

.light-wrap {
  position: relative;
  width: 275px;
  height: 100%;
  width: 100%;
  height: relative-height-percent(108px);

  .ready_frame {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: auto;
  }

  .ready_1,
  .ready_2,
  .ready_3 {
    position: absolute;
    width: relative-light-width-percent(49px);
    top: relative-light-height-percent(29px);
  }

  .ready_3 {
    left: relative-light-width-percent(32px);
  }
  .ready_2 {
    left: relative-light-width-percent(97px);
  }
  .ready_1 {
    left: relative-light-width-percent(162px);
  }
}

.title-text {
  position: absolute;
  top: relative-height-percent(268px);
  left: 50%;
  transform: translateX(-50%);
}

.f2e-area {
  text-align: center;
  // flex-shrink: 1;
}

.map {
  position: absolute;
  bottom: relative-height-percent(20px);
  left: relative-width-percent(30px);
  width: relative-width-percent(260px);
}

</style>


