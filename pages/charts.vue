<template>
  <main class="main">
    <loading-screen v-if="!loaded" />
    <container>
      <section class="charts">
        <h1 class="charts__title">Crypto charts</h1>

        <line-chart
          class="charts__data"
          v-if="loaded"
          :data="chartData"
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

export default {
  async fetch() {
    // if (this.$store.getters['default/getRequestedCurrencies'] === '') {
    //   const availableCurrency = this.$store.getters[
    //     'currenciesForm/getAvailableCurrency'
    //   ];
    //   const availableCurrencyCode = availableCurrency.map(
    //     currency => currency.code
    //   );

    //   this.$store.dispatch('default/defineRequestedCurrencies', {
    //     payload: availableCurrencyCode,
    //   });
    // }

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
  },

  methods: {
    parseDates(historicalData) {
      return historicalData['Data'].map(item => {
        const timestamp = item['time'];
        const dateObj = new Date(timestamp * 1000);
        const utcString = dateObj.toLocaleDateString('ru');

        return utcString;
      });
    },

    parseValues(historicalData) {
      return historicalData['Data'].map(item => {
        const closeValue = +item['close'];

        return closeValue;
      });
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
          display: true,
          text: 'BTC rates',
          fontColor: '#ececec',
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

.charts {
  position: relative;
  /* height: 60vh; */
  height: 100%;
}

.charts__title {
  margin: 0;
  margin-bottom: 20px;
}

.charts__data {
}
</style>
