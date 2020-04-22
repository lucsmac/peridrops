<template>
  <div class="info">
    <HomeBtn />
    <MenuAnimation
    :linkBase="baseLink" />

    <div class="info-content">
      <h1 class="title">Info</h1>
      <div class="content-text">
        <p v-for="(paragraph, index) in info.description" class="content-paragraph" :key="index">{{ paragraph }}</p>
        <div class="tools">
          <p v-for="(tool, index) in info.tools" :key="index" class="tool">#{{tool}}</p>
        </div>
        <div class="codeLink">
          <a :href="info.codeLink" target="_blank">Ver código</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuAnimation from '../components/MenuAnimation.vue';
import HomeBtn from '../components/HomeBtn.vue';

export default {
  data() {
    return {
      infoAnimation: [
        {
          name: 'page-transition',
          description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget malesuada metus. Sed volutpat aliquam maximus. Maecenas malesuada eleifend rutrum. Nulla laoreet eros sed lorem accumsan, sed tempus lectus pretium.', 'Curabitur in risus in arcu sollicitudin pellentesque ac id ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rutrum vehicula dui, ac accumsan lacus porttitor fermentum.'],
          tools: ['Greensock', 'SCSS', 'VueTransitions', 'VueRouter'],
          codeLink: '#',
        },
        {
          name: 'showcase-draggable',
          description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget malesuada metus. Sed volutpat aliquam maximus. Maecenas malesuada eleifend rutrum. Nulla laoreet eros sed lorem accumsan, sed tempus lectus pretium.', 'Curabitur in risus in arcu sollicitudin pellentesque ac id ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rutrum vehicula dui, ac accumsan lacus porttitor fermentum.'],
          tools: ['Panzoom', 'SCSS'],
          codeLink: '#',
        },
        {
          name: 'blend-cursor-hover',
          description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget malesuada metus. Sed volutpat aliquam maximus. Maecenas malesuada eleifend rutrum. Nulla laoreet eros sed lorem accumsan, sed tempus lectus pretium.', 'Curabitur in risus in arcu sollicitudin pellentesque ac id ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rutrum vehicula dui, ac accumsan lacus porttitor fermentum.'],
          tools: ['SCSS', 'JavaScript'],
          codeLink: '#',
        },
        {
          name: 'scroll-animation',
          description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget malesuada metus. Sed volutpat aliquam maximus. Maecenas malesuada eleifend rutrum. Nulla laoreet eros sed lorem accumsan, sed tempus lectus pretium.', 'Curabitur in risus in arcu sollicitudin pellentesque ac id ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam rutrum vehicula dui, ac accumsan lacus porttitor fermentum.'],
          tools: ['ScrollMagic', 'Greensock', 'Sass', 'JavaScript'],
          codeLink: '#',
        },
      ],
    };
  },
  components: {
    HomeBtn,
    MenuAnimation,
  },
  computed: {
    baseLink() {
      const firstLink = this.$route.path;
      const baseLink = firstLink.split('/');

      return baseLink[1];
    },

    info() {
      const infoContent = this.infoAnimation.filter((e) => e.name === this.baseLink);

      return infoContent[0];
    },
  },
  methods: {
    // info() {
    //   const infoContent = this.infoAnimation.filter((e) => e.name === this.baseLink);

    //   return infoContent[0];
    // },
  },
  mounted() {
    // console.log(this.info());
  },
};
</script>

<style lang="scss" scoped>
.info {
  background: $t-color;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15vh 15vw;
  width: 100%;
  min-height: 93vh;

  @include max('phone') {
    padding: 5vh 5vw 0 5vw;
  }

  &-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 80px 2fr;

    @include max('phone') {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  .title {
    color: #FFF;
    font-size: 3.5rem;
    line-height: 1;
    font-weight: 700;
    @include type-1;
    text-transform: uppercase;
    padding-bottom: 50px;
  }

  .content-text {
    grid-column: 2 / -1;
    grid-row: 2 / -1;

    @include max('phone') {
      grid-column: 1 / -1;
      grid-row: 2 / -1;
    }
  }

  .content-paragraph {
    font-family: 'Roboto', sans-serif;
  }

  .tools {
    padding: 20px 0;
    display: flex;

    .tool {
      font-family: 'Roboto', sans-serif;
      font-size: .8rem;
      font-weight: 700;
      & + .tool {
        margin-left: 10px;
      }
    }
  }

  .codeLink {
    a {
      font-family: 'Roboto';
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: .7rem;
      border: 1px solid;
      padding: 7px 30px;
      color: #FFF;
      transition: .3s;

      &:hover {
        background: #FFF;
        color: $t-color;
        border-color: #FFF;
      }
    }
  }
}
</style>
