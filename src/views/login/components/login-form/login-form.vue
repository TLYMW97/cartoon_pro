<template>
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
</template>

<script>
import Verify from '@/components/verify/verify';
export default {
  name: 'loginForm',
  components: {
    Verify
  },
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
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
  methods: {
    login() {
      const {
        loginForm: { validateFields }
      } = this;
      validateFields(async (err, val) => {
        if (!err) {
          this.$emit('login', val);
        }
      });
    },
    validateCode(rule, value, callback) {
      const { loginForm, code } = this;
      if (value && value !== code) {
        callback('验证码错误');
      } else {
        callback();
      }
    }
  }
};
</script>

<style scoped>
</style>