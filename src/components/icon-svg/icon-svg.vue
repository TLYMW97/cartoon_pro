<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#${iconHref}`" />
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconHref: {
      type: String
    }
  }
};
</script>

<style>
</style>