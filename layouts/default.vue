<template>
  <div class="layout">
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    'my-header': Header,
    'my-footer': Footer,
  },

  // async fetch() {
  //   await this.$store.dispatch('default/fetchFullData');
  // },
};
</script>

<style>
html {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  background-color: #222831;
  color: #ececec;
}
</style>
