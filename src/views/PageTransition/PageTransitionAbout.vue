<template>
  <div class="animation">

    <div ref="loadContainer" class="load-container">
      <div ref="loadingScreen" class="loading-screen"></div>
    </div>

    <HomeBtn />
    <MenuAnimation
    :linkBase="baseLink" />

    <main class="content">
      <h1 ref="title" class="title animate-this">About</h1>
      <router-link ref="animate" class="btn animate-this" to="/page-transition/">Go to home</router-link>
    </main>

  </div>
</template>

<script>

export default {
  name: 'TransitionAbout',
  methods: {
  },
  computed: {
    baseLink() {
      const firstLink = this.$route.path;
      const baseLink = firstLink.split('/');

      return baseLink[1];
    },
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
  padding: 15vh 15vw;
  width: 100%;
  min-height: 94vh;

  @include max('phone') {
    padding: 10vh 5vw;
  }

  .loading-screen {
    position: relative;
    padding: 0;
    background-color: #4BEDC2;
    width: 0%;
    height: 100%;
    z-index: 1000;
    pointer-events: none;
  }

  &.v-enter-active {
    .loading-screen {
      width: 100%;
    }
  }

  .load-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 100;
    pointer-events: none;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    z-index: 5;

    .title {
      @include type-1;
      font-size: 5rem;
      color: $s-color;
      text-transform: uppercase;
      padding-bottom: 15px;
    }

    .btn {
      font-family: "Roboto", Arial, Helvetica, sans-serif;
      letter-spacing: 5px;
      font-size: .7rem;
      color: $p-color;
      border: 1px solid;
      text-transform: uppercase;
      padding: 12px 60px;
      transition: all .4s ease;

      &:hover {
        background: $p-color;
        color: $t-color;
        border-color: $p-color;
      }
    }
  }
}
</style>
