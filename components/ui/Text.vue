<template>
  <p :class="['text', { text_type_bold: bold }, { text_type_italic: italic }]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    bold: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.text {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

.text_type_bold {
  font-weight: bold;
}

.text_type_italic {
  font-style: italic;
}

@media screen and (max-width: 425px) {
  .text {
    font-size: 12px;
  }
}
</style>
