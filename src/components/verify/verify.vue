<template>
  <div class="verify">
    <div class="verify-code">{{ code }}</div>
  </div>
</template>

<script>
export default {
  name: 'Verify',
  props: {
    code: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped lang="scss">
.verify {
  width: 100%;
  .verify-code {
    width: 40%;
    background: orange;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
