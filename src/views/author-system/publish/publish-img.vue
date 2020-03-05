<template>
    <div class="publish-img">
        <div class="header">
            <h3>制作漫画封面</h3>
        </div>
        <div class="title">
            <h2>上传封面</h2>
        </div>
        <div class="make">
            <!--<div class="screen-shot">-->
                <!--<div class="shot1" style="width: 122px;height: 163px;">-->
                    <!--<img :src="shotBg.Bg1" alt="封面一">-->
                <!--</div>-->
                <!--<div class="shot2" style="width: 119px;height: 119px;">-->
                    <!--<img :src="shotBg.Bg2" alt="封面二">-->
                <!--</div>-->
                <!--<div class="shot3" style="width: 266px;height: 119px;">-->
                    <!--<img :src="shotBg.Bg3" alt="封面三">-->
                <!--</div>-->
                <!--<div class="shot4" style="width: 154px;height: 119px;">-->
                    <!--<img :src="shotBg.Bg4" alt="封面四">-->
                <!--</div>-->
            <!--</div>-->
            <div class="upload-button">
                <p style="margin-bottom: 0;color: #999;">可上传多张原稿进行切图</p>
                <a-upload
                        :beforeUpload="beforeUpload"
                        :showUploadList="showUploadList"
                >
                    <a-button type="primary">
                        <a-icon type="upload" /> 选择封面
                    </a-button>
                </a-upload>
            </div>
            <div class="preview">
                <img :src="preview" alt="">
            </div>
        </div>
        <div class="btn">
            <div class="btn-middle">
                <a-button type="primary" @click="back">上一步</a-button>
                <a-button type="primary" @click="next">下一步</a-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "publish-img",
        data(){
            return {
                uploadText: '选择封面',
                imgList: [],
                img:null,
                showUploadList: false,
                shotBg:{
                    Bg1: 'http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/cover_1.png',
                    Bg2: 'http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/cover_2.png',
                    Bg3: 'http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/cover_3.png',
                    Bg4: 'http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/cover_4.png',
                },
                preview: 'http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/cover_default.png',
            }
        },
        methods:{
            // 上传前处理
            beforeUpload(file){
                let r = new FileReader();
                r.readAsDataURL(file);
                r.onload = e => {
                    file.thumbUrl = e.target.result;
                    this.img = {
                        img: file.thumbUrl,
                        id: file.uid,
                    };
                    this.preview = this.img.img;
                    // console.log(this.img);
                };
                return false;
            },
            next(){
                this.setMangaTitlePage(this.img);
                this.$emit('next','publishChapter');
            },
            back(){
                this.$emit('back', 'publishForm');
            },
            ...mapActions(['setMangaTitlePage'])
        }
    };
</script>

<style scoped>
    .publish-img{
        margin: 25px 0;
        padding-bottom: 40px;
        border: #d6d6d6 solid 1px;
    }
    .publish-img .header{
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
    .publish-img .title{
        width: 100%;
        margin: 20px 0;
    }
    .title h2{
        display: block;
        margin: 0 auto;
        color: #6286ba;
        font-size: 26px;
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
    }
    .publish-img .make{
        width: 950px;
        margin: 0 auto;
        background-color: #f7f7f7;
        border: #d6d6d6 solid 1px;
        padding: 40px 70px;
    }
    .make .screen-shot{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 30px;
    }
    .screen-shot div{
        padding: 2px;
        background-color: white;
    }
    .make .preview{
        width: 822px;
        height: 554px;
        padding: 5px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        background: url("http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/cover_img.png");
    }
    .preview .preview-upload{
        position: absolute;
    }
    .preview img{
        max-width: 812px;
        max-height: 544px;
        object-fit:contain;
    }
    .make .upload-button{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .publish-img .btn{
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