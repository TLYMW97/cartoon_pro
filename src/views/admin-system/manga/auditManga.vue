<template>
    <div style="width: 100%;background: white;padding: 20px;">
        <div class="info-bar">
            <div class="img-bar">
                <img v-if="cartoonData.episode.length" :src="cartoonData.episode[0].episodeHref" :alt="cartoonData.mangaName" width="100%" height="100%">
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
            </div>
        </div>
        <div class="cartoon-edit">
            <a-button type="primary" @click="pass">通过</a-button>
            <a-button type="danger" @click="unPass">不通过</a-button>。
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "auditManga",
        data(){
            return{
                cartoonData:null,
            }
        },
        created(){
            this.getMangaData();
        },
        methods:{
            getMangaData(){
                console.log(this.getAuditMangaData);
                this.cartoonData = this.getAuditMangaData;
            },
            pass(){
                this.$api.audit({auditType:0,mangaId:this.cartoonData.mangaId,mangaAudit:1,})
                this.$router.back(-1);
            },
            unPass(){
                this.$api.audit({auditType:0,mangaId:this.cartoonData.mangaId,mangaAudit:2,})
                this.$router.back(-1);
            },
        },
        computed: {
            ...mapGetters(['getAuditMangaData'])
        }
    }
</script>

<style scoped>
    .info-bar{
        height: 720px;
        display: flex;
        justify-content: space-between;
    }
    .info-bar .img-bar{
        width: 560px;
        height: 100%;
        padding: 2px;
        border: 1px solid #ccc;
    }
    .info-bar .right-bar{
        display: flex;
        flex-direction: column;
    }
    .right-bar .info{
        width: 900px;
    }
    .info p{
        width: 230px;
        display: inline-block;
    }
    .cartoon-edit{
        display: flex;
        justify-content: center;
     }
    .cartoon-edit .ant-btn{
        margin-right: 20px;
    }
    .cartoon-edit .ant-btn-danger{
        color: #fff;
        background-color: #f5222d;
    }
    .cartoon-edit .ant-btn-danger:hover{
        background-color: #ff2f2f;
    }
</style>