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
      <a-rate class="rate" allow-half v-model="mangaData.mangaScore" disabled />
    </div>
    <div class="renew">
      <p>最新:</p>
      <router-link to class="new">第462回 刀锋单间论第462回 刀锋单间论</router-link>
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
      stars: 4.5
    };
  },
  methods: {
    toDetail() {
      this.$emit('toDetail', this.mangaData.mangaId);
    }
  },
  mounted() {}
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
  line-height: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  color: #fd113a;
  margin-left: 10px;
}
</style>