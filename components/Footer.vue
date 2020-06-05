<template>
  <footer class="footer">
    <div class="footer__container">
      <my-text class="footer__api">
        Api provided by
        <my-link
          :href="'https://min-api.cryptocompare.com/'"
          class="footer__link"
          >cryptocompare.com</my-link
        >
      </my-text>

      <my-text class="footer__author">
        <my-link :href="'https://github.com/evgenii-code'"
          >Evgenii Osipenkov</my-link
        >
      </my-text>

      <my-text class="footer__copyright">2020</my-text>
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.footer__author {
  display: flex;
  justify-content: flex-end;
}

.footer__copyright {
  grid-column-end: -1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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
