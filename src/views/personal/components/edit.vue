<template>
  <div class="edit">
    <div class="edit-title">编辑资料</div>
    <div class="edit-content">
      <a-form
        :form="form"
        layout="horizontal"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 14 }"
        :hideRequiredMark="true"
      >
        <a-form-item label="头像">
          <a-avatar :src="avatar" :size="45" />
          <a-upload :beforeUpload="beforeUpload" :showUploadList="false">
            <a-button> <a-icon type="upload" /> 选择头像 </a-button>
          </a-upload>
        </a-form-item>
        <a-form-item label="用户名">
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [{ required: true, message: '请输入用户名' }],
                initialValue: userForm.userName
              }
            ]"
          />
        </a-form-item>
        <a-form-item label="昵称">
          <a-input
            v-decorator="[
              'userNickname',
              {
                rules: [{ required: true, message: '请输入昵称' }],
                initialValue: userForm.userNickname
              }
            ]"
          />
        </a-form-item>
        <a-form-item label="手机号码">
          <a-input
            v-decorator="[
              'userPhone',
              {
                rules: [{ required: true, message: '请输入手机号' }],
                initialValue: userForm.userPhone
              }
            ]"
          />
        </a-form-item>
        <div class="submit-btn">
          <a-button type="primary" @click="save">保存</a-button>
        </div>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    userInfo(val) {
      console.log('val :', val);
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      userForm: this.userInfo.user.user,
      attach: '',
      avatar: this.userInfo.user.user.attach.attachUrl
    };
  },
  computed: {
    userAvatar() {
      if (this.userInfo.token) {
        return this.userInfo.user.user.attach.attachUrl;
      }
      return null;
    }
  },
  methods: {
    beforeUpload(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        this.avatar = reader.result;
        let imgBase64 = reader.result.replace(/^data:image\/\w+;base64,/, '');
        this.attach = imgBase64;
      };
      return false;
      // console.log('file :', file);
    },
    save() {
      const {
        form: { validateFields }
      } = this;
      validateFields(async (err, val) => {
        if (!err) {
          const { attach } = this;
          let request = val;
          if (attach !== '') {
            request.attach = { attachBase64: attach };
          }
          let res = await this.$api.updateUser(request);
          let {
            data: { code }
          } = res;
          if (code === 200) {
            let userInfo = await this.getUserInfo();
            console.log('userInfo :', userInfo);
            this.setInfo(userInfo);
          }
        }
      });
    },
    getUserInfo: async function() {
      let res = await this.$api.qrySelf();
      let {
        data: { data }
      } = res;
      console.log('data :', data);
      return data;
      // console.log('res :', res);
    },
    ...mapActions(['setInfo'])
  }
};
</script>

<style lang="scss">
.edit {
  padding-left: 100px;
  .edit-title {
    font-size: 18px;
  }
  .edit-content {
    padding-top: 20px;
  }
  .submit-btn {
    text-align: center;
  }
  .ant-avatar {
    margin: 0 20px;
  }
}
</style>
