<template>
  <div class="card">
    <div class="image-card">
      <img :src="mangaData.episode[0].episodeHref" alt />
    </div>
    <div class="title-text">
      <router-link to class="title">{{mangaData.mangaName}}</router-link>
    </div>
    <div class="star">
      <p>评分:{{mangaData.mangaScore}}</p>
      <a-rate class="rate" allow-half v-model="this.stars" disabled />
    </div>
    <div class="renew">
      <p>最新:</p>
      <router-link to class="new">{{mangaData.chapterNew.chapterTitle}}</router-link>
    </div>
    <cartoonAnimated @toDetail="toDetail" :mangaData="mangaData"></cartoonAnimated>
  </div>
</template>

<script>
import cartoonAnimated from '../cartoon-animated/cartoon-animated';
export default {
  name: 'cartoon-card',
  components: {
    cartoonAnimated
  },
  props: ['mangaData'],
  data() {
    return {
      stars: this.mangaData.mangaScore
    };
  },
  methods: {
    toDetail() {
      this.$emit('toDetail', this.mangaData.mangaId);
    }
  },
  mounted() {
    this.stars = this.stars/2;
    if(this.stars%1 !== 0) {
      this.stars = parseInt(this.stars)+0.5;
    }
  }
};
</script>

<style scoped>
.card {
  width: 167px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card .image-card {
  width: 100%;
}
.image-card img {
  width: 100%;
}
.card .title-text {
  width: 100%;
}
.title-text .title {
  font-size: 14px;
  font-weight: bold;
  color: #252525;
  display: block;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card .star {
  width: 100%;
  display: flex;
}
.star p {
  font-size: 12px;
  color: #666666;
}
.star .rate {
  font-size: 10px;
  line-height: 12px;
  margin-left: 10px;
}
.card .renew {
  width: 100%;
  display: flex;
}
.renew p {
  flex-shrink: 0;
  font-size: 12px;
  color: #252525;
}
.renew .new {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #fd113a;
  margin-left: 5px;
}
</style>