<template>
  <li class="operate-item">
    <a href="#">
      <div class="icon">
        <icon-svg :iconHref="icon" />
      </div>
      <p>{{name}}</p>
    </a>
  </li>
</template>

<script>
import IconSvg from '../icon-svg/icon-svg';
export default {
  name: 'li-icon',
  components: {
    IconSvg
  },
  props: {
    name: {
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
@import '../../assets/sass/index';
.operate-item {
  margin-left: 30px !important;
  a {
    color: #999;
  }
}
p {
  margin-top: 5px;
  margin-bottom: 0;
}
.operate-item a {
  margin: 0 auto;
}
.operate-item p {
  font-size: $small-font;
  text-align: center;
}
.icon {
  width: $large-font;
  height: $large-font;
  margin: 0 auto;
  background-repeat: no-repeat;
}
</style>