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
      <rank-list title="人气" :rankList="mostPop"></rank-list>
      <rank-list title="免费" :rankList="freePop"></rank-list>
      <rank-list title="付费" :rankList="payPop"></rank-list>
    </div>
    <div class="renew">
      <cartoonCard
        class="renew-card"
        @toDetail="getDetail"
        v-for="data in allManga"
        :key="data.mangaId"
        :mangaData="data"
      ></cartoonCard>
      <div class="hide-card" v-for="item in hideCard" :key="item"></div>
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
import RankList from '@/components/rank-list/rank-list';
export default {
  name: 'index',
  created() {
    this.indexInit();
  },
  data() {
    return {
      // 所有漫画数据
      allManga: null,
      // 处理flex布局填充
      hideCard: null,
      ifHideCard: false,
      // 排行榜数据
      freePop: [],
      payPop: [],
      mostPop: [],
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
    cartoonCard,
    RankList
  },
  methods: {
    onSearch() {
      alert('d');
    },
    indexInit: async function() {
      let res = await this.$api.allManga();
      let freeRes = await this.$api.freePop();
      let payRes = await this.$api.payPop();
      let mostRes = await this.$api.mostPop();
      const {
        data: { data: frees }
      } = freeRes;
      const {
        data: { data: pays }
      } = payRes;
      const {
        data: { data: mosts }
      } = mostRes;
      const {
        data: { data }
      } = res;
      this.allManga = data;
      console.log(this.allManga);
      if (this.allManga.length % 7 !== 0) {
        this.ifHideCard = true;
        this.hideCard = 7 - (this.allManga.length % 7);
      }
      this.payPop = pays;
      this.freePop = frees;
      this.mostPop = mosts;
      console.log('pays', pays);
      this.recommand.swipers = mosts.mangaList.slice(0, 3);
      this.recommand.top = mosts.mangaList.slice(3, 5);
      this.recommand.bottom = mosts.mangaList.slice(5, 8);
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
  margin-bottom: 0;
}
.classify-ul li {
  margin-right: 10px;
  border-bottom: 1px solid transparent;
  a {
    color: rgba(0, 0, 0, 0.85);
  }
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
.renew .hide-card {
  width: 167px;
  height: 287px;
}

.login-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>