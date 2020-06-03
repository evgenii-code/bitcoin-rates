<template>
  <main class="main">
    <container>
      <section class="charts">
        <h1 class="charts__title">Crypto charts</h1>
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

.charts__title {
  margin: 0;
  margin-bottom: 20px;
}
</style>
