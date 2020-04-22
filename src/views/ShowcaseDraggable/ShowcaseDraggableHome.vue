<template>
  <div class="animation showcase-draggable">
    <HomeBtn />
    <MenuAnimation
    :linkBase="baseLink"
    />

    <div class="content">
      <div class="header">
        Explore os projetos clicando e arrastando
      </div>
      <div ref="container" class="container">
        <div class="row">
          <div class="block block-1" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/one.jpg')})` }"></div>
          <div class="block block-2" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/two.jpg')})` }"></div>
          <div class="block block-3" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/three.jpg')})` }"></div>
          <div class="block block-4" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/four.jpg')})` }"></div>
          <div class="block block-5" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/five.jpg')})` }"></div>
          <div class="block block-6" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/six.jpg')})` }"></div>
        </div>
        <div class="row">
          <div class="block block-7" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/seven.jpg')})` }"></div>
          <div class="block block-8" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/eight.jpg')})` }"></div>
          <div class="block block-5" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/five.jpg')})` }"></div>
          <div class="block block-6" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/six.jpg')})` }"></div>
          <div class="block block-1" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/one.jpg')})` }"></div>
          <div class="block block-2" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/two.jpg')})` }"></div>
        </div>
        <div class="row">
          <div class="block block-1" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/one.jpg')})` }"></div>
          <div class="block block-2" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/two.jpg')})` }"></div>
          <div class="block block-3" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/three.jpg')})` }"></div>
          <div class="block block-4" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/four.jpg')})` }"></div>
          <div class="block block-5" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/five.jpg')})` }"></div>
          <div class="block block-6" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/six.jpg')})` }"></div>
        </div>
        <div class="row">
          <div class="block block-7" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/seven.jpg')})` }"></div>
          <div class="block block-8" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/eight.jpg')})` }"></div>
          <div class="block block-5" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/five.jpg')})` }"></div>
          <div class="block block-6" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/six.jpg')})` }"></div>
          <div class="block block-1" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/one.jpg')})` }"></div>
          <div class="block block-2" :style="{ 'backgroundImage': `url(${require('@/assets/sd-imgs/two.jpg')})` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as panzoom from 'panzoom';

export default {
  name: 'ShowcaseDraggable',
  data() {
    return {
    };
  },
  computed: {
    baseLink() {
      const firstLink = this.$route.path;
      const baseLink = firstLink.split('/');

      return baseLink[1];
    },
  },
  methods: {
    setupPanzoom() {
      const { container } = this.$refs;

      panzoom(container, {
        minZoom: 1,
        maxZoom: 1,
      });
    },
  },
  mounted() {
    this.setupPanzoom();
  },
};
</script>

<style lang="scss" scoped>
.animation {
  background: $t-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 100%;
  height: 94vh;

  @include max('phone') {
    padding: 10vh 0;
  }

  .content {
    width: 90%;
    height: 100%;
    overflow: hidden;

    .header {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      color: white;
      letter-spacing: 3px;
      z-index: 5;
      text-align: center;

      @include max('phone') {
        width: 90%;
        font-size: 0.7rem;
      }
    }

    .container {
      position: relative;
      width: 200%;
      height: 200%;

      @include max('phone') {
        width: 750%;
      }
    }

    .row {
      display: flex;
      justify-content: space-around;
      margin: 64px 0;

      .block {
        width: 500px;
        height: 400px;
        background: grey;
        margin: 16px;
        filter: grayscale(1);
        opacity: 0.4;
        transition: 1s;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;

        &:hover {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
}
</style>
