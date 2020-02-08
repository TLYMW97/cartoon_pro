<template>
  <div class="header">
    <div class="header-left">
      <h1>
        <img src="../../assets/images/logo.png" alt />
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
          <router-link tag="a" target="_blank" to="/authorlogin">上传</router-link>
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
      if (this.userInfo.userId) {
        return this.userInfo.user.attach.attachUrl;
      }
      return null;
    }
  },
  components: { LiIcon },
  methods: {
    toPersonal() {
      alert('d');
      const { token } = this.userInfo;
      if (!token) {
        alert('ddd');
        this.$router.push('/login');
        return;
      } else {
        this.$message.success('已登录');
      }
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
  padding: 10px 0;
  margin: 0 auto;
  justify-content: space-between;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  a {
    color: rgba(0, 0, 0, 0.85);
  }
  a:hover {
    color: #fd113a;
  }
  .header-left,
  .header-right {
    display: flex;
    align-items: center;
  }
}
.header-left h1 {
  width: 220px;
  margin-right: 20px;
  margin-bottom: 0;
}
.header-left h1 img {
  width: 100%;
  height: 100%;
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