<template>
  <div class="publish-form">
    <div class="header">
      <h3>发布漫画</h3>
    </div>
    <div class="form">
      <a-form :layout="formLayout" :form="mangaForm" @submit="next">
        <a-form-item
          :wrapper-col="{ span: 7 }"
          :label-col="{ span: 4 }"
          label="漫画名"
        >
          <a-input
            placeholder="请输入漫画名称"
            v-decorator="[
            'mangaName',
              {
                rules: [{
                    required: true, message:'您还未填写漫画名称',
                }]
              }
            ]"
          ></a-input>
        </a-form-item>
        <a-form-item
          :wrapper-col="{ span: 7 }"
          :label-col="{ span: 4 }"
          label="作者名"
        >
          <a-input
            placeholder="请输入作者名称"
            v-decorator="[
              'mangaAuthor',
              {
                rules: [
                  {
                    required: true,
                    message: '您还未填写作者名称'
                  }
                ]
              }
            ]"
          ></a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="作品简介">
          <a-textarea
            placeholder="请输入作品简介"
            :rows="5"
            v-decorator="[
            'mangaDetail',
              {
                rules: [{
                    required: true, message:'您还未填写作者名称',
                }]
              }
            ]"
          ></a-textarea>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="*创作进程">
          <a-radio-group v-decorator="[
          'mangaStatus',
            {
              initialValue: '1',
            }
          ]">
            <a-radio value="1">连载中</a-radio>
            <a-radio value="2">已完结</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="*是否付费">
          <a-radio-group
            v-decorator="[
              'mangaPrice',
              {
                initialValue: '0'
              }
            ]"
          >
            <a-radio value="0">免费</a-radio>
            <a-radio value="1">付费</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="*漫画题材">
          <a-checkbox-group class="check-box" v-decorator="['tags',{initialValue:[479]}]">
            <a-checkbox v-for="checkItem of classTag" :value="checkItem.value" :key="checkItem.value">{{checkItem.label}}</a-checkbox>
          </a-checkbox-group>
        </a-form-item>
        <div
          style="width: 80%;padding-top:10px;border-top:#d6d6d6 solid 1px;margin-left: 10%;"
        >
          <p>
            请填写真实准确的联系方式，也便于我们与您联系洽谈创作、出版以及其他相关合作。
          </p>
        </div>
        <a-form-item
          :wrapper-col="{ span: 7 }"
          :label-col="{ span: 4 }"
          label="您的姓名"
        >
          <a-input
            placeholder="请输入您的姓名"
            v-decorator="['name']"
          ></a-input>
        </a-form-item>
        <a-form-item
          :wrapper-col="{ span: 7 }"
          :label-col="{ span: 4 }"
          label="手机号码"
        >
          <a-input
            placeholder="请输入手机号码"
            v-decorator="['phoneNum']"
          ></a-input>
        </a-form-item>
        <a-form-item
          :wrapper-col="{ span: 7 }"
          :label-col="{ span: 4 }"
          label="QQ"
        >
          <a-input placeholder="请输入QQ号码" v-decorator="['qqNum']"></a-input>
        </a-form-item>
        <div
          style="background: #f0f0f0;width: 80%;padding: 25px;margin: 20px 0 20px 10%;border-top: #767676 1px dashed;border-bottom: #767676 1px dashed;"
        >
          <a-radio ref="radioCheck" :defaultChecked="check" @click="check = !check"
            >我已阅读并接受
            <router-link to="">漫画内容上传协议</router-link>
          </a-radio>
        </div>
        <a-form-item>
          <a-button html-type="submit" type="primary" style="display:block;margin:0 auto;">填完了，下一步</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'pubish-form',
  data() {
    return {
      mangaForm: this.$form.createForm(this),
      // form-item布局类型
      formLayout: 'horizontal',
      // form-item布局格式
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 18 }
      },
      // 获取分类题材
      defaultValue: 480,
      classTag: null,
      check: false
    };
  },
  methods: {
    getFormData() {
    },
    addMangaData: async function(mangaId, mangaData) {
      if (mangaId === 0) {
        mangaData.tags = this.tags(mangaData.tags);
        console.log(mangaId);
        console.log(this.getCreateMangaId);
        let Id = await this.$api.addManga(mangaData);
        console.log(Id);
        if(Id.data.code === 50009){
          console.log('存在');
        } else {
          this.setCreateMangaId(Id.data.data.mangaId);
          this.$emit('next', 'publishImg');
          this.$router.push({path:'/publish/publishImg'});
        }
      }
    },
    tags(tagData) {
      let tags = [];
      tagData.map(index => {
        tags.push({ tagId: index });
      });
      return tags;
    },
    getClassTag: async function() {
      let classes = await this.$api.classes();
      console.log(classes);
      this.classTag = classes.data.data.map(value => {
        let obj = {
          label: value.tagName,
          value: value.tagId
        };
        return obj;
      });
    },
    next(e) {
      e.preventDefault();
      this.mangaForm.validateFields((err, value) => {
        if (!err && this.check) {
          console.log(value);
          this.setCreateMangaForm(value);
          this.addMangaData(0, value);
        }
      });
    },
    ...mapActions(['setCreateMangaForm','setCreateMangaId'])
  },
  created() {

  },
  computed: {
    ...mapGetters(['getCreateMangaId'])
  },
  mounted() {
      this.getFormData();
    this.getClassTag();
  }
};
</script>

<style scoped>
.publish-form {
  margin: 25px 0;
  border: #d6d6d6 solid 1px;
}
.publish-form .header {
  width: 100%;
  height: 30px;
  padding-bottom: 40px;
  background: url('http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png')
    repeat-x top left;
}
.header h3 {
  width: 200px;
  padding: 10px 30px 0;
  background: #fff;
  height: 38px;
  border-right: 1px solid #dadada;
  border-top: 1px solid #292929;
}
.publish-form .form {
  margin: 25px 0;
}
.form >>> .ant-form-item {
  margin: 10px 0;
}
.form >>> .ant-checkbox-wrapper {
  margin-left: 11px;
  margin-top: 8px;
}
</style>