<template>
  <a
    :class="['link', { link_type_bold: bold }, { link_type_italic: italic }]"
    :target="target"
    :href="href"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: '_blank',
    },
    bold: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
    },
  },
};
</script>

<style scoped>
.link {
  color: inherit;
  font-size: inherit;
  cursor: pointer;
}

.link_type_bold {
  font-weight: bold;
}

.link_type_italic {
  font-style: italic;
}
</style>
