<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__api">
        Powered by
        <a
          href="https://min-api.cryptocompare.com/"
          target="_blank"
          class="footer__link"
          >cryptocompare.com</a
        >
        API
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  padding: 20px 40px;
  min-height: 200px;
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

.footer__api {
  font-size: 14px;
}

.footer__link {
  color: #ececec;
}

@media screen and (max-width: 425px) {
  .footer {
    padding: 20px 20px;
  }

  .footer__api {
    font-size: 12px;
  }
}
</style>
