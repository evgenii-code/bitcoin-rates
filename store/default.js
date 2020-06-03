import axios from 'axios';

export const state = () => ({
  fullData: [],
  requestedCurrencies: 'BTC,ETH,XRP,BCH,BSV,LTC',
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
      value: payload.join(','),
    });
  },

  fetchFullData({ state, commit }) {
    const requestedCurrencies = state.requestedCurrencies;

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
    return state.requestedCurrencies.split(',');
  },

  // getBlockByName: (state) => (blockName) => {
  //   return state.blocks.find((block) => {
  //     block.block === blockName;
  //   });
  // },
};
