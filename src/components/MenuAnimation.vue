<template>
  <div class="menu-animation">
    <router-link class="left" :to="{name: linkBase}">Demo</router-link>
    <router-link
      class="right"
      :to="{name: linkBase + '/info'}">
      Info
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'MenuAnimation',
  props: ['linkBase'],
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.menu-animation {
  box-sizing: border-box;
  position: absolute;
  top: 50vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1vw;
  transform: translate3d(0, -50%, 0);

  @include max('phone') {
    top: 0;
    right: 0;
    transform: translate3d(0, 0, 0);
    justify-content: flex-end;
  }

  .left, .right {
    font-size: 4rem;
    line-height: 1;
    max-width: 70px;
    text-transform: uppercase;
    color: $p-color;
    @include type-1;
    font-weight: 900;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px $p-color;
    writing-mode: vertical-lr;
    text-orientation: sideways;
    transition: all .5s ease;
    z-index: 500;

    @include max('phone') {
      writing-mode: initial;
      text-orientation: initial;
      font-size: 1.5rem;
      margin: 15px 10px 0 10px;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px $p-color;
    }

    &:hover {
      -webkit-text-fill-color: $p-color;
      transition: all .5s ease;
    }
  }
}
</style>
