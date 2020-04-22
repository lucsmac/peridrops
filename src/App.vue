<template>
  <div id="app">
    <div class="content-view">
      <router-view class="view"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

@font-face{
    font-family:"Hey August";
    src:url("./assets/fonts/hey-august.ttf") format("ttf");
}

@font-face{
    font-family:"Gobold";
    src:url("./assets/fonts/Gobold-Bold.otf") format("otf");
}

.content-view {
    width: 100%;
    padding: 3.5vh 2vw;

    @include max('phone') {
      padding: 0;
    }

  .view {
    @include shadow;
  }
}

#app {
  background: #DEDEDE;
}
</style>
