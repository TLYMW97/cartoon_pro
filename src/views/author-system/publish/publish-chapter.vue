<template>
  <div class="publish-chapter">
    <div class="header">
      <h3>发布章节</h3>
    </div>
    <div class="form">
      <a-form :layout="formLayout" :form="chapterForm" @submit="push">
        <!--<a-form-item v-bind="formItemLayout" label="*阅读顺序">-->
          <!--<a-radio-group v-decorator="['readRadio']">-->
            <!--<a-radio value="1">话</a-radio>-->
            <!--<a-radio value="2">卷</a-radio>-->
            <!--<a-radio value="3">外传</a-radio>-->
            <!--<a-radio value="4">其他</a-radio>-->
          <!--</a-radio-group>-->
        <!--</a-form-item>-->
        <a-form-item
          :wrapper-col="{ span: 7 }"
          :label-col="{ span: 4 }"
          label="章节名称"
        >
          <a-input placeholder="请按填写章节号与章节标题"
            v-decorator="[
            'chapterTitle',
              {
                initialValue: chapterTitle,
                rules: [{
                  required: true, message: '请求输入章节号与章节标题',
                }]
              }
            ]"
          ></a-input>
        </a-form-item>
        <!--<a-form-item v-bind="formItemLayout" label="特殊说明">-->
          <!--<a-textarea placeholder="请输入作品简介" :rows="5"></a-textarea>-->
        <!--</a-form-item>-->
        <a-form-item v-bind="formItemLayout" label="图片上传">
          <div class="img-div">
            <div class="img-upload">
              <div class="img-show" v-for="item of imgList" :key="item.id">
                <div class="img-mask">
                  <a-button
                    class="icon-style"
                    @click="deleteImg(item)"
                    icon="delete"
                  />
                  <a-button
                    class="icon-style"
                    @click="zoomIn(item)"
                    icon="zoom-in"
                  />
                </div>
                <img :src="item.episodeBase64" alt="" />
              </div>
              <a-upload
                listType="picture-card"
                :fileList="fileList"
                :multiple="multiple"
                @change="handleChange"
                :beforeUpload="beforeUpload"
                :showUploadList="showUploadList"
              >
                <div>
                  <a-icon type="plus" />
                  <div class="ant-upload-text">选择图片</div>
                </div>
                <a-modal
                  :visible="previewVisible"
                  :footer="null"
                  @cancel="handleCancel"
                >
                  <img alt="example" style="width: 100%" :src="previewImage" />
                </a-modal>
              </a-upload>
            </div>
            <div class="upload">
              <!--<div class="left">-->
                <!--<a-button type="primary" @click="upLoadImg">开始上传</a-button>-->
              <!--</div>-->
              <div class="right">
                <p>1.漫画请按照顺序上传。</p>
                <p>2.选择图片时可用鼠标批量框选上传。</p>
                <p>3.请让每张图片清晰并在15M以内。</p>
              </div>
            </div>
          </div>
        </a-form-item>
        <a-form-item class="btn">
          <div class="btn-middle">
            <!--<a-button type="primary" @click="back">上一步</a-button>-->
            <a-button type="primary" html-type="submit">提交审核</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    name: 'publish-chapter',
    data() {
      return {
        chapterForm: this.$form.createForm(this),
        // form-item布局类型
        formLayout: 'horizontal',
        // form-item布局格式
        formItemLayout: {
          labelCol: { span: 4 },
          wrapperCol: { span: 18 }
        },
        // 图片列表
        showUploadList: false,
        imgList: [],
        fileList: [],
        previewImage: '',
        previewVisible: false,
        multiple: true,
        chapterTitle: '',
      };
    },
    created(){
      this.editChapter();
    },
    beforeDestroy(){
      this.deleteTableByEdit();
    },
    methods: {
      createChapter(){
        console.log(this.getMangaByClick);
      },
      // 上传图片
      upLoadImg(e) {
      },
      // 上传前处理
      beforeUpload(file) {
        let r = new FileReader();
        r.readAsDataURL(file);
        r.onload = e => {
          file.thumbUrl = e.target.result;
          let img = {
            episodeBase64: file.thumbUrl,
            id: file.uid
          };
          this.imgList.push(img);
        };
        return false;
      },
      // 关闭大图预览（点击空白处）
      handleCancel() {
        this.previewVisible = false;
      },
      // 改变图片钩子
      handleChange({ fileList }) {
        this.fileList = fileList;
      },
      // 返回上一页
      back() {
        this.$emit('back', 'publishImg');
        this.$router.push({path:'/publish/publishImg'});
      },
      // 提交审核
      push(e) {
        console.log(this.imgList);
        e.preventDefault();
        let theMangaId
        console.log(this.getMangaByClick);
        if(this.getMangaByClick){
          theMangaId = this.getMangaByClick.mangaId;
        }else {
          theMangaId = this.getCreateMangaId;
        }
        this.chapterForm.validateFields((err,value) => {
          // console.log(value);
          // console.log(this.getCreateMangaId);
          this.$api.addChapter({
            chapterTitle:value.chapterTitle,
            mangaId: theMangaId,
          }).then(res=>{
            console.log(res);
            let chapterId = res.data.data;
            let ary = this.imgList.map(value => {
              let array = {
                episodeBase64: value.episodeBase64.substring(23),
                chapterId:res.data.data.chapterId,
                episodeCategory: 1,
              };
              return array;
            });
            console.log(ary);
            this.$api.addEpisodeList(ary).then(res=>{
              console.log(res);
              if(this.getMangaByClick){
                this.$router.back(-1);
              }else {
                this.$emit('next', 'finish');
                this.$router.push({path:'/publish/finish'});
              }
            });
          });
        });
      },
      //
      deleteImg(img) {
        this.imgList.some((value, index) => {
          if (img.id === value.id) {
            this.fileList.splice(index, 1);
            this.imgList.splice(index, 1);
          }
        });
      },
      zoomIn(img) {
        this.previewVisible = true;
        this.previewImage = img.episodeBase64;
      },
      // 编辑章节
      editChapter(){
        let data = this.getTableByEdit;
        if(data){
          console.log(data);
          this.chapterTitle = data.chapterTitle;
          this.$api.findEpisodeByAuthor({chapterId:data.chapterId}).then(res=>{
            res.data.data.map(value=>{
              let img = {
                episodeBase64: value.episodeHref,
                id: value.episodeId
              };
              this.imgList.push(img);
              // console.log(res.data.data);
              // console.log(this.imgList);
            });
          });
        }
      },
      deleteTableByEdit(){
        this.setTableByEdit(0);
      },
      ...mapActions(['setTableByEdit'])
    },
    computed: {
      ...mapGetters(['getCreateMangaId','getTableByEdit','getMangaByClick'])
    }
};
</script>

