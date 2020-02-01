<template>
  <div class="index-page">
    <search-bar></search-bar>
    <div class="classify">
      <ul class="classify-ul">
        <li>
          <router-link to="#">原创</router-link>
        </li>
        <li>
          <router-link to="#">热血</router-link>
        </li>
        <li>
          <router-link to="#">冒险</router-link>
        </li>
        <li>
          <router-link to="#">魔法</router-link>
        </li>
        <li>
          <router-link to="#">科幻</router-link>
        </li>
        <li>
          <router-link to="#">奇幻</router-link>
        </li>
        <li>
          <router-link to="#">运动</router-link>
        </li>
        <li>
          <router-link to="#">历史</router-link>
        </li>
        <li>
          <router-link to="#">战争</router-link>
        </li>
        <li>
          <router-link to="#">恋爱</router-link>
        </li>
        <li>
          <router-link to="#">后宫</router-link>
        </li>
        <li>
          <router-link to="#">校园</router-link>
        </li>
        <li>
          <router-link to="#">悬疑</router-link>
        </li>
        <li>
          <router-link to="#">搞笑</router-link>
        </li>
      </ul>
      <div class="all-classify">
        <span>
          <a-icon type="appstore" />
        </span>全部分类
      </div>
    </div>
    <div class="recommend">
      <div class="re-l">
        <my-swiper :mangas="recommand.swipers"></my-swiper>
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
        <Cartoon />
        <Cartoon />
        <Cartoon />
      </div>
    </div>
    <div class="ranks">
      <div class="ranking-list">
        <div class="ranking-title">
          <h3>国漫热门排行</h3>
          <span class="more">
            更多
            <a-icon type="right" />
          </span>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
            <div class="rank-des">
              <p class="title">英雄再临</p>
              <p class="introduce">伴随着各种各样的危机与绝望而来</p>
            </div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
            <div class="rank-des">
              <p class="title">英雄再临</p>
              <p class="introduce">伴随着各种各样的危机与绝望而来</p>
            </div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
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
          <span class="more">
            更多
            <a-icon type="right" />
          </span>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
            <div class="rank-des">
              <p class="title">英雄再临</p>
              <p class="introduce">伴随着各种各样的危机与绝望而来</p>
            </div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
            <div class="rank-des">
              <p class="title">英雄再临</p>
              <p class="introduce">伴随着各种各样的危机与绝望而来</p>
            </div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
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
          <span class="more">
            更多
            <a-icon type="right" />
          </span>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
            <div class="rank-des">
              <p class="title">英雄再临</p>
              <p class="introduce">伴随着各种各样的危机与绝望而来</p>
            </div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
            <div class="rank-des">
              <p class="title">英雄再临</p>
              <p class="introduce">伴随着各种各样的危机与绝望而来</p>
            </div>
          </div>
        </div>
        <div class="rank">
          <div class="rank-img">
            <img src="http://mhfm9tel.cdndm5.com/35/34637/20180213101457_320x246_33.jpg" alt />
          </div>
          <div class="rank-detail">
            <div class="rank-num">
              <div class="ball-icon">1</div>
            </div>
            <div class="rank-des">
              <p class="title">英雄再临</p>
              <p class="introduce">伴随着各种各样的危机与绝望而来</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="renew">
        <cartoonCard
          class="renew-card"
          @toDetail="getDetail"
          v-for="data in allManga"
          :key="data.mangaId"
          :mangaData="data"
        ></cartoonCard>
      </div>
    </div>
</template>

<script>
import RecommendImg from '../../components/recommed-img/recommend-img';
import Cartoon from '../../components/cartoon/cartoon';
import SectionTitle from './components/section-title/section-title';
import MySwiper from '../../components/my-swiper/my-swiper';
import SearchBar from '../../components/search-bar/search-bar';
import cartoonCard from '../../components/cartoon-card/cartoon-card';

export default {
  name: 'index',
  created() {
    this.indexInit();
  },
  data() {
    return {
      // 所有漫画数据
      allManga: null,
      loginVisible: true,
      recommand: {
        swipers: [],
        top: [],
        bottom: []
      },
      stars: 4,
      imgs: [
        {
          src: 'http://by98tel.cdndm5.com/86/2019/11/19/477d4d2c679b4e3c.jpg',
          id: 1
        },
        {
          src: 'http://by98tel.cdndm5.com/86/2019/11/19/3f1f0df0d75b48af.jpg',
          id: 2
        },
        {
          src: 'http://by98tel.cdndm5.com/86/2019/11/19/a23724ac2efe4e78.jpg',
          id: 3
        }
      ]
    };
  },
  components: {
    RecommendImg,
    Cartoon,
    SectionTitle,
    MySwiper,
    SearchBar,
    cartoonCard
  },
  methods: {
    onSearch() {
      alert('d');
    },
    indexInit: async function() {
      let res = await this.$api.allManga();
      const {
        data: { data }
      } = res;
      this.allManga = data;
      this.recommand.swipers = data.slice(0, 3);
      this.recommand.top = data.slice(3, 5);
      this.recommand.bottom = data.slice(5, 8);
    },
    getDetail(mangaId) {
      this.$router.push({ path: '/detail', query: { mangaId } });
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.index-page {
  width: 100%;
}
.classify {
  width: $w_1200;
  margin: 5px auto;
  display: flex;
  justify-content: space-between;
}
.classify .classify-ul {
  display: flex;
  font-size: 14px;
}
.classify-ul li {
  margin-right: 10px;
  border-bottom: 1px solid transparent;
}
.classify-ul li:hover {
  border-color: $index-color;
}
.classify .all-classify {
  font-size: 16px;
}
.recommend {
  width: $w_1200;
  display: flex;
  margin: 0 auto;
  max-height: 385px;
  justify-content: space-between;
}
.recommend .re-l {
  width: 43%;
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
  height: 100%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
}
.re-r .re-r-b {
  height: 100%;
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
  text-overflow: ellipsis; /* ellipsis:显示省略符号来代表被修剪的文本  string:使用给定的字符串来代表被修剪的文本*/
  white-space: nowrap; /* nowrap:规定段落中的文本不进行换行   */
  overflow: hidden; /*超出部分隐藏*/
}
.renew {
  width: $w_1200;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px auto;
}
.renew .renew-card {
  margin-bottom: 20px;
}
.login-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>