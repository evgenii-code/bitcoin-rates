import axios from 'axios';

export const state = () => ({
  fullData: [],
});

export const mutations = {
  setState(state, { name, value }) {
    return (state[name] = value);
  },
};

export const actions = {
  fetchFullData({ commit }) {
    return this.$axios
      .$get('pricemultifull?fsyms=BTC,ETH,XRP,BCH,BSV,LTC&tsyms=USD')
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

  // getBlockByName: (state) => (blockName) => {
  //   return state.blocks.find((block) => {
  //     block.block === blockName;
  //   });
  // },
};
