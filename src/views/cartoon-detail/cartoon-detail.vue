<template>
    <div class="cartoon-detail">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartoon-detail"
    };
</script>

<style scoped lang="scss">
    @import "../../assets/sass/index";
    .cartoon-info {
        width: $w_1200;
        margin: 30px auto;
        display: flex;
        background-color: #fff;
    }
    .cartoon-info .c-img {
        width: 20%;
        height: 314px;
        border-radius: 5px;
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
        margin-top: 30px;
    }
</style>