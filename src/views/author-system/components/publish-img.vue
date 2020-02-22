<template>
    <div class="publish-img">
        <div class="header">
            <h3>制作漫画封面</h3>
        </div>
        <div class="title">
            <h2>上传封面</h2>
        </div>
        <div class="make">

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
    export default {
        name: "publish-img",
        methods:{
            next(){
                this.$emit('next','publishChapter');
            },
            back(){
                this.$emit('back', 'publishForm');
            }
        }
    };
</script>

<style scoped>
    .publish-img{
        margin-top: 25px;
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
        height: 900px;
        margin: 0 auto;
        background-color: #f7f7f7;
        border: #d6d6d6 solid 1px;
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