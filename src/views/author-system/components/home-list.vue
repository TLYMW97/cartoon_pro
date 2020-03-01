<template>
    <div class="left-nav">
        <div class="home">
            <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_leftnav_home.png" alt="">
            <router-link to="/home">首页</router-link>
        </div>
        <div class="admin-list">
            <ul>
                <li>
                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_leftnav_setting.png" alt="">
                    <router-link to="">漫画管理</router-link>
                </li>
                <li class="child-list">
                    <router-link to="/publish">发表漫画</router-link>
                </li>
                <li class="child-list">
                    <router-link to="/review">漫画审核列表</router-link>
                </li>
            </ul>
        </div>
        <div class="my-cartoon">
            <ul>
                <li>
                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_leftnav_my.png" alt="">
                    <router-link to="/mycartoon">我的漫画</router-link>
                </li>
                <li class="manga-list" v-for="list of listData" :key="list.mangaId">
                    <router-link to="">{{list.mangaName}}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "home-list",
        data(){
            return{
                listData: [],
            };
        },
        methods:{
            getListData(){
                this.listData = this.authorManga;
            }
        },
        computed: {
            ...mapGetters(['authorManga'])
        },
        created() {
            this.getListData();
        }
    };
</script>

<style scoped>
    .left-nav{
        border-right: #d6d6d6 solid 1px;
        border-radius: 15px 0 0 15px;
        width: 157px;
        background: #f7f7f7;
    }
    .left-nav a:hover,.left-nav a:active{
        color: #ff6000;
    }
    .left-nav a{
        text-decoration: none;
        color: #7c7c7c;
        display: block;
        margin-left: 10px;
        height: 25px;
        line-height: 25px;
        font: 16px "Microsoft YaHei";
        font-weight: bold;
    }
    .left-nav .home{
        padding: 20px 0 20px 20px;
        height: 65px;
        border-bottom: #d6d6d6 solid 1px;
        display: flex;
    }
    .left-nav .admin-list{
        padding: 20px 0 0 20px;
        border-bottom: #d6d6d6 solid 1px;
    }
    .admin-list ul, .my-cartoon ul{
        list-style: none;
        margin-bottom: 0;
    }
    .admin-list>>>.router-link-active .admin-list{

    }
    .admin-list ul li, .my-cartoon ul li{
        display: flex;
        margin-bottom: 20px;
    }
    .child-list a{
        margin-left: 35px;
        display: block;
        height: 25px;
        line-height: 25px;
        font-weight: normal;
        font-size: 14px;
    }
    .manga-list a{
        display: block;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        height: 25px;
        line-height: 25px;
        font-weight: normal;
        font-size: 14px;
    }
    .left-nav .my-cartoon{
        padding: 20px 0 0 20px;
    }
</style>