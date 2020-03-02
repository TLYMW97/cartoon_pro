<template>
    <div class="edit">
        <div class="edit-header">
            <h3>作品概要</h3>
        </div>
        <div class="container">
            <div class="cartoon-msg">
                <div class="title">
                    <p>{{cartoonData.mangaName}}</p>
                    <span>创建时间:2020-02-26</span>
                </div>
            </div>
            <div class="info-bar">
                <div class="img-bar">
                    <img :src="cartoonData.episode[0].episodeHref" :alt="cartoonData.mangaName" width="100%" height="100%">
                </div>
                <div class="right-bar">
                    <div class="info">
                        <p>名称：{{cartoonData.mangaName}}</p>
                        <p v-if="cartoonData.status===0?cartoonData.status='连载中':cartoonData.status='已完结'">进度：{{cartoonData.status}}</p>
                        <p>评论数：0</p>
                        <p>作者：{{cartoonData.mangaAuthor}}</p>
                        <p>阅读人次：0</p>
                        <p>题材：热血</p>
                        <p>更新时间：{{cartoonData.mangaUpdatetime}}</p>
                        <p>收藏量：{{cartoonData.mangaCollection}}</p>
                        <p>最新章节：{{cartoonData.mangaNew}}</p>
                        <p>创建时间：{{cartoonData.mangaCreatetime}}</p>
                        <p>人气值：{{cartoonData.mangaPopularity}}</p>
                    </div>
                    <div class="cartoon-edit">
                        <a-button type="primary" icon="file-add" @click="$router.push('/publishchapter')">新建章节</a-button>
                        <a-button type="primary" icon="picture" @click="$router.push('/publishimg')">修改封面</a-button>
                        <a-button type="primary" icon="edit" @click="$router.push('/chapteredit')">章节管理</a-button>
                        <a-button type="primary" icon="delete" @click="deleteManga">删除</a-button>
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
    import {mapGetters} from 'vuex';
    export default {
        name: "cartoon-edit",
        components:{
        },
        data(){
          return{
            cartoonData: null,
          };
        },
        created() {
            this.getData();
        },
        methods:{
            getData(){
                this.cartoonData = this.getMangaByClick;
                console.log(this.cartoonData);
            },
            deleteManga(){
                console.log('delete');
            }
        },
        computed:{
            ...mapGetters(['getMangaByClick'])
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