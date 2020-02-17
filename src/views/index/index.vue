<template>
  <div class="index-page">
    <search-bar @search="search"></search-bar>
    <div class="classify">
      <ul class="classify-ul">
        <li v-for="tag of classes" :key="tag.tagId">
          <router-link :to="{ path: '/cartoonlist', query: { tagId: tag.tagId } }">{{ tag.tagName }}</router-link>
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
          :mangaData="item"
        />
      </div>
    </div>
    <div class="ranks">
      <rank-list @toDetail="getDetail" title="人气" :rankList="mostPop"></rank-list>
      <rank-list @getMore="priceMore(0)" @toDetail="getDetail" title="免费" :rankList="freePop"></rank-list>
      <rank-list @getMore="priceMore(1)" @toDetail="getDetail" title="付费" :rankList="payPop"></rank-list>
    </div>
    <!-- <div class="month-list">
      <section-title :title="'月票榜'" :icon="'rise'" />
      <div class="list">
        <div class="list-item" v-for="(item, index) of boutique.currentMonth" :key="item.mangaId">
          <div class="ball-icon">{{ index + 1 }}</div>
          <div class="manga-name">{{ item.mangaName }}</div>
        </div>
      </div>
    </div>-->
    <div class="categories">
      <div class="category-header">
        <ul>
          <li
            v-for="category of categoryHeader"
            :key="category.tagId"
            :class="categroyActivited === category.tagId ? 'categroyActivited' : ''"
            @click="getTagList(category.tagId)"
          >
            <span>{{ category.tagName }}</span>
          </li>
          <li>
            <router-link to="/cartoonlist" class="all-classify">
              <span>全部分类</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="category-list">
        <banner
          v-if="boutique.categoryList.length > 0"
          @toDetail="getDetail"
          :mangaList="boutique.categoryList"
        >
          <!-- <cartoon-card v-for="item of payPop.mangaList" :key="item.mangaId" :mangaData="item"></cartoon-card> -->
        </banner>
      </div>
    </div>
    <div class="recent-update">
      <section-title :title="'最近更新'" :icon="'bulb'">
        <div class="update-date">
          <span
            class="date"
            :class="dateActivited === date.weekDay ? 'dateActivited' : ''"
            v-for="date of dateList"
            :key="date.weekDay"
            @click="getByTime(date.localDate)"
          >{{ date.weekDay }}</span>
        </div>
      </section-title>
      <div class="update-list">
        <Cartoon
          v-for="cartoon of updatedList"
          @toDetail="getDetail"
          :mangaData="cartoon"
          :key="cartoon.mangaId"
        ></Cartoon>
      </div>
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
import Banner from '@/components/banner/banner';
import Swiper from '@/components/swiper/swiper';
import weekDate from '@/utils/WeekDate';
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
      categoryHeader: [],
      // 每日更新
      dateActivited: '今天',
      updatedList: [],
      dateList: [],
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
        love: [],
        currentMonth: [],
        categoryList: []
      },
      // 分类推荐
      categroyActivited: 491,
      stars: 4
    };
  },
  components: {
    RecommendImg,
    Cartoon,
    SectionTitle,
    MySwiper,
    SearchBar,
    // Swiper,
    Banner,
    // cartoonCard,
    RankList
  },
  methods: {
    indexInit: async function() {
      // let res = await this.$api.allManga();
      const dateList = weekDate();
      this.getTags();
      this.getRecLove();
      this.getPop();
      this.getFree();
      this.getPay();
      this.getByTime();
      // 月榜
      // const date = this.getCurrentMonth();
      // let monthRes = await this.$api.findByMonth({
      //   date,
      //   page: 1 * 1,
      //   size: 100 * 1
      // });
      // const {
      //   data: { data: monthList }
      // } = monthRes;

      // this.boutique.currentMonth = monthList;
      this.dateList = dateList;
    },
    getRecLove: async function() {
      // 恋爱精品
      let loveRes = await this.$api.searchByTag(491);
      const {
        data: { data: loves }
      } = loveRes;
      this.boutique.love = loves.slice(0, 6);
      this.boutique.categoryList = loves.slice(0, 15);
    },
    getDetail(mangaId) {
      this.$router.push({ path: '/detail', query: { mangaId } });
    },
    getTags: async function() {
      let classRes = await this.$api.classes();
      const {
        data: { data: classes }
      } = classRes;
      this.setTags(classes);
      this.classes = classes.slice(0, 15);
      this.categoryHeader = classes.slice(0, 6);
    },
    getPop: async function() {
      let mostRes = await this.$api.mostPop();
      const {
        data: { data: mosts }
      } = mostRes;
      this.mostPop = mosts;
      this.recommand.swipers = mosts.mangaList.slice(0, 3);
      this.recommand.top = mosts.mangaList.slice(8, 10);
      this.recommand.bottom = mosts.mangaList.slice(5, 8);
    },
    getFree: async function() {
      let freeRes = await this.$api.freePop();
      const {
        data: { data: frees }
      } = freeRes;
      this.freePop = frees;
    },
    getPay: async function() {
      let payRes = await this.$api.payPop();
      const {
        data: { data: pays }
      } = payRes;
      this.payPop = pays;
    },
    getByTime: async function(date) {
      date = date || '2020-02-01';
      let res = await this.$api.searchByTime({
        date,
        page: 1,
        size: 6
      });
      console.log('updatedRes', res);
      const {
        data: { data }
      } = res;
      console.log('data', data);
      this.updatedList = data.list;
    },
    priceMore(mangaPrice) {
      this.$router.push({ path: '/cartoonlist', query: { mangaPrice } });
    },
    getCurrentMonth() {
      let date = new Date().toLocaleDateString();
      let index = date.lastIndexOf('/');
      date = date
        .slice(0, index)
        .replace('/', '-')
        .split('-');
      if (date[1].length === 1) {
        date[1] = '0' + date[1];
      }
      return date.join('-');
    },
    search: async function(fuzzy) {
      const res = await this.$api.searchByFuzzy(fuzzy);
      const {
        data: { code, data }
      } = res;
      if (code === 200) {
        this.setSearchResult(data);
        this.$router.push('/search');
      }
    },
    getTagList: async function(tagId) {
      const res = await this.$api.searchByTag(tagId);
      this.categroyActivited = tagId;
      const {
        data: { data }
      } = res;
      this.boutique.categoryList = data;
    },
    ...mapActions(['setTags', 'setSearchResult'])
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.index-page {
  width: 100%;
}
.classify {
  @include w1200(10px);
  @include flex(space-between);
}
.classify .classify-ul {
  display: flex;
  font-size: $medium-font;
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
  @include w1200();
  @include flex(space-between);
  max-height: 435px;
}
.recommend .re-l {
  width: 39%;
}
.recommend .re-r {
  width: 60%;
}
.re-r {
  @include flex(space-between, null, null, column);
}
.re-r .re-r-t {
  width: 100%;
  height: 215px;
  @include flex(space-between);
  margin-bottom: 5px;
}
.re-r .re-r-b {
  height: 210px;
  @include flex(space-between);
}
.t-box {
  width: 49.5%;
}
.b-box {
  width: 32%;
}
.section,
.month-list {
  @include w1200(30px);
}
.section .section-items {
  @include flex(null, null, wrap);
}
.ranks {
  @include w1200(30px);
  display: flex;
}
.list {
  @include flex(null, null, wrap, column);
  max-height: 400px;
}
.list-item {
  width: 300px;
  margin-top: 10px;
  padding-left: 20px;
  display: flex;
  .ball-icon {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-right: 15px;
    background: #eaeaea;
    text-align: center;
    color: #fff;
  }
  .first {
    background: #ffe675;
  }
  .second {
    background: #feaf00;
  }
  .third {
    background: #fe8c00;
  }
}
.categories::before {
  content: '';
  position: absolute;
  background: url('../../assets/images/bg.jpg') no-repeat;
  background-size: cover;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 480px;
  filter: blur(66px) contrast(0.9);
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -99;
}
.categories {
  position: relative;
  min-width: 1200px;
  overflow: hidden;
  .category-header {
    @include w1200();
    padding: 20px;
    ul {
      @include flex(space-between, center);
      li span {
        color: #fff;
        opacity: 0.8;
        cursor: pointer;
        font-size: $large-font;
      }
      li span:hover {
        opacity: 1;
      }
      .categroyActivited span {
        opacity: 1;
        font-size: $large-x-font;
      }
    }
  }
  .category-list {
    @include w1200(10px);
    // width: 100%;
    overflow: hidden;
  }
}
.recent-update {
  @include w1200(20px);
  .update-date {
    margin-left: 30px;
    .date {
      cursor: pointer;
      font-size: 16px;
      color: #000;
      font-weight: 600;
      margin-right: 20px;
    }
  }
  .update-list {
    @include flex(null, null, wrap);
  }
}
.dateActivited {
  color: $index-color !important;
}
.login-mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
</style>
