<template>
  <div class="card">
    <div :style="{ 'backgroundImage': `url(${require(`@/assets/telas/${bgImg}.png`)})` }" class="card-bgImg">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['bgImg'],
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;

  @include max('phone') {
    height: 200px;
    flex-direction: column;
  }

  &:hover {
    .card-bgImg {
      filter: brightness(100%);
      transform: scale(1.01);
    }
  }

  &-bgImg {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: .5s ease;
    filter: brightness(70%);

    @include max('phone') {
      position: initial;
    }
  }

  &-title {
    z-index: 5;
    @include p-type;
    font-weight: bold;
    font-size: 3rem;
    color: $p-color;
    text-transform: uppercase;
    text-align: center;
    text-shadow: #000 1px 2 5px;

    @include max('phone') {
      font-weight: normal;
      text-transform: uppercase;
      padding-top: 25px;
      font-size: 1rem;
      letter-spacing: 3px;
    }
  }
}
</style>
