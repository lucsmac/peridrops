<template>
  <div>
    <transition
      mode="out-in"
      @before-enter="beforeEnter"
      @enter="enterAnime"
      @before-leave="beforeLeave"
      @leave="leave"
      >
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
import { gsap, TimelineLite } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

export default {
  methods: {
    beforeEnter(el) {
      const loadingScreen = el.firstElementChild.firstElementChild;
      const tl = new TimelineLite();

      tl.set(loadingScreen, {
        width: '100%',
        left: '0%',
      });
    },

    enterAnime(el, next) {
      const loadingScreen = el.firstElementChild.firstElementChild;
      const tl = new TimelineLite();

      tl.to(loadingScreen, {
        duration: 1,
        width: '100%',
        left: '100%',
        ease: 'Expo.easeInOut',
        delay: 0,
        onComplete: next,
      });
    },

    beforeLeave(el) {
      const loadingScreen = el.firstElementChild.firstElementChild;
      const tl = new TimelineLite();

      tl.set(loadingScreen, {
        width: '100%',
        left: '-100%',
      });
    },

    leave(el, next) {
      const loadingScreen = el.firstElementChild.firstElementChild;
      const tl = new TimelineLite();

      tl.to(loadingScreen, {
        duration: 1,
        width: '100%',
        left: '0%',
        ease: 'Expo.easeInOut',
        delay: 0,
        onComplete: next,
      });
    },
  },
};
</script>

<style lang="scss" scoped>

  .loading-screen {
    position: relative;
    padding: 0;
    background-color: #4BEDC2;
    width: 0%;
    height: 100%;
    z-index: 10;
    pointer-events: none;
  }

  .load-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 10;
    pointer-events: none;
  }
</style>
