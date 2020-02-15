<template>
    <div>
        <div class="body">
            <div class="header">
                <div class="container-header">
                    <div class="logo">
                        <router-link to="/authorindex">
                            <img src="../../../assets/images/manben.png" alt="漫本" height="60">
                        </router-link>
                    </div>
                    <div class="topnav">
                        <ul>
                            <li>
                                <router-link to="">
                                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_home_topnav.png" alt="首页">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_manhua_topnav.png" alt="漫画">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_account_topnav.png" alt="账号管理">
                                </router-link>
                            </li>
                            <li>
                                <router-link to="">
                                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_message_topnav.png" alt="消息">
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="account-info">
                        <span class="imghead"></span>
                        <span>欢迎您</span>
                        <router-link to="" @click.native="logout">退出登录</router-link>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="center">
                    <div class="left-nav">
                        <div class="home">
                            <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_leftnav_home.png" alt="">
                            <router-link to="" @click.native="changeTab('Home')">首页</router-link>
                        </div>
                        <div class="admin-list">
                            <ul>
                                <li>
                                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_leftnav_setting.png" alt="">
                                    <router-link to="">漫画管理</router-link>
                                </li>
                                <li class="child-list">
                                    <router-link to=""  @click.native="changeTab('Publish')">发表漫画</router-link>
                                </li>
                                <li class="child-list">
                                    <router-link to="">漫画审核列表</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="my-cartoon">
                            <ul>
                                <li>
                                    <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_leftnav_my.png" alt="">
                                    <router-link to="">我的漫画</router-link>
                                </li>
                                <li class="child-list">
                                    <router-link to="">1111</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="right">
                        <component :is="comName"></component>
                    </div>
                </div>
            </div>
            <div class="footer"></div>
        </div>
    </div>
</template>

<script>
    import Home from '../components/home';
    import Publish from '../components/publish';
    export default {
        name: "index",
        components:{
            Home,
            Publish,
        },
        data(){
            return{
                comName:Home,
            };
        },
        methods: {
            changeTab(comName){
                this.comName = comName;
            },
            logout(){
                console.log(1);
            }
        }
    };
</script>

<style scoped>
    .body{
        width: 100%;
        height: 100%;
        background: url("../../../assets/images/bg.png");
    }
    .header{
        background: url("../../../assets/images/header_bg.png") repeat-x;
        margin-bottom: 37px;
        overflow: hidden;
        width: 100%;
        height: 135px;
    }
    .header .container-header{
        width: 1250px;
        margin: 0 auto;
        position: relative;
        z-index: 100;
    }
    .container-header .logo{
        padding: 35px 94px 39px 0;
        float: left;
    }
    .container-header .topnav{
        float: left;
    }
    .topnav ul{
        list-style: none;
    }
    .topnav li{
        padding: 17px 15px 0 0;
        float: left;
    }
    .topnav li a{
        display: block;
        width: 99px;
        height: 89px;
        text-align: center;
    }
    .topnav li a:hover{
        background: url("http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/nav_hover.png") no-repeat;
    }
    .topnav li img{
        padding-top: 18px;
    }
    .container-header .account-info{
        height: 122px;
        line-height: 122px;
        float: right;
        color: white;
    }
    .account-info a{
        margin-left: 20px;
        color: white;
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
    .left-nav .my-cartoon{
        padding: 20px 0 0 20px;
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