<template>
    <div class="publish-chapter">
        <div class="header">
            <h3>发布章节</h3>
        </div>
        <div class="form">
            <a-form :layout="formLayout">
                <a-form-item :wrapper-col="{span: 7}" :label-col="{span: 4}" label="漫画名">
                    123(绑定漫画名标题)
                </a-form-item>
                <a-form-item :wrapper-col="{span: 7}" :label-col="{span: 4}" label="*章节排序">
                    <a-input></a-input>
                </a-form-item>
                <a-form-item v-bind="formItemLayout" label="*阅读顺序">
                    <a-radio-group v-decorator="['radio-group']">
                        <a-radio value="1">话</a-radio>
                        <a-radio value="2">卷</a-radio>
                        <a-radio value="3">外传</a-radio>
                        <a-radio value="4">其他</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item :wrapper-col="{span: 7}" :label-col="{span: 4}"  label="*章节详情">
                    <a-input placeholder="请按填写章节号与章节标题"></a-input>
                </a-form-item>
                <a-form-item v-bind="formItemLayout" label="特殊说明">
                    <a-textarea placeholder="请输入作品简介" :rows="5"></a-textarea>
                </a-form-item>
                <div class="img-upload">
                    <a-upload
                            listType="picture-card"
                            :fileList="fileList"
                            :multiple="multiple"
                            @preview="handlePreview"
                            @change="handleChange"
                            :beforeUpload="beforeUpload"
                            :showUploadList="showUploadList"
                    >
                        <div>
                            <a-icon type="plus" />
                            <div class="ant-upload-text">Upload</div>
                        </div>
                        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
                            <img alt="example" style="width: 100%" :src="previewImage" />
                        </a-modal>
                    </a-upload>
                </div>
            </a-form>
            <div class="btn">
                <div class="btn-middle">
                    <a-button type="primary" @click="back">上一步</a-button>
                    <a-button type="primary" @click="push">提交审核</a-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "publish-chapter",
        data(){
            return{
                // form-item布局类型
                formLayout: 'horizontal',
                // form-item布局格式
                formItemLayout: {
                    labelCol: {span: 4},
                    wrapperCol: {span: 18}
                },
                // 图片列表
                fileList:[],
                previewImage: '',
                previewVisible: false,
                multiple: true,
                showUploadList: false,
            };
        },
        methods: {
            // 点击图片回调
            handlePreview (file) {
                console.log(file);
                this.previewImage = file.url || file.thumbUrl;
                this.previewVisible = true;
            },
            // 上传前处理
            beforeUpload(file){
                console.log(file);
                let r = new FileReader();
                r.readAsDataURL(file);
                r.onload = e => {
                    file.thumbUrl = e.target.result;
                    console.log(file);
                };
                return false;
            },
            // 关闭大图预览（点击空白处）
            handleCancel () {
                this.previewVisible = false;
            },
            // 改变图片钩子
            handleChange ({ fileList }) {
                this.fileList = fileList;
                console.log(fileList);
            },
            // 返回上一页
            back(){

            },
            // 提交审核
            push(){

            },
        }
    };
</script>

<style scoped>
    .publish-chapter{
        margin-top: 25px;
        padding-bottom: 40px;
        border: #d6d6d6 solid 1px;
    }
    .publish-chapter .header{
        width: 100%;
        height: 30px;
        padding-bottom: 40px;
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png") repeat-x top left;
    }
    .header h3{
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
        height: 38px;
        border-right: 1px solid #dadada;
        border-top: 1px solid #292929;
    }
    .publish-chapter .form{
        margin: 25px 0;
    }
    .form .img-upload{
        width: 950px;
        margin: 0 auto;
    }
    .form>>>.ant-form-item{
        margin: 10px 0;
    }
    .publish-chapter .btn{
        margin-top: 25px;
        width: 100%;
    }
    .btn .btn-middle{
        width: 230px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
    }
</style>