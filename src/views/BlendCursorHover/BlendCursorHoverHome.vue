<template>
  <div class="animation showcase-draggable">
    <HomeBtn />
    <MenuAnimation
    :linkBase="baseLink" />

    <div class="content">
      <span class="mobile-warning"><b>Atenção</b>: esse efeito funciona melhor com o auxílio de um mouse, experimente abri-lo em um computador.</span>
      <div class="nav-wrapper">
        <nav class="nav">
          <a href="#" class="hover-this"><span class="link">Home</span></a>
          <a href="#" class="hover-this"><span  class="link">About</span></a>
          <a href="#" class="hover-this"><span  class="link">Projects</span></a>
          <a href="#" class="hover-this"><span  class="link">Contact us</span></a>
          <div class="cursor"></div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlendCursorHoverHome',
  computed: {
    baseLink() {
      const firstLink = this.$route.path;
      const baseLink = firstLink.split('/');

      return baseLink[1];
    },
  },
  methods: {
    animateit(e) {
      const span = e.target.firstElementChild;
      const { offsetX: x, offsetY: y } = e;
      const { offsetWidth: width, offsetHeight: height } = e.target;
      const move = 25;
      const xMove = (x / width) * (move * 2) - move;
      const yMove = (y / height) * (move * 2) - move;

      span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      if (e.type === 'mouseleave') {
        span.style.transform = '';
      }
    },

    editCursor(e) {
      const cursor = document.querySelector('.cursor');
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    },
  },
  mounted() {
    const links = document.querySelectorAll('.nav > .hover-this');

    if (links) {
      links.forEach((link) => link.addEventListener('mousemove', this.animateit));
      links.forEach((link) => link.addEventListener('mouseleave', this.animateit));
    }

    window.addEventListener('mousemove', this.editCursor);
  },
  beforeDestroy() {
    const links = document.querySelectorAll('.nav > .hover-this');

    links.forEach((link) => link.removeEventListener('mousemove', this.animateit));
    links.forEach((link) => link.removeEventListener('mouseleave', this.animateit));

    window.removeEventListener('mousemove', this.editCursor);
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
  min-height: 93vh;

  .content {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: none;
    z-index: 20;

    @include max('tablet') {
      flex-direction: column;
    }

    .mobile-warning {
      display: none;
      align-self: center;
      padding-bottom: 60px;
      font-size: .7rem;
      font-family: 'Roboto', sans-serif;
      color: #FFF;
      text-align: center;

      @include max('tablet') {
        display: block;
      }
    }

    .hover-this {
      transition: all 0.3s ease;

      @include max('tablet') {
        margin: 20px 0;
      }

      &:hover ~ .cursor {
        transform: translate3d(-50%, -50%, 0) scale(8);
      }
    }

    .nav {
      text-align: center;
      cursor: none;
      width: 800px;
      display: flex;
      justify-content: space-around;

      @include max('tablet') {
        width: 100%;
        flex-direction: column;
        align-items: center;
      }
    }

    .link {
      display: inline-block;
      font-family: 'Roboto';
      font-weight: 700;
      color: #FFF;
      font-size: 1.5rem;
      text-transform: uppercase;
      pointer-events: none;
      transition: transform 0.1s linear;
    }

    .cursor {
      pointer-events: none;
      position: fixed;
      width: 10px;
      height: 10px;
      background-color: #FFF;
      border: 0px solid rgba(255, 255, 255, 0);
      border-radius: 50%/50%;
      mix-blend-mode: difference;
      transition: transform 0.3s ease;
    }
  }
}
</style>
