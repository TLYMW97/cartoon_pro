<template>
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
                        <router-link to="/home">
                            <img src="http://css99tel.cdndm5.com/v201910292122/cartoonupload/images/icon_home_topnav.png" alt="首页">
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/mycartoon">
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
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

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
</style>