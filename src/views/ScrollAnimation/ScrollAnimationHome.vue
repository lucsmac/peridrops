<template>
  <div class="animation showcase-draggable">
    <HomeBtn />
    <MenuAnimation
    :linkBase="baseLink" />

    <div class="content">
      <div class="header">
        <h1>Scroll animation</h1>
      </div>

      <section ref="animationScreen" class="scroll-animation">
        <img ref="paperPlane" :src="require('@/assets/paper-plane.png')" alt="Paper plane" class="paper-plane">
        <svg viewBox="0 0 1365.53 376.66">
          <path id="path" d="M.5,384.5s109-79,204-70,206,111,354,108,265.48-65.19,287-146c49-184-155-205.68-215-136-142,165,57.15,337,172,338,112,1,191,22,358-183,46-56.53,205-141,205-141" transform="translate(-0.21 -103.4)" stroke-miterlimit="10"/></svg>
      </section>

      <div class="footer">
        <h4>Wooooooooooooooo</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap, TimelineLite, TweenLite } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ScrollMagic from 'scrollmagic';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

export default {
  name: 'ShowcaseDraggable',
  computed: {
    baseLink() {
      const firstLink = this.$route.path;
      const baseLink = firstLink.split('/');

      return baseLink[1];
    },
  },
  methods: {
    flightPath() {
      return {
        curviness: 1.25,
        autoRotate: true,
        values: [{ x: 100, y: -20 }],
      };
    },

    runOverPath(el, elPath) {
      gsap.registerPlugin(MotionPathPlugin);
      const tl = new TimelineLite();

      tl.add(
        TweenLite.to(el, 1, {
          motionPath: {
            path: elPath,
            align: elPath,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          ease: 'Power1.easeInOut',
        }),
      );

      return tl;
    },

    scrollMagicSetup(triggerEl, tl) {
      ScrollMagicPluginGsap(ScrollMagic, gsap);

      const controller = new ScrollMagic.Controller();

      const scene = new ScrollMagic.Scene({
        triggerElement: triggerEl,
        duration: 2000,
        triggerHook: 0,
      })
        .setTween(tl)
        .setPin(triggerEl)
        .addTo(controller);

      console.log(scene);
    },
  },
  mounted() {
    const { paperPlane, animationScreen } = this.$refs;
    const elPath = document.querySelector('#path');
    const tween = this.runOverPath(paperPlane, elPath);

    this.scrollMagicSetup(animationScreen, tween);
  },
};
</script>

<style lang="scss" scoped>
.animation {
  background: $t-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 100%;
  min-height: 93vh;

  .content {
    width: 100%;
    height: 100%;
    // overflow: hidden;

    .header, .footer {
      width: 100%;
      height: 96.5vh;
      display: flex;
      justify-content: center;
      align-items: center;

      h1, h4 {
        @include type-1;
        color: $p-color;
      }

      h1 {
        font-size: 3rem;
      }

      h4 {
        font-size: 2rem;
      }

      @include max('phone') {
        h4 {
          font-size: 2rem;
        }
      }
    }

    .scroll-animation {
      height: 120vh;
      width: 100%;
      background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
      position: relative;
      overflow: hidden;

      .paper-plane {
        height: 75px;
        position: absolute;
        top: 50%;
        transform: translate3d(-150%, -50%, 0);
      }

      svg {
        width: 110vw;
        overflow: visible;
        height: 100%;
        @include max('phone') {
          width: 150vw;
        }

        /* Fix Safari rendering bug */
        transform: translate3d(-100px, 0, 0);
      }

      path {
        fill: transparent;
        stroke-width: 2;
        stroke: transparent;
      }
    }
  }
}
</style>
