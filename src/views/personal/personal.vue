/* eslint-disable vue/no-unused-components */
<template>
  <div class="personal">
    <div class="personal-nav">
      <div class="user">
        <a-avatar :size="65" :src="userAvatar" icon="user" />
        <p class="user-nickname">{{ userInfo.user.user.userNickname }}</p>
      </div>
      <div class="nav-list">
        <div
          class="nav"
          v-for="nav of navs"
          :key="nav.value"
          @click="changeNav(nav.value)"
        >
          {{ nav.name }}
        </div>
      </div>
    </div>
    <div class="personal-content">
      <component
        :readHis="userInfo.user.historyReads"
        :collect="userInfo.user.collect"
        :userInfo="userInfo"
        :is="currentNav"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BookRack from './components/bookrack';
import Edit from './components/edit';
export default {
  components: {
    BookRack,
    // eslint-disable-next-line vue/no-unused-components
    Edit
  },
  data() {
    return {
      navs: [
        { name: '个人信息', value: 'Edit' },
        { name: '我的书架', value: 'BookRack' }
      ],
      currentNav: 'Edit'
    };
  },
  watch: {
    userInfo(val) {
      console.log('val :', val);
    }
  },
  computed: {
    userAvatar() {
      if (this.userInfo.token) {
        // console.log('this.userInfo :', this.userInfo);
        return this.userInfo.user.user.attach.attachUrl;
      }
      return null;
    },
    ...mapGetters(['userInfo'])
  },
  methods: {
    changeNav(nav) {
      this.currentNav = nav;
    }
  }
};
</script>

<style lang="scss">
.personal {
  width: 1200px;
  display: flex;
  margin: 0 auto;
  padding: 20px;
  .personal-nav {
    width: 20%;
    height: 600px;
    border: 1px solid #eaeaea;
    margin-right: 20px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    text-align: center;
    .user {
      padding: 20px 0;
      border-bottom: 1px solid #eaeaea;
      .user-nickname {
        margin-top: 20px;
        font-size: 16px;
      }
    }
    .nav-list {
      // margin-top: 30px;
      .nav {
        border-bottom: 1px solid #eaeaea;
        padding: 10px 0;
        cursor: pointer;
      }
    }
  }
  .personal-content {
    width: 100%;
  }
}
</style>
