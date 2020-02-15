<template>
  <div class="section-title">
    <a-icon :type="icon" />
    <h3>{{title}}</h3>
    <slot></slot>
    <span class="more">
      更多
      <a-icon style="font-size: inherit; color:inherit;
" type="right" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'section-title',
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../../../assets/sass/index';
.section-title {
  position: relative;
  display: flex;
  align-items: center;
}
.section-title h3 {
  display: inline-block;
  font-size: $large-x-font;
  margin-left: 5px;
  margin-bottom: 0;
}
.section-title .anticon {
  font-size: $large-x-font;
  color: $index-color;
}
.more {
  position: absolute;
  right: 2%;
  bottom: 0;
}
</style>