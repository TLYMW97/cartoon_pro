<template>
    <div class="body">
        <authorHeader></authorHeader>
        <div class="container">
            <div class="center">
                <div class="left-nav">
                    <homeList></homeList>
                </div>
                <div class="right">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
    import homeList from '../components/home-list';
    import authorHeader from '../components/author-header';
    import { mapActions } from 'vuex';
    export default {
        name: "index",
        components:{
            authorHeader,
            homeList,
        },
        data(){
            return{
                listShow:false,
            };
        },
        methods: {
            getMyUpload: async function(){
               let manga = await this.$api.findMyManga();
               this.authorUploadManga(manga.data.data);
            },
            ...mapActions(['authorUploadManga'])
        },
        created() {
            this.getMyUpload();
        }
    };
</script>

<style scoped>
    .body{
        width: 100%;
        height: 100%;
        background: url("../../../assets/images/bg.png");
    }
    .container{
        width: 100%;
        height: 100%;
    }
    .container .center{
        width: 1250px;
        background: white;
        border-radius: 15px;
        margin: 0 auto;
        display: flex;
    }
    .center .left-nav{
        border-right: #d6d6d6 solid 1px;
        border-radius: 15px 0 0 15px;
        width: 157px;
        background: #f7f7f7;
    }
    .center .right{
        flex-grow: 1;
        margin:0 25px;
    }
    .footer{
        width: 100%;
        height: 255px;
    }
</style>