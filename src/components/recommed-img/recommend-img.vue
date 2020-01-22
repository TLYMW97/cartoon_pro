<template>
  <router-link to="/">
    <img :src="img_src" alt />
  </router-link>
</template>

<script>
export default {
  name: 'recommend-img',
  created() {},
  props: {
    img_src: {
      type: String,
      default: null
    },
    id: {
      type: Number,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>