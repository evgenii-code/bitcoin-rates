<template>
  <main class="main">
    <container>
      <section class="about">
        <h1 class="about__title">This app is made for practice</h1>

        <my-text class="about__text">Technology stack used: </my-text>

        <ul class="about__list">
          <li class="about__item">
            <my-text class="about__text"
              ><my-link :href="'https://nuxtjs.org/'">Nuxt.js</my-link></my-text
            >
          </li>
          <li class="about__item">
            <my-text class="about__text"
              ><my-link :href="'https://vuex.vuejs.org/'"
                >Vuex</my-link
              ></my-text
            >
          </li>
          <li class="about__item">
            <my-text class="about__text"
              ><my-link :href="'https://github.com/axios/axios'"
                >Axios</my-link
              ></my-text
            >
          </li>
          <li class="about__item">
            <my-text class="about__text"
              ><my-link :href="'https://www.chartjs.org/'"
                >Chart.js</my-link
              ></my-text
            >
          </li>
          <li class="about__item">
            <my-text class="about__text"
              ><my-link :href="'https://en.bem.info/'">BEM</my-link></my-text
            >
          </li>
          <li class="about__item">
            <my-text class="about__text">REST API</my-text>
          </li>
        </ul>

        <my-text class="about__text"
          >Made by
          <my-link :href="'https://github.com/evgenii-code'"
            >Evgenii Osipenkov</my-link
          >
        </my-text>
      </section>
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container';
import mixinComponents from '@/mixins/mixinComponents';

export default {
  mixins: [mixinComponents],

  components: {
    container: Container,
  },
};
</script>

<style scoped>
.main {
  min-height: calc(100vh - 169px);
  padding-top: 20px;
  padding-bottom: 20px;
}

.about__title {
  margin: 0;
  margin-bottom: 20px;
}

.about__list {
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 20px;
}

.about__item {
  margin: 0;
  margin-left: 20px;
  padding: 0;
}
</style>
