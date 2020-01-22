<template>
  <a-form :form="registerForm">
    <a-form-item>
      <a-input placeholder="输入用户名/邮箱" v-decorator="['userName', config.username]"></a-input>
    </a-form-item>
    <a-form-item>
      <a-input-password v-decorator="['userPwd', config.password]" placeholder="输入密码"></a-input-password>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" style="width:100%;" @click="register">立即注册</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  name: 'loginForm',
  props: {
    code: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      registerForm: this.$form.createForm(this),
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
    checkName: async function(rule, value, callback) {
      let res = await this.$api.checkName(value);
      const {
        data: { code, msg }
      } = res;
      if (code === 20007) {
        callback(msg);
      } else {
        callback();
      }
    },
    register() {
      const {
        registerForm: { validateFields }
      } = this;
      validateFields(async (err, val) => {
        if (!err) {
          this.$emit('register', val);
        }
      });
    }
  }
};
</script>

<style scoped>
</style>