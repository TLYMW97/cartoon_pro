<template>
  <div class="card">
    <div class="image-card">
      <img :src="mangaData.episode[0].episodeHref" alt />
    </div>
    <div class="title-text">
      <router-link to class="title">{{mangaData.mangaName}}</router-link>
    </div>
    <div class="star">
      <p>评分:{{mangaData.mangaScore | starFormat}}</p>
      <a-rate class="rate" allow-half :value="stars | starFormat" disabled />
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
    toDetail(mangaId) {
      this.$emit('toDetail', mangaId);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
@import '~@/assets/sass/index';
.card {
  width: 167px;
  position: relative;
  background-color: #fff;
  @include flex(space-between, null, null, column);
}
.card .image-card {
  width: 100%;
}
.image-card img {
  width: 100%;
}
.card .title-text {
  width: 100%;
  padding: 0 5px;
}
.title-text .title {
  font-size: $medium-font;
  font-weight: bold;
  color: #252525;
  display: block;
  margin: 8px 0;
  @include ellipsis();
}
.card .star {
  width: 100%;
  padding: 0 5px;
  display: flex;
}
.star p {
  font-size: $small-font;
  color: #666666;
}
.star .rate {
  font-size: 10px;
  line-height: $small-font;
  margin-left: 10px;
}
.card .renew {
  width: 100%;
  display: flex;
  padding: 0 5px;
}
.renew p {
  flex-shrink: 0;
  font-size: $small-font;
  color: #252525;
}
.renew .new {
  display: block;
  @include ellipsis();
  font-size: $small-font;
  color: $index-color;
  margin-left: 5px;
}
</style>