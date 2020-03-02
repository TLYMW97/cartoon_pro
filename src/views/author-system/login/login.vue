<template>
  <div>
    <div class="title">
      <div class="tcontainer">
        <a href="#">
          <img class="logo" src="../../../assets/images/manben_logo.png" alt />
        </a>
      </div>
    </div>
    <div class="loginWin">
      <div class="lcontainer">
        <div class="loginForm">
          <a-form :form="loginForm" layout="vertical">
            <a-form-item label="用户名">
              <a-input placeholder="输入用户名/邮箱" v-decorator="['userName', config.username]"></a-input>
            </a-form-item>
            <a-form-item label="密码">
              <a-input-password v-decorator="['userPwd', config.password]" placeholder="输入密码"></a-input-password>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" style="width:100%;" @click="login">登录</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'login',
  data() {
    return {
      loginForm: this.$form.createForm(this),
      config: {
        username: {
          rules: [
            { required: true, message: '请输入用户名' },
            { validator: this.checkName }
          ]
        },
        password: {
          rules: [{ required: true, message: '请输入密码' }]
        }
      }
    };
  },
  methods: {
    login() {
      const {
        loginForm: { validateFields }
      } = this;
      validateFields(async (err, val) => {
        this.userLogin(val).then(res => {
          if (res) {
            this.getMyUpload();
          }
        });
      });
    },
    getMyUpload: async function(){
      let manga = await this.$api.findMyManga();
      console.log(1);
      this.authorUploadManga(manga.data.data);
      this.$router.push({ path: '/authorindex' });
    },
    ...mapActions(['userLogin','authorUploadManga'])
  }
};
</script>

<style scoped>
.title {
  height: 45px;
  line-height: 45px;
  background-color: #fc4e56;
}
.title .tcontainer {
  width: 1400px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.loginWin {
  background: url('../../../assets/images/admin_login_bak.jpg');
  background-position: top center;
  min-width: 1200px;
  height: 930px;
}
.loginWin .lcontainer {
  width: 1400px;
  height: 650px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.lcontainer .loginForm {
  width: 338px;
  padding: 30px;
  background-color: #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 8px;
}
</style>