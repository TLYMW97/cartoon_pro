<template>
    <div class="c-item">
        <div class="c-left">
            <img src="http://mhfm9tel.cdndm5.com/34/33991/20191025105411_180x240_23.jpg" alt="">
        </div>
        <div class="c-right">
            <p class="item-title">山海逆战</p>
            <div class="item-star">
                <a-rate style="font-size:14px" allow-half v-model="stars"/>
            </div>
            <div class="item-new">最新 <span class="red-span">第462回 刀锋单间论</span></div>
            <div class="item-des">山海世界，人与异兽谁胜谁负</div>
            <div class="item-tags">
                <a-tag>热血</a-tag>
                <a-tag>神鬼</a-tag>
                <a-tag>神鬼</a-tag>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartoon",
        props: {
            title: {
                type: String,
                default: null
            },
            newTimes: {
                type:String,
                default: null
            },
            des: {
                type: String,
                default: null
            },
            tags: {
                type:Array,
                default: null
            }
        },
        data () {
            return {
                stars: 4
            };
        }
    };
</script>

<style scoped lang="scss">
    @import "../../assets/sass/index";
    .c-item {
        margin-top: 20px;
        width: 400px;
        display: flex;
    }
    .item-star {
        width: 100%;
    }
    .item-star {
        margin-top: 10px;
    }
    .c-item .c-right {
        width: 50%;
        margin-left: 20px;
    }
    .item-title {
        font-size: $middle-font;
        font-weight: 600;
    }
    .item-new {
        margin-top: 30px;
    }
    .red-span {
        color: $index-color
    }
    .item-des {
        margin-top: 5px;
    }
    .item-tags {
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
        max-height: 80px;
        display: -webkit-box;  /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
        -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
        overflow: hidden;
    }
    .ant-tag {
        background-color: #ff5660;
        color: #fff;
        margin-right: 1vw;
        text-overflow: ellipsis;  /* ellipsis:显示省略符号来代表被修剪的文本  string:使用给定的字符串来代表被修剪的文本*/
        white-space: nowrap;   /* nowrap:规定段落中的文本不进行换行   */
        overflow: hidden; /*超出部分隐藏*/
    }
</style>