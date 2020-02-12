<template>
    <div>
        <div class="top">
            <div class="left-info">111</div>
            <div class="right-msg">11</div>
        </div>
        <div class="my-cartoon">
            <div class="header">
                <h3>
                    <strong>我的漫画</strong>
                    （共有<span>7</span>部）
                </h3>
            </div>
            <div class="cartoon-list">
                111
                111
                11
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    };
</script>

<style scoped>
    .clear{
        clear: both;
    }
    .top{
        margin: 25px 0 25px 0;
        display: flex;
    }
    .top .left-info,.top .right-msg{
        background: #f7f7f7;
        width: 480px;
        height: 165px;
        padding: 20px;
        margin-right: 25px;
        border: #d6d6d6 solid 1px;
    }
    .my-cartoon{
        border: #d6d6d6 solid 1px;
        width: 985px;
        height: 440px;
        margin-top: 30px;
        overflow-y: auto;
    }
    .my-cartoon .header{
        position: absolute;
        width: 983px;
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