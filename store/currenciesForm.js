import axios from 'axios';

export const state = () => ({
  isOptionsOpen: false,
  availableCurrency: [
    {
      id: 1,
      name: 'Bitcoin',
      code: 'BTC',
    },
    {
      id: 2,
      name: 'Ethereum',
      code: 'ETH',
    },
    {
      id: 3,
      name: 'Ripple',
      code: 'XRP',
    },
    {
      id: 4,
      name: 'Bitcoin Cash',
      code: 'BCH',
    },
    {
      id: 5,
      name: 'Bitcoin SV',
      code: 'BSV',
    },
    {
      id: 6,
      name: 'Litecoin',
      code: 'LTC',
    },
  ],
});

export const mutations = {
  toggleOptions(state) {
    return (state.isOptionsOpen = !state.isOptionsOpen);
  },
};

export const actions = {};

export const getters = {
  getOptionsState(state) {
    return state.isOptionsOpen;
  },

  getAvailableCurrency(state) {
    return state.availableCurrency;
  },
};
