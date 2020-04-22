<template>
  <div class="home">
    <h1 class="title">PeriDrops</h1>
    <h4 class="subtitle">Meu repositório de experiências em Motion UI</h4>

    <div class="cards">
      <router-link class="card-wrapper" to='/page-transition/'>
        <Card :bgImg="'transition'" class="card">
          <p class="card-title">Transição entre páginas</p>
        </Card>
      </router-link>
      <router-link class="card-wrapper" to='/showcase-draggable'>
        <Card :bgImg="'draggable'" class="card">
          <p class="card-title">Showcase arrastável</p>
        </Card>
      </router-link>
      <router-link class="card-wrapper" to='/blend-cursor-hover'>
        <Card :bgImg="'menu-hover'" class="card">
          <p class="card-title">Efeito hover no cursor</p>
        </Card>
      </router-link>
      <router-link class="card-wrapper" to='/scroll-animation'>
        <Card :bgImg="'scroll-animation'" class="card">
          <p class="card-title">Animação ao scroll</p>
        </Card>
      </router-link>
    </div>
  </div>
</template>

<script>

import Card from '../components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: $t-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vh 15vw;
  width: 100%;

  @include max('phone') {
    padding: 75px 5vw;
  }

  .title {
    font-family: 'Monoton', Arial, Helvetica, sans-serif;
    font-size: 6rem;
    color: $p-color;
    line-height: 1;
    padding-bottom: 10px;
    transform: translate3d(0, 7.5px, 0);

    @include max('phone') {
      font-size: 3rem;
    }
  }

  .subtitle {
    font-family: 'Roboto', Arial, sans-serif;
    font-weight: 300;
    font-size: .8rem;
    text-transform: uppercase;
    z-index: 2;
    margin-bottom: 150px;
    letter-spacing: 5px;
    text-align: center;

    @include max('phone') {
      font-size: .5rem;
      margin-bottom: 125px;
    }
  }

  .cards {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .card-wrapper {
      width: 100%;
      & + .card-wrapper {
        margin-top: 100px;

        @include max('phone') {
          margin-top: 75px;
        }
      }
    }
  }
}
</style>
