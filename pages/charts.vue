<template>
  <main class="main">
    <container>
      <section class="charts">
        <h1 class="charts__title">Crypto charts</h1>

        <line-chart :data="chartData" :options="chartOptions" :height="200" />
      </section>
    </container>
  </main>
</template>

<script>
import Container from '@/components/Container';
import LineChart from '@/components/LineChart';
import mixinComponents from '@/mixins/mixinComponents';

export default {
  mixins: [mixinComponents],

  components: {
    container: Container,
    LineChart,
  },

  data() {
    return {
      chartData: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            backgroundColor: '#f2a365',
            data: [40, 15, 20, 25, 50, 100],
          },
        ],
      },
      chartOptions: {
        responsive: true,

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
          mode: 'x-axis',
          displayColors: false,
          titleAlign: 'center',
          caretSize: 5,
          caretPadding: 5,
        },

        elements: {
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
                beginAtZero: true,
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

.charts__title {
  margin: 0;
  margin-bottom: 20px;
}
</style>
