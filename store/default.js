export const state = () => ({
  fullData: [],
  requestedCurrencies: [],
  historicalData: {},
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  defineRequestedCurrencies({ commit }, { payload }) {
    commit('setState', {
      name: 'requestedCurrencies',
      value: payload,
    });
  },

  fetchFullData({ state, commit }) {
    const requestedCurrencies = state.requestedCurrencies.join(',');

    return this.$axios
      .$get(`pricemultifull?fsyms=${requestedCurrencies}&tsyms=USD`)
      .then(response => {
        return commit('setState', {
          name: 'fullData',
          value: response,
        });
      })
      .catch(error => console.log(error));
  },

  fetchHistoricalData({ state, commit }) {
    const requestedCurrencies = state.requestedCurrencies[0];

    return this.$axios
      .$get(`histoday?fsym=${requestedCurrencies}&tsym=USD&limit=90`)
      .then(response => {
        return commit('setState', {
          name: 'historicalData',
          value: response,
        });
      })
      .catch(error => console.log(error));
  },
};

export const getters = {
  getFullData(state) {
    return state.fullData;
  },

  getCurrencies(state) {
    return state.fullData['DISPLAY'];
  },

  getRequestedCurrencies(state) {
    return state.requestedCurrencies;
  },

  getListOfRequestedCurrencies(state) {
    return state.requestedCurrencies;
  },

  getHistoricalData(state) {
    return state.historicalData;
  },
};
