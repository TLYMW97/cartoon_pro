<template>
  <div class="manga-card" @click="toDetail(manga)">
    <div class="manga-pic">
      <img :src="mangaPic" alt="" />
    </div>
    <div class="manga-name">
      {{ manga.mangaName }}
    </div>
    <div class="read-hisory">
      读至: <span>{{ manga.chapterTitle }}</span>
    </div>
    <div class="chapter-new">
      最新: <span>{{ manga.chapterNew.chapterTitle }}</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  computed: {
    mangaPic() {
      return this.manga.episode[0].episodeHref;
    }
  },
  props: {
    manga: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    toDetail: async function(manga) {
      const { mangaId } = manga;
      let res = await this.$api.getById(mangaId);
      console.log('res :', res);
      let {
        data: { data }
      } = res;
      this.setCurManga(data);
      // this.$emit('toDetail', manga.mangaId);
      this.$router.push({ path: '/detail', query: { mangaId } });
    },
    ...mapActions(['setCurManga'])
  }
};
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/index';
.manga-card {
  width: 20%;
  height: 100%;
  margin-right: 10px;
  margin-bottom: 10px;
  .manga-name {
    margin-top: 5px;
    font-weight: 600;
  }
  .read-hisory,
  .chapter-new {
    font-size: 12px;
    margin-top: 5px;
    @include ellipsis();
    span {
      color: $index-color;
    }
  }
  img {
    width: 100%;
  }
}
</style>
