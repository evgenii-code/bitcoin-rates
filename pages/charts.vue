<template>
  <main class="main">
    <loading-screen v-if="!loaded" />

    <container class="main__container">
      <h1 class="charts__title">Crypto charts {{ getPeriod }}</h1>

      <currencies-form
        class="charts__form"
        :type="'radio'"
        @refreshCurrencies="refreshCurrencies"
      />

      <section class="charts">
        <line-chart
          class="charts__data"
          v-if="loaded"
          :chartData="chartData"
          :options="chartOptions"
        />
      </section>
    </container>
  </main>
</template>

<script>
import LoadingScreen from '@/components/LoadingScreen';
import Container from '@/components/Container';
import LineChart from '@/components/LineChart';
import mixinComponents from '@/mixins/mixinComponents';
import CurrenciesForm from '@/components/CurrenciesForm';

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

    await this.$store.dispatch('default/fetchHistoricalData');
    this.currencies = this.$store.getters['default/getCurrencies'];
    this.historicalData = this.$store.getters['default/getHistoricalData'];
    this.chartData.labels = this.parseDates(this.historicalData);
    this.chartData.datasets[0].data = this.parseValues(this.historicalData);
    this.loaded = true;
  },

  mixins: [mixinComponents],

  components: {
    container: Container,
    LineChart,
    LoadingScreen,
    CurrenciesForm,
  },

  computed: {
    getPeriod() {
      const fromTimestamp = this.historicalData['TimeFrom'];
      const toTimestamp = this.historicalData['TimeTo'];

      return `${this.parseDate(fromTimestamp)} - ${this.parseDate(
        toTimestamp
      )}`;
    },
  },

  methods: {
    parseDate(timestamp) {
      const dateObj = new Date(timestamp * 1000);
      const day = ('0' + dateObj.getDate()).slice(-2);
      const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
      const utcString = `${day}.${month}`;

      return utcString;
    },

    parseDates(historicalData) {
      return historicalData['Data'].map(item => {
        const timestamp = item['time'];

        return this.parseDate(timestamp);
      });
    },

    parseValues(historicalData) {
      return historicalData['Data'].map(item => {
        const closeValue = +item['close'];

        return closeValue;
      });
    },

    refreshCurrencies() {
      this.$fetch();
    },
  },

  data() {
    return {
      loaded: false,

      currencies: {},
      historicalData: {},

      chartData: {
        labels: [], // подписи
        datasets: [
          {
            backgroundColor: '#ececec',
            borderColor: '#f2a365',
            lineTension: 0,
            data: [], // значения
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

        animation: false,

        legend: {
          display: false,
        },

        title: {
          display: false,
        },

        hover: {
          intersect: false,
        },

        tooltips: {
          intersect: false,
          mode: 'nearest',
          displayColors: false,
          titleAlign: 'center',
          caretSize: 5,
          caretPadding: 5,
        },

        elements: {
          line: {
            fill: false,
          },
          point: {
            radius: 0,
            hitRadius: 6,
            borderWidth: 0,
            borderColor: 'rgba(0, 0, 0, 0)',
          },
        },

        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
                fontColor: '#ececec',
              },

              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontColor: '#ececec',
                autoSkip: true,
                maxRotation: 0,
                autoSkipPadding: 15,
                lineHeight: 4,
              },

              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
.main {
  min-height: calc(100vh - 169px);
  padding-top: 20px;
  padding-bottom: 20px;
}

.main__container {
  margin: 0 auto;
}

.charts {
  position: relative;
  /* height: 60vh; */
  height: 100%;
}

.charts__title {
  margin: 0;
  margin-bottom: 20px;
}

.charts__form {
  margin-bottom: 20px;
}

.charts__data {
}
</style>
