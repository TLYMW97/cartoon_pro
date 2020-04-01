<template>
    <div class="home">
        <div class="top">
            <div class="left-info">111</div>
            <div class="right-msg">11</div>
        </div>
        <myCartoonList></myCartoonList>
    </div>
</template>

<script>
    import myCartoonList from '../components/my-cartoon-list'
    export default {
        name: "home",
        data(){
          return{
          }
        },
        components:{
            myCartoonList,
        },
        created(){

        },
        methods:{
        }
    };
</script>

<style scoped>
    .clear{
        clear: both;
    }
    .home{
        width: 100%;
        height: 100%;
        margin-bottom: 25px;
    }
    .home .top{
        margin: 25px 0 25px 0;
        display: flex;
        justify-content: space-between;
    }
    .top .left-info,.top .right-msg{
        background: #f7f7f7;
        width: 510px;
        height: 165px;
        padding: 20px;
        border: #d6d6d6 solid 1px;
    }
    .home .my-cartoon{
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
        height: 500px;
        padding: 20px;
    }
</style>