<template>
  <main class="main">
    <container class="main__container">
      <card
        v-for="(data, currency) in currencies"
        :key="currency"
        :currency="currency"
        :data="data"
      />
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container';
import Card from '@/components/Card';

export default {
  components: {
    container: Container,
    card: Card,
  },

  computed: {
    currencies() {
      return this.$store.getters['default/getCurrencies'];
    },
  },
};
</script>

<style>
.main {
  background-color: #222831;
  color: #ececec;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
