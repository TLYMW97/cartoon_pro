<template>
  <div class="header">
    <div class="header-left">
      <h1>
        <img src="../../assets/logo.png" alt />
      </h1>
      <ul class="l-ul">
        <li>
          <router-link to="/">首页</router-link>
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
        <a-avatar @click="toPersonal" size="large" icon="user" :src="userAvatar" />
      </div>
    </div>
  </div>
</template>

<script>
import LiIcon from '../li-icon/li-icon';
import { mapGetters } from 'vuex';
export default {
  name: 'indexHeader',
  created() {
    console.log(this.userInfo);
  },
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
  computed: {
    ...mapGetters(['userInfo']),
    userAvatar() {
      return this.userInfo.user.attach.attachUrl;
    }
  },
  components: { LiIcon },
  methods: {
    toPersonal() {
      const {
        user: { userId }
      } = this.userInfo;
      if (!userId) {
        this.$router.push('/login');
        return;
      }
      this.$message.success('已登录');
    }
  }
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
  a {
    color: red;
  }
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