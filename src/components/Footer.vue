<template>
  <Footer class="footer">
    <div class="text">
      <p>Desenvolvido por <b class="name">Lucas Macedo</b></p>
      <a href="http://" target="_blank">
        <GitIcon class="icon" />
      </a>
    </div>
  </Footer>
</template>

<script>
import GitIcon from './GitIcon.vue';

export default {
  components: {
    GitIcon,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  padding: 7px 30px;
  background: #0F0F0F;
  display: flex;
  justify-content: center;

  .text {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #FFF;
    display: flex;
    align-items: center;
    font-size: .8rem;

    .icon {
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
  }
}
</style>
