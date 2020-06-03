<template>
  <main class="main">
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
import Container from '@/components/Container';
import Card from '@/components/Card';
import CurrenciesForm from '@/components/CurrenciesForm';
import mixinComponents from '@/mixins/mixinComponents';

export default {
  async fetch() {
    if (this.$store.getters['default/getRequestedCurrencies'] === '') {
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
  },

  mixins: [mixinComponents],

  components: {
    container: Container,
    card: Card,
    'currencies-form': CurrenciesForm,
  },

  data() {
    return {
      currencies: {},
    };
  },

  methods: {
    refreshCurrencies() {
      this.$fetch();
    },
  },
};
</script>

<style>
.main {
  min-height: calc(100vh - 169px);
  padding-top: 20px;
  padding-bottom: 20px;
}

.main__form-container {
  margin-bottom: 20px;
}

.main__form {
  grid-column: 1 / -1;
}
</style>
