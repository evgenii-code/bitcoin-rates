<template>
  <form class="form" @submit.prevent="emitRefreshCurrencies">
    <div class="form__options" v-if="OptionsState">
      <div
        class="form__list"
        v-for="(currency, index) in getAvailableCurrency"
        :key="index"
      >
        <input
          class="form__checkbox"
          type="checkbox"
          :id="currency.code"
          :value="currency.code"
          v-model="checkedCurrencies"
        />

        <label class="form__label" :for="currency.code">
          <my-text>{{ `${currency.name} - ${currency.code}` }}</my-text>
        </label>
      </div>
    </div>

    <div
      :class="[
        'form__selected-options',
        { 'form__selected-options_opened': OptionsState },
      ]"
      @click="openOptions"
    >
      <my-text class="form__text">{{ checkedCurrencies.join(', ') }}</my-text>
    </div>

    <my-button class="form__button">Refresh</my-button>
  </form>
</template>

<script>
import mixinComponents from '@/mixins/mixinComponents';

export default {
  mixins: [mixinComponents],

  data() {
    return {
      checkedCurrencies: [],
    };
  },

  beforeMount() {
    // const availableCurrency = this.$store.getters['currenciesForm/getAvailableCurrency'];
    // this.checkedCurrencies = availableCurrency.map(currency => currency.code);
    this.checkedCurrencies = this.$store.getters[
      'default/getListOfRequestedCurrencies'
    ];
    this.refreshRequestedCurrencies();
  },

  computed: {
    getAvailableCurrency() {
      return this.$store.getters['currenciesForm/getAvailableCurrency'];
    },

    OptionsState() {
      return this.$store.getters['currenciesForm/getOptionsState'];
    },
  },

  methods: {
    emitRefreshCurrencies() {
      if (!this.checkedCurrencies.length) {
        console.log('Сначала выберите валюту'); // сделать красиво
        return;
      }

      this.refreshRequestedCurrencies();
      this.$emit('refreshCurrencies');
    },

    refreshRequestedCurrencies() {
      this.$store.dispatch('default/defineRequestedCurrencies', {
        payload: this.checkedCurrencies,
      });
    },

    openOptions() {
      this.$store.commit('currenciesForm/toggleOptions');
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
  display: grid;
  grid-template-columns: 1fr minmax(140px, 20%);
  grid-gap: 20px;
}

.form__options {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #30475e;
  box-shadow: 0 0 15px #222831;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form__selected-options {
  border-radius: 10px;
  background-color: #30475e;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  z-index: 2;
  cursor: pointer;
}

.form__selected-options_opened {
  border-bottom-left-radius: 0;
}

.form__list {
  margin-bottom: 15px;
}

.form__list:last-of-type {
  margin-bottom: 0;
}

.form__checkbox {
  display: none;
}

.form__label {
  cursor: pointer;
}

.form__checkbox:checked ~ .form__label {
  font-weight: bold;
  color: #f2a365;
}

@media screen and (max-width: 425px) {
  .form {
    grid-template-columns: 1fr minmax(100px, 20%);
  }

  .form__options {
    padding: 10px;
  }

  .form__selected-options {
    padding: 8px 10px;
  }
}
</style>
