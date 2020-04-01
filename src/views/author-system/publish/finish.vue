<template>
    <div class="finish">
        <div class="title">
            <h3>创建完成</h3>
        </div>
        <div class="center">
            <img src="http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/finish_page2.png" alt="">
        </div>
        <div class="finish-btn">
            <a-button type="primary" @click="back">完成</a-button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "finish",
        methods:{
            back(){
                this.$api.findMyManga().then(res=>{
                    this.authorUploadManga(res.data.data);
                    this.$router.push({path:'/home',replace: true})
                });
            },
            ...mapActions(['authorUploadManga'])
        }
    }
</script>

<style scoped>
    .finish{
        margin: 25px 0;
        border: #d6d6d6 solid 1px;
    }
    .finish .title{
        width: 100%;
        height: 30px;
        padding-bottom: 40px;
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png") repeat-x top left;
    }
    .title h3{
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
        height: 38px;
        border-right: 1px solid #dadada;
        border-top: 1px solid #292929;
    }
    .finish .center{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
    }
    .finish .finish-btn{
        display: flex;
        justify-content: center;
        margin-bottom:25px;
    }
</style>