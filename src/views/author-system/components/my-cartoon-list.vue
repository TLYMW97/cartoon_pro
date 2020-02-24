<template>
    <div class="my-cartoon">
        <div class="header">
            <h3>
                <strong>我的漫画</strong>
                （共有<span>7</span>部）
            </h3>
        </div>
        <div class="cartoon-list">
            <a-button class="publish-btn" type="primary" v-if="showButton" @click="toPublish">创建漫画</a-button>
            <!--{{myCartoonData}}-->
            <div class="list" v-else>
                <ul>
                    <li>
                        <img src="http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/7b5712dbea4b4938a09162c9749e32e6_0_0_452_603.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-cartoon",
        props:{
            myCartoonData:{
                type:Object,
                default:null,
            }
        },
        data(){
            return{
                showButton: false,
            }
        },
        methods:{
            toPublish(){
                this.$router.push("/publish")
            }
        }
    }
</script>

<style scoped>
    .my-cartoon{
        border: #d6d6d6 solid 1px;
        width: 100%;
        min-height: 440px;
        margin-top: 30px;
    }
    .my-cartoon .header{
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
    .my-cartoon .cartoon-list{
        width: 100%;
        min-height: 442px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cartoon-list>>>.ant-btn{
        width: 132px;
        height: 50px;
    }
    .cartoon-list .list{
        width: 100%;
        padding: 0 0 10px 0;
        background: url("http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/bookbg.png") no-repeat left 168px;
    }
    .list ul{
        display: block;
        padding-left: 35px;
    }
    .list ul li{
        width: 136px;
        position: relative;
        margin-right: 14px;
        background-image: url("http://css99tel.cdndm5.com/v202002212048/cartoonupload/images/bak_left.png");
        background-repeat: no-repeat;
        bottom: 5px;
        padding-left: 4px;
        float: left;
    }
    .list ul li img{
        width: 136px;
        height: 178px;
    }
</style>