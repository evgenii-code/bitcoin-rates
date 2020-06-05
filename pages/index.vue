<template>
  <main class="main">
    <loading-screen v-if="!loaded" />

    <container class="main__form-container">
      <currencies-form
        class="main__form"
        @refreshCurrencies="refreshCurrencies"
      ></currencies-form>
    </container>

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
import LoadingScreen from '@/components/LoadingScreen';
import Container from '@/components/Container';
import Card from '@/components/Card';
import CurrenciesForm from '@/components/CurrenciesForm';
import mixinComponents from '@/mixins/mixinComponents';

export default {
  async fetch() {
    const requestedCurrencies = this.$store.getters[
      'default/getRequestedCurrencies'
    ];

    if (requestedCurrencies.length === 0) {
      const availableCurrency = this.$store.getters[
        'currenciesForm/getAvailableCurrency'
      ];
      const availableCurrencyCode = availableCurrency.map(
        currency => currency.code
      );

      this.$store.dispatch('default/defineRequestedCurrencies', {
        payload: availableCurrencyCode,
      });
    }

    await this.$store.dispatch('default/fetchFullData');
    this.currencies = this.$store.getters['default/getCurrencies'];
    this.loaded = true;
  },

  mixins: [mixinComponents],

  components: {
    container: Container,
    card: Card,
    CurrenciesForm,
    LoadingScreen,
  },

  data() {
    return {
      currencies: {},
      loaded: false,
    };
  },

  methods: {
    refreshCurrencies() {
      this.$fetch();
    },
  },
};
</script>

<style scoped>
.main {
  min-height: calc(100vh - 169px);
  padding-top: 20px;
  padding-bottom: 20px;
}

.main__form-container {
  margin: 0 auto;
  margin-bottom: 20px;
}

.main__container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 20px;
}

.main__form {
  grid-column: 1 / -1;
}

@media screen and (max-width: 425px) {
  .main__container {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }
}
</style>
