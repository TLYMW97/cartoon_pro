<template>
  <li class="operate-item">
    <a href="#" @mouseover="showPane" @mouseleave="hidePane">
      <div class="icon">
        <icon-svg :iconHref="icon" />
      </div>
      <p>{{name}}</p>
    </a>
    <div class="dropdown-pane" v-show="id === 1 && this.paneShow">
      <div class="history-title">我看过的</div>
      <div class="hisory-manga">
        <div class="manga-img">
          <img src="https://61539.wang/a377c1ec68644213a235e9637a00df06_300022.jpg" alt />
        </div>
        <div class="manga-des">
          <p class="manga-name">航海王</p>
          <p class="last-read">阅读至: 第一回</p>
          <p class="renew">更新至: 第一回</p>
        </div>
      </div>
      <div class="hisory-manga">
        <div class="manga-img">
          <img src="https://61539.wang/a377c1ec68644213a235e9637a00df06_300022.jpg" alt />
        </div>
        <div class="manga-des">
          <p class="manga-name">航海王</p>
          <p class="last-read">阅读至: 第一回</p>
          <p class="renew">更新至: 第一回</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import IconSvg from '../icon-svg/icon-svg';
export default {
  name: 'li-icon',
  components: {
    IconSvg
  },
  data() {
    return {
      paneShow: false
    };
  },
  methods: {
    showPane() {
      this.paneShow = true;
    },
    hidePane() {
      this.paneShow = false;
    }
  },
  props: {
    id: {
      type: Number
    },
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
  position: relative;
  margin-left: 30px !important;
  a {
    color: #999;
  }
  .dropdown-pane {
    border: 1px solid #eaeaea;
    position: absolute;
    top: 55px;
    left: -94px;
    width: 220px;
    background: #fff;
    z-index: 99;
    padding: 10px 15px;
    .history-title {
      font-size: $medium-x-font;
      font-weight: 600;
    }
  }
  .dropdown-pane::before {
    content: ' ';
    display: block;
    width: 32px;
    height: 12px;
    margin: 0 auto;
    background-image: url('../../assets/images/arrow-up.png');
    z-index: 1;
    position: relative;
    top: -22px;
    left: -10px;
  }
}
.hisory-manga {
  display: flex;
  border-bottom: 1px dashed #eaeaea;
  text-align: left;
  padding-bottom: 5px;
  margin-top: 10px;
  .manga-img {
    width: 80px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .manga-des {
    margin-left: 10px;
    .manga-name {
      @include ellipsis();
      font-weight: 600;
      font-size: $medium-font;
    }
    .last-read,
    .renew {
      @include ellipsis();
      font-size: 13px;
      margin-top: 15px;
    }
  }
}
p {
  margin-bottom: 0;
}
.operate-item a {
  margin: 0 auto;
}
.operate-item p {
  font-size: $small-font;
}
.icon {
  width: $large-font;
  height: $large-x-font;
  margin: 0 auto;
}
</style>