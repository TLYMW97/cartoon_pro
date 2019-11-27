<template>
    <div class="cartoon-detail">
        <div class="glass-bg">
            <serach-bar></serach-bar>
            <div class="cartoon-info">
                <div class="c-img">
                    <img src="http://mhfm1tel.cdndm5.com/41/40683/20180917092252_360x480_77.jpg" alt="">
                </div>
                <div class="c-des">
                    <h3>天尊</h3>
                    <p class="composer">作者：原著： 天蚕土豆 编绘：Dr.大吉</p>
                    <div class="status">
                        <p><span class="gray-span">状态:</span> 连载中 </p>
                        <p><span class="gray-span">题材:</span> 热血、冒险、奇幻</p>
                        <p><span class="gray-span">战力:</span>8.28亿</p>
                    </div>
                    <div class="introduce">
                        <p>2017年12月5日上线，每周二、四、六、日更新。 此漫画由天蚕土豆热门小说《元尊》改编。少年执笔，龙蛇舞动；
                            劈开乱世，点亮苍穹。气掌乾坤的世界里，究竟是蟒雀吞龙，还是圣龙崛起？！</p>
                    </div>
                    <div class="operate">
                        <a-button size="large" type="danger">收藏</a-button>
                        <a-button size="large" type="primary">开始阅读</a-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="cartoon-main">
            <div class="sections">
                <div class="sections-type">
                    <router-link to="#">连载(380)</router-link>
                    <router-link to="#">番外(1)</router-link>
                </div>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
                <Section></Section>
            </div>
            <div class="main-right">
                <div class="author">
                    <div class="avator">
                        <img src="http://css122us.cdndm5.com/v201910292122/blue/images/header-partner.png" alt="">
                    </div>
                    <div class="author-name">
                        天蚕土豆
                    </div>
                    <div class="works">
                        作品数: <span class="red">1</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SerachBar from '../../components/search-bar/search-bar';
    import Section from './components/section/section';
    export default {
        name: "cartoon-detail",
        components: {
            SerachBar,
            Section
        }
    };
</script>

<style scoped lang="scss">
    @import "../../assets/sass/index";
    .glass-bg::before {
        content: '';
        position: absolute;
        top: 100px;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 480px;
        filter:blur(11px) contrast(.6);
        background-color: rgba(0,0,0, .8);
        z-index: -99;
    }
    .glass-bg::before {
        background: url("http://mhfm1tel.cdndm5.com/41/40683/20180917092252_360x480_77.jpg")  0 / cover fixed;;
    }
    .cartoon-info {
        box-sizing: border-box;
        width: $w_1200;
        margin: 100px auto 0 auto;
        padding-top: 30px;
        display: flex;
        border-radius: 10px;
        background-color: #fff;
    }
    .cartoon-info .c-img {
        position: relative;
        top:-70px;
        left: 0;
        width: 20%;
        height: 314px;
        border-radius: 5px;
        box-shadow: 1px 2px 10px rgba(0,0,0, .45);
        margin-left: 40px;
        overflow: hidden;
    }
    .c-img img {
        width: 100%;
        height: 100%;
    }
    .cartoon-info .c-des {
        width: 60%;
        margin-left: 3%;
    }
    .c-des h3 {
        font-size: $large-font;
        font-weight: 500;
    }
    .c-des .composer {
        margin-top: 5px;
    }
    .c-des .status {
        width: 60%;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    .gray-span {
        color: $gray-span
    }
    .c-des .introduce {
        margin-top: 20px;
    }
    .c-des .operate {
        margin-top: 40px;
    }
    .operate .ant-btn {
        margin-right: 20px;
    }
    .cartoon-main {
        width: $w_1200;
        margin: 0 auto;
        display: flex;
        padding-left: 35px;
    }
    .sections {
        flex:2;
        padding-right: 35px;
    }
    .main-right {
        width: 240px;
        text-align: center;
    }
    .main-right .author {
        border: 1px solid #eaeaea;
        margin: 0 auto;
        padding-bottom: 40px;
    }
    .author .avator {
        margin-top: 40px;
    }
    .sections a {
        display: inline-block;
        width: 120px;
        font-size: 16px;
        border-right: 1px solid #000;
    }
    .sections a:nth-last-child(1) {
        text-align: center;
    }
    .author-name {
        font-size: $middle-font;
    }
</style>