<template>
  <div class="login-form">
    <div class="form-l">
      <img src="http://css99tel.cdndm5.com/v202001161319/blue/images/login.png" alt />
    </div>
    <div class="form-r">
      <h3>登录</h3>
      <a-form :form="loginForm">
        <a-form-item>
          <a-input placeholder="输入用户名/邮箱" v-decorator="['userName', config.username]"></a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password v-decorator="['userPwd', config.password]" placeholder="输入密码"></a-input-password>
        </a-form-item>
        <a-form-item>
          <verify :code="code"></verify>
          <a-input placeholder="输入验证码" v-decorator="['code', config.code]"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" style="width:100%;" @click="login">立即登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import Verify from '@/components/verify/verify';
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      code: '',
      loginForm: this.$form.createForm(this),
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
    Verify
  },
  created() {
    this.getCode();
  },
  methods: {
    getCode: async function() {
      let res = await this.$api.code();
      console.log('res', res);
      const {
        data: { data: code }
      } = res;
      this.code = code;
    },
    validateCode(rule, value, callback) {
      const {loginForm, code} = this;
      console.log(loginForm);
      if (value && value !== code) {
        callback('验证码错误');
      } else {
        callback();
      }
    },
    login() {
      const {
        loginForm: { validateFields }
      } = this;
      validateFields(async (err, val) => {
        if (!err) {
          // let res = await this.$api.login(val);
          // console.log('res', res);
          // const {
          //   data: { code, data, msg }
          // } = res;
          // if (code === 200) {
          //   this.$message.success('登录成功', 2);
          // }
          this.userInfo(val);
        }
      });
    },
    ...mapActions(['userInfo'])
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.login-form {
  width: $w_1200;
  margin: 30px auto;
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
    margin-top: 60px;
  }
}
</style>
