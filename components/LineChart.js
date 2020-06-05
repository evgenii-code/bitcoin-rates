import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  props: ['chartData', 'options'],
  mounted() {
    this.render;
  },
  computed: {
    render() {
      this.renderChart(this.chartData, this.options);
    },
  },
  watch: {
    chartData: {
      handler() {
        this.render;
      },
      deep: true,
    },
  },
};
