<template>
  <footer class="footer">
    <div class="footer__container">
      <my-text class="footer__api">
        Powered by
        <my-link
          :href="'https://min-api.cryptocompare.com/'"
          class="footer__link"
          >cryptocompare.com</my-link
        >
        API
      </my-text>
    </div>
  </footer>
</template>

<script>
import mixinComponents from '@/mixins/mixinComponents';

export default {
  mixins: [mixinComponents],

  components: {},
};
</script>

<style scoped>
.footer {
  padding: 20px 40px;
  min-height: 100px;
  background-color: #30475e;
  color: #ececec;
}

.footer__container {
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer__link {
  color: #ececec;
}

@media screen and (max-width: 425px) {
  .footer {
    padding: 20px 20px;
  }
}
</style>
