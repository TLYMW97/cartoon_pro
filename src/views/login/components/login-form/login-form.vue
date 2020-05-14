<template>
  <a-form :form="loginForm">
    <a-form-item>
      <a-input
        placeholder="输入用户名/邮箱"
        v-decorator="['userName', config.username]"
      ></a-input>
    </a-form-item>
    <a-form-item>
      <a-input-password
        v-decorator="['userPwd', config.password]"
        placeholder="输入密码"
      ></a-input-password>
    </a-form-item>
    <a-form-item>
      <Verify
        type="puzzle"
        :vOffset="5"
        :code="code"
        :showButton="false"
        imgUrl="https://61539.wang/"
        :imgName="['hd.jpg']"
        :imgSize="imgSize"
        :barSize="barSize"
        :vSpace="30"
        @success="success"
      ></Verify>
      <!-- <a-input
        placeholder="输入验证码"
        v-decorator="['code', config.code]"
      ></a-input> -->
    </a-form-item>
    <a-form-item>
      <a-button type="primary" style="width:100%;" @click="login"
        >立即登录</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script>
// import Verify from '@/components/verify/verify';
export default {
  name: 'loginForm',
  components: {
    // Verify
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
        }
      },
      imgSize: {
        width: '100%',
        height: '160px'
      },
      blockSize: {
        width: '40px',
        height: '40px'
      },
      barSize: {
        width: '99%',
        height: '30px'
      },
      barCheck: false
    };
  },
  methods: {
    login() {
      const {
        loginForm: { validateFields }
      } = this;
      validateFields(async (err, val) => {
        if (!err && this.barCheck) {
          this.$emit('login', val);
        } else {
          this.$message.error('请检查表单');
        }
      });
    },
    success() {
      this.barCheck = true;
      this.$message.success('验证成功！');
      // console.log('成功了 :');
    }
    // validateCode(rule, value, callback) {
    //   const { loginForm, code } = this;
    //   if (value && value !== code) {
    //     callback('验证码错误');
    //   } else {
    //     callback();
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.ant-btn-primary {
  background-color: #f4815b !important;
  border-color: #f4815b;
}

.ant-tabs-tab-active {
  color: #f4815b !important;
}
</style>
<style>
.ant-tabs-tab-active {
  color: #f4815b !important;
}
.ant-tabs-ink-bar {
  background-color: #f4815b !important;
}
</style>