<style scoped>
.publish-chapter {
  margin: 25px 0px;
  padding-bottom: 40px;
  border: #d6d6d6 solid 1px;
}
.publish-chapter .header {
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
.publish-chapter .form {
  margin: 25px 0;
}
.form .img-div {
  border: 1px solid #dadada;
}
.img-div .left {
  float: left;
  line-height: 60px;
}
.img-div .right {
  float: right;
}
.right p {
  margin-bottom: 0;
  line-height: normal;
}
.form .img-upload {
  background: #fafafa;
  border-radius: 5px;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.form .upload {
  padding: 20px;
  height: 100px;
  border-top: #dadada 1px solid;
}
.img-upload .img-show {
  width: 102px;
  height: 102px;
  margin: 10px;
}
.img-show .img-mask {
  width: 102px;
  height: 102px;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: none;
}
.img-mask .icon-style {
  color: white;
  font-size: 18px;
  margin: 5px;
  background: rgba(0, 0, 0, 0);
}
.img-show img {
  width: 100%;
  height: 100%;
}
.img-show:hover .img-mask {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-upload >>> .ant-upload.ant-upload-select-picture-card {
  margin: 10px;
}
.form >>> .ant-form-item {
  margin: 15px 0;
}
.publish-chapter .btn {
  margin-top: 25px;
  width: 100%;
}
.btn .btn-middle {
  width: 230px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
</style>
