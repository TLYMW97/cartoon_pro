<template>
  <div class="index-page">
    <search-bar></search-bar>
    <div class="classify">
      <ul class="classify-ul">
        <li v-for="tag of classes" :key="tag.tagId">
          <router-link :to="{path: '/cartoonlist', query: {tagId: tag.tagId}}">{{tag.tagName}}</router-link>
        </li>
      </ul>
      <router-link to="/cartoonlist" class="all-classify">
        <span>
          <a-icon type="appstore" />
        </span>全部分类
      </router-link>
    </div>
    <div class="recommend">
      <div class="re-l">
        <my-swiper :mangas="recommand.swipers"></my-swiper>
      </div>
      <div class="re-r">
        <div class="re-r-t">
          <div class="t-box" v-for="item of recommand.top" :key="item.mangaId">
            <RecommendImg :img_src="item.episode[0].episodeHref"></RecommendImg>
          </div>
        </div>
        <div class="re-r-b">
          <div class="b-box" v-for="item of recommand.bottom" :key="item.mangaId">
            <RecommendImg :img_src="item.episode[0].episodeHref"></RecommendImg>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <section-title :title="'恋爱精品'" :icon="'bulb'" />
      <div class="section-items">
        <Cartoon
          @toDetail="getDetail"
          v-for="item of boutique.love"
          :key="item.mangaId"
          :cartoon="item"
        />
      </div>
    </div>
    <div class="ranks">
      <rank-list @toDetail="getDetail" title="人气" :rankList="mostPop"></rank-list>
      <rank-list @getMore="priceMore(0)" @toDetail="getDetail" title="免费" :rankList="freePop"></rank-list>
      <rank-list @getMore="priceMore(1)" @toDetail="getDetail" title="付费" :rankList="payPop"></rank-list>
    </div>
    <!-- <div class="renew">
      <cartoonCard
        class="renew-card"
        @toDetail="getDetail"
        v-for="data in allManga"
        :key="data.mangaId"
        :mangaData="data"
      ></cartoonCard>
      <div class="hide-card" v-for="item in hideCard" :key="item"></div>
    </div>-->
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
import { mapActions } from 'vuex';
export default {
  name: 'index',
  created() {
    this.indexInit();
  },
  data() {
    return {
      // 漫画分类
      classes: [],
      // 所有漫画数据
      allManga: null,
      // 处理flex布局填充
      hideCard: null,
      ifHideCard: false,
      // 排行榜数据
      freePop: {},
      payPop: {},
      mostPop: {},
      // 登录状态
      loginVisible: true,
      // 推荐栏
      recommand: {
        swipers: [],
        top: [],
        bottom: []
      },
      // 精品推荐
      boutique: {
        love: []
      },
      stars: 4
    };
  },
  components: {
    RecommendImg,
    Cartoon,
    SectionTitle,
    MySwiper,
    SearchBar,
    // cartoonCard,
    RankList
  },
  methods: {
    onSearch() {
      alert('d');
    },
    indexInit: async function() {
      // let res = await this.$api.allManga();
      let freeRes = await this.$api.freePop();
      let payRes = await this.$api.payPop();
      let mostRes = await this.$api.mostPop();
      let classRes = await this.$api.classes();
      // 恋爱精品
      let loveRes = await this.$api.searchByTag(491);
      const {
        data: { data: classes }
      } = classRes;
      const {
        data: { data: frees }
      } = freeRes;
      const {
        data: { data: pays }
      } = payRes;
      const {
        data: { data: mosts }
      } = mostRes;
      // const {
      //   data: { data }
      // } = res;
      const {
        data: { data: loves }
      } = loveRes;
      // this.allManga = data;
      // if (this.allManga.length % 7 !== 0) {
      //   this.ifHideCard = true;
      //   this.hideCard = 7 - (this.allManga.length % 7);
      // }
      this.payPop = pays;
      this.freePop = frees;
      this.mostPop = mosts;
      this.setTags(classes);
      this.classes = classes.slice(0, 15);
      this.boutique.love = loves.slice(0, 6);
      this.recommand.swipers = mosts.mangaList.slice(0, 3);
      this.recommand.top = mosts.mangaList.slice(8, 10);
      this.recommand.bottom = mosts.mangaList.slice(5, 8);
    },
    getDetail(mangaId) {
      this.$router.push({ path: '/detail', query: { mangaId } });
    },
    priceMore(mangaPrice) {
      this.$router.push({ path: '/cartoonlist', query: { mangaPrice } });
    },
    ...mapActions(['setTags'])
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
  margin: 10px auto;
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
  span {
    margin-right: 5px;
  }
}
.recommend {
  width: $w_1200;
  display: flex;
  margin: 0 auto;
  max-height: 435px;
  justify-content: space-between;
}
.recommend .re-l {
  width: 39%;
}
.recommend .re-r {
  width: 60%;
}
.re-r {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.re-r .re-r-t {
  width: 100%;
  height: 215px;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
}
.re-r .re-r-b {
  height: 210px;
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