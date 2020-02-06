<template>
  <div class="ranking-list">
    <div class="ranking-title">
      <h3>{{title}}排行</h3>
      <span class="more" @click="getMore">
        更多
        <a-icon type="right" />
      </span>
    </div>
    <div class="rank" v-for="(rank,index) of rankList.mangaList" :key="rank.mangaId">
      <div class="rank-img" @click="toDetail(rank)">
        <img :src="rank.episode[0].episodeHref" alt />
      </div>
      <div class="rank-detail">
        <div class="rank-num">
          <div class="ball-icon first" v-if="index+1 === 1">{{index +1}}</div>
          <div class="ball-icon second" v-else-if="index+1 === 2">{{index +1}}</div>
          <div class="ball-icon third" v-else-if="index+1 === 3">{{index +1}}</div>
          <div class="ball-icon" v-else>{{index +1}}</div>
        </div>
        <div class="rank-des">
          <p class="title" @click="toDetail(rank)">{{rank.mangaName}}</p>
          <p class="introduce">{{rank.mangaDetail}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'rankList',
  props: {
    title: String,
    rankList: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toDetail(rank) {
      this.setCurManga(rank);
      this.$emit('toDetail', rank.mangaId);
    },
    getMore() {
      this.$emit('getMore');
    },
    ...mapActions(['setCurManga'])
  }
};
</script>

<style lang="scss">
.ranking-list {
  width: 400px;
  padding-right: 20px;
  p {
    margin-bottom: 0;
  }
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
  cursor: pointer;
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
  height: 76px;
  cursor: pointer;
  overflow: hidden;
}
.rank-img img {
  width: 100%;
}
.rank .rank-detail {
  display: flex;
}
.rank-detail .rank-num {
  height: 100%;
  margin: 0px 10px;
}
.ball-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
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
.rank-des .title {
  font-weight: 600;
  cursor: pointer;
}
.rank-des .introduce {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>