<template>
  <router-link class="to-home" to="/">&larr; Voltar</router-link>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.to-home {
  position: absolute;
  display: flex;
  justify-content: flex-start;
  top: 0px;
  left: 0px;
  padding-top: 5.5vh;
  padding-left: 3.5vw;
  z-index: 3;
  color: #FFF;
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;

  @include max('phone') {
    padding-top: 15px;
  }
}
</style>
