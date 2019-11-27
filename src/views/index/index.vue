<template>
    <div class="index-p">
        <search-bar></search-bar>
        <div class="recommend">
            <div class="re-l">
                <my-swiper :imgs="imgs">
                </my-swiper>
            </div>
            <div class="re-r">
                <div class="re-r-t">
                    <div class="t-box" style="background: #000;">
                        <RecommendImg :img_src="'http://by98tel.cdndm5.com/86/2019/11/19/9a8fd6bc8a4b46ea.jpg'"></RecommendImg>
                    </div>
                    <div class="t-box" style="background: #fff;">
                        <RecommendImg :img_src="'http://by98tel.cdndm5.com/86/2019/11/19/731241b407384840.jpg'"></RecommendImg>
                    </div>
                </div>
                <div class="re-r-b">
                    <div class="b-box" style="background: darkcyan;">
                        <RecommendImg :img_src="'http://by98tel.cdndm5.com/86/2019/11/19/2d274d5a01774c44.jpg'"></RecommendImg>
                    </div>
                    <div class="b-box" style="background: aquamarine;">
                        <RecommendImg :img_src="'http://by98tel.cdndm5.com/86/2019/11/19/5e0976b1d8e24da6.jpg'"></RecommendImg>
                    </div>
                    <div class="b-box" style="background: firebrick;">
                        <RecommendImg :img_src="'http://by98tel.cdndm5.com/86/2019/11/19/789a57797c324004.jpg'"></RecommendImg>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">
            <section-title :title="'原创精品'" :icon="'bulb'"></section-title>
            <div class="section-items">
                <Cartoon/>
                <Cartoon/>
                <Cartoon/>
                <Cartoon/>
            </div>
        </div>
        <div class="ranks">
            <div class="ranking-list">
                <div class="ranking-title">
                    <h3>国漫热门排行</h3>
                    <span>更多 <a-icon type="right" /></span>
                </div>
                <div class="rank">
                    <div class="rank-img">
                        <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt="">
                    </div>
                    <div class="rank-des">
                        <div class="rank-num">1</div>
                        <div class="rank-des">
                            <p class="title">英雄再临</p>
                            <p class="introduce">伴随着各种各样的危机与绝望而来</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking-list">
                <div class="ranking-title">
                    <h3>国漫热门排行</h3>
                    <span>更多 <a-icon type="right" /></span>
                </div>
                <div class="rank">
                    <div class="rank-img">
                        <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt="">
                    </div>
                    <div class="rank-des">
                        <div class="rank-num">1</div>
                        <div class="rank-des">
                            <p class="title">英雄再临</p>
                            <p class="introduce">伴随着各种各样的危机与绝望而来</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ranking-list">
                <div class="ranking-title">
                    <h3>国漫热门排行{{testNum | formatNum}}</h3>
                    <span class="more">更多 <a-icon type="right" /></span>
                </div>
                <div class="rank">
                    <div class="rank-img">
                        <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt="">
                    </div>
                    <div class="rank-detail">
                        <div class="rank-num">
                            <div class="ball-icon">
                                1
                            </div>
                        </div>
                        <div class="rank-des">
                            <p class="title">英雄再临</p>
                            <p class="introduce">伴随着各种各样的危机与绝望而来</p>
                        </div>
                    </div>
                </div>
                <div class="rank">
                    <div class="rank-img">
                        <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt="">
                    </div>
                    <div class="rank-detail">
                        <div class="rank-num">
                            <div class="ball-icon">
                                1
                            </div>
                        </div>
                        <div class="rank-des">
                            <p class="title">英雄再临</p>
                            <p class="introduce">伴随着各种各样的危机与绝望而来</p>
                        </div>
                    </div>
                </div>
                <div class="rank">
                    <div class="rank-img">
                        <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt="">
                    </div>
                    <div class="rank-detail">
                        <div class="rank-num">
                            <div class="ball-icon">
                                1
                            </div>
                        </div>
                        <div class="rank-des">
                            <p class="title">英雄再临</p>
                            <p class="introduce">伴随着各种各样的危机与绝望而来</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RecommendImg from '../../components/recommed-img/recommend-img';
    import Cartoon from '../../components/cartoon/cartoon';
    import SectionTitle from './components/section-title/section-title';
    import MySwiper from '../../components/my-swiper/my-swiper';
    import SearchBar from '../../components/search-bar/search-bar';
    export default {
        name: "index",
        filters: {
          formatNum (num) {
              if (!num) return '';
              return num + 5;
          }
        },
        data () {
            return {
                testNum: 4,
                stars: 4,
                imgs: [
                    { src: 'http://by98tel.cdndm5.com/86/2019/11/19/477d4d2c679b4e3c.jpg', id: 1},
                    { src: 'http://by98tel.cdndm5.com/86/2019/11/19/9a8fd6bc8a4b46ea.jpg', id: 2},
                    { src: 'http://by98tel.cdndm5.com/86/2019/11/19/477d4d2c679b4e3c.jpg', id: 3},
                ]
            };
        },
        components: {
            RecommendImg,
            Cartoon,
            SectionTitle,
            MySwiper,
            SearchBar
        },
        methods: {
            onSearch () {
                alert('d');
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../../assets/sass/index";
    .index-p {
        width: 100%;
    }
    .search-bar {
        width: 100%;
        min-width: $w_1200;
        height: 100px;
        margin: 0 auto;
        text-align: center;
        background: url("http://css99tel.cdndm5.com/v201910292122/blue/images/search-bg.jpg") no-repeat;
    }
    .bar-input{
        display: inline-block;
        width: 40%;
        margin: 30px auto;
    }
    .recommend {
        width: $w_1200;
        display: flex;
        margin: 0 auto;
        justify-content: space-between;
    }
    .recommend .re-l {
        width: 43%;
        height: 100%;
    }
    .recommend .re-r {
        width: 56%;
    }
    .re-r {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .re-r .re-r-t {
        width: 100%;
        height: 48%;
        display: flex;
        justify-content: space-between;
    }
    .re-r .re-r-b {
        height: 47%;
        display: flex;
        justify-content: space-between;
    }
    .t-box {
        width: 49.5%;
    }
    .b-box {
        width: 32%;
    }
    .section {
        width: $w_1200;
        margin: 30px auto;
    }
    .section .section-items {
        display: flex;
        flex-wrap: wrap;
    }
    .ranks {
        width: $w_1200;
        display: flex;
        margin: 30px auto;
    }
    .ranking-list {
        width: 400px;
        padding-right: 20px;
    }
    .ranking-list .ranking-title {
        display: flex;
        justify-content: space-between;
    }
    .ranking-title h3 {
        font-size: 20px;
        font-weight: 600;
    }
    .ranking-title .more {
        display: inline-block;
        font-weight: 600;
    }
    .rank {
        margin-top: 10px;
        display: flex;
        border-bottom: 1px solid #eaeaea;
        padding-bottom: 5px;
    }
    .rank .rank-img {
        width: 100px;
    }
    .rank-img img {
        width: 100%;
    }
    .rank .rank-detail {
        display: flex;
    }
    .rank-detail .rank-num {
        height: 100%;
        margin: 5px 10px;
    }
    .ball-icon {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: orange;
        text-align: center;
        color: #fff;
    }
    .rank-des .title {
        font-weight: 600;

    }
    .rank-des .introduce {
        width: 200px;
        text-overflow: ellipsis;  /* ellipsis:显示省略符号来代表被修剪的文本  string:使用给定的字符串来代表被修剪的文本*/
        white-space: nowrap;   /* nowrap:规定段落中的文本不进行换行   */
        overflow: hidden; /*超出部分隐藏*/
    }
</style>