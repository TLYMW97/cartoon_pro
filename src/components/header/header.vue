<template>
  <div class="index-header">
    <div class="header">
      <div class="header-left">
        <h1>
          <img src="../../assets/images/logo1.png" alt />
        </h1>
        <ul class="l-ul">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to>排行</router-link>
          </li>
          <li>
            <router-link tag="a" target="_blank" to="/authorlogin"
              >我要投稿</router-link
            >
          </li>
          <li>
            <router-link to="/cartoonlist">
              <!-- <a-icon type="appstore" style="font-size: 16px" /> -->
              分类
            </router-link>
          </li>
        </ul>
      </div>
      <div class="header-right">
        <ul class="r-ul">
          <li-icon
            v-for="(li, index) of lis"
            :name="li.name"
            :key="index"
            :path="li.path"
            :icon="li.icon"
            :id="li.id"
            :userInfo="userInfo"
          ></li-icon>
        </ul>
        <div class="user">
          <a-avatar
            @click="toPersonal"
            size="large"
            icon="user"
            :src="userAvatar"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LiIcon from '../li-icon/li-icon';
import { mapGetters } from 'vuex';
export default {
  name: 'indexHeader',
  created() {},
  data() {
    return {
      lis: [
        {
          id: 1,
          name: '历史',
          path: '/',
          icon: 'icon-historyrecord',
        },
        // {
        //   id: 2,
        //   name: '收藏',
        //   path: '/',
        //   icon: 'icon-shoucang'
        // },
        {
          id: 3,
          name: '充值',
          path: '/pay',
          icon: 'icon-chongzhi',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
    userAvatar() {
      if (this.userInfo.token) {
        // console.log('this.userInfo :', this.userInfo);
        return this.userInfo.user.user.attach.attachUrl;
      }
      return null;
    },
  },
  components: { LiIcon },
  methods: {
    toPersonal() {
      const { token } = this.userInfo;
      if (!token) {
        this.$router.push('/login');
        return;
      } else {
        // this.$message.success('已登录');
        this.$router.push('/personal');
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.index-header {
  width: 100%;
  background-color: #282828;
}
.header {
  @include w1200();
  max-height: 70px;
  z-index: 9999;
  @include flex(space-between);
  padding: 10px 0;
  background: #282828;
  z-index: 999;
  overflow: hidden;
  a {
    color: #fff;
    opacity: 0.8;
  }
  a:hover {
    opacity: 1;
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
  overflow: hidden;
}
.header-left h1 img {
  width: 100%;
  height: 100%;
}
.header-left .l-ul,
.header-right .r-ul {
  width: 100%;
  display: flex;
  position: relative;
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
