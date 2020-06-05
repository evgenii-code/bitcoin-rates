<template>
  <section class="container container_limited">
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  box-sizing: border-box;
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  grid-gap: 20px; */
}

.container_limited {
  max-width: 1360px;
  padding: 0 40px;
}

@media screen and (max-width: 425px) {
  /* .container {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  } */

  .container_limited {
    padding: 0 20px;
  }
}
</style>
