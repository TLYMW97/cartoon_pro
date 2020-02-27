<template>
    <div class="edit">
        <div class="edit-header">
            <h3>作品概要</h3>
        </div>
        <div class="container">
            <div class="cartoon-msg">
                <div class="title">
                    <p>123</p>
                    <span>创建时间:2020-02-26</span>
                </div>
            </div>
            <div class="info-bar">
                <div class="img-bar">
                    <img src="http://telresource.cdndm5.com/userfile/3/conver//2020/2/25/315113011/2/11721b276d744bc29d595473cfcbe50e_0_0_452_603.jpg" alt="" width="100%" height="100%">
                </div>
                <div class="right-bar">
                    <div class="info">
                        <p>名称：123</p>
                        <p>进度：连载中</p>
                        <p>评论数：0</p>
                        <p>书号：136421</p>
                        <p>创建：从左到右</p>
                        <p>阅读人次：0</p>
                        <p>题材：热血</p>
                        <p>更新时间：123</p>
                        <p>收藏量：123</p>
                        <p>章节：123</p>
                        <p>下回更新：123</p>
                        <p>人气值：123</p>
                    </div>
                    <div class="cartoon-edit">
                        <a-button type="primary" icon="file-add">新建章节</a-button>
                        <a-button type="primary" icon="picture">修改封面</a-button>
                        <a-button type="primary" icon="edit">章节管理</a-button>
                        <a-button type="primary" icon="delete">删除</a-button>
                    </div>
                </div>
            </div>
            <div class="chart">
                统计图表
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartoon-edit",
        components:{
        }
    };
</script>

<style>
    .edit{
        margin: 25px 0;
        border: #d6d6d6 solid 1px;
    }
    .edit .edit-header{
        width: 100%;
        height: 30px;
        padding-bottom: 40px;
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/topbg.png") repeat-x top left;
    }
    .container{
        padding: 25px;
    }
    .edit-header h3{
        width: 200px;
        padding: 10px 30px 0;
        background: #fff;
        height: 38px;
        border-right: 1px solid #dadada;
        border-top: 1px solid #292929;
    }
    .edit .cartoon-msg{
        margin-bottom: 20px;
    }
    .cartoon-msg .title{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #dadada;
    }
    .title p, .title span{
        margin: 0 0 5px 0;
        display: block;
    }
    .edit .info-bar{
        display: flex;
        justify-content: space-between;
    }
    .info-bar .img-bar{
        width: 140px;
        height: 170px;
        padding: 2px;
        border: 1px solid #ccc;
    }
    .info-bar .right-bar{
        display: flex;
        flex-direction: column;
    }
    .right-bar .info{
        width: 750px;
    }
    .info p{
        width: 230px;
        display: inline-block;
    }
    .right-bar .cartoon-edit{

    }
    .cartoon-edit .ant-btn{
        margin-right: 20px;
    }
    .container .chart{
        margin-top: 20px;
        height: 400px;
    }
</style>