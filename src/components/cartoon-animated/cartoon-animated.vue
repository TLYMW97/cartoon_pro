<template>
  <div class="animated">
    <div class="animated-tip">
      <router-link to title="山海逆战">
        <img :src="mangaData.episode[0].episodeHref" alt />
      </router-link>
      <div class="animated-detail">
        <div class="title">
          <router-link to :title="mangaData.mangaName">{{mangaData.mangaName}}</router-link>
          <p>评分:{{mangaData.mangaScore}}</p>
          <a-rate class="rate" allow-half v-model="this.stars" disabled></a-rate>
        </div>
      </div>
      <div class="author">
        <p>作者:</p>
        <span>
          <router-link to>邱福龙</router-link>
          <router-link to>瑛麒动漫</router-link>
        </span>
      </div>
      <div class="chapter">
        <p>最新:</p>
        <router-link to>第468回 炫火破鼎封（下）第468回 炫火破鼎封（下）</router-link>
      </div>
      <div class="desc">
        <p>山海世界，人与异兽谁胜谁负</p>
      </div>
      <div class="read">
        <div class="btn" @click="toDetail">开始阅读</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'cartoon-animated',
  props: ['mangaData'],
  data() {
    return {
      stars: this.mangaData.mangaScore
    };
  },
  methods: {
    toDetail() {
      this.setCurManga(this.mangaData);
      this.$emit('toDetail');
    },
    ...mapActions(['setCurManga'])
  },
  mounted() {
    this.stars = this.stars / 2;
    if (this.stars % 1 !== 0) {
      this.stars = parseInt(this.stars) + 0.5;
    }
  }
};
</script>

<style scoped>
.animated {
  display: block;
  overflow: hidden;
  position: absolute;
  top: -40px;
  left: -30px;
  opacity: 0;
  z-index: 2;
  max-height: 299px;
  transform: scale(0.73);
  transition: all 0.3s;
}
.animated:hover {
  opacity: 1;
  top: -20px;
  left: -30px;
  max-height: 340px;
  transform: scale(1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.animated .animated-tip {
  width: 226px;
  height: 340px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.animated-tip img {
  width: 100%;
  height: 50%;
  display: block;
  object-fit: cover;
}
.animated-tip .animated-detail {
  padding: 10px 10px 0px 10px;
}
.animated-detail .title {
  display: flex;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title a {
  display: inline-block;
  font-size: 14px;
  width: 120px;
  color: #252525;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title p {
  font-size: 14px;
  display: block;
  margin-right: 4px;
}
.animated-detail .rate {
  line-height: 14px;
  font-size: 12px;
}
.rate >>> .ant-rate-star {
  margin-right: 5px;
}
.animated-tip .author {
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  padding: 0 10px;
}
.author p {
  font-size: 14px;
}
.author a {
  float: left;
  display: block;
  padding-left: 3px;
  font-size: 14px;
}
.animated-tip .chapter {
  height: 24px;
  line-height: 14px;
  display: flex;
  padding: 0 10px;
}
.chapter p {
  width: 40px;
  font-size: 14px;
  color: #252525;
}
.chapter a {
  margin-left: 3px;
  color: #fd113a;
  display: inline-block;
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
}
.animated-tip .desc {
  height: 14px;
  padding: 0 10px;
  font-size: 12px;
  color: #666;
  line-height: 12px;
  margin-top: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
.animated-tip .read {
  font-size: 12px;
  cursor: pointer;
  padding: 0 10px 10px 10px;
}
.read .btn {
  display: block;
  width: 100%;
  height: 34px;
  margin-top: 10px;
  line-height: 34px;
  background-color: #fd113a;
  color: #fff;
  text-align: center;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}
.btn a {
  color: #fff;
}
</style>