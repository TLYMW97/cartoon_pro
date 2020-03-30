<template>
  <div class="personal">
    <div class="personal-nav">
      <div class="user">
        <a-avatar :size="65" icon="user" />
        <p class="user-nickname">{{ userInfo.user.user.userNickname }}</p>
      </div>
      <div class="nav-list">
        <div class="nav">
          我的书架
        </div>
      </div>
    </div>
    <div class="personal-content">
      <component
        :readHis="userInfo.user.historyReads"
        :collect="userInfo.user.collect"
        :is="'BookRack'"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import BookRack from './components/bookrack';
export default {
  components: {
    BookRack
  },
  computed: {
    ...mapGetters(['userInfo'])
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
      }
    }
  }
  .personal-content {
    width: 100%;
  }
}
</style>
