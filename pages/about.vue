<template>
  <main class="main">
    <container>
      <section class="about">
        <h1 class="about__title">About this app</h1>
        <my-text class="about__text"
          >This app is made for practice of Nuxt.js, Vuex and API by Evgenii
          Osipenkov</my-text
        >
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
</style>
