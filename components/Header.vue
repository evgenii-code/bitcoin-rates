<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/" v-if="$route.path !== '/'" class="header__logo"
        >Bitcoin Rates</nuxt-link
      >

      <h1 v-else class="header__logo">Bitcoin Rates</h1>

      <ul class="header__links">
        <li class="header__item">
          <nuxt-link to="/" class="header__link">Main</nuxt-link>
        </li>
        <li class="header__item">
          <nuxt-link to="/convert" class="header__link">Convert</nuxt-link>
        </li>
        <li class="header__item">
          <nuxt-link to="/about" class="header__link">About</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 20px 40px;
  background-color: #222831;
  color: #fff;
}

.header__container {
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 24px;
  margin: 0;
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}

.header__links {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}

.header__item {
  padding: 0;
  margin: 0;
  margin-right: 20px;
}

.header__item:last-of-type {
  margin-right: 0;
}

.header__link {
  color: #ececec;
  text-decoration: none;
  transition: 0.1s;
  font-size: 14px;
}

.header__link:hover {
  color: #f2a365;
  border-bottom: 4px solid #f2a365;
}

.nuxt-link-exact-active {
  border-bottom: 2px solid #fff;
}

@media screen and (max-width: 425px) {
  .header {
    padding: 20px 20px;
  }

  .header__logo {
    font-size: 18px;
  }

  .header__link {
    font-size: 12px;
  }
}
</style>
