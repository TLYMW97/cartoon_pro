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
          <router-link to>排行</router-link>
        </li>
        <li>
          <router-link tag="a" target="_blank" to="/authorlogin">我要投稿</router-link>
        </li>
        <li>
          <router-link to="/cartoonlist">
            <!-- <a-icon type="appstore" style="font-size: 16px" /> -->
            <icon-svg iconHref="icon-leimupinleifenleileibie--" size="18px"></icon-svg>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="header-right">
      <ul class="r-ul">
        <li-icon v-for="(li,index) of lis" :name="li.name" :key="index" :icon="li.icon" :id="li.id"></li-icon>
      </ul>
      <div class="user">
        <a-avatar @click="toPersonal" size="large" icon="user" :src="userAvatar" />
      </div>
    </div>
  </div>
</template>

<script>
import LiIcon from '../li-icon/li-icon';
import IconSvg from '../icon-svg/icon-svg';
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
          id: 1,
          name: '历史',
          icon: 'icon-historyrecord'
        },
        {
          id: 2,
          name: '收藏',
          icon: 'icon-shoucang'
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
  components: { LiIcon, IconSvg },
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
  @include w1200();
  height: 100%;
  max-height: 70px;
  @include flex(space-between);
  padding: 10px 0;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  a {
    color: rgba(0, 0, 0, 0.85);
  }
  a:hover {
    color: $index-color;
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
  font-size: $large-font;
}
.l-ul li {
  margin-right: 20px;
  font-size: 16px;
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