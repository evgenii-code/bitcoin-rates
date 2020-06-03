<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  border: none;
  border-radius: 10px;
  background-color: #f2a365;
  cursor: pointer;
  padding: 10px 20px;
  min-width: 100px;
  display: inline-block;
  color: inherit;
  font-size: 24px;
  font-weight: bold;
}

@media screen and (max-width: 425px) {
  .button {
    padding: 7px 15px;
    font-size: 18px;
  }
}
</style>
