<template>
  <div class="header">
    <div class="header-left">
      <h1>
        <img src="../../assets/logo.png" alt />
      </h1>
      <ul class="l-ul">
        <li>
          <router-link to>首页</router-link>
        </li>
        <li>
          <router-link to>更新</router-link>
        </li>
        <li>
          <router-link to>排行</router-link>
        </li>
        <li>
          <router-link to>日漫</router-link>
        </li>
        <li>
          <router-link to>日漫</router-link>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <ul class="r-ul">
        <li-icon v-for="(li,index) of lis" :name="li.name" :key="index" :icon="li.icon"></li-icon>
      </ul>
      <div class="user">
        <a-avatar size="large" icon="user" />
      </div>
    </div>
  </div>
</template>

<script>
import LiIcon from '../li-icon/li-icon';
export default {
  name: 'indexHeader',
  data() {
    return {
      lis: [
        {
          name: 'VIP',
          icon:
            'http://css99tel.cdndm5.com/v201910292122/blue/images/sd/header-vip.png'
        },
        {
          name: '历史',
          icon:
            'http://css99tel.cdndm5.com/v201910292122/blue/images/sd/header-vip.png'
        },
        {
          name: '收藏',
          icon:
            'http://css99tel.cdndm5.com/v201910292122/blue/images/sd/header-vip.png'
        },
        {
          name: '下载APP',
          icon:
            'http://css99tel.cdndm5.com/v201910292122/blue/images/sd/header-vip.png'
        }
      ]
    };
  },
  components: { LiIcon },
  methods: {}
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.header {
  width: $w_1200;
  height: 100%;
  max-height: 70px;
  display: flex;
  padding: 1% 0;
  margin: 0 auto;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  .header-left,
  .header-right {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
.header-left h1 {
  width: 30%;
}
.header-left h1 img {
  width: 40%;
}
.header-left .l-ul,
.header-right .r-ul {
  width: 100%;
  display: flex;
  font-size: $middle-font;
}
.l-ul li {
  width: 100%;
}
.user {
  width: $avatar-size;
  overflow: hidden;
}
ul {
  margin-bottom: 0;
}
.r-ul:nth-last-child(1) {
  margin-right: 1vw;
}
</style>