<template>
    <div class="animated">
        <div class="animated-tip">
            <router-link to="" title="山海逆战">
                <img :src='mangaData.episode[0].episodeHref' alt="">
            </router-link>
            <div class="animated-detail">
                <div class="title">
                    <router-link to="" :title='mangaData.mangaName'>{{mangaData.mangaName}}</router-link>
                    <p>评分:{{mangaData.mangaScore}}</p>
                    <a-rate class="rate" allow-half v-model="stars" disabled></a-rate>
                </div>
            </div>
            <div class="author">
                <p>作者:</p>
                <span>
                    <router-link to="">邱福龙</router-link>
                    <router-link to="">瑛麒动漫</router-link>
                </span>
            </div>
            <div class="chapter">
                <p>最新:</p>
                <router-link to="">第468回 炫火破鼎封（下）第468回 炫火破鼎封（下）</router-link>
            </div>
            <div class="desc">
                <p>山海世界，人与异兽谁胜谁负</p>
            </div>
            <p class="read">
                <router-link class="btn" to="">开始阅读</router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "cartoon-animated",
    props:[
        'mangaData'
    ],
    data(){
        return{
            stars: 4.5
        };
    }
};
</script>

<style scoped>
    .animated{
        display: block;
        overflow: hidden;
        position: absolute;
        top: -40px;
        left: -30px;
        opacity: 0;
        z-index: 2;
        max-height: 299px;
        transform: scale(.73);
        transition: all .3s;
    }
    .animated:hover{
        opacity: 1;
        top: -20px;
        left: -30px;
        max-height: 340px;
        transform: scale(1);
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    }
    .animated .animated-tip{
        width: 226px;
        height: 340px;
        background-color: #fff;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    }
    .animated-tip img{
        width: 100%;
        height: 50%;
        display: block;
        object-fit: cover;
    }
    .animated-tip .animated-detail{
        padding: 10px;
    }
    .animated-detail .title{
        display: flex;
        font-size: 18px;
        line-height: 21px;
        font-weight: 700;
        margin-bottom: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title a{
        display: inline-block;
        width: 120px;
        color: #252525;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title p{
        font-size: 12px;
        display: block;
        margin-right: 2px;
    }
    .animated-detail .rate{
        line-height: 18px;
        font-size: 12px;
    }
    .rate>>>.ant-rate-star{
        margin-right: 5px;
    }
    .animated-tip .author{
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        padding: 0 10px;
    }
    .author a{
        padding-left: 3px;
    }
    .animated-tip .chapter{
        line-height: 18px;
        display: flex;
        padding: 0 10px;
    }
    .chapter p{
        color: #252525;
    }
    .chapter a{
        margin-left:3px;
        color: #fd113a;
        display: inline-block;
        width: 170px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .animated-tip .desc{
        padding: 0 10px;
        font-size: 13px;
        color: #666;
        line-height: 1.5em;
        margin-top: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
    }
    .animated-tip .read{
        font-size: 12px;
        line-height: 18px;
        padding: 0 10px 10px 10px;
    }
    .read .btn{
        display: block;
        width: 100%;
        height: 34px;
        margin-top: 10px;
        line-height: 34px;
        background-color: #fd113a;
        color: #fff;
        text-align: center;
        font-size: 14px;
        border-radius: 4px;
    }
    .btn a{
        color: #fff;
    }
</style>