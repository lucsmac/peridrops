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
          description: ['Uma das melhores táticas para se ter um bom design na web é passar a sensação de unidade, com as transições entre páginas essa impressão é transmitida com muita elegância. A fluidez na navegação torna a usabilidade do seu site muito mais agradável e a experiência muito mais prazerosa.', 'Para construir essa transição me baseei em um exemplo que utilizava uma biblioteca auxiliar chamada Barbajs, porém, decidi adaptar ao meu próprio modo e utilizar os mecanismos de transição do Vue Router.'],
          tools: ['Greensock', 'SCSS', 'VueTransitions', 'VueRouter'],
          codeLink: 'https://github.com/lucsmac/peridrops/tree/master/src/views/PageTransition',
        },
        {
          name: 'showcase-draggable',
          description: ['Um ótimo exemplo de como um efeito simples de clicar e arrastar torna a experiência do seu usuário muito mais interessante. Essa estratégia pode ser aplicada em listas de fotos e projetos, como um portfólios e galerias.', 'Sua implementação é bem simples, utilizando apenas poucas linhas de JavaScript para configurar a biblioteca Panzoom, utilizada para permitir que a tela seja arrastável.'],
          tools: ['Panzoom', 'SCSS'],
          codeLink: 'https://github.com/lucsmac/peridrops/tree/master/src/views/ShowcaseDraggable',
        },
        {
          name: 'blend-cursor-hover',
          description: ['Fluidez é a palavra que define essa animação. Os efeitos presentes neste exemplo propoem a criação de uma unidade entre os elementos: o cursor conversa com os links, que por sua vez conversam com o cursor. Mais um exemplo de como a percepção do usuário sobre o site pode ser incrementada através de táticas simples.', 'Para construir um efeito como esse basta a manipulação do DOM através de JavaScript para alterar propriedades CSS de acordo com a interação do usuário com os elementos.'],
          tools: ['SCSS', 'JavaScript'],
          codeLink: 'https://github.com/lucsmac/peridrops/tree/master/src/views/BlendCursorHover',
        },
        {
          name: 'scroll-animation',
          description: ['Uma grande tendência nos produtos web é a utilização do storytelling. Cada vez mais o design dos sites está sendo pensado para guiar as ações do usuário e inserí-lo em uma jornada. Esse exemplo mostra uma forma muito interessante de como o direcionamento do usuário pode acontecer. A utilização da página segue uma linha cronológica com início, meio e fim, evitando que o seu usuário fique perdido ou sem entender para onde ir ao acessar o site.', 'Para criar esse exemplo foi utilizado uma biblioteca chamada ScrollMagic, porém, é preciso informar que a ScrollMagic é uma biblioteca que possui problemas de manutenção, portanto deixo a indicação para utilizar uma outra ferramenta ou criar a sua própria.'],
          tools: ['ScrollMagic', 'Greensock', 'Sass', 'JavaScript'],
          codeLink: 'https://github.com/lucsmac/peridrops/tree/master/src/views/ScrollAnimation',
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
    opacity: .9;
    font-family: 'Roboto', sans-serif;

    & + .content-paragraph {
      padding-top: 7px;
    }
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
