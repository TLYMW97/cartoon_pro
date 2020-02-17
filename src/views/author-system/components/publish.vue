<template>
    <div class="publish">
        <div class="steps">
            <img v-for="item of stepimg" :src="item.img" :key="item.id" alt="">
        </div>
        <div class="publish-form">
            <div class="header">
                <h3>发布漫画</h3>
            </div>
            <div class="form">
                <a-form :layout="formLayout">
                    <a-form-item :wrapper-col="{span: 7}" :label-col="{span: 4}" label="*漫画名">
                        <a-input placeholder="请输入漫画名称"></a-input>
                    </a-form-item>
                    <a-form-item :wrapper-col="{span: 7}" :label-col="{span: 4}" label="*作者名">
                        <a-input placeholder="请输入作者名称"></a-input>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="作品简介">
                        <a-textarea placeholder="请输入作品简介" :rows="5"></a-textarea>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="*阅读顺序">
                        <a-radio-group v-decorator="['radio-group']">
                            <a-radio value="left">从左到右</a-radio>
                            <a-radio value="right">从右到左</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="*作品性质">
                        <a-radio-group v-decorator="['radio-group']">
                            <a-radio value="1">原创</a-radio>
                            <a-radio value="2">转载</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="*创作进程">
                        <a-radio-group v-decorator="['radio-group']">
                            <a-radio value="1">连载中</a-radio>
                            <a-radio value="2">已完结</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="*用户群体">
                        <a-radio-group v-decorator="['radio-group']">
                            <a-radio value="1">少年向</a-radio>
                            <a-radio value="2">少女向</a-radio>
                            <a-radio value="3">青年向</a-radio>
                            <a-radio value="4">一般向</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="*漫画题材">
                        <a-radio-group>
                            <a-radio v-for="item in classTag" :value="item.value" :key="item.label">{{item.label}}</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item v-bind="formItemLayout" label="*漫画地区">
                        <a-radio-group v-decorator="['radio-group']">
                            <a-radio value="1">港台</a-radio>
                            <a-radio value="2">大陆</a-radio>
                            <a-radio value="3">日韩</a-radio>
                            <a-radio value="4">欧美</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "publish",
        data(){
            return{
                // form-item布局类型
                formLayout: 'horizontal',
                // form-item布局格式
                formItemLayout: {
                  labelCol: {span: 4},
                  wrapperCol: {span: 16}
                },
                // 步骤图片
                stepimg: [
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step1_1.png',
                        id: 1
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step2.png',
                        id: 2
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step3.png',
                        id: 3
                    },
                    {
                        img: 'http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/step4.png',
                        id: 4
                    }
                ],
                // 获取分类题材
                classTag: null
            };
        },
        methods:{
            getClassTag: async function(){
                let classes = await this.$api.classes();
                this.classTag = classes.data.data.map(value => {
                    let obj = {
                        label: value.tagName,
                        value: value.tagId
                    };
                    return obj;
                });
            }
        },
        created() {
        },
        mounted(){
            this.getClassTag();
        }
    };
</script>

<style scoped>
    .publish{
        margin: 25px 0;
    }
    .publish .steps{
        display: flex;
    }
    .steps img{
        vertical-align: top;
        display: inline-block;
    }
    .publish .publish-form{
        margin-top: 25px;
        border: #d6d6d6 solid 1px;
    }
    .publish-form .header{
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
    .publish-form .form{

    }
    .form>>>.ant-form-item{
        margin: 10px 0;
    }
</style>