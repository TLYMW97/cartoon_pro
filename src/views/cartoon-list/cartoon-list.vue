<template>
  <div>
    <search-bar />
    <div class="cartoon-list">
      <div class="classify">
        <div class="theme">
          <div class="classify-title">题 材:</div>
          <div class="theme-list">
            <span
              class="theme-item"
              @click="changeTheme('')"
              :class="search.tagId === '' ? 'theme-actived' : ''"
            >全部</span>
            <span
              class="theme-item"
              @click="changeTheme(tag.tagId)"
              :class="search.tagId === tag.tagId ? 'theme-actived' : ''"
              v-for="tag of tags"
              :key="tag.tagId"
            >{{tag.tagName}}</span>
          </div>
        </div>
        <div class="theme">
          <div class="classify-title">进 度:</div>
          <div class="theme-list">
            <span
              class="option"
              @click="changeStatus('')"
              :class="search.mangaStatus === '' ? 'actived' : ''"
            >全部</span>
            <span
              class="option"
              @click="changeStatus(0)"
              :class="search.mangaStatus === 0 ? 'actived' : ''"
            >连载中</span>
            <span
              class="option"
              @click="changeStatus(1)"
              :class="search.mangaStatus === 1 ? 'actived' : ''"
            >已完结</span>
          </div>
        </div>
        <div class="theme">
          <div class="classify-title">收 费:</div>
          <div class="theme-list">
            <span
              class="option"
              @click="changePrice('')"
              :class="search.mangaPrice === '' ? 'actived' : ''"
            >全部</span>
            <span
              class="option"
              @click="changePrice(0)"
              :class="search.mangaPrice === 0 ? 'actived' : ''"
            >免费</span>
            <span
              class="option"
              @click="changePrice(1)"
              :class="search.mangaPrice === 1 ? 'actived' : ''"
            >付费</span>
          </div>
        </div>
      </div>
      <div class="cartoons">
        <cartoonCard
          class="cartoons-card"
          @toDetail="getDetail"
          v-for="data in cartoonList"
          :key="data.mangaId"
          :mangaData="data"
        ></cartoonCard>
        <div class="hide-card" v-for="item in hideCard" :key="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import cartoonCard from '@/components/cartoon-card/cartoon-card';
import SearchBar from '@/components/search-bar/search-bar';
import { mapGetters } from 'vuex';
export default {
  name: 'cartoonList',
  computed: {
    ...mapGetters(['tags'])
  },
  components: {
    SearchBar,
    cartoonCard
  },
  created() {
    this.listInit();
  },
  data() {
    return {
      cartoonList: [],
      ifHideCard: false,
      hideCard: 0,
      search: {
        tagId: '',
        mangaStatus: '',
        mangaPrice: ''
      },
      page: 1,
      size: 30
    };
  },
  methods: {
    listInit() {
      const { tagId, mangaPrice } = this.$route.query;
      if (tagId) {
        this.$set(this.search, 'tagId', parseInt(tagId));
        this.getManga(this.search);
      } else if (mangaPrice || mangaPrice === 0) {
        this.$set(this.search, 'mangaPrice', parseInt(mangaPrice));
        this.getManga(this.search);
      } else {
        this.getManga(this.search);
      }
    },
    getManga: async function(search) {
      const res = await this.$api.findBySearch(search, 1, 100);
      const {
        data: { data }
      } = res;
      this.cartoonList = data.list;
      if (this.cartoonList % 7 !== 0) {
        this.ifHideCard = true;
        this.hideCard = 7 - (this.cartoonList.length % 7);
      }
    },
    changeTheme(tagId) {
      this.search.tagId = tagId;
      this.getManga(this.search);
    },
    changeStatus(status) {
      this.search.mangaStatus = status;
      this.getManga(this.search);
    },
    changePrice(price) {
      this.search.mangaPrice = price;
      this.getManga(this.search);
    },
    getDetail() {}
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/sass/index';
.cartoon-list {
  width: $w_1200;
  border: 1px solid #eaeaea;
  margin: 10px auto;
  .classify {
    border-top: 2px solid #fd113a;
    padding: 20px;
  }
}
.theme {
  display: flex;
  font-size: 13px;
  margin-bottom: 15px;
  // border-bottom: 1px solid #eaeaea;
  color: #252525;
  .classify-title {
    min-width: 50px;
  }
  .theme-list {
    display: flex;
    flex-wrap: wrap;
    .theme-item {
      cursor: pointer;
      margin-bottom: 10px;
      padding: 0 10px 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eaeaea;
    }
    .option {
      height: 20px;
      line-height: 20px;
      cursor: pointer;
      margin-right: 10px;
      padding: 0 8px;
    }
    .theme-item:hover {
      color: #fd113a;
    }
  }
}
.theme-actived {
  color: #fd113a;
  border-bottom-color: #fd113a !important;
}
.actived {
  background-color: #fd113a;
  padding-bottom: 0 !important;
  color: #fff;
  border-radius: 30px;
}
.cartoons {
  width: $w_1200;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px auto;
}
.cartoons .cartoon-card {
  margin-bottom: 20px;
}
.cartoons .hide-card {
  width: 167px;
  height: 287px;
}
</style>