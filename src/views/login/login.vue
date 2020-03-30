<template>
  <div class="login-form">
    <div class="form-l">
      <img
        src="http://css99tel.cdndm5.com/v202001161319/blue/images/login.png"
        alt
      />
    </div>
    <div class="form-r">
      <a-tabs v-model="activeKey">
        <a-tab-pane tab="登录" key="1">
          <login-form @login="login" :code="code"></login-form>
        </a-tab-pane>
        <a-tab-pane tab="注册" key="2">
          <register-form @register="register"></register-form>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import LoginForm from './components/login-form/login-form';
import RegisterForm from './components/register-form/register-form';
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      code: '1',
      loginForm: this.$form.createForm(this),
      activeKey: '1',
      config: {
        username: {
          rules: [{ required: true, message: '请输入用户名' }]
        },
        password: {
          rules: [{ required: true, message: '请输入密码' }]
        },
        code: {
          rules: [
            { required: true, message: '请输入验证码' },
            { validator: this.validateCode }
          ]
        }
      }
    };
  },
  components: {
    LoginForm,
    RegisterForm
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode: async function() {
      let res = await this.$api.code();
      const {
        data: { data: code }
      } = res;
      this.code = code;
    },
    login: async function(val) {
      // console.log('object :', await this.userLogin(val));
      let res = await this.userLogin(val);
      if (res.token) {
        let historyReads = await this.getHistoryRead();
        let userInfo = await this.getUserInfo();
        userInfo.historyReads = historyReads;
        this.setInfo(userInfo);
        // console.log('userInfo :', userInfo);
        this.$router.go(-1);
      }
    },
    getHistoryRead: async function() {
      let res = await this.$api.qryHistory({ page: 1, size: 3 });
      let qres = await this.$api.qrySelf();
      let {
        data: {
          data: { list }
        }
      } = res;
      return list;
    },
    getUserInfo: async function() {
      let res = await this.$api.qrySelf();
      let {
        data: { data }
      } = res;
      return data;
    },
    register: async function(val) {
      let res = await this.$api.register(val);
      const {
        data: { code }
      } = res;
      if (code === 200) {
        this.$message.success('注册成功', 2);
        this.activeKey = '1';
      }
    },
    ...mapActions(['userLogin', 'setInfo'])
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.login-form {
  @include w1200(30px);
  display: flex;
  .form-l,
  .form-r {
    width: 50%;
    text-align: center;
  }
}
.form-r {
  padding: 0 10%;
  h3 {
    font-size: 22px;
    font-weight: 500;
  }
  .ant-form {
    margin-top: 20px;
  }
}
</style>
